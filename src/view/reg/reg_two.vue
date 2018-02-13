<template>
	<div class="register_two">
        <toplogo></toplogo>
		<div class="reg_two">注册</div>
		<div class="register_two_content">
			<div class="step">
				<el-steps :active="2" :align-center="true" :center="true">
					<el-step title="步骤 1" description="请选择账号类型"><i slot="icon" class="step1"></i></el-step>
					<el-step title="步骤 2" description="请填写注册资料"> <i slot="icon" class="step2"></i></el-step>
					<el-step title="步骤 3" description="注册完成"><i slot="icon" class="step3"></i></el-step>
				</el-steps>
			</div>
			<el-form class="register_two_ruleForm inputsizeout2" :model="ruleForm" status-icon  ref="ruleForm" label-width="10rem">
				<el-form-item prop="caseno" label="账号类型">{{message}}</el-form-item>
				<el-form-item prop="company" label="单位名称">
					<el-input @keyup.native="change"  class="inputsize2" placeholder="" v-model="ruleForm.unitName"></el-input>
				</el-form-item>
				<el-form-item prop="name" label="登录用户名">
					<el-input @keyup.native="change" class="inputsize2" placeholder="请输入字母、数字设置后不可更新" type="text" v-model="ruleForm.userName"></el-input>
				</el-form-item>
				<el-form-item prop="pass" label="设置密码">
					<el-input @keyup.native="change"  class="inputsize2" placeholder="至少6-15位,支持数字、字母、标点符号" type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item prop="checkPass" label="确认密码">
					<el-input @keyup.native="change" @blur="check"  class="inputsize2" placeholder="" type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item prop="pho" label="用户手机号">
					<el-input @keyup.native="change"  class="inputsize2" placeholder="" type="text" v-model="ruleForm.mobile"></el-input>
				</el-form-item>
				<el-form-item prop="code" label="验证码">
					<el-input @keyup.native="change"  class="inputsize2" placeholder="" type="text" v-model="ruleForm.mobileCode" id="code"></el-input>
					<el-button v-show="show" class="countyreview_b_back" @click="send">获取验证码</el-button>
                    <el-button v-show="!show" class="countyreview_b_back">{{count}}s</el-button>
				</el-form-item>
				<div class="rule">
					<el-checkbox v-model="isselect"  label=""></el-checkbox>我已阅读并同意<span>科技创新服务平台使用协议</span>
				</div>
				<el-button class="go_next" type="primary" @click="go_next()" :disabled="isdisabled">下一步</el-button>
			</el-form>
		</div>

	</div>
</template>

<script>
	import {existUserName,numberCode,register} from 'src/model/api'
    import util from 'src/util/util.js'
    import toplogo from 'src/components/toplogo'
