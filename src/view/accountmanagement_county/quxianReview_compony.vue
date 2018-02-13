<template>
    <div class="unreview">
        <div class="reject_content">
            <div class="title">审核管理/团队信息管理</div>
            <!--<div class="review_status">
                <div class="status_title">信息审核状态: <span class="status_content">未审核</span></div>
            </div>-->
            <div class="company_base">企业基本信息</div>
            <div class="reject_line_o"></div>
            <el-form class="reject_company_base_ruleForm inputsizeout2" :model="ruleForm" status-icon  ref="ruleForm" label-width="10rem">
                <el-form-item prop="caseno" label="账号类型">{{ruleForm.enttype | qiyestatus}}</el-form-item>
                <el-form-item prop="name" label="单位名称" >
                    <el-input class="inputsize2" placeholder="" v-model="ruleForm.entname" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="社会信用统一代码">
                    <el-input class="inputsize2" placeholder="" v-model="ruleForm.sociacreditcode" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="注册地址所属区域">
                    <el-input class="inputsize2" placeholder="" :value="ruleForm.area | areastaus" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="注册地址">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.entAddress" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="profession" label="企业类型" style="height:56px">
                    <div style="display:inline-block" v-for="item in ruleForm.fkEntattributeTypeArray">
                        <span>{{item | fkEntattributeType}}</span>
                        ,
                    </div>
                    <!--<el-input class="inputsize2" placeholder="" type="textarea" :value="ruleForm.fkEntattributeType | fkEntattributeType" :disabled="true"></el-input>-->
                </el-form-item>
                <el-form-item prop="profession" label="营业执照照片" style="height:114px;width:114px;">
                    <img @click="dialogTableVisible = true" style="height:114px;width:114px;" :src="ruleForm.businessImgurl" alt="">
                </el-form-item>
                <el-form-item prop="phone" label="证书编号">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.organizationCode" :disabled="true"></el-input>
                </el-form-item>
            </el-form>

            <!--<div class="legal_person">法定代表人信息</div>
            <div class="reject_line_t"></div>
            <el-form class="reject_Legal_Person_ruleForm inputsizeout2" :model="ruleForm" status-icon  ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="法定代表人姓名">
                    <el-input class="inputsize2" placeholder="刘丽娜" v-model="ruleForm.company" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="法定代表人联系电话">
                    <el-input class="inputsize2" placeholder="18201492987" type="text" v-model="ruleForm.code" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="法定代表人邮箱">
                    <el-input class="inputsize2" placeholder="1227155578@qq.com" type="text" v-model="ruleForm.area" :disabled="true"></el-input>
                </el-form-item>

            </el-form>-->
            <div class="company_Contacts">企业联系人信息</div>
            <div class="reject_line_th"></div>
            <el-form class="reject__contacts_ruleForm inputsizeout2" :model="ruleForm" status-icon ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="企业联系人">
                    <el-input class="inputsize2" placeholder="张三" v-model="ruleForm.legalPersonName" :disabled="true"></el-input>
                </el-form-item>

                <el-form-item prop="name" label="企业联系人手机号">
                    <el-input class="inputsize2" placeholder="" v-model="ruleForm.legalPersontel" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="name" label="企业联系人邮箱">
                    <el-input class="inputsize2" placeholder="" v-model="ruleForm.entperEmail" :disabled="true"></el-input>
                </el-form-item>
            </el-form>

            <div class="open_bank">开户银行信息</div>
            <div class="reject_line_fo"></div>
            <el-form class="reject_openkank_ruleForm inputsizeout2" :model="ruleForm" status-icon  ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="开户银行名称">
                    <el-input class="inputsize2" placeholder="" v-model="ruleForm.bankname" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="银行账号">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.bankaccount" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="开户名">
                    <el-input class="inputsize2" placeholder="" type="text" v-model="ruleForm.accountName" :disabled="true"></el-input>
                </el-form-item>
                <div>
                    <div style="text-align:center;margin-bottom:20px;">
                <el-button class="no_pass_bus_back">返回</el-button>
                <el-button class="no_pass_bus_alter_message" @click="noPassClick">不通过</el-button>
                <el-button class="no_pass_bus_pass" @click="passClick">通过</el-button>
                    </div>
                <div class="reason" :class="{isActive:isActive}">
                    <el-form-item style="margin-bottom:30px" prop="profession" label="请输入审核不通过的理由" class="textarea_nopass">
                        <el-input type="textarea" v-model="comment" classs="area_box"></el-input>
                    </el-form-item>
                    <el-button class="no_pass_bus_cancel" @click="cancelClick">取消</el-button>
                    <el-button class="no_pass_bus_sure" @click="sureClick">确定</el-button>
                </div>
                </div>
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
    import upload from '../../components/uploadImg'
    import {post_uploadImg } from '../../model/api.js'
    //import {updateEnterStatus} from "src/model/api";
    import {updateEnterStatus,enterOne} from "src/model/api";

    export default {
        name: 'reject',
        props : [],
        data () {
            return {
                dialogTableVisible: false,
                dialogFormVisible: false,
                comment:'',
                isActive:false,
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
                console.log(res);

            })
        },
        methods : {
            //通过
            passClick(){
                var obj={};
                var _this=this;
                obj.id=this.$route.params.id;
                obj.auditstatus=1
                updateEnterStatus(obj).then(function(res){
                    if(res.body.code==0){
                        _this.$router.push('/accountmanagement_county')
                        util.alertip('通过审核');
                    }
                })
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
                /*this.isActive=true;*/
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
            },

        },
        mounted(){

        }
    }

