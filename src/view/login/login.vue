<template>
  <div class="login">
      <!--<toplogo></toplogo>-->
        <div class="loginin"></div>
        <div class="contentlogin">
            <div class="logoinout">
                <div class="logoinc">
                    <h1>欢迎登录</h1>
                    <div>
                        <div class="input_div userpass username">
                            <el-input
                                placeholder="用户名"
                                v-model="username"
                                class="app_input"
                                clearable>
                            </el-input>
                            <i></i>
                        </div>
                        <div class="input_div userpass password">
                            <el-input
                                type="password"
                                placeholder="登录密码"
                                v-model="password"
                                class="app_input"
                                clearable>
                            </el-input>
                            <i></i>
                        </div>
                        <div class="input_div userpass code">
                            <el-input
                                placeholder="验证码"
                                v-model="checkcode"
                                class="app_input"
                                style="width:50%"
                                clearable>
                            </el-input>
                            <img style="width:30%" :src="src" alt="" >
                            <div class="imgChange" @click="imgChange">换一张</div>
                        </div>
                        <div class="passwordstyle"><div><el-checkbox  v-model="checkremember">自动登录</el-checkbox></div></div>
                        <div class="btn" @click="gohome()"><button style="background:#399CFF " :class="`app_btn animated ${shake}`" >登录</button></div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import checkreg from 'src/util/checkreg.js'
import util from 'src/util/util.js'
import appConfigs from 'src/configs'
import {login,captcha,existUserName} from 'src/model/api'
import logoinback from '../../../static/img/homepage.jpeg'
import toplogo from 'src/components/toplogo';

export default {
    name: 'login',
    props : [],
    data () {
        return {
            src:appConfigs.urlWebHttp+'/user/captcha'+ '?' + Date.now(),
            shake:'',//登录错误摇一摇
            checkremember:false,//记住密码
            userType:'',
            username:'',//用户名
            password:'',//密码
            checkcode:''
        }
    },
    components: {
        toplogo
    },
    created(){
    },
    watch :{
        //记不记住密码
        checkremember(val){
            this.saveInfo();
        }
    },
    methods : {
        //验证码点击刷新
        imgChange(){
            this.src=appConfigs.urlWebHttp+'/user/captcha'+ '?' + Date.now();
        },
        //登录
        async gohome(){
            //校验用户名密码
//          let usernamec = checkreg.checkreg.checkempty(this.username);
//          let passwordc = checkreg.checkreg.checkempty(this.password);
//          let checkcode = checkreg.checkreg.checkempty(this.checkcode);
//          if(!usernamec){
//              util.errortip(checkreg.warntip.usernamempty);
//              this.shakefn();
//              return;
//          }
//          if(!passwordc){
//              util.errortip(checkreg.warntip.passwordempty);
//              this.shakefn();
//              return;
//          }
//          if(!checkcode){
//              util.errortip(checkreg.warntip.codeempty);
//              this.shakefn();
//              return;
//          }
            var obj={};
            obj.userName=this.username;
            obj.password=this.password;
            obj.captcha=this.checkcode;
            try{
                /*var result =  await existUserName(this.username);
                console.log(result.body.data);*/
                /*if(result.body.data){
                		   console.log(obj)*/
                       var result = await login(obj);
              	       console.log(result);
		               if(result.body.code==0){
                           util.vueEvent.$emit("testLogin");
                           util.vueEvent.$emit("writename");
                           var userType = result.body.data.userType;
                           var area=result.body.data.area;
                           console.log(userType);
                           /* util.errortip(result.body.message);*/
                           let box = {'userType':userType};
                           let date = new Date();
                           console.log(box);
                           util.handleCookieSet('userType', box, date);

                           //保存area
                           let box1 = {'area':area};
                           util.handleCookieSet('area', box1, date);

		                  //this.$parent.type=result.body.data.userType;
		                  //alert(this.$parent.type);
		                  /* util.errortip(result.body.message);*/
		                  if(result.body.data.userType=='3'||result.body.data.userType=='4'){

                              this.$router.push({'name':'accountmanagement_county'});
                          }else if(result.body.data.userType=='1'||result.body.data.userType=='2'){
                              this.$router.push({'name':'ticketmanage'});
                          }

                           // util.vueEvent.$emit("testLogin");

		               		/*var userType = result.body.data.userType;
		               		console.log(userType)
		                   /!* util.errortip(result.body.message);*!/
		                    let box = {
		                    		'userType':userType
		                    }
		                    let date = new Date();
		                    console.log(box)
		                    util.handleCookieSet('userType', box, date)
                            this.$router.push({'name':'ticketmanage'});*/

		               }else{
                           this.checkcode='';
                           this.src=appConfigs.urlWebHttp+'/user/captcha'+ '?' + Date.now()
                           util.errortip(result.body.errorDesc);



                            //this.$router.push({'name':'ticketmanage'});
		               }
               /* }else{
                    util.errortip('该用户不存在');
                }*/
            }catch(e){
                console.log(e)
            }

        },
        //摇一摇
        shakefn(){
            this.shake = "shake";
            setTimeout(()=>{
                this.shake = "";
            },500)
        },
        //背景图片缩放
        scalebackimg(_domimg){
            //scrollHeight
            let scrollw = document.documentElement.scrollWidth,
                scrollh = document.documentElement.scrollHeight<720?720:document.documentElement.scrollHeight,
                clientw = document.documentElement.clientWidth,
                clienth = document.documentElement.clientHeight,
                backimg = $('.backimg'),
                loginin = $('.loginin'),
                contentlogin = $('.contentlogin'),
                w = _domimg.width,
                h = _domimg.height,
                outscale = scrollw/scrollh,
                inscale = w/h;

            //外框宽高比大于里面图片时，图片100%高度，否则100%宽度
            loginin.css('width' ,'100%');
            loginin.css('height' ,'100%');
			if(outscale>inscale){
                backimg.css('width',scrollw);
                backimg.css('height',scrollw/inscale);
                backimg.css('top',(scrollh-scrollw/inscale)/2);
                backimg.css('left',0);
			}else{
                backimg.css('width',scrollh*inscale);
                backimg.css('height',scrollh);
                backimg.css('top',0);
                backimg.css('left',(scrollw-scrollh*inscale)/2);
            }
            if(clienth<700){
                loginin.css('height' ,'700px');
            }
            if(clientw<550){
                loginin.css('width' ,'550px');
            }
            // //内容垂直居中
            let _top = (clienth - contentlogin.height())/2;
            if(_top<20) _top = 20;
            contentlogin.css('top' ,_top+'px');
        },
        //执行缩放
        initscaleimg(){
            var img = new Image();
            img.src = logoinback;
            img.onload = ()=>{
                this.scalebackimg(img);
                window.onresize = ()=>{
                    window.requestAnimationFrame( () => {
                        this.scalebackimg(img);
                    });
                }
            }
        },
        //存用户名密码
        saveInfo(){
            let obj = {'username':this.username,'password':this.password,'checkremember':this.checkremember};
            util.setlocal('userInfo',obj);
        }
    },
    mounted(){
        this.initscaleimg();
        //记住密码时候就用缓存的
        let obj = util.getlocal('userInfo');
        if(obj.checkremember){
            Object.assign(this.$data, obj);
        }
    }
}

