<template>
	<div class="home">
		<div class="headline">
			科技创新券管理／<strong>申领科技创新券</strong>
		</div>
		<div class="status">
			<div>
				<span>审核状态：</span>
				<span style="color:#FF0000">{{reviewedStatusCode}}</span>

			</div>
			<div style="font-size:14px;" v-if="per">审核不通过原因: <span>{{remark}}</span></div>
		</div>
		<el-form style="width:25rem;margin:auto" :label-position="labelPosition" label-width="220px" :model="formLabelAlign">
			<el-form-item label="账号类型" class="apply">
				<!--<el-input v-model="formLabelAlign.accountType" :disabled="true"></el-input>-->
				<span>{{accountType}}</span>
			</el-form-item>
			<el-form-item label="单位名称" class="apply">
				<!--<el-input v-model="formLabelAlign.unnames" :disabled="true"></el-input>-->
				<span>{{unnames}}</span>
			</el-form-item>
			<el-form-item label="创新服务类型">
				<el-select v-model="serviceType" clearable placeholder="请选择">
					<el-option v-for="item in serviceTypeData" :key="item.value" :label="item.name" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="创新服务机构地区" style="">
				<v-distpicker @selected="onSelected"></v-distpicker>
			</el-form-item>
			<el-form-item label="创新服务机构">
				<el-autocomplete style="width:100%" v-model="serviceName" :fetch-suggestions="querySearchAsync" placeholder="请输入机构名称进行检索" @select="handleSelect"></el-autocomplete>
			</el-form-item>
			<el-form-item label="与创新机构合同名称">
				<el-input style="width:6.5rem" v-model="formLabelAlign.contractName"></el-input>
			</el-form-item>
			<el-form-item style="height:114px" label="与创新服务机构合作的合同PDF">
				 <input type="file" name="FileUpload" id="FileUpload" v-on:change="upload()">
				 <el-button @click='look'>点击查看</el-button>
				<!--<upload @upimg="upimg" style="display:inline-block;"></upload>-->
			</el-form-item>
			<el-form-item label="合同金额">
				<el-input style="width:6.5rem" v-model="formLabelAlign.contractValue"></el-input><span class="yuan">元</span>
			</el-form-item>
			<el-form-item label="创新券申领金额">
				<el-input style="width:6.5rem" v-model="formLabelAlign.appliMoney"></el-input><span class="yuan">元</span>
			</el-form-item>
			<!--<el-form-item label="创新券申领金额要求" style="font-size: 12px;">
				<p>1:科技创新券申领金额必须为整数不能带小数;</p>
				<p>2:一份合同申领的科技创新券金额不能超过合同金额的50%;</p>
				<p>3:一个企业/团队单位名称申领的科技创新券总额不能超过<i style="color: red;font-size: 12px;">{{appliMoneys}}</i></p>
			</el-form-item>-->

		</el-form>
		<div class="press">
			<el-button @click='$router.push({"name": "ticketmanage"})'>返回</el-button>
			<el-button @click='InnovatApply' type="primary" style="padding:7px 15px;background:#399CFF">提交申领</el-button>
		</div>
	</div>
</template>

