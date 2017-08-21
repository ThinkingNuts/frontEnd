<template>
  <div id='login'>
    <el-row>
      <el-col :span="6" :offset='9'>
        <img src="../assets/logo.png" style='width:100%' alt="">
      </el-col>
    </el-row>
    <h3>大众迈腾，一汽骄傲！</h3>
    <el-form ref='form' :model='loginForm' label-width='50px'>
      <el-form-item label='账号:'>
        <el-input placeholder="请输入您的账号"></el-input>
      </el-form-item>
      <el-form-item label='密码:'>
        <el-input type='password' placeholder="请输入您的密码" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' @click='onSubmit'>立即登陆</el-button>
        <el-button @click='onSubmit'>忘记密码？</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>



<script>
  export default {
    data() {
      return {
        loginForm: {}
      }
    },
    methods: {
      onSubmit() {
        console.log(111);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #login {
    height: 100%;
    box-sizing: border-box;
    padding-top: 100px
  }
  #login .el-button {
    float: left
  }
  h3 {
    margin-bottom: 50px;
  }
  .logo img {
    height: 100%;
  }
</style>
