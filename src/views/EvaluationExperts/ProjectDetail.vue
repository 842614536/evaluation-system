<template>
  <div>
    <div class="page-wrap">
      <br>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="项目追踪" name="first">
          <Trace ref="Trace"/>
        </el-tab-pane>
        <el-tab-pane label="项目填报" name="tianbao">
          <FillIN />
        </el-tab-pane>
        <el-tab-pane label="我的条文" name="second">
          <MyArticles />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Trace from './components/Trace.vue'
import MyArticles from './components/MyArticles.vue'
import FillIN from './components/FillIN.vue'
export default {
  components: {
    Trace,
    MyArticles,
    FillIN
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>