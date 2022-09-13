<template>
  <div class="login-container">
    <div class="login-main">
      <div class="title">绿色建筑预评价系统</div>
      <el-form ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
        <el-form-item
          :rules="[
            { required: true, message: '用户名/账号不能为空'},
          ]"
        >
          <el-input v-model="formData.name" placeholder="用户名/账号" prefix-icon="iconfont el-icon-user-solid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :rules="[
            { required: true, message: '密码不能为空'},
          ]"
        >
          <el-input type="password" v-model="formData.pwd" placeholder="请输入您的密码" prefix-icon="iconfont el-icon-user-solid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :rules="[
            { required: true, message: '验证码不能为空'},
          ]"
        >
          <el-input v-model="formData.verify" placeholder="请输入验证码" prefix-icon="iconfont el-icon-user-solid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="tips">忘记密码 | 注册账户</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    submitForm () {
      const {from} = this.$route.query
      let urlMap = {
        declare: '/rating-agencies/project-list',
        rating: 'evaluation-experts/project-list'
      }
      let path = urlMap[from] || '/declare-unit/project-list'
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container{
  width: 100vw;
  height: 100vh;
  padding-top: 200px;
  box-sizing: border-box;
  overflow: hidden;
}

.login-main{
  background: #fff;
  border-radius: 5px;
  width: 400px;
  margin: 0 auto;
  padding: 20px 40px;
}
.title{
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
}
.tips{
  text-align: center;
  color: #888;
}
.login-container{
  background: url('../../assets/images/login_bg.jpg') no-repeat;
  background-size:100% 100%;
}
/deep/ .el-form-item__content{
  margin-left: 0!important;
}
.el-button{
  width: 100%;
}
</style>>
