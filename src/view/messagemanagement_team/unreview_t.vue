<template>
	<div class="unreview_t">
		<div class="unreview_t_content">
			<div class="title">信息管理</div>
			<div class="review_status">
				<div class="status_title">审核状态: 
					<span class="status_content">{{auditstatus}}</span>&nbsp;&nbsp;&nbsp;
					<span v-if="yuanyin">审核不通过原因	<i>{{comment}}</i></span>
				</div>
			</div>
			<div class="company_base">团队基本信息</div>
			<div class="unreview_t_line_o"></div>
			<el-form class="unreview_t_company_base_ruleForm inputsizeout2" :model="ruleForm" status-icon ref="ruleForm" label-width="10rem">
				<el-form-item prop="caseno" label="账号类型">创新创业团队</el-form-item>
				<el-form-item prop="name" label="单位名称">
					<el-input class="inputsize2" v-model="ruleForm.entname" :disabled="disabled"></el-input>
				</el-form-item>
				<el-form-item prop="cardno" label="入驻单位">
					<el-input class="inputsize2" type="text" v-model="ruleForm.stayInUnit" :disabled="disabled"></el-input>
				</el-form-item>
				<el-form-item prop="phone" label="注册地址所属区域">
					<el-select v-model="ruleForm.area" class="inputsize2">
						<el-option v-for="item in lists" :key="item.value" :label="item.text" :value="item.value">{{item.text}}</el-option>
					</el-select>
				</el-form-item>
				<el-form-item prop="companyname" label="办公地址">
					<el-input class="inputsize2" placeholder="请输入具体地址" type="text" v-model="ruleForm.entAddress" :disabled="disabled"></el-input>
				</el-form-item>
				<el-form-item prop="pdf" label="入驻众创空间/孵化器合同证明pdf" id="photo">
					<!--<upload @upimg="upimg" style="display:inline-block;"></upload>-->
					 <!--<img :src="imgurl_1" alt="" style="width: 114px;height: 114px;">-->
					 
					 <input type="file" name="FileUpload" id="FileUpload" v-on:change="upload()">
				 	<el-button @click='look'>点击查看</el-button>
				</el-form-item>
			</el-form>
			<div class="company_Contacts">团队负责人信息</div>
			<div class="unreview_t_line_th"></div>
			<el-form class="unreview_t__contacts_ruleForm inputsizeout2" :model="ruleForm" status-icon ref="ruleForm" label-width="10rem">
				<el-form-item prop="name" label="团队负责人姓名">
					<el-input class="inputsize2" v-model="ruleForm.legalPersonName" :disabled="disabled"></el-input> 
				</el-form-item>
				<el-form-item prop="cardno" label="团队负责人姓名联系电话">
					<el-input class="inputsize2" type="text" v-model="ruleForm.legalPersontel" :disabled="disabled"></el-input>
				</el-form-item>
				<el-form-item prop="phone" label="团队负责人邮箱">
					<el-input class="inputsize2" type="text" v-model="ruleForm.entperEmail" :disabled="disabled"></el-input>
				</el-form-item>
				<el-form-item prop="pdf" label="团队负责人照片" id="photo">
					<upload @upimg="upimg1" style="display:inline-block;" ></upload>
					<img :src="imgurl_2" alt="" style="width: 114px;height: 114px;">
				</el-form-item>
				<el-button v-on:click="addlega" class="addperfuze"  v-if="per">添加</el-button>
			</el-form>
			<div class="company_Contacts_team">团队成员信息</div>
			<div class="reject_line_th"></div>
			<!--企业负责人-->
				<div v-if="flag"> 
					<el-form class="reject__contacts_ruleForm inputsizeout2" :model="ruleForm" status-icon ref="ruleForm" label-width="10rem">
						<el-form-item prop="name" label="团队负责人姓名">
							<el-input class="inputsize2" :value="ruleForm.legalPersonName" :disabled="disabled"></el-input> 
						</el-form-item>
						<el-form-item prop="pdf" label="团队负责人照片" id="photo">
							 <img :src="upImgItem1.data" alt="" style="width: 114px;height: 114px;">
						</el-form-item>
					</el-form>
				</div>

			 <div :key="index" v-for="(item,index) in teams">
				 <el-form class="reject__contacts_ruleForm inputsizeout2" :model="item" status-icon label-width="10rem" >
					<el-form-item prop="name" label="团队成员信息">
						<el-input class="inputsize2" placeholder="" v-model="item.name" :disabled="disabled"></el-input>
					</el-form-item>
					<el-form-item prop="cardno" label="团队成员身份证明照片" style="height:114px;">
						<upload @upimg="upimg2" :itemData="item" style="display:inline-block;" ></upload>
						<img :src="item.idcardImg" style="width: 114px;height: 114px;" v-if="teph"/>
					</el-form-item>
				</el-form>
				<el-button @click="deleteMember(index,item)" class="delect" v-if="per">删除</el-button>
				<!--<button @click="teams.push()">点击修改</button>-->
			</div>
			<el-button @click="teams.push({})" style="float: right;" class="addteams"  v-if="per">添加</el-button>

			<div class="open_bank">开户银行信息（非必填）</div>
			<div class="unreview_t_line_fo"></div>
			<el-form class="unreview_t_openkank_ruleForm inputsizeout2" :model="ruleForm" status-icon ref="ruleForm" label-width="10rem">
				<el-form-item prop="name" label="开户行名称">
					<el-input class="inputsize2" v-model="ruleForm.bankname" :disabled="disabled"></el-input>
				</el-form-item>
				<el-form-item prop="cardno" label="银行账号">
					<el-input class="inputsize2" type="text" v-model="ruleForm.bankaccount" :disabled="disabled"></el-input>
				</el-form-item>
				<el-form-item prop="phone" label="开户名">
					<el-input class="inputsize2" type="text" v-model="ruleForm.accountName" :disabled="disabled"></el-input>
				</el-form-item>
			</el-form>
			<el-button class="unreview_t_back" v-on:click="$router.go('-1')">返回</el-button>
			<el-button class="alter_message" v-on:click="submits" v-if ="per">提交审核</el-button>
		</div>
	</div>
