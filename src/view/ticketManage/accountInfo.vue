<template>
    <div class="home">
        <div class="headline">
            <strong>账号信息</strong>
        </div>

        <el-form style="width:22rem;margin:auto" :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
            <el-form-item label="账号类型" class="accountType">
                <el-input v-model="formLabelAlign.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="单位名称">
                <el-input v-model="formLabelAlign.region" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="登录名">
                <el-input v-model="formLabelAlign.region" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="设置密码">
                <el-input clearable type="password" v-model="formLabelAlign.type" :disabled="isdisabled"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input clearable type="password" v-model="formLabelAlign.name" :disabled="isdisabled"></el-input>
            </el-form-item>
            <el-form-item label="用户手机号">
                <el-input clearable v-model="formLabelAlign.region" :disabled="isdisabled"></el-input>
            </el-form-item>
        </el-form>
        <div class="press" style="margin-top:30px;width:100%" v-if="isshow1">
            <el-button type="primary"  @click="modify" style="background:#399CFF">修改</el-button>
        </div>
        <div class="press" style="margin-top:30px;width:100%" v-if="isshow">

            <el-button @click=""  @click="cancel">取消</el-button>
            <el-button type="primary" @click="save" style="background:#399CFF">保存</el-button>
        </div>
    </div>
</template>

<script>
    import upload from '../../components/uploadImg'
    export default {
        name: "reapply",
        components:{
            upload
        },
        data(){
            return {
                isshow1:true,
                isshow:false,
                isdisabled:true,
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
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
            },
            save(){

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
