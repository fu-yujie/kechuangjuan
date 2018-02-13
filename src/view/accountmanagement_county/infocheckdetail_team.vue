<template>
    <div class="unreview">
        <div class="reject_content">
            <div class="title">企业/团队信息审核
                <strong>/查看详情</strong></div>
            <!--<div class="review_status">
                <div class="status_title">信息审核状态: <span class="status_content">未审核</span></div>
            </div>-->
            <div class="company_base">团队基本信息</div>
            <div class="reject_line_o"></div>
            <el-form class="reject_company_base_ruleForm inputsizeout2" :model="ruleForm" status-icon  ref="ruleForm" label-width="10rem">
                <el-form-item prop="caseno" label="账号类型">{{ruleForm.enttype | qiyestatus}}</el-form-item>
                <el-form-item prop="name" label="团队名称" >
                    <el-input class="inputsize2" placeholder="" v-model="ruleForm.entname" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="name" label="入驻单位" >
                    <el-input class="inputsize2" placeholder="" v-model="ruleForm.stayInUnit" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="办公地址所属区域">
                    <el-input class="inputsize2" placeholder="" :value="ruleForm.area | areastaus" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="办公地址">
                    <el-input class="inputsize2" placeholder="请输入具体地址" type="text" v-model="ruleForm.entAddress" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item style="" prop="profession" label="入驻众创空间/孵化器合同证明">
                    <!--<el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>-->
                    <div class="showpdf" @click="dialogTableVisible1 = true">点击查看入驻众创空间/孵化器合同证明</div>
                    <div class="showpdf" @click="showpdf">通过浏览器查看PDF</div>
                </el-form-item>
            </el-form>

            <div class="legal_person">团队负责人信息</div>
            <div class="reject_line_t"></div>
            <el-form class="reject_Legal_Person_ruleForm inputsizeout2" :model="ruleForm" status-icon  ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="团队负责人信息姓名">
                    <el-input class="inputsize2" placeholder="" v-model="ruleForm.legalPersonName" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="团队负责人信息电话">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.legalPersontel" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="团队负责人信息邮箱">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.entperEmail" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item style="height:114px" prop="phone" label="团队负责人身份证明照片">
                    <!--<el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>-->
                    <img :src="ruleForm.legalPersonIdcardImg" alt="">
                </el-form-item>
            </el-form>
            <div class="company_Contacts">团队成员信息</div>
            <div class="reject_line_th"></div>
            <el-form class="reject__contacts_ruleForm inputsizeout2" :model="ruleForm" status-icon  ref="ruleForm" label-width="10rem">
                <!-- <div>111</div>-->
                <ul>
                    <li v-for="item in ruleForm.tuanduixinxi">
                        <el-form-item prop="name" label="团队成员姓名">
                            <el-input class="inputsize2" placeholder="" v-model="item.name" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="cardno" label="团队成员身份证明照片" style="height:114px;">

                            <img :src="item.idcardImg" alt="">

                        </el-form-item>
                    </li>
                </ul>

                <!--<el-form-item prop="name" label="团队成员信息">
                    <el-input class="inputsize2" placeholder="张三" v-model="ruleForm.company" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="团队成员身份证明照片" style="height:114px;">
                   &lt;!&ndash; <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>&ndash;&gt;
                    <upload @upimg="" style="display:inline-block;"></upload>
                </el-form-item>-->
            </el-form>

            <div class="open_bank">开户银行信息（非必填）</div>
            <div class="reject_line_fo"></div>
            <el-form class="reject_openkank_ruleForm inputsizeout2" :model="ruleForm" status-icon
                     ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="开户银行姓名">
                    <el-input class="inputsize2" placeholder="" v-model="ruleForm.bankname" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="银行账号">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.bankaccount" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="开户名">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.accountName" :disabled="true"></el-input>
                </el-form-item>
                <el-button class="no_pass_bus_back" @click="returnClick">返回</el-button>

            </el-form>
        </div>
        <el-dialog title="入驻众创空间/孵化器合同证明" :visible.sync="dialogTableVisible1">
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
    import pdfshower from 'vue-pdf-shower';
    import util from 'src/util/util.js'
    import citys from 'static/js/citydata.js'
    import upload from '../../components/uploadImg'
    import {post_uploadImg } from '../../model/api.js'
    import {updateEnterStatus,enterOne} from "src/model/api";
    /* import {enterOne} from 'src/model/api'*/
    export default {
        name: 'reject',
        props : [],
        data () {
            return {
                dialogTableVisible1: false,
                dialogFormVisible1: false,
                comment:'',
                isActive:false,
                province:citys,
                citys:[],
                pdfurls:'',
                // 缩放 默认为1
                scale: 1.2,
                ruleForm:{
                    company:'',
                    code:'',
                    area:'',
                    address:'',
                    type:'',
                    cer_code:'',
                    statu:false
                }
            }
        },
        components: {
            upload,
            pdfshower
        },
        watch:{

        },
        created(){
            var _this=this;
            var obj={};
            obj.id=_this.$route.params.id;
            obj.enttype=_this.$route.params.enttype;
            obj.polcode=_this.$route.params.polcode;
            enterOne(obj).then(function(res){
                console.log(777);
                _this.ruleForm=res.body.data;
                console.log(res);
                _this.pdfurls=res.body.data.stayInUnitContractImg;
            })
        },
        methods : {
            onErr(err) {
                console.log('pdf加载失败，请重试');
                console.log('错误信息：', err);
            },
            showpdf(){
                window.open(this.pdfurls)
            },
            returnClick(){
                window.history.go(-1);
            },
            //省份选择
            selprovince(info){
                this.citys = info.children;
                this.ruleForm.provincer = info.text;
                this.ruleForm.city = info.children[0].text;
                console.log(this.ruleForm)
            },
            commitc(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            noPassClick(){
                $('.reason').addClass('isActive')
            },
            passClick(){
                var obj={};
                var _this=this;
                obj.id=this.$route.params.id;
                obj.auditstatus=1;
                updateEnterStatus(obj).then(function(res){
                    if(res.body.code==0){
                        _this.$router.push('/accountmanagement_county')
                        util.alertip('通过审核');
                    }
                })
            },
            cancelClick(){
                $('.reason').removeClass('isActive')
            },
            sureClick(){
                var obj={};
                var _this=this;
                obj.id=this.$route.params.id;
                obj.auditstatus=2;
                obj.comment=this.comment;
                updateEnterStatus(obj).then(function(res){
                    if(res.body.code==0){
                        _this.$router.push('/accountmanagement_county')
                        util.alertip('通过审核');
                    }
                })
            }
        },
        mounted(){

        }
    }

</script>

<style lang="scss" scoped>
    .showpdf{
        cursor: pointer;
        color:#399CFF
    }
    img{
        height:114px;
        width:114px;
    }
    .reason{
        display:none;
    }
    .isActive{
        display:block;
    }
    .unreview{
        height:100%;
        min-height:94.65rem;
        position: relative;
        .reject_content{
            width: 45rem;
            height:94.65rem;
            position: absolute;
            top:50%;
            left: 50%;
            margin-top:-47.3rem;
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
            //公司基本信息
            .company_base{
                /*position: absolute;
                left:2.5rem;
                top:4.1rem;*/
                padding-left:30px;
                margin-top:20px;
            }
            .reject_line_o{
                /* position: absolute;
                 left:2.5rem;
                 top:5.85rem;*/
                /* padding-left:30px;*/
                margin-top:20px;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .reject_company_base_ruleForm{
                /* position: absolute;
                 left:9.5rem;
                 top:7.4rem;*/
                /*margin-top:20px;*/
                width:30rem;
                margin:20px auto
            }
            // 法定代表人信息
            .legal_person{
                /* position: absolute;
                 left:2.5rem;
                 top:27.35rem;*/
                padding-left:30px;

            }
            .reject_line_t{
                /* position: absolute;
                 left:2.5rem;
                 top:29.1rem;*/
                width:100%;
                height:1px;
                margin-left:30px;
                margin-top:20px;
                /*@include wh(40rem,1px);*/
                background:#E7EAEC;
            }
            .reject_Legal_Person_ruleForm{
                /*position: absolute;
                left:9.5rem;
                top:30.25rem;*/
                width:30rem;
                margin:20px auto
            }
            // 企业人联系信息
            .company_Contacts{
                /*position: absolute;
                left:2.5rem;
                top:44.3rem;*/
                margin-top:20px;
                padding-left:30px;
            }
            .reject_line_th{
                /*position: absolute;
                left:2.5rem;
                top:46.05rem;*/
                margin-top:20px;
                margin-left:30px;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .reject__contacts_ruleForm{
                /*position: absolute;
                left:9.5rem;
                top:47.2rem;*/
                /* margin-top:20px;*/
                margin:20px auto;
                width:30rem
            }
            .unreview_t_back{
                position: absolute;
                left:18.6rem;
                top:57.4rem;
                @include wh(4.4rem,1.75rem);
                font-size:0.7rem;
                padding:10px 20px;
            }
            .unreview_t_alter_message{
                position: absolute;
                left:23.75rem;
                top:67.3rem;
                @include wh(4.4rem,1.75rem);
                color:#ffffff;
                background:#399CFF;
                font-size:0.7rem;
                padding:10px 20px;
            }
            // 开户行信息
            .open_bank{
                /*position: absolute;
                left:2.5rem;
                top:67.4rem;*/
                padding-left:30px;
            }
            .reject_line_fo{
                /*position: absolute;
                left:2.5rem;
                top:69.15rem;*/
                margin-left:30px;
                margin-top:20px;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .reject_openkank_ruleForm{
                /* position: absolute;
                 left:9.5rem;
                 top:70.3rem;*/
                width:30rem;
                margin:20px auto
            }
        }
    }
</style>
