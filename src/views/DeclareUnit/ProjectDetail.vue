<template>
  <div>
    <div class="page-wrap">
      <br>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="项目追踪" name="first">
          <Trace :setActiveName="setActiveName"/>
        </el-tab-pane>
        <el-tab-pane label="项目填报" name="second">
          <FillIN />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Trace from './components/Trace.vue'
import FillIN from './components/FillIN.vue'
export default {
  components: {
    Trace,
    FillIN
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    setActiveName (activeName) {
      this.activeName = activeName
    }
  }
}
</script>

<style>

</style>