<template>
  <div>
    <el-table
      :data="dataList"
      style="width: 100%">
      <el-table-column v-for="item in columns" :key="item.prop"
        :type="item.type"
        :prop="item.prop"
        :label="item.label"
        :width="item.width">
      </el-table-column>
      <slot></slot>
    </el-table>
    <!-- @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4" -->
    <br>
    <el-pagination
      v-if="isShowPagination"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="dataList.length">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    columns: [],
    dataList: [],
    isShowPagination: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style>

</style>