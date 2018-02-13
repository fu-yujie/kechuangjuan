<template>
    <div class="unreview_b">
        <div class="unreview_b_content">
            <div class="title">信息管理</div>
             <div class="review_status">
                <div class="status_title">审核状态: 
                		<span class="status_content">{{auditstatus}}</span>&nbsp;&nbsp;&nbsp;
               		<span v-if="yuanyin">审核不通过原因	<i>{{comment}}</i></span>
               	</div>
            </div> 
            <div class="company_base">企业基本信息</div>
            <div class="unreview_b_line_o"></div>
            <el-form class="unreview_b_company_base_ruleForm inputsizeout2" :model="ruleForm" status-icon ref="ruleForm"   label-width="10rem">
                <el-form-item prop="caseno" label="账号类型">企业</el-form-item>
                <el-form-item prop="entname" label="单位名称">
                   <el-input class="inputsize2"  v-model="ruleForm.entname"  :disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item prop="sociacreditcode" label="社会信用统一代码">
                    <el-input class="inputsize2"  type="text" v-model="ruleForm.sociacreditcode" :disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item prop="area" label="注册地址所属区域">
                   <el-select v-model="ruleForm.area" class="inputsize2">
                        <el-option  v-for="item in lists" :key="item.value" :label="item.text" :value="item.value">{{item.text}}</el-option>
                   </el-select>
                </el-form-item>
                <el-form-item prop="entAddress" label="注册地址">
                    <el-input class="inputsize2"  placeholder="请输入具体地址" type="text" v-model="ruleForm.entAddress" :disabled="disabled" ></el-input>
                </el-form-item>
                <el-form-item prop="fkEntattributeTypeArray" label="企业类型">
                     <el-checkbox-group v-model="fkEntattributeTypeArray" @change="checkinlist" >
                     	<el-checkbox v-for="item in mpd" :key="item.id" :label="item.id" >{{item.name}}</el-checkbox>
                     </el-checkbox-group>
                </el-form-item>
                <el-form-item prop="" label="营业执照照片" id="photo"  >
                    <upload @upimg="upimg" style="display:inline-block;" v-if="flag"></upload>
                    <img :src="imgurl" alt="" style="width: 114px;height: 114px;">
                </el-form-item>
                  <el-form-item prop="organizationCode" label="证书编号" id="kexiao">
                    <el-input class="inputsize2"  type="text" v-model="ruleForm.organizationCode" :disabled="disabled"></el-input>
                </el-form-item>
            </el-form>

            <div class="company_Contacts">企业联系人信息</div>
            <div class="unreview_b_line_th"></div>
            <el-form class="unreview_b__contacts_ruleForm inputsizeout2" :model="ruleForm" status-icon  ref="ruleForm1" label-width="10rem">
                <el-form-item prop="legalPersonName" label="企业联系人">
                   <el-input class="inputsize2"  v-model="ruleForm.legalPersonName" :disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item prop="legalPersontel" label="企业联系人手机号">
                    <el-input class="inputsize2"  type="text" v-model="ruleForm.legalPersontel" :disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item prop="entperEmail" label="企业联系人邮箱">
                    <el-input class="inputsize2"  type="text" v-model="ruleForm.entperEmail" :disabled="disabled"></el-input>
                </el-form-item>
            </el-form>

             <div class="open_bank">开户银行信息（非必填）</div>
            <div class="unreview_b_line_fo"></div>
            <el-form class="unreview_b_openkank_ruleForm inputsizeout2" :model="ruleForm" status-icon  ref="ruleForm2" label-width="10rem">
                <el-form-item prop="bankname" label="开户行名称">
                   <el-input class="inputsize2"  v-model="ruleForm.bankname" :disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item prop="bankaccount" label="银行账号">
                    <el-input class="inputsize2"  type="text" v-model="ruleForm.bankaccount" :disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item prop="accountName" label="开户名">
                    <el-input class="inputsize2"  type="text" v-model="ruleForm.accountName" :disabled="disabled" ></el-input>
                </el-form-item>
            </el-form>
            <el-button class="unreview_b_back" v-on:click="$router.go('-1')">返回</el-button>
            <el-button class="alter_message" v-on:click="upLoadData" v-if="flag" >提交审核</el-button>
             <!--v-loading.fullscreen.lock="fullscreenLoading"-->
        </div>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import citys from 'static/js/citydata.js'
