<template>
    <div class="messagemanagement_team">
        <div class="messagemanagement_team_content">
            <div class="title">信息管理</div>
            <div class="review_status">
                <div class="status_title">审核状态: <span class="status_content">审核通过</span></div>
            </div>
            <div class="company_base">团队基本信息</div>
            <div class="messagemanagement_team_line_o"></div>
            <el-form class="messagemanagement_team_company_base_ruleForm inputsizeout2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="10rem">
                <el-form-item prop="caseno" label="账号类型">创新创业团队</el-form-item>
                <el-form-item prop="name" label="入驻单位" >
                   <el-input class="inputsize2" placeholder="廊坊极光科技有限公司" v-model="ruleForm.company" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="办公地址所属区域">
                     <el-select v-model="ruleForm.region" class="inputsize2">
                        <el-option label="安次区" value="anci"></el-option>
                        <el-option label="广阳区" value="guangyang"></el-option>
                        <el-option label="霸州县" value="bazhou"></el-option>
                        <el-option label="香河" value="xianghe"></el-option>
                   </el-select>
                </el-form-item>
                <el-form-item prop="phone" label="办公地址">
                        <el-input class="inputsize2" placeholder="请输入具体地址" type="text" v-model="ruleForm.code" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="profession" label="入驻众创空间/孵化器合同证明">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </el-form>

            <div class="legal_person">团队负责人信息</div>
            <div class="messagemanagement_team_line_t"></div>
            <el-form class="messagemanagement_team_Legal_Person_ruleForm inputsizeout2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="团队负责人信息姓名">
                   <el-input class="inputsize2" placeholder="刘丽娜" v-model="ruleForm.company" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="团队负责人信息电话">
                    <el-input class="inputsize2" placeholder="18201492987" type="text" v-model="ruleForm.code" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="团队负责人信息邮箱">
                    <el-input class="inputsize2" placeholder="1227155578@qq.com" type="text" v-model="ruleForm.area" :disabled="true"></el-input>
                </el-form-item>
                 <el-form-item prop="phone" label="团队负责人身份证明照片">
                      <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                     </el-upload>
                </el-form-item>
            </el-form>
            <div class="company_Contacts">团队成员信息</div>
            <div class="messagemanagement_team_line_th"></div>
            <el-form class="messagemanagement_team__contacts_ruleForm inputsizeout2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="团队成员信息">
                   <el-input class="inputsize2" placeholder="张三" v-model="ruleForm.company" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="团队成员身份证明照片">
                <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                     </el-upload>
                </el-form-item>
                 <el-form-item prop="name" label="团队成员信息">
                   <el-input class="inputsize2" placeholder="张三" v-model="ruleForm.company" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="团队成员身份证明照片">
                <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                     </el-upload>
                </el-form-item>
            </el-form>

             <div class="open_bank">开户银行信息（非必填）</div>
            <div class="messagemanagement_team_line_fo"></div>
            <el-form class="messagemanagement_team_openkank_ruleForm inputsizeout2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="10rem">
                <el-form-item prop="name" label="开户银行姓名">
                   <el-input class="inputsize2" placeholder="廊坊极光科技有限公司" v-model="ruleForm.company" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="银行账号">
                    <el-input class="inputsize2" placeholder="9999999999999998888888" type="text" v-model="ruleForm.code" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="开户名">
                    <el-input class="inputsize2" placeholder="张三" type="text" v-model="ruleForm.area" :disabled="true"></el-input>
                </el-form-item>
            </el-form>
            <el-button class="messagemanagement_team_back">返回</el-button>
        </div>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import citys from 'static/js/citydata.js'
export default {
    name: 'messagemanagement_team',
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
    .messagemanagement_team{
        height:100%;
        min-height:89.4rem;
        position: relative;
        .messagemanagement_team_content{
            width: 45rem;
            height:89.4rem;
            position: absolute;
            top:50%;
            left: 50%;
            margin-top:-45.3rem;
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
            .messagemanagement_team_line_o{
                 position: absolute;
                 left:2.5rem;
                 top:11.85rem;
                 @include wh(40rem,1px);
                 background:#E7EAEC;
            }
            .messagemanagement_team_company_base_ruleForm{
                 position: absolute;
                 left:8.65rem;
                 top:13.4rem;
                 
            }
            // 法定代表人信息
            .legal_person{
                 position: absolute;
                 left:2.5rem;
                 top:33.35rem;
            }
            .messagemanagement_team_line_t{
                 position: absolute;
                 left:2.5rem;
                 top:35.1rem;
                 @include wh(40rem,1px);
                 background:#E7EAEC;
            }
            .messagemanagement_team_Legal_Person_ruleForm{
                 position: absolute;
                 left:8.65rem;
                 top:36.25rem; 
            }
            // 企业人联系信息
            .company_Contacts{
                 position: absolute;
                 left:2.5rem;
                 top:50.3rem;
            }
            .messagemanagement_team_line_th{
                 position: absolute;
                 left:2.5rem;
                 top:52.05rem;
                 @include wh(40rem,1px);
                 background:#E7EAEC;
            }
            .messagemanagement_team__contacts_ruleForm{
                 position: absolute;
                 left:8.65rem;
                 top:53.2rem; 
            }
            // 开户行信息
            .open_bank{
                position: absolute;
                left:2.5rem;
                top:75.15rem; 
            }
            .messagemanagement_team_line_fo{
                position: absolute;
                left:2.5rem;
                top:76.9rem;
                @include wh(40rem,1px);
                background:#E7EAEC;
            }
            .messagemanagement_team_openkank_ruleForm{
                 position: absolute;
                 left:8.65rem;
                 top:78.05rem; 
            }
            .messagemanagement_team_back{
                position: absolute;
                left:18.6rem;
                top:86.15rem;
                @include wh(4.4rem,1.75rem);
                font-size:0.7rem;
                padding:10px 20px;
            }
        }
    }
</style>