<template>
  <mt-header title="多个按钮">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
      <mt-button>关闭</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
export default {
  data () {
    return {
      name:'header'//头部组件
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='less' scoped>
  header{
    width:100%;
    height: 80px;
  }
</style>
