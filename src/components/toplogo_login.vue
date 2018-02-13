<!--
<template>
    <div class="toplogo content">
        <div class="logo">科技创新服务平台</div>
        &lt;!&ndash;<div class="left">&ndash;&gt;
        <el-menu router  :default-active="activeIndex" class="el-menu-demo left" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/homePage">首页</el-menu-item>
            <el-menu-item index="/policyintroduction">政策介绍</el-menu-item>
            <el-menu-item index="3">创新服务提供机构</el-menu-item>
            <el-menu-item index="/home">我的应用</el-menu-item>
        </el-menu>
        <div class="right">
            &lt;!&ndash;登录和注册&ndash;&gt;
           &lt;!&ndash; <div v-if="isshow">
                <div class="login" style="" @click="register()">注册</div>
                <div class="login" style="" @click="login()">登录</div>
            </div>&ndash;&gt;
            &lt;!&ndash;<div v-if="isshow1">&ndash;&gt;
            <img class="img1" src="../../static/img/icon_yonghu1.png"/>
            <span class="username" @click="accountInfo">{{username}}</span>
            <i class="el-icon-arrow-right jiantou"></i>
            <i class="divline"></i>
            <img class="img1" src="../../static/img/btn_shouye2.png"/>
            <i class="divline"></i>
            <img @click="closepc()" class="img2" src="../../static/img/icon_guanbi.png"/>
           &lt;!&ndash; </div>&ndash;&gt;
        </div>
    </div>
</template>

<script>

    import {loginOut,isLogin,userInfo} from 'src/model/api'
    import util from 'src/util/util.js'


    export default {
        name: 'toplogo',
        props: {

        },
        data () {
            return {
                username:'',
                isshow:'',
                isshow1:'',
                activeIndex: '/home',
                activeIndex2: '1'
            }
        },
        created:function(){
            var _this=this;
            userInfo().then(function(res){
                console.log(res);
                console.log(555)
                console.log(res.body.data);
                _this.username=res.body.data.userName

            })
           /* var _this=this;
            isLogin().then(function(res){
                console.log(res);
                if(res.body.code==0){
                    _this.isshow1=true;
                    _this.isshow=false;
                }else{
                    _this.isshow=true;
                    _this.isshow1=false;
                }

            })*/
        },
        methods : {
            async 	closepc(){
                try{
                    var result = await loginOut();
                    console.log(result);
                    if(result.body.code == 0){

                        this.$router.push({'name':'login'})
                        util.delCookie('userType');
                        /*let box = {'userType':''};
                        let date = new Date();
                        console.log(box);
                        util.handleCookieSet('userType', box, date);
                        alert(util.handleCookieGet('userType'))*/
                    }else{
                        util.errortip(result.body.message);
                    }
                }catch(e){
                    console.log(e)
                }
            },
            register(){
                /*util.delCookie('userType');*/
                console.log(222)
                this.$router.push({'name':'register'})
            },
            accountInfo(){
                this.$router.push('/accountInfo')
            },
            login(){
                this.$router.push({'name':'login'})
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted(){

        }
    }

</script>

<style lang="scss" scoped>
    .toplogo{
        background-color:#399CFF;
        @include minw(36.9rem);
        @include wh(100%,2.9rem);
        z-index: 2;
        .logo{
            background-color:#2186EC;
            color:$wihte_c;
            text-align: center;
            @include font(1rem,2.9rem);
            @include wh(12.9rem,2.9rem);
        }
        .left{
            padding-bottom:1px;
            position: absolute;
            left:15rem;
            top: -4px;
            border-bottom-color:#399CFF;
            background:transparent;
            color:$wihte_c;
            @include font(0.8rem,0.8rem);
            div{
                display:inline-block;
                margin-right:35px;
            }
        }
        .right{
            position: absolute;
            right:1rem;
            top: 0.8rem;
            color:$wihte_c;
            @include font(0.8rem,0.8rem);
            .login{
                display:inline-block;
                position: relative;
                top: -0.25rem;
                padding:7px 27px;
                border:1px solid white;
            }
            .img1{
                width:1.2rem;
            }
            .img2{
                width:1.2rem;
                cursor: pointer;
            }
            .username{
                cursor: pointer;
                position: relative;
                top: -0.25rem;
            }
            .jiantou{
                cursor: pointer;
                transform: rotate(90deg);
                color: $wihte_c;
                font-weight: bold;
                position: relative;
                top: -0.25rem;
            }
            .divline{
                background-color:$gray2;
                @include wh(1px,1rem);
                display: inline-block;
                margin:0 0.7rem;
            }
        }
    }
</style>
-->
