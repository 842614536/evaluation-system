<template>
  <div>
    <div class="block-shadow pd20 tar">
      <el-button type="primary">保存</el-button>
      <el-button @click="submit" type="primary">提交</el-button>
    </div>
    <div class="mt20"></div>
    <el-tabs v-model="activeName" tab-position="left" style="height: 200px;">
      <el-tab-pane label="项目信息" name="first">
        <ProjectInfo />
      </el-tab-pane>
      <el-tab-pane label="自评打分" name="second">
        <SelfAssessment />
      </el-tab-pane>
      <el-tab-pane label="上传材料" name="three">
        <UploadMaterials />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ProjectInfo from './ProjectInfo.vue'
import SelfAssessment from './SelfAssessment.vue'
import UploadMaterials from './UploadMaterials.vue'
export default {
  components: {
    ProjectInfo,
    SelfAssessment,
    UploadMaterials
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    submit () {
      this.$router.push({
        path: '/login',
        query: {
          from: 'declare'
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-tabs {
  height: max-content!important;;
}
/deep/ .el-tabs__header.is-left{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>