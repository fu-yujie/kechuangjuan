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
            <div class="kejiquan" v-if="flag">
                <div class="left">科技创新券</div>
                <el-form style="width:41rem;margin:auto;padding:20px 0 10px" :label-position="labelPosition" label-width="220px" :model="formLabelAlign">
                    <el-form-item label="申领单位名称">
                    		<span>{{ formLabelAlign.applyUnitName}}</span>
                        <!--<el-input v-model="formLabelAlign.applyUnitName" :disabled="true"></el-input>-->
                    </el-form-item>
                    <el-form-item label="合作创新服务机构名称">
                    		<span>{{ formLabelAlign.serviceEnterName}}</span>
                        <!--<el-input v-model="formLabelAlign.contractName" :disabled="true"></el-input>-->
                    </el-form-item>
                    <el-form-item label="申领金额">
                    		<span>{{formLabelAlign.appliMoney}}</span>
                        <!--<el-input v-model="formLabelAlign.appliMoney" :disabled="true"></el-input>-->
                    </el-form-item>
                    <el-form-item label="科技创新券编号">
                        <span>{{ formLabelAlign.innovateCode}}</span>
                        <!--<el-input v-model="formLabelAlign.innovateCode" :disabled="true"></el-input>-->
                    </el-form-item>
                    <el-form-item label="使用截止日期">
		                	<span>{{ formLabelAlign.usecutoffDate | timeymdhandle }}</span>
                    </el-form-item>
                    <el-form-item label="兑付截止日期">
                    		<span>{{ formLabelAlign.cashcutoffDate | timeymdhandle }}</span>
                    </el-form-item>
                </el-form>
            </div>
            <div class="info">申领信息</div>
        <el-form style="width:36rem;margin:auto" :label-position="labelPosition" label-width="220px" :model="formLabelAlign">
            <el-form-item label="审核状态">
                <span>{{formLabelAlign.reviewedStatusCode | changeReviewStatus }}</span>
            </el-form-item>
            <el-form-item label="审核不通过原因" v-if ="per">
                <span>{{formLabelAlign.remark}}</span>
            </el-form-item>
            <el-form-item label="申领单位名称">
            		<span>{{ formLabelAlign.contractName}}</span>
                <!--<el-input v-model="formLabelAlign.contractName"></el-input>-->
            </el-form-item>
            <el-form-item label="创新服务类型">
                <span>{{formLabelAlign.servicetypeCode | changeservicetypeCode }}</span>
            </el-form-item>
            <el-form-item label="合作创新服务机构">
            		<span>{{ formLabelAlign.serviceEnterName}}</span>
                <!--<el-input v-model="formLabelAlign.serviceEntercode"></el-input>-->
            </el-form-item>
            <el-form-item label="创新服务机构地区">
            		<span>{{ formLabelAlign.fkCountydistrict}}</span>
                <!--<el-input v-model="formLabelAlign.fkCountydistrict"></el-input>-->
            </el-form-item>
            <el-form-item label="与创新机构合同名称">
            		<span>{{ formLabelAlign.contractName}}</span>
                <!--<el-input v-model="formLabelAlign.contractName"></el-input>-->
            </el-form-item>
            <el-form-item label="合同金额">
           	 	<span>{{ formLabelAlign.contractValue}}元</span>
                <!--<el-input style="width:6.5rem" v-model="formLabelAlign.contractValue"></el-input><span class="yuan">元</span>-->
            </el-form-item>
            <el-form-item label="创新券申领金额">
            		<span>{{ formLabelAlign.appliMoney}}元</span>
                <!--<el-input style="width:6.5rem" v-model="formLabelAlign.appliMoney"></el-input><span class="yuan">元</span>-->
            </el-form-item>
            <el-form-item style="height:114px" label="与创新服务机构合作的合同PDF">
            	    <div class="showpdf" @click="showpdf">通过浏览器查看PDF</div>
                <!--<img :src="imgurl" alt="" style="width: 114px;height: 114px;">-->
            </el-form-item>
            <el-form-item style="height:auto" label="科技创新券历史记录">

            </el-form-item>
            <div style="position: relative;top: -28px;left: 11rem;">
                <el-table
                    :data="tableData"
                    style="display:inline-block;width:80%">
                    <el-table-column prop="date" label="科技创新券历史状态"  min-width="25%">
                    		<template slot-scope="scope"  >
                				<span>{{scope.row.innovateStatusCode | changejuanStatus }}</span>
                			</template>
                    </el-table-column>
                    <el-table-column  prop="name" label="历史审核状态"  min-width="35%">
                    		 <template slot-scope="scope"  >
		                		<span>{{scope.row.reviewedStatusCode | changeReviewStatus }}</span>
		                 </template>
                    </el-table-column>
                    <el-table-column prop="address" label="历史操作日期" min-width="40%">
                    		 <template slot-scope="scope"  >
		                		<span>{{scope.row.createTime | timeymdhandle }}</span>
		                 </template>
                    </el-table-column>
                </el-table>
            </div>

        </el-form>
        <div class="press">


            <!--<el-button @click="go_accountmanage">返回</el-button>-->



            <el-button @click='$router.push({"name": "ticketmanage"})'>返回</el-button>

        </div>
        </div>
    </div>
