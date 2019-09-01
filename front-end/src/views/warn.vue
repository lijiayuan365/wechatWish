<template>
  <div style="text-align: left;padding: 60px">
    <h1>用前必读</h1>
    <p>请确保在 IE8 以上， chrome 或者 火狐浏览器中使用本工具</p>
    <h2>1 操作流程</h2>
    <p class="tip">1. 点击下方的登录按钮，会弹出一个登录二维码</p>
    <p class="tip">2. 手机微信扫码授权登录网页微信，进入系统</p>
    <p class="tip">3. 在好友列表中选择要群发短信的好友</p>
    <p class="tip">4. 输入要群发的内容</p>
    <p class="tip">5. 先测试发送预览发送的结果，确保不会翻车后正式发送</p>
    <h2>2 警告</h2>
    <p>本工具是调用 itchat
      这个工具库提供的微信接口，偶尔节假日群发一两次信息没事，频繁群发信息会引起腾讯爸爸的注意的，然后腾讯爸爸就可能不让你以后登录网页版的微信（可以解封，但是麻烦），也就是以后再也用不了这个工具，以后很多关于微信好玩的操作也会用不了的。所以请勿竭泽而渔！</p>
    <p>这个小工具仅供免费学习交流（玩）使用，请勿用于商业用途</p>
    <h2>3 致谢</h2>
    <p>在此感谢 <a href="https://itchat.readthedocs.io/zh/latest/">itchat</a> 的作者们给我们提供这么一个好玩的微信接口库</p>

    <p>看完了吗，那就开始搞事情吧</p>
    <el-button v-if="!loginSta" @click="login" type="success">点击登录</el-button>
  </div>
</template>

<script>
  export default {
    name: 'warn',
    methods: {
      login() {
        this.$http.post('/api/login').then((res)=>{
          let data = res.data.data;
          localStorage.setItem('loginSta', data);
          this.$router.push('/')
        });
      }
    },
    computed:{
      loginSta(){
        return localStorage.getItem('loginSta')
      }
    }
  }
</script>

<style scoped>
  .tip {
    padding-left: 8px;
  }
</style>
