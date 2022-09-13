<template>
  <div>
    <div class="tar">
      <el-button size="mini">查看资料</el-button>
      <el-button size="mini" type="primary">保存</el-button>
      <el-button size="mini" type="danger">形审驳回</el-button>
      <el-button @click="accept" size="mini" type="primary">形审通过</el-button>
    </div>
    <div class="mt20 block-shadow pd20">
      <el-table :data="dataList">
        <el-table-column
          type="index"
          label="序号"
          width="60">
        </el-table-column>
        <el-table-column
          prop="title"
          label="审查标题"
          width="180">
        </el-table-column>
        <el-table-column
          label="审查详情"
          width="620">
          <template slot-scope="scope">
            <span @click="viewDetail" class="detail">{{scope.row.detail}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="180">
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-select v-model="value" size="mini" type="primary">
              <el-option value="✓">✓</el-option>
              <el-option value="未提供">未提供</el-option>
            </el-select>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="mt20 block-shadow issue-block-title">形式审查评审意见</div>
    <div class="mt20 block-shadow pd20">
      <el-table :data="dataList1">
        <el-table-column
          type="index"
          label="序号"
          width="60">
        </el-table-column>
        <el-table-column label="评审意见" width="620">
          <template slot-scope="scope">
            <el-input type="textarea" :rows="2" v-model="scope.row.textarea" />
          </template>
        </el-table-column>
        <el-table-column
          prop="revert"
          label="意见回复"
          width="280">
        </el-table-column>
        <el-table-column
          prop="time"
          label="提交时间"
          width="200">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['setActiveName'],
  data () {
    return {
      value: '✓',
      dataList: [
        {
          title: '申报基本条件',
          detail: '申请“绿色建筑设计评价标识”的居住建筑和公共建筑，应当完成施工图设计并通过施工图审查、取得施工许可，并且项目未完成竣工验收，除此之外项目应符合国家基本建设程序和管理规定，以及相关的技术标准规范。 申请“绿色建筑评价标识”的居住建筑和公共建筑，应当通过工程质量验收并投入使用一年以上，符合国家相关政策，未发生重大质量安全事故，无拖欠工资和工程款。'
        },
        {
          title: '项目名称是否规范',
          detail: '“项目名称”格式为：地名（可直接是某个地级市）+审批文件（规划、施工许可证等）上的项目名称+申报范围内的建筑楼号或楼栋名称，“项目名称”内波浪线统一用中文版式“～”，楼号“#”统一用“号楼”字填写（例如“石家庄卧龙寨1～3号楼”）。'
        },
        {
          title: '申报单位是否符合要求',
          detail: '“申报单位”可为参与申报的所有单位名称，业主单位必须作为申报单位；在申报绿色建筑设计评价标识时，设计单位应作为申报单位；申报绿色建筑评价标识时，物业单位应作为申报单位。有多个申报单位时，需用“、”隔开。'
        },
        {
          title: '项目参评范围是否合理',
          detail: '绿色建筑的评价以单栋建筑或建筑群为评价对象，“建筑群”是指位置毗邻、功能相同、权属相同、技术体系相同或相近的两个及以上单体建筑组成的群体。参评建筑本身不得为临时建筑（如北方的冰雪建筑、南方的集装箱建筑），且应为完整的建筑，不得从中剔除部分区域。'
        },
        {
          title: '土地使用证',
          detail: '需与申报建筑相符'
        },
        {
          title: '立项批复文件',
          detail: '需与申报建筑相符'
        },
        {
          title: '规划许可证',
          detail: '需与申报建筑面积相符'
        },
        {
          title: '施工许可证',
          detail: '需与申报建筑面积相符'
        },
        {
          title: '建设单位简介',
          detail: '——'
        },
        {
          title: '建设单位法人证书',
          detail: '——'
        },
        {
          title: '开发资质证明',
          detail: '——'
        },
        {
          title: '银行出具的固定资产、年产值、负债证明材料',
          detail: '需提交项目申报提前一年的证明材料'
        },
        {
          title: '设计单位简介',
          detail: '——'
        },
        {
          title: '设计单位资质证书',
          detail: '——'
        },
        {
          title: '设计实例介绍',
          detail: '——'
        },
        {
          title: '施工单位简介',
          detail: '——'
        },
        {
          title: '施工单位资质证书',
          detail: '——'
        },
        {
          title: '监理单位简介',
          detail: '——'
        },
        {
          title: '监理单位资质证书',
          detail: '——'
        },
        {
          title: '物业单位简介',
          detail: '——'
        },
        {
          title: '物业单位资质证书',
          detail: '——'
        }
      ],
      dataList1: [
        {
          textarea: '补充施工许可书，按照第二条的要求调整项目名称'
        }
      ]
    }
  },
  methods: {
    accept () {
      this.setActiveName('first', 'second')
    },
    viewDetail () {
      this.setActiveName('second')
    }
  }
}
</script>

<style lang="less" scoped>
.detail{
  text-decoration: underline;
  cursor: pointer;
}
</style>