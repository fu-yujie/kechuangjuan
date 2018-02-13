<template>
	<div class="register_two">
        <toplogo></toplogo>
		<div class="reg_two">注册</div>
		<div class="register_two_content">
			<div class="step">
				<el-steps :active="3" :align-center="true" :center="true">
					<el-step title="步骤 1" description="请选择账号类型"><i slot="icon" class="step1"></i></el-step>
					<el-step title="步骤 2" description="请填写注册资料"> <i slot="icon" class="step2"></i></el-step>
					<el-step title="步骤 3" description="注册完成"><i slot="icon" class="step3"></i></el-step>
				</el-steps>
			</div>
			<div class="success">
				<figure>
					<img src="../../../static/img/reg_success.png" alt="" />
					<figcaption>
						<b>恭喜你,注册成功</b>
						<p @click="toapply" class="toapply">前去维护信息,快去申领科技创新卷>></p>
					</figcaption>
				</figure>

			</div>
		</div>

	</div>
</template>

<script>
    import toplogo from 'src/components/toplogo'
    import util from 'src/util/util.js'
	export default {
		name: 'register_two',
        components:{
		    toplogo
        },

		data() {
			return {
				active: 0,
				radio: '0',
				ruleForm:{
					name:'',
					code:'',
					password:'',
					password_s:'',
					pho:'',
					company:''
				}
			}
		},
created:function(){
    util.vueEvent.$emit("writename");
},
		methods: {
			next() {
				if(this.active++ > 2) this.active = 0;
			},
			cl(){
				this.radio = "1"
			},
            toapply(){
			    var _this=this;
                let a=util.handleCookieGet('userType');
                if(a.userType==1){
                    _this.$router.push('/messagemanagement_b')
                }else if(a.userType==2){
                    _this.$router.push('/messagemanagement_t')
                }

            }

		}
	}
</script>

<style lang="scss" scoped>
    .toapply{
        cursor:pointer
    }
	.register_two {
		height: 100%;
		min-height: 55rem;
		position: relative;
		.reg_two{
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
				 @include wh(50rem,4.1rem);
				position: absolute;
				top: 5.3rem;
				left:0rem;
			}
			/*.step1 {
				background-image: url('../../static/img/注册第一步.png') no-repeat;
				background-size: 100% 100%;
			}
			.step2 {
				background-image: url('../../static/img/注册第二步蓝色.png') no-repeat;
				background-size: 100% 100%;
			}
			.step3 {
				background-image: url('../../static/img/注册第三步蓝色.png') no-repeat;
				background-size: 100% 100%;
			}*/
			.success{
				position: absolute;
				left:15.55rem;
				top: 18.35rem;
				img{
					width: 4.3rem;
					height: 4.3rem;
					float: left;
				}
				figcaption{
					float: left;
					b{
						display: block;
						margin: 20px 0 10px 10px;
						font-size: 20px;
					}
					p{
						margin: 0 0 10px 10px;
						font-size: 0.8rem;
						color: #ED5566;
					}
				}
			}
		}
	}
</style>
