<template>
  <div>
    <el-dialog width="1200px" title="分配任务" :visible.sync="isShow">
      <template v-if="!isShowModify">
        <Table :dataList="dataList" :columns="columns" :isShowPagination="false">
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="toggleShowModify" size="mini" type="primary">修改专家</el-button>
            </template>
          </el-table-column>
        </Table>
        <br>
        <el-button @click="toggleShow" type="primary">确定</el-button>
      </template>
      <div v-else>
        <div class="issue-block-title">修改专家</div>
        <br>
        <QuerySearch :queryItems="queryItems"/>
        <br>
        <el-alert
          :closable="false"
          type="success">
          <div class="tips">
            <el-button @click="toggleShowModify" size="mini" type="primary">提交</el-button>
            <span>共有六条数据</span>
          </div>
        </el-alert>
        <br>
        <Table :dataList="dataList1" :columns="columns1" :isShowPagination="false">
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span style="color: #00AA91">可选</span>
            </template>
          </el-table-column>
        </Table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      isShowModify: false,
      queryItems: [
        {
          type: 'text',
          label: '专家名称'
        },
        {
          type: 'text',
          label: '所属机构',
        },
        {
          type: 'text',
          label: '所属专业',
        },
        {
          type: 'text',
          label: '专家状态',
        },
        {
          type: 'text',
          label: '专家职称',
        },
      ],
      columns: [
        {
          label: '序号',
          type: 'index'
        },
        {
          label: '专业',
          prop: 'zhuanye'
        },
        {
          label: '专家',
          prop: 'zhuanjia'
        },
        {
          label: '操作时间',
          prop: 'time'
        }
      ],
      dataList: [
        {
          zhuanye: '建筑设计',
          zhuanjia: '设计师',
          time: '2022-08-26 10:53:51'
        },
        {
          zhuanye: '结构/建材',
          zhuanjia: '设计师',
          time: '2022-08-26 10:53:51'
        },
        {
          zhuanye: '暖遷空调',
          zhuanjia: '设计师',
          time: '2022-08-26 10:53:51'
        },
        {
          zhuanye: '建竹物冽',
          zhuanjia: '设计师',
          time: '2022-08-26 10:53:51'
        },
        {
          zhuanye: '建筑物理',
          zhuanjia: '设计师',
          time: '2022-08-26 10:53:51'
        },
        {
          zhuanye: '给排水',
          zhuanjia: '设计师',
          time: '2022-08-26 10:53:51'
        },
        {
          zhuanye: '电气',
          zhuanjia: '设计师',
          time: '2022-08-26 10:53:51'
        }
      ],
      columns1: [
        {
          type: 'selection'
        },
        {
          label: '序号',
          type: 'index'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '职称',
          prop: 'title'
        },
        {
          label: '所属机构',
          prop: 'organization'
        },
        {
          label: '专业',
          prop: 'major',
          width: 300
        },
        {
          label: '邮箱',
          prop: 'email'
        },
        {
          label: '电话',
          prop: 'tel'
        }
      ],
      dataList1: [
        {
          name: '专家通用',
          title: '',
          major: '建筑规划,建筑设计 结构/建材给排水,暖道空调,建筑物理,电气施工管理 物业管理緣色金熟緣色建筑,市场营销,风险管控',
          email: '23123@163.com',
          tel: '13701078346',
          status: '可选'
        },
        {
          name: '曾宇',
          title: '',
          major: '建筑设计',
          email: '23123@163.com',
          tel: '13701078346',
          status: '可选'
        },
        {
          name: '郎红阳',
          title: '',
          major: '建筑规划',
          email: '23123@163.com',
          tel: '13701078346',
          status: '可选'
        },
        {
          name: '昊天琪',
          title: '中级工程师',
          major: '建筑规划',
          email: '23123@163.com',
          tel: '13701078346',
          status: '可选'
        },
        {
          name: '涂正珍',
          title: '高级工程师',
          major: '建筑规划,建筑设计结构/建材给排水',
          email: '23123@163.com',
          tel: '13701078346',
          status: '可选'
        },
        {
          name: '丁志明',
          title: '',
          major: '建筑规划,建筑设计结构 /建材 建约物理',
          email: '23123@163.com',
          tel: '13701078346',
          status: '可选'
        },
      ]
    }
  },
  methods: {
    toggleShow () {
      this.isShow = !this.isShow
    },
    toggleShowModify () {
      this.isShowModify = !this.isShowModify
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-alert__content{
  width: 100%;
}
.tips{
  padding: 0 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>