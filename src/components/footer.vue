<template>
 <mt-tabbar v-model="footer.value">
  <mt-tab-item :id="item.name" v-for="(item,index) in footer.list" :key="index">
    <img src=""/>
    <span @click="tabView(item.name)">{{item.name}}</span>
  </mt-tab-item>
</mt-tabbar>
</template>

<script>
export default {
  data () {
    return {
      footer:{
        value:'阅读',
        list:[
          {name:'阅读'},
          {name:'答题'},
          {name:'我的'}
        ]
      }
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    /**
     * 点击切换不同模块
     */
    tabView(name){
      switch (name) {
        default:
          this.$router.push({path:'/read/recommend'});
          break;
        case '阅读':
          this.$router.push({path:'/read/recommend'});
          break;
        case '答题':
          this.$router.push({path:'/answer/must'});
          break;
        case '我的':
          this.$router.push({path:'/my/user'});
          break;
      }

    }
  }
}

</script>
<style lang='less' scoped>
  .mint-tabbar{
    width:100%;
    height:80px;
  }

</style>
