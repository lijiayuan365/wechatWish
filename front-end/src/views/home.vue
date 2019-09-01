<template>
  <div class="home">
    <header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">使用说明</el-menu-item>
        <el-menu-item index="3">关于</el-menu-item>
      </el-menu>
    </header>
    <router-view style="flex: 1"/>
    <footer>个人交流学习，严禁用于商业用途</footer>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        activeIndex: '1',
      }
    },
    components: {},
    created() {
      // let key = localStorage.getItem('loginSta');
      // if (!key) {
      //   this.$router.push('/warn')
      // }
    },
    computed: {},
    methods: {
      // toggleSelection(rows) {
      //   if (rows) {
      //     rows.forEach(row => {
      //       this.$refs.multipleTable.toggleRowSelection(row);
      //     });
      //   } else {
      //     this.$refs.multipleTable.clearSelection();
      //   }
      // },
      handleSelect(val) {
        val === '3' && this.$router.push('/about');
        val === '2' && this.$router.push('/warn');
        val === '1' && this.$router.push('/');
      },
    },
    mounted() {
// 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
      let beginTime = 0;//开始时间
      let differTime = 0;//时间差
      window.onunload = function () {
        differTime = new Date().getTime() - beginTime;
        if (differTime <= 5)
          localStorage.removeItem('loginSta');
      };
      window.onbeforeunload = function () {
        beginTime = new Date().getTime();
      };

    },
    destroyed() {

    }
  }
</script>
<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  footer{
    /*position: fixed;*/
    bottom: 0;
    padding: 10px;
    border-top: 1px solid #DCDFE6;
    /*width: 100%;*/
  }

</style>
