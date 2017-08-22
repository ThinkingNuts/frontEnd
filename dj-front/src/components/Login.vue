<template>
  <div id='login'>
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <h2 class="title">上汽迈腾，大众骄傲！</h2>
    <form action="">
      <label class='accountNumber'>
        <icon name='user'></icon>
        <input type="text" placeholder="请输入您的账号">
      </label>
      <label class='password'>
        <icon name='lock'></icon>
        <input type="password" placeholder="请输入您的密码">
      </label>
      <div class="control-signin">
        <button class='primary signIn'>
          <span>登陆</span>
        </button>
        <p>
          <a href="#" class='forget_pwd'>
          忘记密码？
        </a>
        </p>
      </div>
    </form>
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
<style scoped lang='scss'>
  #login {
    padding: 100px 10% 0;
    height: 100%;
    box-sizing: border-box;
    .logo {
      display: flex;
      height: 20%;
      justify-content: center;
      align-items: center;
      img {
        height:80%;
      }
    }
  }
  form {
    width: 100%;
    margin-left: 50%;
    transform: translateX(-50%);
    label {
      display: block;
      height: 30px;
      margin-bottom: 15px;
      &.password {
        margin-bottom: 30px;
      }
      svg {
        transform: scale(1.5);
      }
      input {
        // min-width: 50%;
        width: 85%;
        height: 30px;
        box-sizing: border-box;
        padding-left: 15px;
        font: 16px/30px "";
        margin-left: 20px;
        border: 1px solid #eee;
        border-radius: 5px;
        &:focus {
          border-color: #ccc;
        }
      }
    }
    .control-signin {
      width: 85%;
      button.signIn {
        width: 100%;
        margin-left: 35px;
      }
      p {
        font-size: 14px;
        float: right;
        margin-top: 20px;
        margin-right: -35px;
        a.forget_pwd {
          color: #444;
          text-decoration: underline;
          &:hover {
            color: #20a0ff;
          }
        }
      }
    }
  }
  .title {
    margin-bottom: 30px;
    text-align: center
  }
  .logo img {
    height: 100%;
  }
</style>
