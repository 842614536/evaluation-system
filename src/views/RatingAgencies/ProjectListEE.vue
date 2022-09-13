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
          <em>评价机构</em>
        </div>
        <div>
          <span>用户姓名:</span>
          <em>住建部三星01</em>
        </div>
      </div>
    </div>
    <div class="mt20 block-shadow pd20">
      <QuerySearch ref="querySearchForm" :queryItems="queryItems"/>
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
// 项目列表——专家审核
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
          label: '受理时间',
        },
        {
          type: 'select',
          label: '建筑类型',
          options: OPTIONS.jianzhuleixing,
        },
        {
          type: 'select',
          label: '评价类型',
        },
        {
          type: 'select',
          label: '申报星级',
          options: OPTIONS.ranking,
        },
        {
          type: 'select',
          label: '项目状态',
          options: OPTIONS.xiangmuzhuangtai,
        },
        {
          type: 'select',
          label: '采用标准',
          options: OPTIONS.caiyongbiaozhun,
        },
        {
          type: 'select',
          label: '项目阶段',
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
          jiaose: '评价机构',
          status: '专家初审审核中',
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
        path: '/rating-agencies/project-detail',
        query: {
          from: 'project-list-ee'
        }
      })
    }
  }
}
</script>

<style>

</style>