<template>
    <div class="bus_apply_review" v-loading="loading">
        <div class="bus_apply_review_content">
            <div class="title">审核管理 / 申领审核</div>
            <el-form class="bus_apply_review_company_base_ruleForm inputsizeout2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="10rem">
                <el-form-item prop="caseno" label="账号类型">企业</el-form-item>
                <el-form-item prop="name" label="单位名称" >廊坊极光科技有限公司</el-form-item>
                 <el-form-item prop="name" label="创新服务类型" >
                   <el-input class="inputsize2" placeholder="检测检验服务" v-model="ruleForm.name" ></el-input>
                </el-form-item>
                <el-form-item prop="cardno" label="创新服务机构地区">
                    <el-input class="inputsize2" placeholder="河北省-廊坊市-安次区" type="text" v-model="ruleForm.code" ></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="创新服务机构">
                    <el-input class="inputsize2" placeholder="冷咋办装逼工艺员国家工程技术援救中心" type="text" v-model="ruleForm.area" ></el-input>
                </el-form-item>
                <el-form-item prop="companyname" label="与创新机构合同名称">
                    <el-input class="inputsize2" placeholder="冷光合同" type="text" v-model="ruleForm.address" ></el-input>
                </el-form-item>
                  <el-form-item prop="profession" label="与创新机构合作的合同的PDF">
                    <div class="exp_pic"><img src="" alt=""></div>
                </el-form-item>
                <el-form-item prop="profession" label="合同金额">
                    <el-input class="inputsize2" placeholder="100000" type="text" v-model="ruleForm.cer_code" >元</el-input>
                </el-form-item>
                <el-form-item prop="profession" label="创新卷申领金额">
                    <el-input class="inputsize2" placeholder="100000" type="text" v-model="ruleForm.cer_code" >元</el-input>
                </el-form-item>
                <div class="note">注：金额说明</div>
                <el-button class="bus_apply_review_back">返回</el-button>
	            <el-button class="bus_apply_review_alter_message">不通过</el-button>
	            <el-button class="bus_apply_review_pass">通过</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import citys from 'static/js/citydata.js'
export default {
    name: 'bus_apply_review',
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
    .bus_apply_review{
        height:100%;
        min-height:55.05rem;
        position: relative;
        .bus_apply_review_content{
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
            .bus_apply_review_line_o{
                 position: absolute;
                 left:2.5rem;
                 top:11.85rem;
                 @include wh(40rem,1px);
                 background:#E7EAEC;
            }
            .bus_apply_review_company_base_ruleForm{
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
                    top:28.9rem;
                 	
                 }
                 .bus_apply_review_back{
                 	position: absolute;
                	    left:9.9rem;
                    top:30.9rem;
                    font-size: 14px;
                 }
                 .bus_apply_review_alter_message{
                 	position: absolute;
                	    left:13.9rem;
                    top:30.9rem;
                    font-size: 14px;
                 }
                 .bus_apply_review_pass{
                 	position: absolute;
                	    left:19.1rem;
                    top:30.9rem;
                    font-size: 14px;
                    background: #399CFF;
                    color: #ffffff;
                 }
                 .textarea_nopass{
                 	position: absolute;
                	    left:0rem;
                    top:33.9rem;
                   
                 }
            }
        }
    }
</style>