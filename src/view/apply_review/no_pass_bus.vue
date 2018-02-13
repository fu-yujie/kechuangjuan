<template>
    <div class="no_pass_bus" v-loading="loading">
        <div class="no_pass_bus_content">
            <div class="title">审核管理/申领审核</div>
            <el-form class="no_pass_bus_company_base_ruleForm inputsizeout2" :model="ruleForm" status-icon  ref="ruleForm" label-width="10rem">
                <el-form-item prop="caseno" label="账号类型"><div>{{ruleForm.enttype |qiyestatus}}</div></el-form-item>
                <el-form-item prop="name" label="单位名称" ><div>{{ruleForm.entname}}</div></el-form-item>
                 <el-form-item prop="name" label="创新服务类型" >
                     <div>{{ruleForm.servicetypeCode | changeservicetypeCode}}</div>
                 <!--  <el-input class="inputsize2" placeholder="" v-model="ruleForm.servicetypeCode" ></el-input>-->
                </el-form-item>
                <el-form-item prop="cardno" label="创新服务机构地区">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.fkCountydistrict" ></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="创新服务机构">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.serviceEnterName" ></el-input>
                </el-form-item>
                <el-form-item prop="companyname" label="与创新机构合同名称">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.contractName" ></el-input>
                </el-form-item>
                  <el-form-item prop="profession" label="与创新机构合作的合同的PDF">
                      <div class="showpdf"  @click="dialogTableVisible = true">点击查看PDF</div>
                      <div class="showpdf" @click="showpdf">通过浏览器查看PDF</div>
                      <!--<a :href="pdfurls">点击下载PDF</a>-->
                </el-form-item>

                <el-form-item prop="profession" label="合同金额">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.contractValue" >元</el-input>
                </el-form-item>
                <el-form-item prop="profession" label="创新券申领金额">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.appliMoney" >元</el-input>
                </el-form-item>
                <el-button class="no_pass_bus_back" @click="returnBack">返回</el-button>
	            <el-button class="no_pass_bus_alter_message" @click="noPassClick">不通过</el-button>
	            <el-button class="no_pass_bus_pass" @click="passClick">通过</el-button>
                <div class="reason" :class="{isActive:isActive}">
	            <el-form-item prop="profession" label="请输入审核不通过的理由" class="textarea_nopass">
	             	<el-input type="textarea" v-model="remark" classs="area_box"></el-input>
                </el-form-item>
                <el-button class="no_pass_bus_cancel" @click="cancelClick">取消</el-button>
	            <el-button class="no_pass_bus_sure" @click="sureClick">确定</el-button>
                </div>
            </el-form>

        </div>
        <el-dialog title="与创新机构合作的合同的PDF" :visible.sync="dialogTableVisible">
            <div class="exp_pic">
                <pdfshower
                    :pdfurl="pdfurls"
                    :scale="scale"
                    @onErr="onErr"
                ></pdfshower>
                <!-- <img v-if="ruleForm.tupian.length>0" :src="attachment" alt="">-->
                <!--<pdf src="http://10.6.80.62:9088/innovate-api/upload/7e5571c2-f732-4ea5-a403-9617e7652ea7.pdf"></pdf>-->
            </div>
        </el-dialog>
    </div>
</template>

<script>
    /*import pdf from 'vue-pdf'*/
import util from 'src/util/util.js'
import citys from 'static/js/citydata.js';
import {innovateOne,updateInnovateStatus} from "src/model/api";
    import pdfshower from 'vue-pdf-shower';
