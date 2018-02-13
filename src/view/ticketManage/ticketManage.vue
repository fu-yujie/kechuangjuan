<template>
    <div class="home" v-loading="loading">

        <div class="headline">
            <div>科技创新券管理</div>
            <div class="right" @click="apply">申领科技创新券</div>
        </div>

        <el-table
            :data="tableData"
            border
            style="width: 100%"
        >
            <el-table-column prop="applicationTime" label="申领日期" min-width="9%" style="font-size:14px">
            		 <template slot-scope="scope"  >
                		<span>{{scope.row.applicationTime | timeymdhandle }}</span>
                </template>
            </el-table-column>
            <el-table-column  prop="innovateStatusCode reviewedStatusCode" label="科技创新券状态" min-width="12%">
                <template slot-scope="scope"  >
                		<span>{{scope.row.innovateStatusCode | changejuanStatus }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="reviewedStatusCode" label="审核状态" min-width="9%">
            		 <template slot-scope="scope"  >
                		<span>{{scope.row.reviewedStatusCode | changeReviewStatus }}</span>
                 </template>
            </el-table-column>
            <el-table-column prop="innovateCode" label="科技创新券编号" min-width="12%">

            </el-table-column>

            <el-table-column prop="appliMoney" label="申领金额" min-width="9%">

            </el-table-column>

            <el-table-column prop="serviceEnterName" label="合作创新服务机构" min-width="13%">
            	 
            </el-table-column>
            <el-table-column prop="usecutoffDate" label="使用截止日期" min-width="10%">
            		<template slot-scope="scope"  >
                		<span>{{scope.row.usecutoffDate | timeymdhandle }}</span>
                </template>
            </el-table-column>

            <el-table-column prop="cashcutoffDate" label="兑付截止日期" min-width="10%">
            		<template slot-scope="scope"  >
                		<span>{{scope.row.cashcutoffDate | timeymdhandle }}</span>
                </template>
            </el-table-column>

            <el-table-column
                label="操作"
                min-width="16%">
                <template slot-scope="scope" v-if="flag">
                    <div style="display:flex;align-items: center">
                        <button class="item" @click="detail(scope.row.id)" >查看详情</button>
                        <button style="width:2px;height:16px;background:#D8D8D8;display:inline-block;margin:0 11px;"></button>
                        <button class="item" @click='applyBack(scope.row.id)' :class="{show:scope.row.innovateStatusCode ==3 ||scope.row.innovateStatusCode ==4}" :disabled="scope.row.innovateStatusCode ==3 ||scope.row.innovateStatusCode ==4">申请退券</button>
                    </div>
                    <button class="item" @click="reapply(scope.row.id)"  :class="{show:scope.row.innovateStatusCode !=3 }" >重新申领</button>
                    <!--:disabled="scope.row.innovateStatusCode !=3"-->
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-if="flag" slot-scope="scope"
            background
            :page-size="pageSize"
            layout="total,prev, pager, next, jumper"
            :total="total" style="text-align:right">
        </el-pagination>
    </div>
</template>

<script>
    import util from '../../util/util.js'
    import {getInnovatePageList_T, returnTicket_T} from 'src/model/api'
    export default {
        data() {
            return {
            	    flag:true,
                loading:true,
                total:0,
                pageSize:'',
                userT:'',
              	tableData: [{
		            date: '2016-05-02',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1518 弄'
		          }, {
		            date: '2016-05-04',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1517 弄'
		          }, {
		            date: '2016-05-01',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1519 弄'
		          }, {
		            date: '2016-05-03',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1516 弄'
		          }]
            }
        },
        mounted(){
            setTimeout(()=>{
                this.loading = false;
            },1000);
            this.getInnovatePageList();
            var x =  util.handleCookieGet('userType')
            console.log(x.userType)
            this.userT = x.userType;
        },
        methods: {
            //获取科创券列表
            async getInnovatePageList() {
                var obj={};
                obj.pageNum = 1;
                obj.pageSize = 15;
                var res = await getInnovatePageList_T(obj);
                console.log(res);
                var list = [
                            {
                                "appliEntercode": "",
                                "appliMoney": '',
                                "applicationTime": "",
                                "cashcutoffDate": "",
                                "contractName": "",
                                "contractValue": '',
                                "fkCountydistrict": "",
                                "fkcity": "",
                                "fpRovince": "",
                                "id": "",
                                "innovateCode": "",
                                "innovateStatusCode": '',
                                "remark": "",
                                "reviewedStatusCode": "",
                                "serviceEntercode": "",
                                "servicetypeCode": "",
                                "usecutoffDate": ""
                            }
                        ]
//              list.forEach(function(v, i) {
//                  v.applicationTime = new Date(v.applicationTime).Format('yyyy-MM-dd hh:mm:ss');
//                  v.cashcutoffDate = new Date(v.cashcutoffDate).Format('yyyy-MM-dd hh:mm:ss');
//                  v.usecutoffDate = new Date(v.usecutoffDate).Format('yyyy-MM-dd hh:mm:ss');
//              });
                console.log(list)
                this.tableData = list;
                if(res.body.code == 0) {
                    this.tableData = res.body.data.list;
                    this.total = res.body.data.total;
                    this.pageSize = res.body.data.pageSize;
                    console.log(res.body.data.usecutoffDate)
//                  console.log()
                    console.log(res.body.data.innovateStatusCode)
                } else {
                	   this.flag = false;
                	   console.log(this.userT)
                	   if(this.userT == 1){
                	   		util.confirmtip(res.body.errorDesc,this.$router.push({'name':'messagemanagement_b'}))	
                	   }if(this.userT == 2){
                	   		util.confirmtip(res.body.errorDesc,this.$router.push({'name':'messagemanagement_t'}))
                	   }
                   		            
                }
            },
            //申请退券
            async applyBack(id) {
                var obj = {};
                obj.innovateId = id
                var res = await returnTicket_T(obj);
                console.log(res)
                if(res.body.code == 0) {
                  	util.alertip("退卷成功");
                  	this.getInnovatePageList();
                 // this.tableData = res.body.data.list;
                } else {
                    util.alertip(res.body.message);
                }
            },
            //重新申请券
            reapply(id){
            	console.log(id)
                this.$router.push({'name':'reapply', params: {'id': id}});
            },
            //查看券详情
            detail(id){
            		console.log(id)
                this.$router.push({'name':'detail', params: {'id': id}});
            },
            //申领科技券
            apply(){
                this.$router.push({'name':'apply'});
            },

            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
        }
    }
</script>

<style scoped lang="scss">
    .home{
        background:white;
        .headline{
            border-top: 0.2rem solid #E5E5E5;
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding-left:24px;
            height:60px;
            /*line-height:60px;*/


            border-bottom:1px solid #E7EAEC;
            margin-bottom:27px;
            color:#676A6C;
            font-size:16px;
            letter-spacing: 0.3px;

            .right{
                /*height:14px;*/
                font-size:14px;
                color:white;
                background:#399CFF;
                padding:8px 16px;
                cursor:pointer
            }
        }
        .bottom {
            margin-top: 10px;
            background-color: #f2f2f2;
            width: 100%;
            height: 70px;
            padding: 10px;
            /*position:relative;left:-110px*/


        }
        .item{
            display:inline-block;
            cursor:pointer
        }
        .show{
        		color: gainsboro;
        		background-color: ghostwhite;
        }
    }
</style>
