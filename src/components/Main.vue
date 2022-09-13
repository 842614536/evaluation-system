<template>
  <el-container>
    <el-header>
      <img src="../assets/images/header_bg.jpg" alt="">
    </el-header>
    <router-view/>
  </el-container>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
/deep/ .el-header{
  height: 100px!important;
  padding: 0
}
img{
  width: 100%;
  height: 100%;
}
</style>>
