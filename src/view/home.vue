<template>
  <div class="home">
     <!-- <toplogo></toplogo>-->
        <menusys></menusys>
        <div class="content content1">
            <div class="contentin">
                <router-view class="child-view"></router-view>
            </div>
        </div>
  </div>
</template>

<script>
import util from 'src/util/util.js'
import menusys from 'components/menu';
import refreshpage from 'components/refreshpage';

//import bottomlogo from 'components/bottomlogo';
import { get_healthInformationCategoryList,isLogin} from 'src/model/api.js'
import toplogo from 'src/components/toplogo';

//import bottomlogo from 'components/bottomlogo';
//import { get_healthInformationCategoryList } from 'src/model/api.js'


export default {
    name: 'home',
    props : [],
    data () {
        return {

        }
    },
    components: {
        menusys,
        refreshpage,
//      bottomlogo,
        toplogo,
        refreshpage
    },
    computed:{

    },
    created(){
        var _this=this;
        isLogin().then(function(res){
            console.log(res);
            if(res.body.code==0){

            }else{
               _this.$router.push('/')
            }

        });
        util.vueEvent.$emit("testLogin");
        util.vueEvent.$emit("writename");
        isLogin().then(function(res){
            console.log(res);
            if(res.body.code==0){

            }else{
                util.errortip(res.body.message);
            }

        });

    },
    methods : {

    },
    mounted(){

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .child-view{
        /*@include minw(53rem);*/
        @include font(0.8rem,0.8rem);
    }
    .content1{
        left:12.9rem;
        top:2.9rem;
        bottom: 2.75rem;
        overflow-x: auto;
        padding:1.5rem 0 1.5rem 1.5rem;
        background-color:$pageback;
        color:$gray!important;
        .contentin{
            padding-right:1.5rem;
            min-width: 53rem;
        }
    }
</style>