</template>

<script>
	import util from 'src/util/util.js'
	import citys from 'static/js/citydata.js'
	import upload from '../../components/uploadImg'
	import {
		teamInfoAudit_T,
		teamInfoDetail_T,
		post_uploadImg,
		deleteMember_t
	} from '../../model/api.js'

	export default {
		name: 'unreview_t',
		props: [],
		data() {
				
			return { 
				leph:false,
				comment:'',
				disabled:false,
				userType:'',
				flag: false,
				yuanyin: false,
				teph:false,
				per:true,
				teams:[{}],
				imgurl_1:'',
				imgurl_2:'',
				province: citys,
				citys: [],
				isshowpdf: true,
				auditstatus: '',
				lists: [{
					value: "131002",
					text: "安次区"
				}, {
					value: "131003",
					text: "广阳区"
				}, {
					value: "131022",
					text: "固安县"
				}, {
					value: "131023",
					text: "永清县"
				}, {
					value: "131024",
					text: "香河县"
				}, {
					value: "131025",
					text: "大城县"
				}, {
					value: "131026",
					text: "文安县"
				}, {
					value: "131028",
					text: "大厂回族自治县"
				}, {
					value: "131051",
					text: "开发区"
				}, {
					value: "131052",
					text: "燕郊经济技术开发区"
				}, {
					value: "131081",
					text: "霸州市"
				}, {
					value: "131082",
					text: "三河市"
				}, {
					value: "131083",
					text: "其它区"
				}],
				ruleForm: {
					entname: '',
					area: '',
					entAddress: '',
					stayInUnit: '',
					type: '',
					cer_code: '',
					statu: false,
					businessImgurl: '',
					legalPersonName: '',
					legalPersontel: '',
					entperEmail: '',
					bankname: '',
					bankaccount: '',
					accountName: ''
				},
				upImgItem: {},
				upImgItem1: {},
				upImgItem2: {},
				arr: []
			}
		},
		components: {
			upload
		},
		watch: {

		},
		created() {
		},
		methods: {
			
			async upload(){
	           var fileObj = document.getElementById("FileUpload").files[0]; // js 获取文件对象
	           var types = fileObj.type;
	           if(types.indexOf("pdf") == -1){
	               alert("请选择pdf文件")
	               return;
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
//			upimg(item, fileImg) {
//				this.upImgItem = {
//					item,
//					fileImg
//				}
//				if(fileImg.type === 'image/jpeg') {
//					this.chekcimg = true
//				} else {
//					this.chekcimg = false
//				}
//			},
			upimg1(item, fileImg,data) {
				this.leph = true,
				this.upImgItem1 = {
					item,
					fileImg,
					data
				}
				if( fileImg.type === 'image/jpeg'|| fileImg.type === 'image/jpg' || fileImg.type === 'image/png'){
					this.chekcimg = true
				} else {
					this.chekcimg = false
				}
			},
			upimg2(item, fileImg,data,Img) {
				this.s = true,
				console.log(Img)
				console.log(222)
				Img.item = item,
				Img.fileImg = fileImg
				
				if( fileImg.type === 'image/jpeg'|| fileImg.type === 'image/jpg' || fileImg.type === 'image/png'){
					this.chekcimg = true
				} else {
					this.chekcimg = false
				}
				console.log(111)
				console.log(item)
				console.log(fileImg)
			},
			async deleteMember(index,item){
				if(this.teams.length <= 0){
					return;
				}
				if(item.id){
					var data = item.id;
					console.log(data)
					//去服务器删除数据
					var res =  await deleteMember_t({teamMembersId:data});
					console.log(res);
					this.teamInfoDetail();
//					var x =  util.handleCookieGet('userType')
//			        console.log(x.userType)
//			        this.userType = x.userType;
//			        console.log(this.userType)
//			        if(this.userType== 2){
//			        		this.per = false
//			        }
				}
				
				this.teams.splice(index,1)
			},
			//获取详情信息
			async teamInfoDetail() {
				var res = await teamInfoDetail_T()
				console.log(res)
				this.ruleForm = {
					"id": "",
					"userType": "",
					"entname": "",
					"area": "",
					"entAddress": "",
					"stayInUnit": "",
					"stayInUnitContractImg": "",
					"legalPersonName": "",
					"legalPersontel": "",
					"entperEmail": "",
					"legalPersonIdcardImg": "",
					"bankname": "",
					"bankaccount": "",
					"accountName": "",
					"teamMembersReqs": [{
						"id": "",
						"name": "",
						"idcardImg": ""
					}],
					"auditstatus": "",
					"auditMessage": ""
				}
				if(res.body.data.id) {
					this.id = res.body.data.id;
					console.log(res.body.data.id)
					console.log(res.body.data)
					this.imgurl_1 = res.body.data.stayInUnitContractImg;
					this.imgurl_2 = res.body.data.legalPersonIdcardImg;
					this.upImgItem1.data = res.body.data.legalPersonIdcardImg;
					console.log(this.imgurl)
					this.ruleForm = res.body.data;
					this.teams = res.body.data.teamMembersReqs;
					console.log(this.teams)
					var typecode = res.body.data.auditstatus;
					if(typecode == -1){
        				this.auditstatus = "未审核";
        				this.flag = false;
	        			}
					if(typecode == 0){
						this.auditstatus = "区县审核中"
						this.flag = false;
						this.per = false;
						this.disabled = true;
						this.teph = true;
						}
					if(typecode == 1){
						this.auditstatus = "审核通过";
						this.disabled = true;
						this.flag = false;
						this.per = false;
						this.teph = true;
					}
					if(typecode == 2){
						this.yuanyin = true;
						this.comment = res.body.data.comment;
						this.auditstatus = "审核不通过";
						this.flag = true;
						this.disabled = false;
						this.teph = true;
					}
					if(typecode == 3){
						this.yuanyin = true;
						this.comment = res.body.data.comment;
						this.auditstatus = "已驳回";
						this.flag = true;
						this.disabled = false;
						this.teph = true;
					}
				} else {
					var typecode = res.body.data.auditstatus;
					var entname = res.body.data.entname;
        				this.ruleForm.entname = entname;
					if(typecode == -1) {
						this.auditstatus = "未审核";
						this.flag = false;
					}
					if(typecode == 0) {
						this.auditstatus = "区县审核中"
					}
					if(typecode == 1) {
						this.auditstatus = "审核通过"
					}
					if(typecode == 2) {
						this.auditstatus = "审核不通过"
					}
					if(typecode == 3) {
						this.auditstatus = "已驳回"
					}
				}

			},
			async submits() {
				if(this.chekcimg) {
					this.upLoadData();
				} else {
					this.$message.error("上传图片仅支持JPG/JPEG/png");
				}
			},
			addlega(){
				if(this.teams.length == 1 ){
					this.flag = true;
				}
			},
			async upLoadData() {
				if(this.ruleForm.entname.trim() == '') {
					util.errortip('单位名称不能为空!');
					return;
				}
				if(this.ruleForm.stayInUnit.trim() == '') {
					util.errortip('入驻单位不能为空!');
					return;
				}
				if(this.ruleForm.area.trim() == '') {
					util.errortip('地区不能为空!');
					return;
				}
				if(this.ruleForm.entAddress.trim() == '') {
					util.errortip('注册地址不能为空!');
					return;
				}
				if(this.ruleForm.legalPersonName.trim() == '') {
					util.errortip('团队联系人不能为空!');
					return;
				}
				if(this.ruleForm.legalPersontel.trim() == '') {
					util.errortip('团队联系人电话不能为空!');
					return;
				}
				  var  regph = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	              if(!regph.test(this.ruleForm.legalPersontel)){
	              	 util.errortip('请输入正确格式的企业联系人电话!');
	                  return;
	              }
				
				 var regeM = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	               if(!regeM.test(this.ruleForm.entperEmail)) {
	                  util.errortip('企业联系人邮箱格式不对!');
	                  return;
	              }
				if(this.ruleForm.entperEmail.trim() == '') {
					util.errortip('团队联系人邮箱不能为空!');
					return;
				}
				var obj = {};
				//上传图片
//				var fromData = new FormData();
//				fromData.append("file", this.upImgItem.item);
//				fromData.append("fileName", this.upImgItem.fileImg.name);
//				var result = await post_uploadImg(fromData);
//				console.log(result.body.data.fileUrl)
				if(this.leph){
					var fromData = new FormData();
					fromData.append("file", this.upImgItem1.item);
					fromData.append("fileName", this.upImgItem1.fileImg.name);
					var result1 = await post_uploadImg(fromData);
					console.log(result1.body.data.fileUrl)
				}else{
					util.errortip('请上传团队负责人信息!');
					return;
				}
//				if(this.teph){
					var imgUrl = []
					for (var i = 0; i < this.teams.length ; i++) {
						var fromData = new FormData();
						fromData.append("file", this.teams[i].item);
						fromData.append("fileName", this.teams[i].fileImg.name);
						var resultMy = await post_uploadImg(fromData);
						imgUrl.push({
							idcardImg : resultMy.body.data.fileUrl,
							name : this.teams[i].name
						})
					}
//				}else{
//					util.errortip('请上传团队成员信息!');
//					return;
//				}
				
				console.log(imgUrl);
				console.log(9999999999);
				console.log(result1)
				//企业合同文件
				obj.stayInUnitContractImg = this.imgurl;
				obj.legalPersonIdcardImg = result1.body.data.fileUrl;
				//选取企业
				obj.id = this.id;
				obj.userType = this.userType;
				obj.entname = this.ruleForm.entname;
				obj.area = this.ruleForm.area;
				obj.stayInUnit = this.ruleForm.stayInUnit;
				obj.entAddress = this.ruleForm.entAddress;
				obj.legalPersonName = this.ruleForm.legalPersonName;
				obj.legalPersontel = this.ruleForm.legalPersontel;
				obj.entperEmail = this.ruleForm.entperEmail;
				obj.bankname = this.ruleForm.bankname;
				obj.bankaccount = this.ruleForm.bankaccount;
				obj.accountName = this.ruleForm.accountName;
				obj.teamMembersReqs = imgUrl
				console.log(obj)
				var result = await teamInfoAudit_T(obj);
				console.log(result)
				if(result.body.code == 0) {
					util.successtip("提交成功");
                		this.$router.push({'name':'messagemanagement_t'});
				} else {
					this.$message.error(result.body.errorDesc);
				}
			}
		},
		mounted() {
			this.teamInfoDetail();
			var x =  util.handleCookieGet('userType')
	        console.log(x.userType)
	        this.userType = x.userType;
	        console.log(this.userType)
//	        if(this.userType== 2){
//	        		this.per = false
//	        }
		}
	}
</script>

<style lang="scss" scoped>
	.unreview_t {
		height: 100%;
		min-height: 89rem;
		.unreview_t_content {
			margin-left: 1.5rem;
			background: #ffffff;
			.title{
				height: 2.95rem;
				border-top: 4px solid $bordercolor;
				border-bottom: 1px solid $bordercolor;
				padding-left: 1.15rem;
				@include font(0.8rem, 2.95rem);
			}
			.review_status {
				margin: 1.5rem 0 0 2.5rem;
				@include wh(40rem, 4.1rem);
				line-height: 4.1rem;
				background: #F3E4A9;
				.status_title {
					margin-left: 1.5rem;
				}
				.status_content {
					color: red;
				}
			}
			.company_base {
				margin: 2.5rem 0 0 2.5rem;
			}
			.unreview_t_line_o {
				margin: 1.5rem 0 0 2.5rem;
				@include wh(40rem, 1px);
				background: #E7EAEC;
			}
			.unreview_t_company_base_ruleForm {
				height: 21rem;
				margin: 2.5rem 0 2.5rem 8.5rem;
				.avatar-uploader {
					border: 1px solid #000000;
					@include wh(5.6rem, 5.6px);
				}
			}
			.addperfuze{
				float: right;
				margin: 5rem 3rem 0 0 ;
			}
			.company_Contacts_team {
				margin:  1.5rem 0 0 2.5rem;
			}
			.reject_line_th {
				margin:  1.5rem 0 0 2.5rem;
				@include wh(40rem, 1px);
				background: #E7EAEC;
			}
			.reject__contacts_ruleForm {
				height: 13rem;
				margin:  3rem 0 0 8.5rem;
			}
			.company_Contacts {
				height: 3rem;
				margin: 1.5rem 0 0 2.5rem;
			}
			.unreview_t_line_th {
				margin:  0 0 0 2.5rem;
				@include wh(40rem, 1px);
				background: #E7EAEC;
			}
			.unreview_t__contacts_ruleForm {
				height: 20rem;
				margin: 3rem 0 0 8.5rem;
				
			}
			.delect{
					margin-left: 10.5rem;
			}
			.addteams{
				margin: -1.4rem 3rem 0 0 ;
			}
			// 开户行信息
			.open_bank {
				height: 2rem;
				margin: 1.5rem 0 0 2.5rem;
			}
			.unreview_t_line_fo {
				margin: 0.5rem 0 0 2.5rem;
				@include wh(40rem, 1px);
				background: #E7EAEC;
			}
			.unreview_t_openkank_ruleForm {
				height: 10rem;
				margin: 2.5rem 0 0 8.5rem;
			}
			.unreview_t_back {
				margin: 0 0 2.5rem 18.5rem ;
				@include wh(4.4rem, 1.75rem);
				font-size: 0.7rem;
				padding: 10px 20px;
			}
			.alter_message {
				@include wh(4.4rem, 1.75rem);
				color: #ffffff;
				background: #399CFF;
				font-size: 0.7rem;
				padding: 10px 20px;
			}
		}
	}
</style>