export default {
    name: 'no_pass_bus',
    props : [],
    data () {
        return {
            dialogTableVisible: false,
            dialogFormVisible: false,
            remark:'',
            userType:'',
            isActive:false,
            loading:false,
            province:citys,
            citys:[],
            // 所查看的pdf url
            pdfurls:'',
            // 缩放 默认为1
            scale: 1.2,
            attachment:'',
            ruleForm:{
                /*company:'',
                code:'',
                area:'',
                address:'',
                type:'',
                cer_code:'',
                statu:false*/
            }
        }
    },
    components: {
        pdfshower
    },
    watch:{

    },
    created(){
        var _this=this;
        let a=util.handleCookieGet('userType');
        _this.userType=a.userType
    },
    methods : {
        // 加载失败的callback
        onErr(err) {
            console.log('pdf加载失败，请重试');
            console.log('错误信息：', err);
        },
        showpdf(){
            window.open(this.pdfurls)
        },
       /* downLoadPdf(){
            window.location.href = this.pdfurls;
        },*/
        passClick(){
            var _this=this;
            var obj={};
            if(this.userType==3){
                obj.auditstatus=3;
            }else if(this.userType==4){
                obj.auditstatus=5;
            }
            obj.id=this.$route.params.id;
            obj.money=_this.ruleForm.appliMoney;
            obj.enterpriseId=_this.ruleForm.enterpriseId
            /*obj.auditstatus=1;*/
            updateInnovateStatus(obj).then(function(res){
                console.log(666);
                console.log(res);
                if(res.body.code==0){
                    _this.$message({
                        message: '已审核',
                        type: 'success'
                    });
                    if(_this.userType==3){
                        _this.$router.push({'name':'apply_review_quxian'});
                    }else if(_this.userType==4){
                        _this.$router.push({'name':'apply_review'});
                    }

                }else{
                    _this.$message({
                        message: res.body.errorDesc,
                        type: 'warning'
                    });
                }
            })
        },
        sureClick(){
            var _this=this;
            var obj={};
            obj.id=this.$route.params.id;
            obj.remark=this.remark;
            if(this.userType==3){
                obj.auditstatus=2;
            }else if(this.userType==4){
                obj.auditstatus=6;
            }
           /* obj.auditstatus=2;*/
            obj.money=_this.ruleForm.appliMoney;
            obj.enterpriseId=_this.ruleForm.id;
            updateInnovateStatus(obj).then(function(res) {
                console.log(666);
                console.log(res);
                if (res.body.code == 0) {

                        _this.$message({
                            message: '已审核',
                            type: 'success'
                        });
                    if(_this.userType==3){
                        _this.$router.push({'name':'apply_review_quxian'});
                    }else if(_this.userType==4){
                        _this.$router.push({'name':'apply_review'});
                    }

                }else{
                    _this.$message({
                        message: res.body.errorDesc,
                        type: 'warning'
                    });
                }
            })

        },
        cancelClick(){
            this.isActive=false;
        },

        noPassClick(){
            this.isActive=true;
        },
        returnBack(){
            window.history.go(-1);
        }

        //省份选择
        // selprovince(info){
        //     this.citys = info.children;
        //     this.ruleForm.provincer = info.text;
        //     this.ruleForm.city = info.children[0].text;
        //     console.log(this.ruleForm)
        // },
        // commitc(formName){
        //     this.$refs[formName].validate((valid) => {
        //         if (valid) {
        //             alert('submit!');
        //         } else {
        //             console.log('error submit!!');
        //             return false;
        //         }
        //     });
        // }
    },
    mounted(){
        var _this=this;
        var obj={};
        obj.id=_this.$route.params.id;
        obj.enttype=_this.$route.params.enttype;
        innovateOne(obj).then(function(res){
            console.log(333);
            console.log(res);
            _this.ruleForm=res.body.data;
            _this.pdfurls=res.body.data.tupian[0].attachment
        })
    }
}

</script>

<style lang="scss" scoped>
    .showpdf{
        cursor: pointer;
        color:#399CFF
    }
    .reason{
        display:none;
    }
    .isActive{
        display:block;
    }
    .no_pass_bus{
        height:100%;
        min-height:55.05rem;
        position: relative;
        .no_pass_bus_content{
            width: 45rem;
            height:55.05rem;
            position: absolute;
            top:50%;
            left: 50%;
            margin-top:-27.3rem;
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
                 position: absolute;
                 left:2.5rem;
                 top:4.5rem;
                 @include wh(40rem,4.1rem);
                 line-height:4.1rem;
                 background: #F3E4A9;
                 .status_title{
                     margin-left:1.5rem;
                 }
                 .status_content{
                    color:red;
                 }

            }
            .company_base{
                 position: absolute;
                 left:2.5rem;
                 top:10.1rem;
            }
            .no_pass_bus_line_o{
                 position: absolute;
                 left:2.5rem;
                 top:11.85rem;
                 @include wh(40rem,1px);
                 background:#E7EAEC;
            }
            .no_pass_bus_company_base_ruleForm{
                 position: absolute;
                 left:9.5rem;
                 top:6.25rem;
                 .exp_pic{
                 	width: 112px;
                 	height: 112px;
                 	border: 1px solid #E7E7E7;
                 }
                 .note{
                 	color:#ED5566;
                 	font-size: 14px;
                 	position: absolute;
                	    left:9.9rem;
                    top:21.9rem;

                 }
                 .no_pass_bus_back{
                 	position: absolute;
                	    left:9.9rem;
                    top:24.9rem;
                    font-size: 14px;
                 }
                 .no_pass_bus_alter_message{
                 	position: absolute;
                	    left:13.9rem;
                    top:24.9rem;
                    font-size: 14px;
                 }
                 .no_pass_bus_pass{
                 	position: absolute;
                	    left:19.1rem;
                    top:24.9rem;
                    font-size: 14px;
                    background: #399CFF;
                    color: #ffffff;
                 }
                 .textarea_nopass{
                 	position: absolute;
                	    left:0rem;
                    top:27.9rem;

                 }
                 .el-textarea{
                 	height: 6.4rem;
                 }
                 .no_pass_bus_cancel{
                 	position: absolute;
                	    left:9.9rem;
                    top:30.9rem;
                     margin-right:15px;
                 }
                 .no_pass_bus_sure{
                 	position: absolute;
                	    left:14.6rem;
                    top:30.9rem;
                    background: #399CFF;
                    color: #ffffff;
                 }


            }
        }
    }
</style>
