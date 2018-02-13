<template>
  <div id="app">
        <toplogo></toplogo>
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
  </div>
</template>

<script>
import router from './router'
import util from './util/util.js'
import toplogo from 'components/toplogo';
import api from './model/api.js'
import appConfigs from './configs'
import { mapMutations } from 'vuex'

export default {
    name: 'app',
    data() {
        return {
            type:'',
            userType:'',
            userName:'',
            titlename: {
                'homechild': '系统首页',
                'handlelog': '操作日志',
                'physicalexam': '体检统计',
                'exceptionalexam': '异常统计',
                'loginlogs': '登录日志',
                'accountset': '账户设置',
                'caselist': '病例列表',
                'caseadd': '添加病例',
                'caseset': '设置标签',
                'casecheck': '查看病例',
                'addphy': '添加体检',
                'yetcheck': '已检查',
                'nocheck': '未检查',
                'setmeal': '套餐设置',
                'allphy': '全部体检',
                'inforegister': '医师信息注册',
                'infowrite': '医师信息填写',
                'infocheck': '医师审核',
                'infomanage': '医师信息管理'
            }
        }
    },
    created() {


        //拦截路由
        router.beforeEach((to, from, next) => {
            if (to.meta.title) {
                document.title = to.meta.title
            }
            next();
            this.firstitle();
            $(document).unbind('scroll');
            //运行滚动条滚动
            util.allscroll();
        });
        //首次进入页面设置标题
        this.firstitle();
    },
    methods: {
        //第一次进入页面也判断标题
        firstitle() {
            let url = window.location.href;
            let name = '';
            if (url.indexOf('?') != -1) {
                name = url.substring(url.indexOf('#') + 2, url.indexOf('?'));
            } else {
                name = url.substring(url.indexOf('#') + 2);
            }
            let _arr = name.split('/');
            name = _arr[_arr.length - 1];
           /* if (name) {
                document.title = this.titlename[name]
            }*/
        }
    },
    components: {
        toplogo
    }
}
</script>

<style lang="scss" >
@import "static/css/myelementui.scss";
@import "static/css/common.scss";
</style>
