<template>
    <div class="home">
        <div class="headline">
            科技创新券管理／<strong style="color: #151515">查看详情</strong>
        </div>
        <div class="detail">
            <div class="status">
                <span>科技创新券状态：</span>
                <span style="color: #399CFF">{{formLabelAlign.innovateStatusCode | changejuanStatus}}</span>
            </div>
            <div v-if="formLabelAlign.innovateStatusCode==2">
            <div class="kejiquan">
                <div class="left">科技创新券</div>
                <el-form style="width:41rem;margin:auto;padding:20px 0 10px" :label-position="labelPosition" label-width="220px" :model="formLabelAlign">
                    <el-form-item label="申领单位名称">
                        <el-input v-model="formLabelAlign.entname"></el-input>
                    </el-form-item>
                    <el-form-item label="合作创新服务机构名称">
                        <el-input v-model="formLabelAlign.serviceEnterName"></el-input>
                    </el-form-item>
                    <el-form-item label="申领金额">
                        <el-input v-model="formLabelAlign.appliMoney"></el-input>
                    </el-form-item>
                    <el-form-item label="科技创新券编号">
                        <el-input v-model="formLabelAlign.innovateCode"></el-input>
                    </el-form-item>
                    <el-form-item label="使用截止日期">
                        <el-input :value="formLabelAlign.usecutoffDate | timeymdhandle"></el-input>
                    </el-form-item>
                    <el-form-item label="兑付截止日期">
                        <el-input :value="formLabelAlign.cashcutoffDate | timeymdhandle"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            </div>
            <div class="info">申领信息</div>
            <el-form style="width:36rem;margin:auto" :label-position="labelPosition" label-width="220px" :model="formLabelAlign">
                <el-form-item label="审核状态">
                    <el-input :value="formLabelAlign.reviewedStatusCode | changeReviewStatus" ></el-input>
                </el-form-item>
                <el-form-item label="申领单位名称">
                    <el-input v-model="formLabelAlign.entname"></el-input>
                </el-form-item>
                <el-form-item label="创新服务类型">
                    <el-input :value="formLabelAlign.servicetypeCode | changeservicetypeCode"></el-input>
                </el-form-item>
                <el-form-item label="合作创新服务机构名称">
                    <el-input v-model="formLabelAlign.serviceEnterName"></el-input>
                </el-form-item>
                <el-form-item label="创新服务机构地区">
                    <el-input v-model="formLabelAlign.fkCountydistrict"></el-input>
                </el-form-item>
                <el-form-item label="与创新机构合同名称">
                    <el-input v-model="formLabelAlign.contractName"></el-input>
                </el-form-item>
                <el-form-item label="合同金额">
                    <el-input style="width:6.5rem" v-model="formLabelAlign.contractValue"></el-input><span class="yuan">元</span>
                </el-form-item>
                <el-form-item label="创新券申领金额">
                    <el-input style="width:6.5rem" v-model="formLabelAlign.appliMoney"></el-input><span class="yuan">元</span>
                </el-form-item>
                <el-form-item style="" label="与创新服务机构合作的合同PDF">
                    <div class="showpdf"  @click="dialogTableVisible = true" style="">点击查看PDF</div>
                    <div class="showpdf" @click="showpdf">通过浏览器查看PDF</div>
                    <!--<upload @upimg="" style="display:inline-block;" ></upload>-->
                    <!--<img style="height:114px;width:114px;" :src="attachment" alt="">-->
                </el-form-item>
                <el-form-item style="height:auto" label="科技创新券历史记录">
                    <!--  <el-input v-model="formLabelAlign.type"></el-input>-->

                </el-form-item>
                <div style="position: relative;top: -28px;left: 11rem;">
                    <el-table
                        :data="tableData"
                        style="display:inline-block;width:80%">
                        <el-table-column
                            prop="innovateStatusCode"
                            label="科技创新券历史状态"
                            min-width="25%">
                            <template slot-scope="scope">
                                <span>{{scope.row.innovateStatusCode | changejuanStatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="reviewedStatusCode"
                            label="历史审核状态"
                            min-width="35%">
                            <template slot-scope="scope">
                                <span>{{scope.row.reviewedStatusCode | changeReviewStatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="createTime"
                            label="历史操作日期"
                            min-width="40%"
                        >
                            <template slot-scope="scope">
                                <span>{{scope.row.createTime | timeymdhandle}}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>

            </el-form>
            <div class="press">


                <!--<el-button @click="go_accountmanage">返回</el-button>-->



                <el-button  @click='backClick'>返回</el-button>

            </div>
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
    import upload from '../../components/uploadImg'
    import util from '../../util/util.js'
    import {innovateOne,innovateFlow} from 'src/model/api'
    import pdfshower from 'vue-pdf-shower';
    export default {
        name: "detail",
        components: {
            upload,
            pdfshower
        },
        data() {
            return {
                dialogTableVisible: false,
                dialogFormVisible: false,
                pdfurls:'',
                scale: 1.2,
                attachment:'',
                labelPosition: 'right',
                formLabelAlign: {},
                tableData: []
            };
        },

        mounted() {
            var _this=this;
            this.getInnovateDetail();
            var obj={};
            obj.innovateId= this.$route.params.id;
            innovateFlow(obj).then(function(res){
                _this.tableData=res.body.data
            })

        },
        methods: {
            onErr(err) {
                console.log('pdf加载失败，请重试');
                console.log('错误信息：', err);
            },
            showpdf(){
                window.open(this.pdfurls)
            },
            //获取科创券详情
            async getInnovateDetail() {
                var obj = {};
                obj.id = this.$route.params.id;
                obj.enttype=this.$route.params.enttype;
                var res = await innovateOne(obj);

                console.log(res);
                console.log(res)
                if (res.body.code == 0) {
                    this.formLabelAlign = res.body.data;
                    this.pdfurls=res.body.data.tupian[0].attachment;
                } else {
                    util.alertip(res.body.message);
                }
            },
            backClick(){
                window.history.go(-1);
            }

        }
    }
</script>

<style scoped lang="scss">
    /*.el-input__inner{
        border:0 !important;
    }*/
    .showpdf{
        display:inline-block;
        cursor: pointer;
        color:#399CFF
    }
    .home{
        background:white;
        width:45rem;
        /* height:100%;*/
        padding-bottom:100px;
        margin:auto;
        .detail{
            padding:0 24px;
            .kejiquan{
                display:flex;
                margin-top:30px;
                background: rgba(212,234,255,0.20);
                .left{
                    border: 1px dashed #D5EAFF;
                    box-sizing:border-box;
                    width:66px;
                    padding:35px 22px;
                    color:white;
                    background: #399CFF
                }
            }
            .info{
                border-bottom:1px solid #E7EAEC;
                padding-bottom:13px;
                margin-top:30px;
                margin-bottom:24px;
            }
        }
        .headline{
            padding-left:24px;
            height:60px;
            line-height:60px;
            border-bottom:1px solid #E7EAEC;
            margin-bottom:27px;
            color:#676A6C;
            font-size:16px;
            letter-spacing: 0.3px;
            span{
                color:#333333
            }

        }
        .yuan{
            font-size:14px;
            margin-left:10px;
        }
        .press{
            display:flex;
            justify-content: center;
        }
    }
</style>
