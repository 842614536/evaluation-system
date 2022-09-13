<template>
  <div>
    <el-form>
      <el-form-item label="申报资料:" label-width="100px">
        <Table :columns="columns" :dataList="dataList" :isShowPagination="false"/>
      </el-form-item>
      <el-form-item label="汇报资料:" label-width="100px">
        <Table :columns="columns" :dataList="dataList" :isShowPagination="false"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          label: '文件名称',
          prop: 'name'
        },
        {
          label: '上传时间',
          prop: 'time'
        }
      ],
      dataList: [
        {
          name: '绿城大连深蓝中心.rar',
          time: '2022-02-22 21:00:00'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.upload-demo{
  text-align: left;
}
</style>
