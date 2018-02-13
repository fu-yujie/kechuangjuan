<template>
  <div class="refreshpage content">
      <div v-html="refreshname"></div>
      <div class="app_btn_in_w reshreshbtn" @click="reload()"><img src="../../static/img/icon_shuaxin.png"/><span>刷新</span></div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'refreshpage',
    props : [''],
    data () {
        return {
        }
    },
    computed:{
        ...mapState([
            'refreshname'
        ])
    },
    methods : {
        reload(){
            window.location.reload();
        }
    },
    mounted(){

    }
}

</script>

<style lang="scss">
    .refreshpage{
        .deepcol{
            color:$gray2;
        }
    }
</style>
<style lang="scss" scoped>
  .refreshpage{
        background-color:$wihte_c;
        @include minw(24rem);
        @include wh(auto,2.7rem);
        left:12.9rem;
        top:2.9rem;
        @include font(0.7rem,2.7rem);
        border-bottom:1px solid $bordercolor;
        color:$gray;

        >div:nth-child(1){
            position: absolute;
            left:1.5rem;
        }
        .reshreshbtn{
            @include wh(4rem,1.65rem);
            position: absolute;
            right:1.55rem;
            border: 1px solid $bordercolor;
            border-radius: 4px;
            text-align: center;
            top:0.5rem;
            line-height: 1.6rem;
            cursor: pointer;
            img{
                width:1.2rem;
                margin-right: 0.2rem;
                vertical-align: middle;
            }
            span{
                display:inline-block;
                height:1.65rem;
                vertical-align: middle;
            }
        }
  }
</style>