import checkreg from 'src/util/checkreg.js'
import upload from '../../components/uploadImg'
import VDistpicker from 'v-distpicker'
import { post_management_b_Message,qiyeInfoDetail_T,
            post_uploadImg } from '../../model/api.js'

export default {
    name: 'unreview_b',
    props : [],
    data () {
    			 //验证
//          let noemptyblur = {
//	            required: true,
//	            validator: checkreg.checkreg.emptyblur,
//	            message: checkreg.warntip.noempty,
//	            trigger: 'blur'
//	        };
//	          let noemptychange = {
//	            required: true,
//	            message: checkreg.warntip.noempty,
//	            trigger: 'change'
//	        };
//	         let noemptyarrychange = {
//	            required: true,
//	            type: 'array',
//	            message: checkreg.warntip.noempty,
//	            trigger: 'change'
//	        };
        return {
        		s: false,
        		fullscreenLoading: false,
        		comment:'',
        		disabled:false,
        		yuanyin: false,
        		flag:false,
        		chekcimg: false,
        	    imgurl:'',
        	    userType:'',
            province:citys,
            citys:[],
            fkEntattributeTypeArray:[],
//          rules:{
//         	 	entname:[noemptyblur],
//         	 	area:[noemptychange]
//         	 	
//          },
           
            	
            
            lists:[
                    {
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
                    }
                  ],
            mpd:[
            {
	            'name':'科技型中小企业',
	            	'id':'1'
            },
            {
	            	'name':'高新技术产业',
	            'id':'2'
            },
            {
	            'name':'科技小巨人企业',
	            'id':'3'
            }
            ,{
            		'name':'农业科技小巨人企业',
            		'id':'4'
            	}],
            isshowpdf: true,
            auditstatus:'',
            ruleForm:{
            		id:'',
            	    entname:'',
            	    sociacreditcode:'',
                area:'',
                entAddress:'',
                fkEntattributeTypeArray:'',
                type:'',
                cer_code:'',
                statu:false,
                organizationCode:'',
                legalPersonName:'',
                legalPersontel:'',
                entperEmail:'',
                bankname:'',
                bankaccount:'',
                accountName:''
            },
            upImgItem : {}
        }
    },
    components: {
        upload,
        VDistpicker
    },
    watch:{
    	
    },
    created(){

    },
    methods : {
   		handleAvatarSuccess( res,file){
   			console(res)
   		},
   		beforeAvatarUpload(){
   			
   		},
        upimg(item,fileImg){
        		this.s = true,
            this.upImgItem = {
                item,
                fileImg
            }
            if( fileImg.type === 'image/jpeg'|| fileImg.type === 'image/jpg' || fileImg.type === 'image/png'){
            		 this.chekcimg = true
            }else{
            		this.chekcimg = false
            }
        },
        checkinlist(){
        },
        async qiyeInfoDetail(){
        		var res = await qiyeInfoDetail_T();
        		console.log(res);
        		this.ruleForm = {
        			"id": "",
			    "userType": 0,
			    "sociacreditcode":'',
			    "entname": "",
			    "area": "",
			    "entAddress": "",
			    "fkEntattributeTypeArray": [],
			    "organizationCode": "",
			    "legalPersonName": "",
			    "legalPersontel": "",
			    "entperEmail": "",
			    "bankname": "",
			    "bankaccount": "",
			    "accountName": "",
			    "auditstatus": "",
			    "auditMessage": ""
        		}
        		if(res.body.data.id){
        			this.id = res.body.data.id;
        			console.log(res.body.data.id)
				console.log(res.body.data)
          		this.fkEntattributeTypeArray = res.body.data.fkEntattributeTypeArray;
        			this.imgurl = res.body.data.businessImgurl;
        			console.log(this.imgurl)
        			this.ruleForm = res.body.data;
        			var typecode = res.body.data.auditstatus;
        			if(typecode == -1){
        				this.auditstatus = "未审核";
        				this.flag = false;
        			}
				if(typecode == 0){
					this.auditstatus = "区县审核中"
					this.flag = false;
					this.disabled = true;
					}
				if(typecode == 1){
					this.auditstatus = "审核通过";
					this.disabled = true;
					this.flag = false;
				}
				if(typecode == 2){
					this.yuanyin = true;
					this.auditMessage = res.body.data.comment;
					this.auditstatus = "审核不通过";
					this.flag = true;
					this.disabled = false;
				}
				if(typecode == 3){
					this.yuanyin = true;
					this.auditMessage = res.body.data.comment;
					this.auditstatus = "已驳回";
					this.flag = true;
					this.disabled = false;
				}
        		}else{
        			var typecode = res.body.data.auditstatus;
        			var entname = res.body.data.entname;
        			this.ruleForm.entname = entname;
        			if(typecode == -1){
        				this.auditstatus = "未审核";
        				this.flag = true;
        			}
				if(typecode == 0){this.auditstatus = "区县审核中"}
				if(typecode == 1){this.auditstatus = "审核通过"}
				if(typecode == 2){this.auditstatus = "审核不通过"}
				if(typecode == 3){this.auditstatus = "已驳回"}
        		}
        },
        //提交申请
        async  submits(){
            		if(this.chekcimg){
            			this.upLoadData();
            		}else{
            			this.$message.error("上传图片仅支持JPG/JPEG/png");
            		}
        },
        async upLoadData(){
//		         const loading = this.$loading({
//		            lock: true,
//		            text: 'Loading',
//		            spinner: 'el-icon-loading',
//		            background: 'rgba(0, 0, 0, 0.7)'
//		         });
        			 if(this.ruleForm.entname.trim() == '') {
			             util.errortip('单位名称不能为空!');
			             return;
			        }
	              if(this.ruleForm.sociacreditcode.trim() == '' || this.ruleForm.sociacreditcode.length != 18 ) {
	                  util.errortip('社会统一代码格式仅支持18位数字!');
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
	               if(this.fkEntattributeTypeArray.length == 0) {
	                  util.errortip('企业类型不能为空!');
	                  return;
	              }
	              if(this.ruleForm.organizationCode.trim() == '') {
	                  util.errortip('证书编号不能为空!');
	                  return;
	              }
	                if(this.ruleForm.legalPersonName.trim() == '') {
	                  util.errortip('企业联系人不能为空!');
	                  return;
	              }
	              var  regph = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	              if(!regph.test(this.ruleForm.legalPersontel)){
	              	 util.errortip('请输入正确格式的企业联系人电话!');
	                  return;
	              }
	              if(this.ruleForm.legalPersontel.trim() == '' || this.ruleForm.legalPersontel.length !=11) {
	                  util.errortip('企业联系人电话仅支持11位数字!');
	                  return;
	              }
	              var regeM = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	               if(!regeM.test(this.ruleForm.entperEmail)) {
	                  util.errortip('企业联系人邮箱格式不对!');
	                  return;
	              }
            		var obj = {};
            	    //上传图片
            	    if(this.s){
            	    		var fromData = new FormData();
	                fromData.append("file",this.upImgItem.item);
	                
	                fromData.append("fileName",this.upImgItem.fileImg.name);
	                var imgurl = await post_uploadImg(fromData);
	                console.log(fromData)
	                obj.businessImgurl = imgurl.body.data.fileUrl;
            	    }else{
            	    		util.errortip('请上传营业执照图片!');
	                 return;
            	    }
                //选取企业
                if(this.auditstatus==-1){
                		obj.id = '';
                }else{
                		obj.id = this.id;
                }
				console.log(this.id)
				obj.userType = this.userType;
				
				obj.entname = this.ruleForm.entname;
				obj.area = this.ruleForm.area;
				obj.fkEntattributeTypeArray = this.fkEntattributeTypeArray; 
				console.log(obj.fkEntattributeType)
				obj.sociacreditcode = this.ruleForm.sociacreditcode;
				obj.entAddress = this.ruleForm.entAddress;
				obj.organizationCode = this.ruleForm.organizationCode;
				obj.legalPersonName = this.ruleForm.legalPersonName;
				obj.legalPersontel = this.ruleForm.legalPersontel
				obj.entperEmail = this.ruleForm.entperEmail;
				obj.bankname = this.ruleForm.bankname;
				obj.bankaccount = this.ruleForm.bankaccount;
				obj.accountName = this.ruleForm.accountName;
				console.log(obj)
                var result = await post_management_b_Message(obj);
                console.log(result)
                if(result.body.code==0){
//	                	 setTimeout(() => {
//			          loading.close();
//			        }, 2000);
                		console.log(result)
                		util.successtip("提交成功");
                		this.$router.push({'name':'messagemanagement_b'});
                }else{
//              	 setTimeout(() => {
//		          loading.close();
//		         }, 2000);
                		this.$message.error(result.body.errorDesc);
                }
        }
    },
    mounted(){
		this.qiyeInfoDetail();
		var x =  util.handleCookieGet('userType')
        console.log(x.userType)
        this.userType = x.userType;
    }
}

</script>

<style lang="scss" scoped>
    .unreview_b{
        height:100%;
        min-height:76rem;
        position: relative;
        .unreview_b_content{
            width: 45rem;
            height:76.55rem;
            position: absolute;
            top:50%;
            left: 50%;
            margin-top:-38.3rem;
            margin-left:-22.25rem;
            background: #ffffff;
            .title{
                height:2.95rem;
                border-top:4px solid $bordercolor;
                border-bottom:1px solid $bordercolor;
                padding-left:1.15rem;
                @include font(0.8rem,2.95rem);
            }
            .review_status{
                 /*position: absolute;
                 left:2.5rem;
                 top:4.5rem;*/
                margin: 1.5rem 0 0  2.5rem;
                 @include wh(40rem,4.1rem);
                 line-height:4.1rem;
                 background: #F3E4A9;
                 .status_title{
                     margin-left:1.5rem;
                     /*height: 5rem;*/
                 }
                 .status_content{
                    color:red;
                 }
            }
            //公司基本信息
            .company_base{
                 position: absolute;
                 left:2.5rem;
                 top:10.1rem;
            }
            .unreview_b_line_o{
                 position: absolute;
                 left:2.5rem;
                 top:11.85rem;
                 @include wh(40rem,1px);
                 background:#E7EAEC;
            }
            .unreview_b_company_base_ruleForm{
                 position: absolute;
                 left:8.65rem;
                 top:13.4rem;
                 .avatar-uploader{
                     border:1px solid #000000;
                    @include wh(5.6rem,5.6px);
                 }
                 #photo{
                 	margin-top: 70px !important;
                 }
                 #kexiao{
                 	margin-top: 110px !important;
                 }

            }
            // 法定代表人信息
            .legal_person{
                 position: absolute;
                 left:2.5rem;
                 top:42.8rem;
            }
            .unreview_b_line_t{
                 position: absolute;
                 left:2.5rem;
                 top:44.55rem;
                 @include wh(40rem,1px);
                 background:#E7EAEC;
            }
            .unreview_b_Legal_Person_ruleForm{
                 position: absolute;
                 left:8.65rem;
                 top:45.7rem;
            }
            // 企业人联系信息
            .company_Contacts{
                 position: absolute;
                 left:2.5rem;
                 top:43.3rem;
            }
            .unreview_b_line_th{
                 position: absolute;
                 left:2.5rem;
                 top:45.05rem;
                 @include wh(40rem,1px);
                 background:#E7EAEC;
            }
            .unreview_b__contacts_ruleForm{
                 position: absolute;
                 left:8.65rem;
                 top:48.2rem;
            }
            // 开户行信息
            .open_bank{
                position: absolute;
                left:2.5rem;
                top:58.3rem;
            }
            .unreview_b_line_fo{
                position: absolute;
                left:2.5rem;
                top:60.05rem;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .unreview_b_openkank_ruleForm{
                 position: absolute;
                 left:8.65rem;
                 top:62.2rem;
            }
            .unreview_b_back{
                position: absolute;
                left:18.6rem;
                top:73.3rem;
                @include wh(4.4rem,1.75rem);
                font-size:0.7rem;
                padding:10px 20px;
            }
            .alter_message{
                position: absolute;
                left:23.75rem;
                top:73.3rem;
                @include wh(4.4rem,1.75rem);
                color:#ffffff;
                background:#399CFF;
                font-size:0.7rem;
                padding:10px 20px;
            }
        }
    }
</style>