</template>

<script>
    import upload from '../../components/uploadImg'
    import util from '../../util/util.js'
    import {getInnovateDetail_T} from 'src/model/api'
    export default {
        name: "detail",
        components: {
            upload
        },
        data() {
            return {
            		pdfUrl:'',
            	    flag:false,
            	    per:false,
            	    imgurl:'',
                labelPosition: 'right',
                reviewedStatusCode:'',
                formLabelAlign: {},
                tableData: []
            };
        },

        mounted() {
            this.getInnovateDetail();
        },
        methods: {
        	 	showpdf(){
        	 		console.log(this.pdfUrl)
                 window.open(this.pdfUrl)
            },
            //获取科创券详情
            async getInnovateDetail() {
                var obj = {};
                obj.innovateId = this.$route.params.id;
                var res = await getInnovateDetail_T(obj);

                console.log(res)

                this.formLabelAlign = {
                    "appliEntercode": "string",
                    "appliMoney": 0,
                    "applicationTime": "2018-01-31T07:27:31.354Z",
                    "cashcutoffDate": "2018-01-31T07:27:31.354Z",
                    "contractName": "string",
                    "contractValue": 0,
                    "fkCountydistrict": "string",
                    "fkcity": "string",
                    "fpRovince": "string",
                    "id": "string",
                    "innovateCode": "string",
                    "innovateStatusCode": '',
                    "remark": "",
                    "reviewedStatusCode": "string",
                    "serviceEntercode": "string",
                    "servicetypeCode": "string",
                    "usecutoffDate": "2018-01-31T07:27:31.355Z"
                }
                console.log(res.body.data.flowResp)
//             
                console.log(res)
                if (res.body.code == 0) {
                    this.tableData = res.body.data.flowResp;
                    this.formLabelAlign = res.body.data;
                    this.pdfUrl = res.body.data.contractAttachment;
                    console.log(res.body.data.reviewedStatusCode)
                    if(res.body.data.reviewedStatusCode == 2 || res.body.data.reviewedStatusCode ==6){
                    		this.per = true;
                    }
                    if(res.body.data.contractAttachment){
                    		this.imgurl =  res.body.data.contractAttachment;
                    }else{
                    	 this.imgurl = 'http://bpic.588ku.com/element_origin_min_pic/01/47/02/12574338a640011.jpg';
                    }
                    if(res.body.data.innovateStatusCode==2){
                    		this.flag = true;
                    }
                    
                    
                } else {
                    util.alertip(res.body.message);
                }
            },


            methods: {
                go_accountmanage() {
                    this.$router.push({'name': 'accountmanagement_county'});
                }


            }
        }
    }
</script>

<style scoped lang="scss">
    /*.el-input__inner{
        border:0 !important;
    }*/
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
        .showpdf{
	        display:inline-block;
	        cursor: pointer;
	        color:#399CFF
	    }
    }
</style>
