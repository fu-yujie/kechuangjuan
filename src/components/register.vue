<template>
	<div class="register">
        <!--<toplogo></toplogo>-->
		<div class="reg">注册</div>
		<div class="register_content">
			<div class="step">
				<el-steps :active="1" :align-center="true" :center="true">
				<el-step title="步骤 1" description="请选择账号类型"><i slot="icon" class="step1"></i></el-step>
				<el-step title="步骤 2" description="请填写注册资料"> <i slot="icon" class="step2"></i></el-step>
				<el-step title="步骤 3" description="注册完成"><i slot="icon" class="step3"></i></el-step>
			</el-steps>
			</div>
			<div  @click="qiyenext" :class="{'showbor':showbor, 'hidebor':hidebor}">
				<img src="../../static/img/compony.png" alt="" />
				<span>{{message}}</span>
			</div>
			<div class="tips_team" @click="teamnext" :class="">
				<img src="../../static/img/chuangxin_team.png" alt="" />
				<span>创新创业团队</span>
			</div>
		</div>

	</div>
</template>

<script>
    import toplogo from './toplogo'
    import util from 'src/util/util'
	export default {
		name: 'register',
        components:{
		    toplogo
        },
		data() {
			return {
				message:'企业',
				active: 0,
				showbor: false,
				hidebor:true
			};
		},

		methods: {
			qiyenext() {
				this.showbor = true;
//				bus.$emit('regtype',this.message);
				this.$router.push({'name':'reg_two'});
				/*this.$parent.userType=1;
				this.$parent.userName='企业'*/
                let box = {'userType':1};
                let box1 = {'userName':'企业'};
                let date = new Date();
                console.log(box);
                util.handleCookieSet('userType', box, date);
                util.handleCookieSet('userName', box1, date);
			},
            teamnext() {
                this.showbor = true;
//				bus.$emit('regtype',this.message);
                this.$router.push({'name':'reg_two'});
                // this.$parent.userType=2;
                // this.$parent.userName='创新创业团队'

                let box = {'userType':2};
                let box1 = {'userName':'创新创业团队'};
                let date = new Date();
                console.log(box);
                util.handleCookieSet('userType', box, date);
                util.handleCookieSet('userName', box1, date);
            }
		}
	}
</script>

<style lang="scss" scoped>
	.register {
		height: 100%;
		min-height: 55rem;
		position: relative;
		background-color:#F3F3F4;
		.reg{
			position: absolute;
			left: 6.5rem;
			top: 5.85rem;
			font-size: 1.2rem;
			z-index: 2;
		}
		.register_content {
			width: 50rem;
			height: 38.4rem;
			position: absolute;
			top: 50%;
			left: 50%;
			margin-top: -19.3rem;
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
			.hidebor{
				@include wh(15rem,8.6rem);
				border: 1px solid #EEEEEE;
				position: absolute;
				top: 18.9rem;
				left:9.45rem;
				img{
					@include wh(2.2rem,2.2rem);
					margin: 3.2rem 0 0 5.05rem;
					float: left;
				}
				span{
					float: left;
					margin: 80px 0 0 5px;
				}
			}
			.showbor{
				border: 1px solid #399CFF;
			}

			.tips_team{
				@include wh(15rem,8.6rem);
				border: 1px solid #EEEEEE;
				position: absolute;
				top: 18.9rem;
				left:25.75rem;
				img {
					float: left;
					@include wh(2.2rem,2.2rem);
					margin: 3.2rem 0 0 5.05rem;
				}
				span{
					float: left;
					margin: 80px 0 0 5px;
				}
			}
		}
	}
</style>
