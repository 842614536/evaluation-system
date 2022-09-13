<template>
  <div>
    <div class="page-wrap">
      <br>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="项目追踪" name="first">
          <Trace ref="Trace" :setActiveName="setActiveName"/>
        </el-tab-pane>
        <el-tab-pane label="项目填报" name="second">
          <FillIN />
        </el-tab-pane>
        <el-tab-pane label="形式审查" name="three">
          <Review :setActiveName="setActiveName" />
        </el-tab-pane>
        <el-tab-pane v-if="$route.query.from === 'project-list-ee'" disabled label="专家评审" name="three">
          <Review :setActiveName="setActiveName" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Trace from './components/Trace.vue'
import FillIN from './components/FillIN.vue'
import Review from './components/Review.vue'
export default {
  components: {
    Trace,
    FillIN,
    Review
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    setActiveName (activeName, tabName) {
      this.activeName = activeName
      if (tabName) {
        this.$refs.Trace.setTraceActive(tabName)
      }
    }
  }
}
</script>

<style>

</style>