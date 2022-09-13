<template>
  <div class="page-wrap">

    <div class="user-card">
      <div class="user-card-wrap">
        <div>
          <span>当前用户:</span>
          <em>testsx01</em>
        </div>
        <div>
          <span>当前角色:</span>
          <em>申报人员</em>
        </div>
        <div>
          <span>用户姓名:</span>
          <em>住建部三星01</em>
        </div>
      </div>
    </div>
    <div class="mt20 block-shadow pd20">
      <QuerySearch ref="querySearchForm" :queryItems="queryItems">
        <span style="margin-left: 10px" slot="otherBtn">
          <el-button type="primary">新建项目</el-button>
        </span>
      </QuerySearch>
    </div>
    <div class="mt20 block-shadow pd20">
      <Table :columns="columns" :dataList="dataList">
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="viewDetail" size="mini" type="primary">管理</el-button>
          </template>
        </el-table-column>
      </Table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      queryItems: [
        {
          type: 'text',
          label: '项目名称',
        },
        {
          type: 'date',
          label: '公告时间',
        },
        {
          type: 'select',
          label: '评价机构',
        },
        {
          type: 'select',
          label: '项目阶段',
        },
        {
          type: 'select',
          label: '项目状态',
          options: OPTIONS.xiangmuzhuangtai,
        },
        {
          type: 'select',
          label: '建筑类型',
          options: OPTIONS.jianzhuleixing,
        },
        {
          type: 'select',
          label: '申报标识',
        },
        {
          type: 'select',
          label: '申报星级',
          options: OPTIONS.ranking,
        },
        {
          type: 'select',
          label: '采用标准',
          options: OPTIONS.caiyongbiaozhun,
        },

      ],
      columns: [
        {
          label: '项目名称',
          prop: 'name'
        },
        {
          label: '参与角色',
          prop: 'jiaose'
        },
        {
          label: '项目状态',
          prop: 'status'
        },
        {
          label: '建筑类型',
          prop: 'jianzhu'
        },
        {
          label: '标识类型',
          prop: 'biaoshi'
        },
        {
          label: '星级',
          prop: 'start'
        },
        {
          label: '所在地区',
          prop: 'area'
        },
        {
          label: '申报单位',
          prop: 'unit'
        }
      ],
      dataList: [
        {
          name: '绿城大连深蓝中心',
          jiaose: '申报人员',
          status: '未提交',
          jianzhu: '住宅建筑',
          biaoshi: '预评价',
          start: '★★★',
          area: '辽宁，大连市',
          unit: '北京清动互联科技有限公司'
        }
      ]
    }
  },
  methods: {
    viewDetail () {
      this.$router.push({
        path: '/declare-unit/project-detail'
      })
    }
  }
}
</script>

<style>

</style>