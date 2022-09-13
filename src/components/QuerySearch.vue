<template>
  <div class="search-wrap">
    <br>
    <el-form label-width="120" label-position="left">
      <el-row :gutter="16">
        <!-- 普通输入框 -->
        <el-col v-for="(item, index) in queryItems" :key="index" :span="searchItemSpan">
          <el-form-item v-if="item.type === 'text'" :label="item.label + '：'">
            <el-input v-model.trim="queryParams[item.prop] || queryParams[index]" :placeholder="item.placeholder ? item.placeholder : '请输入' + item.label" />
          </el-form-item>
          <!-- 普通下拉框 -->
          <el-form-item v-if="item.type === 'select'" :label="item.label + '：'">
            <el-select v-model="queryParams[item.prop] || queryParams[index]" :filterable="item.filterable" :default-label="item.defaultValue" :clearable="item.clearable" :placeholder="item.placeholder ? item.placeholder : '请选择' + item.label" :transfer="item.transfer === false ? false : true" :multiple="item.multiple">
              <el-option v-for="option in item.options" :key="option.value" :value="option.value">{{ option.label }}</el-option>
            </el-select>
          </el-form-item>
          <!-- 包含全选下拉框 -->
          <el-form-item v-if="item.type === 'select-all'" :label="item.label + '：'">
            <el-select v-model="queryParams[item.prop]" :filterable="item.filterable" :default-label="item.defaultValue" :clearable="item.clearable" :placeholder="item.placeholder ? item.placeholder : '请选择' + item.label" :transfer="item.transfer === false ? false : true" :multiple="item.multiple" @on-change="selectAllChange($event, item.options, item.prop)">
              <el-option v-for="option in item.options" :key="option.value" :value="option.value">{{ option.label }}</el-option>
            </el-select>
          </el-form-item>
          <!-- 数据字典下拉框 -->
          <el-form-item v-if="item.type === 'select-dict'" :label="item.label + '：'">
            <el-select v-model="queryParams[item.prop]" :filterable="item.filterable" :default-label="item.defaultValue" :clearable="item.clearable" :placeholder="item.placeholder ? item.placeholder : '请选择' + item.label" :transfer="item.transfer === false ? false : true" :multiple="item.multiple">
              <el-option v-for="option in globalDictMap(item.dictType)" :key="option.value" :value="option.value">{{ option.label }}</el-option>
            </el-select>
          </el-form-item>
          <!-- checkbox -->
          <el-form-item v-if="item.type === 'checkbox'" :label="item.label + '：'">
            <el-checkbox-group v-model="queryParams[item.prop]" style="display:inline-block;">
              <el-checkbox v-for="option in item.options" :key="option.value" :label="option.label">{{ option.value }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- switch -->
          <el-form-item v-if="item.type === 'switch'" :label="item.label + '：'">
            <el-switch v-model="queryParams[item.prop]" />
          </el-form-item>

          <!-- 时间 单个 -->
          <el-form-item v-if="item.type === 'dateSingle'" :label="item.label + '：'">
            <el-date-picker v-model="queryParams[item.prop] || queryParams[index]" style="width: 100%" :editable="item.editable || false" :type="item.dateType || 'date'" :format="item.dateFormat || 'yyyy-MM-dd'" :placeholder="item.placeholder || '请选择日期'" :clearable="item.clearable!==false" :transfer="item.transfer === false ? false : true" @on-change="date => handleDateChange(date, item.prop)" />
          </el-form-item>
          <!-- 时间组件 区间 -->
          <el-form-item v-if="item.type === 'date'" :label="item.label + '：'">
            <el-row class="date">
              <el-col :span="11">
                <el-date-picker type="date" format="yyyy-MM-dd" :editable="item.editable || false" placeholder="开始" :transfer="item.transfer === false ? false : true" @on-change="date => handleDateChange(date)" />
              </el-col>
              <el-col :span="2" class="tac">-</el-col>
              <el-col :span="11">
                <el-date-picker type="date" format="yyyy-MM-dd" :editable="item.editable || false" placeholder="结束" :transfer="item.transfer === false ? false : true" @on-change="date => handleDateChange(date)" />
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col v-if="showSearch" :span="24" class="search-action">
          <el-button type="primary" @click="getQuery">查询</el-button>
          <el-button @click="reset">重置</el-button>
          <slot name="otherBtn" />
        </el-col>
        <el-col v-if="diySearch" span="24" class="search-action">
          <el-button v-if="hasElementAuth(buttonDiy.buttonOneAuthCode) || !buttonDiy.buttonOneAuthCode" :type="buttonDiy.buttonOneType" @click="getQuery">{{ buttonDiy.buttonOneText }}</el-button>
          <el-button v-if="hasElementAuth(buttonDiy.buttonTowAuthCode) || !buttonDiy.buttonTowAuthCode" :type="buttonDiy.buttonTowType" @click="buttonDiy.buttonTowMethod()">{{ buttonDiy.buttonTowText }}</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script type="text/javascript">

export default {
  props: {
    buttonDiy: {
      type: Object,
      default: () => ({})
    },
    queryItems: {
      type: Array,
      default: () => []
    },
    remoteFn: {
      type: Function
    },
    showSearch: {
      type: Boolean,
      default: true,
      required: false
    },
    diySearch: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      queryText: '更多搜索条件',
      remoteList: [],
      remoteLoading: false,
      moneyArr: [],
      searchItemSpan: 8,
      queryParams: {}
    }
  },
  computed: {
    minCount() {
      return 4
    },
    count() { // 折叠与否展示的项数
      return this.queryText === '收起' ? this.queryItems.length : this.minCount
    },
    startOption() {
      return function(prop) {
        return disableTimeInput(this.queryParams[prop], 1)
      }
    },
    endOption() {
      return function(prop) {
        return disableTimeInput(this.queryParams[prop], 2)
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const arr = this.queryItems
      const obj = {}
      if (arr.length > 0) {
        arr.map(item => {
          if (item.defaultValue) {
            obj[item.prop] = item.defaultValue || null
          }
          if (item.defaultValues && item.defaultValues.length > 0) {
            obj[item.props[0]] = item.defaultValues[0] || null
            obj[item.props[1]] = item.defaultValues[1] || null
          }
        })
        this.queryParams = Object.assign({}, obj)
      }
    },
    getQuery() {
      const bool = this.moneyArr.some(item => {
        if ((item.min || item.min === 0) && (item.max || item.max === 0)) {
          return Number(item.min) > Number(item.max)
        }
        return false
      })
      if (bool) {
        this.$Message.error('金额下限不得大于金额上限')
        return
      }
      for (var k in this.queryParams) {
        if (!this.queryParams[k] && this.queryParams[k] !== 0 && this.queryParams[k] !== false) { delete this.queryParams[k] }
      }
      this.$emit('get-params', this.queryParams)
    },
    reset() {
      this.moneyArr = []
      this.queryParams = {}
      this.init()
      this.$nextTick(() => {
        for (var k in this.queryParams) {
          if (!this.queryParams[k] && this.queryParams[k] !== 0 && this.queryParams[k] !== false) { delete this.queryParams[k] }
        }
        this.$emit('reset-query', this.queryParams)
      })
    },
    handleDateChange(v, prop) {
      this.queryParams[prop] = v
    },
    remoteQuery(v, prop) {
      this.remoteLoading = true
      this.remoteFn(v).then(res => {
        this.remoteLoading = false
        this.remoteList = res
        this.remoteList.forEach(item => {
          if (this.$refs[`selectRef_${prop}`][0].query.trim() === item.label) {
            this.queryParams[prop] = item.value
          }
        })
      }).catch(() => {
        this.remoteLoading = false
      })
    },
    openChange(isFocus, prop) {
      if (isFocus && !this.queryParams[prop]) {
        this.remoteQuery('', prop)
      }
      if (!isFocus && this.queryParams[prop]) {
        setTimeout(function() {
          document.getElementsByClassName('el-select-input')[0].blur()
        })
      }
    },
    clear(prop) {
      this.$refs[`selectRef_${prop}`][0].query = ''
      this.queryParams[prop] = ''
      this.$refs[`selectRef_${prop}`][0].lastRemoteQuery = ''
    },
    moneyFormatNumber(v) {
      return v.replace(/[^\d]/g, '')
    },
    moneyParserNumber(v) {
      return v.replace(/^[^\d]/g, '')
    },
    moneyBlur(v, type, index) {
      const i = this.moneyArr.findIndex(item => item.index === index)
      if (i > -1) {
        if (type === 1) {
          this.moneyArr[i].min = v
        } else {
          this.moneyArr[i].max = v
        }
      } else {
        if (type === 1) {
          this.moneyArr.push({ index, min: v })
        } else {
          this.moneyArr.push({ index, max: v })
        }
      }
    },
    selectAllChange (nv, options, prop) {
      if (nv.length !== options.length) {
        // 勾选了 全选 选项
        if (nv.includes('ALL')) {
          this.queryParams[prop] = []
          options.forEach(item => {
            this.queryParams[prop].push(item.value)
          })
        }
        if (nv.length === options.length - 1) {
          // 勾选了除 全选 选项外的所有项 勾选全部
          if (!nv.includes('ALL')) {
            this.queryParams[prop] = []
            options.forEach(item => {
              this.queryParams[prop].push(item.value)
            })
          } else {
            // 勾选了 全选 选项, 但实际没有全选, 取消 全选 选项的勾选
            this.queryParams[prop] = nv.filter(item => { return item !== 'ALL' })
            // 只差一个非全选选项没有选择的情况下 点击全选
            if (nv[nv.length - 1] === 'ALL') {
              // 全选
              this.queryParams[prop] = []
              options.forEach(item => {
                this.queryParams[prop].push(item.value)
              })
            }
          }
        }
      } else {
        this.queryParams[prop] = nv
      }
    }
  }
}
</script>

<style lang="less" scoped>
  // 查询块
  /deep/ .search-wrap {
    position: relative;
    margin-top: 15px;
    margin-bottom: 15px;
    .search-action {
      text-align: center;
      .el-btn {
        &:not(:first-child) {
          margin-left: 10px;
        }
      }
    }
    .more-search-link {
      position: absolute;
      right: 0;
      bottom: 5px;
      color: #2A6BFD;
    }
    .el-select-item {
      white-space: pre-wrap;
      max-width: 300px;
    }
  }
  /deep/ .el-form {
    .el-form-item:last-child {
      margin-bottom: 15px;
    }
    .el-form-item__label {
      font-weight: normal;
      // padding: 10px 0;
    }
    
  }
  /deep/ .el-form-item__content {
    margin-left: 90px;
    max-width: 300px;
  }
  .tac {
    text-align: center;
  }
  .el-form-item__content .el-input{
    width: 283px!important;
  }
  /deep/ .el-select .el-input__inner{
    width: 283px!important;
  }
  /deep/ .date .el-input__inner, .el-date-editor.el-input{
    width: 130px!important;
  }
</style>