</script>
<style lang="scss">
    .login{
        .animated{
            animation-duration:.5s;
        }
        .app_input{
            position:relative;
                width: 100%;
                border: none;
            padding:0;
                input{
                    padding-right:2.5rem;
                    border-radius: 2px;
                    height: 2.5rem;
                }
        }
        .el-icon-circle-close{
            position: absolute;
            right: 2rem;
            z-index: 1;
        }
    }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .login{
        .loginin{
            background:#F3F3F4;
            z-index:-1;
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            .backimg{
                z-index: -1;
                position: absolute;
                min-width: 1052px;
                min-height: 658px;
            }
        }
        .contentlogin{
            position: relative;
            top:5rem;
            .logoinout{
                width: 27.5rem;
                height: 27.5rem;
                position: relative;
                margin: 0 auto;
                .logoinc{
                    position: absolute;
                   /* margin: 0 5rem;
                    top:1.5rem;
                    left: 50%;
                    margin-left:-12.075rem;*/
                    box-sizing:border-box;
                    padding:0 3rem;
                   /* top:0;*/
                    bottom:0;
                    left:0;
                    right:0;
                    margin:auto;
                    width:24.15rem;
                    height:24.7rem;
                    background: $wihte_c;
                    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
                    border-radius: 2px;
                    h1{
                        color:#333333;
                        text-align: left;
                        height: 5.3rem;
                        @include font(1.8rem,5.3rem);
                    }
                    .input_div{
                        margin-top:1.25rem;
                        text-align: center;
                    }
                    .userpass{
                        position: relative;
                        i{
                            position: absolute;
                            right: 3.5rem;
                            top: 0.7rem;
                            @include wh(1.2rem,1.2rem);
                        }
                        input{
                            padding-right: 2rem;
                            width: 15.1rem;
                        }
                    }
                    .username{
                        i{
                            @include bis('../../../static/img/icon_yonghu.png');
                            position:absolute;right:12px;
                        }
                    }
                    .password{
                        i{
                            @include bis('../../../static/img/icon_mima.png');
                            position:absolute;right:12px;

                        }
                    }
                    .code{
                        text-align:left;
                        display:flex;
                        align-items: center;
                        justify-content: space-between;
                        img{
                            height:40px;
                        }
                        .imgChange{
                            display:inline-block;
                            font-size:14px;
                            color:#399CFF;
                            cursor: pointer;
                        }
                    }
                    .passwordstyle{
                        display: flex;
                        width:18rem;
                        justify-content: space-between;
                        height: 3rem;
                        margin:0 auto;
                        @include font(0.7rem,3rem);
                        input{
                            position: relative;
                            top: -1px;
                        }
                        .span1{
                            margin-left:0.4rem;
                            color:$gray;
                            cursor: pointer;
                        }
                        .span2{
                            color:$red_c;
                            cursor: pointer;
                        }
                    }
                    .btn{
                        width: 18rem;
                        margin: 0 auto;
                        position: relative;
                        top:0.8rem;
                        button{
                            letter-spacing: 0.44rem;
                        }
                    }
                }
            }
            .copyright{
                color:$gray;
                position: relative;
                width:100%;
                height:0;
                top:3rem;
                text-align: center;
                @include font(0.7rem,0.7rem);
            }
        }
    }
</style>
