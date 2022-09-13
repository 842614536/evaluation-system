<template>
  <div>
    <div class="block-shadow pd20 tar">
      <el-button @click="submit" type="primary">提交</el-button>
    </div>
    <div class="mt20"></div>
    <Table :columns="columns" :dataList="dataList">
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary">查看</el-button>
        </template>
      </el-table-column>
    </Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          label: '序号',
          type: 'index'
        },
        {
          label: '编号',
          prop: 'no'
        },
        {
          label: '标题',
          prop: 'title'
        },
        {
          label: '条文得分及意见',
          prop: 'yijian'
        },
        {
          label: '完成时间',
          prop: 'time'
        },
        {
          label: '专家级别',
          prop: 'rank'
        },
        {
          label: '完成情况',
          prop: 'status'
        }
      ],
      dataList: [
        {
          no: '4.1.1',
          title: '选址合规',
          yijian: '不达标',
          time: '2022-02-22',
          rank: '主审',
          status: '已保存'
        },
        {
          no: '6.1.1',
          title: '无障碍步行系統',
          rank: '主审',
          status: '未开始'
        },
        {
          no: '6.1.2',
          title: '公共交通站点',
          rank: '主审',
          status: '未开始'
        },
        {
          no: '6.1.4',
          title: '自行车停车',
          rank: '主审',
          status: '未开始'
        },
        {
          no: '6.2.1',
          title: '公共交通距离',
          rank: '主审',
          status: '未开始'
        },
        {
          no: '6.2.3',
          title: '便利的公共服务',
          rank: '主审',
          status: '未开始'
        },
        {
          no: '6.2.4',
          title: '公共运动场地',
          rank: '主审',
          status: '未开始'
        },
        {
          no: '6.2.5',
          title: '合理设置健身场地空间',
          yijian: '9.0分',
          time: '2022-02-22',
          rank: '主审',
          status: '已保存'
        },
        {
          no: '7.2.1',
          title: '节约集约利用土地',
          rank: '主审',
          status: '未开始'
        },
        {
          no: '7.2.2',
          title: '合理开发利用地下空间',
          rank: '主审',
          status: '未开始'
        },
      ]
    }
  },
  methods: {
    submit () {
      this.$router.push({
        path: '/rating-agencies/project-list-ee'
      })
    }
  }
}
</script>

<style>

</style>