//	import bus  from '../assets/eventBus'
	export default {
		name: 'register_two',
        components:{
		    toplogo
        },
		data() {
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm2.checkPass !== '') {
						this.$refs.ruleForm2.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm2.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
                show: true,
                count: '',
			    isselect:'',
			    isdisabled:true,
				message:'',
                phoneNumber:'',
				ruleForm: {
                    password: '',
					checkPass: '',
                    userName: '',
                    unitName: '',
                    mobileCode: '',
                    mobile: ''
				},
				/*rules: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					name: [{
						required: true,
						message: '用户名为空',
						trigger: 'blur'
					}],
					company: [{
						required: true,
						message: '请输入账号名称',
						trigger: 'blur'
					}],
					pho: [{
						required: true,
						message: '电话号码不能为空',
						trigger: 'blur'
					}],
					code: [{
						required: true,
						message: '验证码错误',
						trigger: 'blur'
					}],

				}*/
			};
		},
        created:function(){

        },
        watch:{
            isselect(val){
                this.change();
            }
        },
        methods: {
		    change(){
		        if(this.isselect&&this.ruleForm.userName.length!==0&&this.ruleForm.unitName.length!==0&&this.ruleForm.password.length!==0&&this.ruleForm.checkPass.length!==0&&this.ruleForm.mobile.length!==0&&this.ruleForm.mobileCode.length!==0){
		            this.isdisabled=false
                }else{
                    this.isdisabled=true
                }
            },
            /*change(){
                alert(222)
                /!*if(this.ruleForm.userName.length!==0){
                    alert(222);
                    this.isdisabled=false
                }*!/
            },*/
		    check(){
		        /*if(this.ruleForm.password!=this.ruleForm.checkPass){
                    util.errortip('两次密码输入不一致');
                }*/
            },
		    //发送验证码
            async send(){
		        var _this=this;
                /*obj.userType=this.$parent.userType;
                obj.unitName=this.password;
                obj.userName=this.checkcode;
                obj.mobile=this.phoneNumber;
                obj.mobileCode=this.mobileCode;*/
                try{
                    /*var result =  await existUserName(this.username);
                    console.log(result.body.data);*/
                    /*if(result.body.data){
                               console.log(obj)*/
                    var result = await numberCode(this.ruleForm.mobile);
                    console.log(result);
                    if(result.body.code==0){
                        this.$message({
                            message: '验证码发送成功',
                            type: 'success'
                        });
                        const TIME_COUNT = 60;
                        if (!_this.timer) {
                            _this.count = TIME_COUNT;
                            _this.show = false;
                            _this.timer = setInterval(() => {
                                if (_this.count > 0 && _this.count <= TIME_COUNT) {
                                    _this.count--;
                                } else {
                                    _this.show = true;
                                    clearInterval(_this.timer);
                                    _this.timer = null;
                                }
                            }, 1000)
                        }
                    }else{
                        this.$message({
                            message: result.body.errorDesc,
                            type: 'warning'
                        });
                    }
                    /* }else{
                         util.errortip('该用户不存在');
                     }*/
                }catch(e){
                    console.log(e)
                }
            },
			//提交
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						/*alert('submit!');*/
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},

			async go_next(){
                var obj=this.ruleForm;
                let a=util.handleCookieGet('userType');
                obj.userType=a.userType;
               /* alert(this.$parent.userType);*/
                try{
                        if(this.ruleForm.password!=this.ruleForm.checkPass){
                            util.errortip('两次密码输入不一致');
                        }else{
                            var res=await register(obj);
                            console.log(res);
                            if(res.body.code==0){
                            util.vueEvent.$emit("writename");
                            this.$router.push({'name':'reg_three'});

                            var userType = res.body.data.userType;
                            console.log(userType);
                            /* util.errortip(result.body.message);*/
                            let box = {'userType':userType};
                            let date = new Date();
                            console.log(box);
                            util.handleCookieSet('userType', box, date);
                            }else{
                                util.errortip(res.body.errorDesc)
                            }
                        }


                    }catch(err){
                    console.log(err)
                }


				/*this.$router.push({'name':'reg_three'})*/
			}
		},
		mounted(){
            let b=util.handleCookieGet('userName');
            this.message=b.userName;
           /* alert(this.message)*/
//			var self = this;
//          bus.$on('regtype',function(message){
//              self.message = message;//接值
//          });
		}
	}
</script>
<style lang="scss" scoped>
	.register_two {
		height: 100%;
		min-height: 55rem;
		position: relative;
		.reg_two {
			position: absolute;
			left: 1.4rem;
			top: 0.85rem;
			font-size: 1.2rem;
		}
		.register_two_content {
			width: 50rem;
			height: 38.4rem;
			position: absolute;
			top: 50%;
			left: 50%;
			margin-top: -24.3rem;
			margin-left: -25.25rem;
			background: #ffffff;
			.step{
				@include wh(50rem, 4.1rem);
				position: absolute;
				top: 5.3rem;
				left: 0rem;
				.el-step__head.is-finish{
					color:#399CFF;
				}
			}
			/*.step1 {
				background-image: url("../../../static/img/注册第一步.png") no-repeat;
				background-size: 100% 100%;
			}
			.step2 {
				background-image: url("../../../static/img/注册第二步蓝色.png") no-repeat;
				background-size: 100% 100%;
			}
			.step3 {
				background-image: url("../../../static/img/注册第三步蓝色.png") no-repeat;
				background-size: 100% 100%;
			}*/
			.register_two_ruleForm {
				position: absolute;
				left: 9.5rem;
				top: 13.75rem;
				.el-input {
					@include wh(15.5rem,
					1.7rem);
				}
				.code {
					@include wh(9rem,
					4.1rem);
				}
				.rule {
					position: absolute;
					left: 10.15rem;
					top: 30.75;
					font-size: 14px;
					.el-checkbox {
						@include wh(0.9rem,
						0.9rem);
					}
					span {
						color: red;
					}
				}
				.go_next {
					position: absolute;
					left: 9.9rem;
					top: 21.25rem;
					/*background: #399CFF;*/
					color: #ffffff;
				}

			}
		}
	}
</style>
