<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss'>
  html,body {
    height: 100%;
  }
  button, input, textarea {
    border-radius: 5px;
    outline: none;
  }
  button {
      border: none;
      padding: 6px 10px;
      font-size: 14px;
      display: block;
      &.primary {
        background-color: #20a0ff;
        span {
          color: #fff;
        }
      }
      &.default {
        background-color: #eee;
        span {
          color: #111;
        }
      }
    }
  *{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>