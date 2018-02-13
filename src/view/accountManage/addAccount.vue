<template>
    <div class="home">
        <div class="headline">
            账号信息/<strong>添加账号</strong>
        </div>

        <el-form style="width:22rem;margin:auto" :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
            <el-form-item label="账号类型" class="accountType">
                <el-radio-group v-model="radio2" >
                    <el-radio :label="3">区县账号</el-radio>
                    <el-radio :label="6">市科技局账号</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="所属区县" v-if="radio2==3">
                <el-select style="" v-model="value4" clearable placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.text"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用户姓名">
                <el-input v-model="formLabelAlign.relName" ></el-input>
            </el-form-item>
            <el-form-item label="登录用户名">
                <el-input placeholder="请输入字母、数字" v-model="formLabelAlign.userName" ></el-input>
            </el-form-item>
            <el-form-item label="设置密码">
                <el-input type="password" v-model="formLabelAlign.pw" ></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input type="password" v-model="checkpw" ></el-input>
            </el-form-item>
            <el-form-item label="用户手机号">
                <el-input v-model="formLabelAlign.mobile" ></el-input>
            </el-form-item>
        </el-form>

        <div class="press" style="margin-top:30px;width:100%" >

            <el-button @click=""  @click="cancel">取消</el-button>
            <el-button type="primary" @click="save" style="background:#399CFF">确定</el-button>
        </div>
    </div>
</template>

<script>
    import util from 'src/util/util.js'
    import upload from '../../components/uploadImg'
    import {addAccount} from "src/model/api";

    export default {
        components:{
            upload
        },
        data(){
            return {
                radio2: 3,
                checkpw:'',
                isshow1:true,
                isshow:false,
                isdisabled:true,
                labelPosition: 'right',
                options: [
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
                value4: '',
                formLabelAlign: {
                    id: '',
                    mobile: '',
                    pw: '',
                    relName:'',
                    userName:'',
                   /* area:'003'*/
                }
            };
        },
        methods:{
            modify(){
                this.isdisabled=false;
                this.isshow1=false;
                this.isshow=true;
            },
            cancel(){
                this.isdisabled=true;
                this.isshow1=true;
                this.isshow=false;
                this.$router.push('/shi_accountManage')
            },
            save(){
                var _this=this;
                console.log(_this.value4);
                var obj=this.formLabelAlign;
                if(this.radio2==3){
                    obj.userType=3;
                    obj.area=_this.value4;
                    var i=_this.options.length;
                    for(var j=0;j<i;j++){
                        if(_this.value4==_this.options[j].value){
                            obj.unitName= _this.options[j].text
                        }
                    }
                }else{
                    obj.userType=4;
                    /*obj.unitName=''*/
                }
                if(this.formLabelAlign.pw==this.checkpw){
                    addAccount(obj).then(function(res){
                        console.log(999);
                        console.log(res);
                        if(res.body.code==0){
                            setTimeout(function(){
                                _this.$router.push('/shi_accountManage')
                            },100)
                        }else{
                            util.errortip(res.body.errorDesc);
                        }
                    })
                }else{
                    util.errortip('两次密码输入不一致');
                }



            }

        }
    }
</script>

<style scoped lang="scss">
    .home{
        background:white;
        width:45rem;
        /* height:100%;*/
        padding-bottom:100px;
        margin:auto;
        .headline{
            padding-left:24px;
            height:60px;
            line-height:60px;
            border-bottom:1px solid #E7EAEC;
            margin-bottom:27px;
            color:#676A6C;
            font-size:16px;
            letter-spacing: 0.3px;

        }
        .status{
            background:rgba(255,250,220,0.30);
            border: 1px solid #F3E4A9;
            border-radius: 5px;
            margin:30px  50px;
            height:82px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left:30px;
            line-height:22px;
        }
        .yuan{
            font-size:14px;
            margin-left:10px;
        }
        .press{
            display:flex;
            justify-content: center;
            margin-top:54px;
        }
    }
</style>
