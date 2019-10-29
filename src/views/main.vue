<template>
  <div class="main">
    <Header></Header>
    <content>
      <router-view></router-view>
    </content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  data () {
    return {

    };
  },

  components: {
    Header,
    Footer
  },

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='less' scoped>
  .main{
    width:100%;
    height:100%;
    display: flex;
    flex-direction:column;
    content{
      height:calc(100% - 160px;);
      width:100%;
    }
  }
</style>
