<template>
  <div >
    <kyy-header :title="freeGoods.title"></kyy-header>
    <kyy-banner></kyy-banner>
    <div class="container">
      <div v-for="(firstItem,index) in freeGoods.data" :class="'item--color'+(index%3+1)" class="item item-l">
        <div class="item__title item__title-l">▎{{firstItem.name}}</div>
        <div class="item-sub item-sub-l">
          <a v-for="subItem in firstItem.subjectlist" :href="subItem.url" class="item__content item__content-l"
             target="_blank">
            <span :class="['color'+(index % 3+1),subItem.icon]"  class="content__subject content__subject-l"></span>
            <span class="content__name content__name-l">{{subItem.name}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import mockFreeGoods from 'ASSETS/mock/freeGoods'
  import kyyHeader      from 'COMPONENTS/header/header'
  import kyyBanner     from 'COMPONENTS/banner/banner'
  export  default {
    components:{kyyHeader,kyyBanner},
    data(){
      return {
        freeGoods: {
          data: [],
          title: ''
        }
      }
    },
    mounted(){
      this.getGoodsType();
    },
    methods: {
      getGoodsType: function () {
        if (this.$route.params.type == '0') {
          this.freeGoods = mockFreeGoods.review;
        } else {
          this.freeGoods = mockFreeGoods.essence;
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  
  .item {
    background-color: #fff;
  }
  .item-l {
    position: relative;
  }
  .item__title {
    font-size: 16px;
  }
  .item__title-l {
    padding: 0 0 10px 18px;
  }
  .item-sub-l {
    margin: 0 auto;
  }
  .item__content-l {
    display: inline-block;
    width: 32%;
  }
  .item__content {
    text-align: center;
  }
  .content__subject-l {
    position: relative;
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  .content__subject {
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-weight: bold;
    font-size: 40px;
    color: #fff;
    text-align: center;
    border-radius: 4px;
  }
  /* 颜色 */
  .item--color1 {
    color: #85A3FF;
  }
  .item--color2 {
    color: #3BDAC3;
  }
  .item--color3 {
    color: #E967A1;
  }
  .content__subject.color1 {
    background-color: #85A3FF;
    box-shadow: 0 0 10px #85A3FF;
  }
  .content__subject.color2 {
    background-color: #3BDAC3;
    box-shadow: 0 0 10px #3BDAC3;
    
  }
  .content__subject.color3 {
    background-color: #E967A1;
    box-shadow: 0 0 10px #E967A1;
    
  }
  .content__name-l {
    display: inline-block;
    width: 100%;
    padding-top: 11px;
  }
  .content__name {
    font-size: 12px;
    color: #262626;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }


</style>