</script>

<style lang="scss" scoped>
	.reason{
	    display:none;
        text-align: center;
	}
	.isActive{
	    display:block;
	}
    .unreview{
        height:100%;
        min-height:94.65rem;
        .reject_content{
            width: 45rem;
            height:94.65rem;
            background: #ffffff;
            .title{
                height:2.95rem;
                border-top:4px solid $bordercolor;
                border-bottom:1px solid $bordercolor;
                padding-left:1.15rem;
                @include font(0.8rem,2.95rem);
            }
            .review_status{

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
                top:5.1rem;
            }
            .reject_line_o{
                position: absolute;
                left:2.5rem;
                top:6.85rem;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .reject_company_base_ruleForm{
                position: absolute;
                left:9.5rem;
                top:7.4rem;
            }
            // 法定代表人信息
            .legal_person{
                position: absolute;
                left:2.5rem;
                top:27.35rem;
            }
            .reject_line_t{
                position: absolute;
                left:2.5rem;
                top:29.1rem;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .reject_Legal_Person_ruleForm{
                position: absolute;
                left:9.5rem;
                top:30.25rem;
            }
            // 企业人联系信息
            .company_Contacts{
                position: absolute;
                left:2.5rem;
                top:35.3rem;
            }
            .reject_line_th{
                position: absolute;
                left:2.5rem;
                top:37.05rem;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .reject__contacts_ruleForm{
                position: absolute;
                left:9.5rem;
                top:38.2rem;
            }
            .unreview_t_back{
                position: absolute;
                left:18.6rem;
                top:48.4rem;
                @include wh(4.4rem,1.75rem);
                font-size:0.7rem;
                padding:10px 20px;
            }
            .unreview_t_alter_message{
                position: absolute;
                left:23.75rem;
                top:62.3rem;
                @include wh(4.4rem,1.75rem);
                color:#ffffff;
                background:#399CFF;
                font-size:0.7rem;
                padding:10px 20px;
            }
            // 开户行信息
            .open_bank{
                position: absolute;
                left:2.5rem;
                top:47.4rem;
            }
            .reject_line_fo{
                position: absolute;
                left:2.5rem;
                top:49.15rem;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .reject_openkank_ruleForm{
                position: absolute;
                left:9.5rem;
                top:50.3rem;
            }
        }
    }
</style>
