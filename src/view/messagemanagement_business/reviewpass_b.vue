<template>
    <div class="reviewpass_b">
        <div class="reviewpass_b_content">
            <div class="title">信息管理</div>
            <div class="review_status">
                <div class="status_title">审核状态: <span class="status_content">审核通过</span></div>
            </div>
            <div class="company_base">企业基本信息</div>
            <div class="reviewpass_b_line_o"></div>
            <el-form class="reviewpass_b_company_base_ruleForm inputsizeout2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="10rem">
                <el-form-item prop="caseno" label="账号类型">企业</el-form-item>
                <el-form-item prop="name" label="单位名称" >
                   <el-input class="inputsize2" placeholder="廊坊极光科技有限公司" v-model="ruleForm.company" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="社会信用统一代码">
                    <el-input class="inputsize2" placeholder="AAAAAA09009009" type="text" v-model="ruleForm.code" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="注册地址所属区域">
                    <el-input class="inputsize2" placeholder="安次区" type="text" v-model="ruleForm.area" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="companyname" label="注册地址">
                    <el-input class="inputsize2" placeholder="安次区" type="text" v-model="ruleForm.address" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="profession" label="企业类型">
                    <el-input class="inputsize2" placeholder="高新技术企业" type="text" v-model="ruleForm.type" :disabled="true"></el-input>
                </el-form-item>
                  <el-form-item prop="profession" label="营业执照照片">
                    <upload @upimg="" style="display:inline-block;" ></upload>
                </el-form-item>
                  <el-form-item prop="profession" label="科小证书编号" id="kexiao">
                    <el-input class="inputsize2" placeholder="888888888" type="text" v-model="ruleForm.cer_code" :disabled="true"></el-input>
                </el-form-item>
            </el-form>

             <div class="legal_person">法定代表人信息</div>
            <div class="reviewpass_b_line_t"></div>
            <el-form class="reviewpass_b_Legal_Person_ruleForm inputsizeout2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="法定代表人姓名">
                   <el-input class="inputsize2" placeholder="刘丽娜" v-model="ruleForm.company" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="法定代表人联系电话">
                    <el-input class="inputsize2" placeholder="18201492987" type="text" v-model="ruleForm.code" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="法定代表人邮箱">
                    <el-input class="inputsize2" placeholder="1227155578@qq.com" type="text" v-model="ruleForm.area" :disabled="true"></el-input>
                </el-form-item>
            </el-form>
            <div class="company_Contacts">企业联系人信息</div>
            <div class="reviewpass_b_line_th"></div>
            <el-form class="reviewpass_b__contacts_ruleForm inputsizeout2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="单位名称">
                   <el-input class="inputsize2" placeholder="廊坊极光科技有限公司" v-model="ruleForm.company" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="社会信用统一代码">
                    <el-input class="inputsize2" placeholder="AAAAAA09009009" type="text" v-model="ruleForm.code" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="注册地址所属区域">
                    <el-input class="inputsize2" placeholder="安次区" type="text" v-model="ruleForm.area" :disabled="true"></el-input>
                </el-form-item>
            </el-form>

             <div class="open_bank">开户银行信息（非必填）</div>
            <div class="reviewpass_b_line_fo"></div>
            <el-form class="reviewpass_b_openkank_ruleForm inputsizeout2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="单位名称">
                   <el-input class="inputsize2" placeholder="廊坊极光科技有限公司" v-model="ruleForm.company" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="社会信用统一代码">
                    <el-input class="inputsize2" placeholder="AAAAAA09009009" type="text" v-model="ruleForm.code" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="注册地址所属区域">
                    <el-input class="inputsize2" placeholder="安次区" type="text" v-model="ruleForm.area" :disabled="true"></el-input>
                </el-form-item>
            </el-form>
            <el-button class="reviewpass_b_back">返回</el-button>
        </div>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import citys from 'static/js/citydata.js'
import upload from '../../components/uploadImg'
export default {
    name: 'reviewpass_b',
    props : [],
    data () {
        return {
            province:citys,
            citys:[],
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
        upload
    },
    watch:{

    },
    created(){

    },
    methods : {
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
    .reviewpass_b{
        height:100%;
        min-height:76rem;
        position: relative;
        .reviewpass_b_content{
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
                    color:#399CFF;
                 }

            }
            //公司基本信息
            .company_base{
                 position: absolute;
                 left:2.5rem;
                 top:10.1rem;
            }
            .reviewpass_b_line_o{
                 position: absolute;
                 left:2.5rem;
                 top:11.85rem;
                 @include wh(40rem,1px);
                 background:#E7EAEC;
            }
            .reviewpass_b_company_base_ruleForm{
                 position: absolute;
                 left:8.65rem;
                 top:13.4rem;
                 #kexiao{
                 	margin-top: 110px !important;
                 }
                 
            }
            // 法定代表人信息
            .legal_person{
                 position: absolute;
                 left:2.5rem;
                 top:38.3rem;
            }
            .reviewpass_b_line_t{
                 position: absolute;
                 left:2.5rem;
                 top:40.05rem;
                 @include wh(40rem,1px);
                 background:#E7EAEC;
            }
            .reviewpass_b_Legal_Person_ruleForm{
                 position: absolute;
                 left:8.65rem;
                 top:41.2rem; 
            }
            // 企业人联系信息
            .company_Contacts{
                 position: absolute;
                 left:2.5rem;
                 top:50.3rem;
            }
            .reviewpass_b_line_th{
                 position: absolute;
                 left:2.5rem;
                 top:52.05rem;
                 @include wh(40rem,1px);
                 background:#E7EAEC;
            }
            .reviewpass_b__contacts_ruleForm{
                 position: absolute;
                 left:8.65rem;
                 top:53.2rem; 
            }
            // 开户行信息
            .open_bank{
                position: absolute;
                left:2.5rem;
                top:62.3rem; 
            }
            .reviewpass_b_line_fo{
                position: absolute;
                left:2.5rem;
                top:64.05rem;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .reviewpass_b_openkank_ruleForm{
                 position: absolute;
                 left:8.65rem;
                 top:65.2rem; 
            }
            .reviewpass_b_back{
                position: absolute;
                left:18.6rem;
                top:73.3rem;
                @include wh(4.4rem,1.75rem);
                font-size:0.7rem;
                padding:10px 20px;
            }
        }
    }
</style>