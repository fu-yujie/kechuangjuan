<template>
    <div class="reject">
        <div class="reject_content">
            <div class="title">企业/团队信息审核
            <strong>/查看详情</strong></div>
            <div class="review_status">
                <div class="status_title">审核状态: <span class="status_content">{{ruleForm.auditstatus | changeMessageStatus}}</span></div>
            </div>
            <div class="company_base">企业基本信息</div>
            <div class="reject_line_o"></div>
            <el-form class="reject_company_base_ruleForm inputsizeout2" :model="ruleForm" status-icon
                     ref="ruleForm" label-width="10rem">
                <el-form-item prop="enttype" label="账号类型"><div>{{ruleForm.enttype | qiyestatus}}</div></el-form-item>
                <el-form-item prop="name" label="单位名称" >
                    <el-input class="inputsize2" placeholder="" v-model="ruleForm.entname" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="社会信用统一代码">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.sociacreditcode" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="注册地址所属区域">
                    <el-input class="inputsize2" placeholder="" type="text" :value="ruleForm.area | areastaus"  :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="companyname" label="注册地址">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.entAddress" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="profession" label="企业类型">
                    <div style="display:inline-block" v-for="item in ruleForm.fkEntattributeTypeArray">
                        <span>{{item | fkEntattributeType}}</span>
                        ,
                    </div>
                    <!--<el-input class="inputsize2" placeholder="" type="text" :value="ruleForm.fkEntattributeType | fkEntattributeType" :disabled="true"></el-input>-->
                </el-form-item>

                <el-form-item style="height:114px;position:relative" prop="profession" label="营业执照照片">
                    <img class="businesimg"  @click="dialogTableVisible = true" @mouseenter="bottomshow" @mouseout="bottomhide" style="height:114px;width:114px;" :src="ruleForm.businessImgurl " alt="">
                    <!--<div class="clickeng" :class="{hovershow:isshow}" style="">
                        <img @click="isdialog" class="bottom" style="width:22px;height:15px;" src="../../../static/img/icon_eye.png" alt="">
                    </div>-->
                </el-form-item>
                <el-form-item prop="profession" label="证书编号">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.organizationCode" :disabled="true"></el-input>
                </el-form-item>
            </el-form>


            <div class="company_Contacts">企业联系人信息</div>
            <div class="reject_line_th"></div>
            <el-form class="reject__contacts_ruleForm inputsizeout2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="企业联系人姓名">
                    <el-input class="inputsize2" placeholder="" v-model="ruleForm.legalPersonName " :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="企业联系人手机号">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.legalPersontel" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="企业联系人邮箱">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.entperEmail" :disabled="true"></el-input>
                </el-form-item>
            </el-form>

            <div class="open_bank">开户银行信息（非必填）</div>
            <div class="reject_line_fo"></div>
            <el-form style="text-align:center" class="reject_openkank_ruleForm inputsizeout2" :model="ruleForm" status-icon  ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="开户银行">
                    <el-input class="inputsize2" placeholder="" v-model="ruleForm.bankname" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="银行账号">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.bankaccount" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="开户名">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.accountName" :disabled="true"></el-input>
                </el-form-item>
                <div class="return" @click="returnClick">返回</div>
            </el-form>

        </div>
        <el-dialog title="营业执照照片" :visible.sync="dialogTableVisible">
            <img class="businesimg"  :src="ruleForm.businessImgurl " alt="">
        </el-dialog>
    </div>
</template>

<script>
    import util from 'src/util/util.js'
    import citys from 'static/js/citydata.js'
    import {enterOne} from 'src/model/api'
    import upload from '../../components/uploadImg'
    import {post_uploadImg } from '../../model/api.js'
    export default {
        name: 'reject',
        props : [],
        data () {
            return {
                dialogTableVisible: false,
                dialogFormVisible: false,
                isshow:false,
                rules:{},
                province:citys,
                citys:[],
                ruleForm:{

                }
            }
        },
        components: {
upload
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
                console.log(res)
            })
        },
        methods : {
            returnClick(){
                window.history.go(-1);
            },
            bottomshow(){
                this.isshow=true
            },
            bottomhide(){
                this.isshow=false
            },
            isdialog(){

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

        }
    }

</script>

<style lang="scss" scoped>
    .clickeng{
        height:30px;width:114px;background:rgba(0,0,0,0.50);
        position:absolute;
        bottom:-80px;
        display:none;
    }
    .hovershow{
        display:block
    }
    .return{
        cursor: pointer;
        width:88px;
        height:35px;
        line-height:35px;
        border:1px solid #E5E6E7;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
    }
    .reject{
        height:100%;
        min-height:76rem;
        position: relative;
        .reject_content{
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
                position: absolute;
                left:2.5rem;
                top:10.1rem;
            }
            .reject_line_o{
                position: absolute;
                left:2.5rem;
                top:11.85rem;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .reject_company_base_ruleForm{
                position: absolute;
                left:9.5rem;
                top:13.4rem;

            }
            // 法定代表人信息
            .legal_person{
                position: absolute;
                left:2.5rem;
                top:38.3rem;
            }
            .reject_line_t{
                position: absolute;
                left:2.5rem;
                top:40.05rem;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .reject_Legal_Person_ruleForm{
                position: absolute;
                left:9.5rem;
                top:41.2rem;
            }
            // 企业人联系信息
            .company_Contacts{
                position: absolute;
                left:2.5rem;
                top:39.3rem;
            }
            .reject_line_th{
                position: absolute;
                left:2.5rem;
                top:41.05rem;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .reject__contacts_ruleForm{
                position: absolute;
                left:9.5rem;
                top:42.2rem;
            }
            // 开户行信息
            .open_bank{
                position: absolute;
                left:2.5rem;
                top:51.3rem;
            }
            .reject_line_fo{
                position: absolute;
                left:2.5rem;
                top:53.05rem;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .reject_openkank_ruleForm{
                position: absolute;
                left:9.5rem;
                top:54.2rem;
            }
        }
    }
</style>
