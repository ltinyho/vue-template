<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  // @flow
  export default {
    name: 'app',
    components: {},
    mounted(){
      let a:number = '2';
    },
    watch:{
      '$route'(){
        window.scroll(0,0)
      }
    }
  }
</script>
<style lang="scss"  rel="stylesheet/scss">
  @import "assets/common";
  #app{
    height: 100%;
  }
</style>

