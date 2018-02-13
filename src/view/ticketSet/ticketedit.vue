<template>
    <div class="home ticketedit">
        <div class="headline">
            科技创新券管理／<strong>申领科技创新券</strong>
        </div>
        <el-form style="width:30rem;margin:auto" :label-position="labelPosition" label-width="222px" :model="formLabelAlign">

            <el-form-item label="全市创新券发放总额" style="margin-bottom:0">
                <el-input style="width:auto" v-model="formLabelAlign.allmoney"  placeholder="" :disabled="isdisabled"></el-input>
                <span>元</span>
            </el-form-item>
            <el-form-item class="note" label="">

            </el-form-item>
            <el-form-item label="企业申领科技创新券总额不得超过" style="margin-bottom:0">
                <el-input style="width:auto" v-model="formLabelAlign.limits"  placeholder="" :disabled="isdisabled"></el-input>
                <span>元</span>
            </el-form-item>
            <el-form-item label="" class="note">
                <div>注：此项表示一个单位名称申领的廊坊市科技创新券限制总额</div>
            </el-form-item>
            <el-form-item label="创新券申领成功，使用有效期" style="margin-bottom:0">
                <el-input style="width:auto" v-model="formLabelAlign.userdates"  placeholder="" :disabled="isdisabled"></el-input>
                <span>天</span>
            </el-form-item>
            <el-form-item label="" class="note">
                <div>注：自申领之日起，在使用有效期内未使用的，创新券自动作废，
                    资金回滚至未发放总额中</div>
            </el-form-item>
            <el-form-item label="2018年创新券，最后使用期限" style="margin-bottom:0">
                <el-date-picker
                    v-model="formLabelAlign.endates"
                    type="date"
                    placeholder="选择日期" :disabled="isdisabled">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="" class="note">
                <div>注：自申领之日起，在最后使用期限内未使用的，创新券自动作废，
                    资金回滚至未发放总额中</div>
            </el-form-item>
            <el-form-item label="创新券申领成功，兑付有效期" style="margin-bottom:0">
                <el-input style="width:auto" v-model="formLabelAlign.cashdates"  placeholder="" :disabled="isdisabled"></el-input>
                <span>天</span>
            </el-form-item>
            <el-form-item label="" class="note">
                <div>注：自申领之日起，在兑付有效期内未兑付的，创新券自动作废，
                    资金回滚至未发放总额中</div>
            </el-form-item>
            <el-form-item label="2018年创新券，最后兑付期限" style="margin-bottom:0">
                <el-date-picker
                    v-model="formLabelAlign.cashends"
                    type="date"
                    placeholder="选择日期" :disabled="isdisabled">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="" class="note">
                <div>注：自申领之日起，在兑付有效期内未兑付的，创新券自动作废，
                    资金回滚至未发放总额中</div>
            </el-form-item>
        </el-form>
        <div class="press" style="margin-top:30px;">
            <el-button v-if="isshow1" @click="edit" type="primary" style="padding:7px 15px;background:#399CFF">编辑信息</el-button>
            <el-button v-if="isshow">返回</el-button>
            <el-button v-if="isshow" type="primary" style="padding:7px 15px;background:#399CFF" @click="submit">提交信息</el-button>
        </div>
    </div>
</template>

<script>
    import upload from '../../components/uploadImg'
    import {initInfo,saveInitInfo} from "src/model/api";
    import util from 'src/util/util.js'
    export default {
        name: "edit",
        components:{
            upload
        },
        data(){
            return {
                id:'',
                isshow:false,
                isshow1:true,
                isdisabled:true,
                value1: '',
                value2: '',
                restaurants: [],
                state4: '',
                timeout:  null,
                labelPosition: 'right',
                formLabelAlign: {

                },
                options: [],
                value4: ''

            };
        },
        created:function(){
            var _this=this;
            initInfo().then(function(res){
                _this.formLabelAlign=res.body.data;
                console.log(res);
                if(res.body.data.id.length!==0){
                    _this.id=res.body.data.id
                }

            })
        },
        methods:{
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 3000 * Math.random());
            },
            createStateFilter(queryString) {
                return (state) => {
                    return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            },
            edit(){
                this.isdisabled=false;
                this.isshow1=false;
                this.isshow=true;
            },
            submit(){
                var obj=this.formLabelAlign;

                var _this=this;
                obj.id=_this.id;
                saveInitInfo(obj).then(function(res){
                    console.log(res);
                    if(res.body.code==0){
                        _this.isdisabled=true;
                        _this.isshow1=true;
                        _this.isshow=false;
                        initInfo({id:'1'}).then(function(res){
                            _this.formLabelAlign=res.body.data;
                            console.log(res);
                        })
                    }
                })
            }
        },
        mounted() {
            /*this.restaurants = this.loadAll();*/
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
        .note{
            height:auto;
            width:30rem;
            div{
                height:auto;
                line-height:20px;
                color:#999999;
                font-size:14px;
            }
        }
        .headline{
            border-top: 0.2rem solid #E5E5E5;
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