<script>
	import upload from '../../components/uploadImg'
	import util from '../../util/util.js'
	import cityDatas from 'static/js/citydata.js'
	import { InnovatApply_T, searchServiceName ,getUserInfo , post_uploadImg,appliMoneyLimit,getInnovateDetail_T,updateTicket_T} from 'src/model/api'
	import VDistpicker from 'v-distpicker'
	export default {
		name: "apply",
		components: {
			upload,
			VDistpicker
		},
		data() {
			return {
				accountType:'',
				remark:'',
				per: false,
				unnames:'',
				reviewedStatusCode:'',
				appliMoneys:'',
				restaurants: [],
				imgurl:'',
				orgName: '',
				citys: cityDatas,
//				imageUrl:'',
				serviceType: '',
				servercode:'',
				serviceName: '',
				timeout: null,
				labelPosition: 'right',
				formLabelAlign: {
//					contractName: '',
//					contractValue:'',
//					appliMoney: ''
				},
				city: {
					serviceProvince: '',
					serviceCity: '',
					serviceCounty: ''
				},
				upImgItem : {},
				serviceTypeData: [{
						value: '1',
						name: '检测检验服务',
					},
					{
						value: '2',
						name: '技术交易服务',
					},
					{
						value: '3',
						name: '知识产权服务',
					},
					{
						value: '4',
						name: '科技咨询服务',
					},
					{
						value: '5',
						name: '创业孵化服务',
					}
				]

			}
		},
		computed:{

		},
		methods: {
			//获取科创券详情
			async getInnovateDetail() {
				var obj = {};
				obj.innovateId = this.$route.params.id;
				var res = await getInnovateDetail_T(obj);
				if(res.body.code == 0) {
					this.formLabelAlign = res.body.data;
					console.log(res.body.data)
					console.log(res.body.data.serviceName)
					this.serviceName = res.body.data.serviceName
					var typecode = res.body.data.reviewedStatusCode;
					if(typecode == 1) {
						this.reviewedStatusCode = "区县审核中"
					}
					if(typecode == 2) {
						this.reviewedStatusCode = "区县审核不通过";
						this.per = true;
						this.remark = res.body.data.remark
					}
					if(typecode == 3) {
						this.reviewedStatusCode = "区县审核通过"
					}
					if(typecode == 4) {
						this.reviewedStatusCode = "市科技局审核中"
					}
					if(typecode == 5) {
						this.reviewedStatusCode = "市科技局审核通过"
					}
					if(typecode == 6) {
						this.reviewedStatusCode = "市科技局审核不通过";
						this.per = true;
						this.remark = res.body.data.remark
					}
					if(typecode == 7) {
						this.reviewedStatusCode = "退卷审核通过"
					}
				} else {
					util.alertip(res.body.message);
				}
			},
			async appliMoneyLimit_a(){
				var res = await appliMoneyLimit()
				console.log(res)
				this.appliMoneys = res.body.data;
			},
			async upload(){
	           var fileObj = document.getElementById("FileUpload").files[0]; // js 获取文件对象
	           var types = fileObj.type;
	           if(types.indexOf("pdf") == -1){
	               alert("请选择pdf文件")
	           }else{
	           	  console.log(fileObj)
	               var formFile = new FormData();
	               formFile.append("fileName", fileObj.name);  
	               formFile.append("file", fileObj);
	               var data = formFile;
	               var imgurl = await post_uploadImg(data);
	               console.log(imgurl)
	               this.imgurl = imgurl.body.data.fileUrl;
	           }
               if (typeof(fileObj) == "undefined" || fileObj.size <= 0 ) {
                   alert("请选择图片");
                   return;
               }
             
	        },
	        look(){
				console.log(this.imgurl)
				window.open(this.imgurl)
			},
			//选取地区三级联动
			onSelected(data) {
				this.city.serviceProvince = data.city;
				this.city.serviceCity = data.city;
				this.city.serviceCounty = data.area;
				console.log(this.city)
			},
			//提交申请操作
			async InnovatApply() {
				              if(this.accountType.trim() == '') {
				                  util.errortip('账号类型不能为空!');
				                  return;
				              }
				              if(this.serviceType.trim() == '') {
				                  util.errortip('创新服务类型不能为空!');
				                  return;
				              }
				              if(this.serviceName.trim() == '') {
				                  util.errortip('创新服务机构不能为空!');
				                  return;
				              }
				              if(this.formLabelAlign.contractName.trim() == '') {
				                  util.errortip('合同名称不能为空!');
				                  return;
				              }
//				              var regcon = /^[\d\+\-\*\/\(\)]+$/;
//				              if(!regcon.test(this.formLabelAlign.contractValue)){
//				              	 util.errortip('合同金额仅支持数字!');
//				                  return;
//				              }
//				              if(this.formLabelAlign.contractValue.trim() == '') {
//				                  util.errortip('合同金额不能为空!');
//				                  return;
//				              }
				              
				              
//				              if(this.formLabelAlign.appliMoney > this.appliMoneys){
//				              	 util.errortip('您的企业已申领的科技创新券总额已超过市科技局规定的申领总额。请您减少申领金额！');
//				              	 
//				              	 if(this.formLabelAlign.appliMoney > (this.formLabelAlign.contractValue)/2){
//				              	 	util.errortip('您的当前合同名称申领的科技创新券总额已超过合同金额的50% 。请您减少申领金额');
//				              	 	return;
//				              	 }
//				              }
//				              if(this.formLabelAlign.appliMoney.trim() == '') {
//				                  util.errortip('申领金额不能为空!');
//				                  return;
//				              }
//				              var regAM = /^[1-9]\d*$/
//				              if(!regAM.test(this.formLabelAlign.appliMoney)) {
//				                  util.errortip('创新券申领金额必须为整数!');
//				                  return;
//				              }
							 //上传图片
							var obj = {};
							obj.id = this.$route.params.id;
							var x = util.handleCookieGet("userType");
							obj.userType = x.userType;
							obj.entname = this.unnames;
							obj.contractAttachment = this.imgurl;
							obj.servicetypeCode = this.serviceType;
							obj.fpRovince = this.city.serviceProvince.value;
							obj.fkcity = this.city.serviceCity.value;
							obj.fkCountydistrict = this.city.serviceCounty.value;
							obj.serviceEntercode = this.servercode;
							obj.contractName = this.formLabelAlign.contractName;
							obj.contractValue = this.formLabelAlign.contractValue;
							obj.appliMoney = this.formLabelAlign.appliMoney;
							console.log(obj)
							var res = await updateTicket_T(obj);
							console.log(res)
							if(res.body.code == 0) {
								console.log(res.body.message)
								util.alertip( '提交成功');
								this.$router.push({'name':'ticketmanage'});
							} else {
								util.alertip(res.body.errorDesc);
							}
						},
						async loadall() {
							var pam = this.serviceName;
							console.log(pam.orgName)
							var res = await searchServiceName({orgName:pam});
							this.restaurants = res.data.data
						},
						async getUserInfo_info(){
							var res = await getUserInfo()
							console.log(res.body)
							this.unnames = res.body.data.unitName;
							console.log(this.unnames)
						},
						//机构名称数据检索
						querySearchAsync(queryString, cb) {
							let res = this.restaurants;

							var results = queryString ? res.filter(this.createStateFilter(queryString)) : res;
							results = results.map(data => ({
								value: `${data.entname}`,
								lable: `${data.polcode}`
							}));
							cb(results);
						},
						createStateFilter(fullData, queryString) {
							return state => {
								return(
									state.polcode.includes(queryString) ||
									state.entname.includes(queryString)
								);
							};
						},
						handleSelect(item) {
							console.log(item.lable);this.serviceName = item.value;
							this.servercode = item.lable;

			}
		},
		mounted() {
			this.getInnovateDetail();
			this.appliMoneyLimit_a();
			this.loadall();
			this.getUserInfo_info();
			//获取cookie信息 usertype
			var x = util.handleCookieGet("userType");
			console.log(x.userType)
			if(x.userType ==1){this.accountType = "企业"}
			if(x.userType ==2){this.accountType = "创新创业团队"}
			if(x.userType ==3){this.accountType = "区县用户"}
			if(x.userType ==4){this.accountType = "市科技局用户"}
		}

	};
</script>

<style scoped lang="scss">
	.home {
		background: white;
		width: 45rem;
		/* height:100%;*/
		padding-bottom: 100px;
		margin: auto;
		.headline {
			padding-left: 24px;
			height: 60px;
			line-height: 60px;
			border-bottom: 1px solid #E7EAEC;
			margin-bottom: 27px;
			color: #676A6C;
			font-size: 16px;
			letter-spacing: 0.3px;
		}
		.status {
			background: rgba(255, 250, 220, 0.30);
			border: 1px solid #F3E4A9;
			border-radius: 5px;
			margin: 30px 50px;
			height: 82px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-left: 30px;
			line-height: 22px;
		}
		.yuan {
			font-size: 14px;
			margin-left: 10px;
		}
		.press {
			display: flex;
			justify-content: center;
			margin-top: 54px;
		}
	}
</style>
