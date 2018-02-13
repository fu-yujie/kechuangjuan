<template>
	<div class="accountmanagement_county" v-loading="loading">
		<div class="title_account"><span>审核管理/企业、团队信息审核</span></div>

        <div class="area_list">
            <div v-if="userType==4">
			<div class="line"></div>
			<ul>
                <li v-for="(item,index) in list"  @click.prevent="selectarea(item,index)" :class="{red:index==indexPrev}">{{item.text}}</li>
			</ul>
            </div>
			<div class="push_data">
				<span>提交日期</span>
				<el-date-picker v-model="value_date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
				</el-date-picker>
				<span class="copmyany_name font14">输入单位名称</span>
				<el-input class="name font14" v-model="input_company" placeholder="请输入单位名称查询"></el-input>
				<el-button class="search font14" @click="search()">查询</el-button>
			</div>
		</div>


		<div class="status_account">
			<div class="status_line"></div>
			<!--<div class="address">{{areaname | currentarea}}</div>-->
            <!--<div class="address" v-if="userType==4">{{city}}</div>-->
			<div class="slide"></div>
			<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
				<el-tab-pane label="审核中" name="0">
                    <el-table :data="tablelist"  tooltip-effect="dark" style="width: 100%">
                        <el-table-column  label="企业/团队提交日期" prop="createTime">
                            <template slot-scope="scope">
                                <span>{{scope.row.createTime | timeymdhandle }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="账号类型" prop="enttype">
                            <template slot-scope="scope">
                                <span>{{scope.row.enttype | qiyestatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="单位名称" prop="entname"></el-table-column>
                        <el-table-column label="注册地址/办公地址所属区域" prop="area">
                            <template slot-scope="scope">
                                <span>{{scope.row.area | areastaus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="审核状态" prop="auditstatus">
                            <template slot-scope="scope">
                                <span>{{scope.row.auditstatus | reviewstatus }}</span>
                            </template>
                        </el-table-column>
                        <!--<el-table-column label="审核人" prop="createBy"></el-table-column>-->
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <div class="item" v-if="userType==4" @click="detail(scope.row)">查看详情</div>
                                <!--区县才有审核功能-->
                                <div class="item" v-if="userType==3" @click="shenhe(scope.row)">审核</div>
                                <!--<div class="item" v-if="scope.row.enttype==0&&userType==3" @click="shenhe_compony(scope.row)">审核</div>-->
                                <!--<div class="item" @click="reapply">重新申领</div>-->
                            </template>
                        </el-table-column>

                    </el-table>
                </el-tab-pane>
				<el-tab-pane label="审核通过" name="1">
                    <el-table :data="tablelist"  tooltip-effect="dark" style="width: 100%">
                        <el-table-column v-if="" label="区县审核通过日期" prop="createTime">
                            <template slot-scope="scope">
                                <span>{{scope.row.createTime | timeymdhandle }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="账号类型" prop="enttype">
                            <template slot-scope="scope">
                                <span>{{scope.row.enttype | qiyestatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="单位名称" prop="entname"></el-table-column>
                        <el-table-column label="注册地址/办公地址所属区域" prop="area">
                            <template slot-scope="scope">
                                <span>{{scope.row.area | areastaus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="审核状态" prop="auditstatus">
                            <template slot-scope="scope">
                                <span>{{scope.row.auditstatus | reviewstatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="审核人" prop="relName"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <div class="item" @click="detail(scope.row)">查看详情</div>
                                <div class="item" @click="reject(scope.row)">驳回</div>
                                <!--<div class="item" @click="reapply">重新申领</div>-->
                            </template>
                        </el-table-column>

                    </el-table>
                </el-tab-pane>
				<el-tab-pane label="审核不通过" name="2">
                    <el-table :data="tablelist"  tooltip-effect="dark" style="width: 100%">
                        <el-table-column v-if="" label="区县审核不通过日期" prop="createTime">
                            <template slot-scope="scope">
                                <span>{{scope.row.createTime | timeymdhandle }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="账号类型" prop="enttype">
                            <template slot-scope="scope">
                                <span>{{scope.row.enttype | qiyestatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="单位名称" prop="entname"></el-table-column>
                        <el-table-column label="注册地址/办公地址所属区域" prop="area">
                            <template slot-scope="scope">
                                <span>{{scope.row.area | areastaus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="审核状态" prop="auditstatus">
                            <template slot-scope="scope">
                                <span>{{scope.row.auditstatus | reviewstatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="审核人" prop="relName"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <div class="item" @click="detail(scope.row)">查看详情</div>
                                <!--<div class="item" @click="reapply">重新申领</div>-->
                            </template>
                        </el-table-column>

                    </el-table>
                </el-tab-pane>
				<el-tab-pane label="已驳回" name="3">
                    <el-table :data="tablelist" tooltip-effect="dark" style="width: 100%">
                        <el-table-column v-if="" label="驳回日期" prop="createTime">
                            <template slot-scope="scope">
                                <span>{{scope.row.createTime | timeymdhandle }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="账号类型" prop="enttype">
                            <template slot-scope="scope">
                                <span>{{scope.row.enttype | qiyestatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="单位名称" prop="entname"></el-table-column>
                        <el-table-column label="注册地址/办公地址所属区域" prop="area">
                            <template slot-scope="scope">
                                <span>{{scope.row.area | areastaus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="审核状态" prop="auditstatus">
                            <template slot-scope="scope">
                                <span>{{scope.row.auditstatus | reviewstatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="驳回人" prop="relName"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <div class="item" @click="detail(scope.row)" >查看详情</div>
                                <!--<div class="item" @click="reapply">重新申领</div>-->
                            </template>
                        </el-table-column>

                    </el-table>
                </el-tab-pane>
			</el-tabs>
			<div class="status_table">

				<el-pagination style="margin-buttom: 2.0rem" class="pagingpage pagingpage2" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="total">
				</el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
	import util from 'src/util/util.js'
    import {enterAll,updateEnterStatus,userInfo} from 'src/model/api'
import cityDatas from '../../../static/js/citydata'

	export default {
		name: 'accountmanagement_county',
		props: [],
		data() {
			return {
                indexPrev:0,
			    areaname:'',
                city:'',
			    value:'',
			    page:1,
                tabname:'0',
                /*userType:'',*/
                pageSize:15,
                total:0,
				value_date:[],//开始结束日期
				timeStart: '',
				timeEnd: '',
				input_company: '',
				userType:'',
				loading: true,
				activeName: '0',
				currentPage: 1, //当前页面
				tablelist: [],
                list:[
                    {
                        value: "",
                        text: "不限",
                    },
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
                       ]


			}
		},
		components: {

		},
		watch: {

		},
		created() {
            //this.userType=this.$parent.userType;
            var _this=this;
            let a=util.handleCookieGet('userType');
            _this.userType=a.userType;
            userInfo().then(function(res){
                _this.value=res.body.data.area;
                _this.areaname=res.body.data.area;
                _this.city=res.body.data.city;
                var obj={};
                if(a.userType==3){
                    obj.area=_this.areaname;
                }else if(a.userType==4){
                    obj.area='';
                }
                /*obj.area=_this.areaname;*/
                obj.userType=a.userType;
                obj.auditstatus=0;
                obj.page=_this.page;
                obj.rows=_this.pageSize;
                /* try{
                     var result=enterAll(obj);
                     console.log(result);
                 }*/
                enterAll(obj).then(function(res){
                    console.log(11);
                    console.log(res);
                    _this.tablelist=res.body.data.rows;
                    console.log(_this.tablelist);
                    _this.total=res.body.data.total;
                })
            });



		},
		methods: {
            selectarea(item,index){
                var _this=this;
                _this.input_company='';
                _this.value_date=[]
                _this.indexPrev=index;
               /* alert(index);*/
                _this.areaname=item.text;
                let a=util.handleCookieGet('userType');
                _this.userType=a.userType;
                _this.value=item.value;
                var obj={};
                obj.area=item.value;
                obj.userType=a.userType;
                obj.auditstatus=0;
                obj.page=this.page;
                obj.rows=this.pageSize;
                /* try{
                     var result=enterAll(obj);
                     console.log(result);
                 }*/
                enterAll(obj).then(function(res){
                    console.log(11);
                    console.log(res);
                    _this.tablelist=res.body.data.rows;
                    console.log(_this.tablelist)
                })
            },
		    //驳回
            reject(row){

                this.$confirm('\n' +
                    '驳回之后，企业或团队需要重新提交信息，区县重新审核。您确定驳回？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: ''
                }).then(() => {
                    var _this=this;
                    var obj={};
                    obj.id=row.id;
                    obj.auditstatus=3;
                    updateEnterStatus(obj).then(function(res){

                        console.log(666666);
                        console.log(res);
                        if(res.body.code==0){
                            _this.$message({
                                type: 'success',
                                message: '驳回成功!'
                            });
                        }else{
                            _this.$message({
                                type: 'success',
                                message: '驳回失败!'
                            });
                        }
                    })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消驳回'
                    });
                });
            },
			search(){
			    var _this=this;
			    console.log(_this.value_date)
				/*var pam={};
				pam.value_date = this.value_date;
				pam.input_company = this.input_company;
				pam.userType	 = this.userType	;
				console.log(typeof(pam.value_date[0]) );*/
				var obj={};
                let a=util.handleCookieGet('userType');
                console.log(555);
                console.log(a.userType);
                obj.area=_this.value;
                obj.userType=a.userType;
                obj.auditstatus=this.tabname;
                if(_this.value_date.length==0){
                    obj.timeStart='';
                    obj.timeEnd=''

                }else{
                    var myDate = new Date(_this.value_date[0]);
                    obj.timeStart=myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + "-"+myDate.getDate()+' '+ myDate.getHours()+':'+myDate.getMinutes()+':'+myDate.getSeconds() ;
                    /*console.log(_this.value6[0])
                    console.log(obj.timeStart);*/
                    var myDate1=new Date(_this.value_date[1]);
                    obj.timeEnd=myDate1.getFullYear() + '-' + (myDate1.getMonth() + 1) + "-"+myDate1.getDate()+' '+ 23+':'+59+':'+59 ;
                }

               /* var starttime=_this.value_date[0];
                var endtime=_this.value_date[1];*/
                obj.entname=this.input_company;
               /* obj.page=this.page;
                obj.rows=this.pageSize;*/
                enterAll(obj).then(function(res){
                    console.log(22);
                    console.log(res);

                    if(res.body.code==0){
                        _this.tablelist=res.body.data.rows;
                        console.log(_this.tablelist);
                        _this.total=res.body.data.total;
                    }else{
                        util.errortip(res.body.errorDesc)
                    }
                })

			},
			//切换tab
			handleClick(tab, event) {
				console.log(tab.name);
				//console.log(event.target.getAttribute('id'));
                var _this=this;
                _this.input_company='';
                _this.value_date=[]
                let a=util.handleCookieGet('userType');
                console.log(555);
                console.log(a.userType);
                var obj={};
                obj.area=_this.value;
                obj.userType=a.userType;
                obj.auditstatus=tab.name;
                _this.tabname=tab.name
                obj.page=this.page;
                obj.rows=this.pageSize;
                /* try{
                     var result=enterAll(obj);
                     console.log(result);
                 }*/
                enterAll(obj).then(function(res){
                    console.log(11)
                    console.log(res);
                    _this.tablelist=res.body.data.rows;
                    console.log(_this.tablelist);
                    _this.total=res.body.data.total
                })
			},
			//分页改变时候
			handleCurrentChange(val) {

				console.log(val);
                var _this=this;
                let a=util.handleCookieGet('userType');
                console.log(555);
                console.log(a.userType);
                var obj={};
                obj.area=_this.value;
                obj.userType=a.userType;
                obj.auditstatus=_this.tabname;
                obj.page=val;
                obj.rows=this.pageSize;
                /* try{
                     var result=enterAll(obj);
                     console.log(result);
                 }*/
                enterAll(obj).then(function(res){
                    console.log(11)
                    console.log(res);
                    _this.tablelist=res.body.data.rows;
                    console.log(_this.tablelist)
                })
			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			reapply() {
				this.$router.push({
					'name': 'reapply'
				});
			},
			detail(row) {
				/*this.$router.push({
					'name': 'infocheckdetail',params:{id:row.id,enttype:row.enttype,polcode:row.polcode}
				});*/

                if(row.enttype==1){
                    this.$router.push({
                        'name': 'infocheckdetail_team',params:{id:row.id,enttype:row.enttype,polcode:row.polcode}
                    });
                }else if(row.enttype==0){
                    this.$router.push({
                        'name': 'infocheckdetail',params:{id:row.id,enttype:row.enttype,polcode:row.polcode}
                    });
                }
			},
			apply() {
				this.$router.push({
					'name': 'apply'
				});
			},
            shenhe(row){
                if(row.enttype==1){
                    this.$router.push({
                        'name': 'quxianReview_team',params:{id:row.id,enttype:row.enttype,polcode:row.polcode}
                    });
                }else if(row.enttype==0){
                    this.$router.push({
                        'name': 'quxianReview_compony',params:{id:row.id,enttype:row.enttype,polcode:row.polcode}
                    });
                }

            },
            shenhe_compony(row){

            }
            /*RowCurrentChange(val){
                this.$router.push({
                    'name': 'infocheckdetail',params:{id:val.id,enttype:val.enttype,polcode:val.polcode}
                });
            }*/
		},
		mounted() {
		    /*let a=util.handleCookieGet('userType')
		    console.log(555);
		    console.log(a);*/
			setTimeout(() => {
				this.loading = false;
			}, 1000);
		}
	}
</script>
<style lang="scss" scoped>
    .item{
        color:#399CFF;
        cursor: pointer;
    }
    .red{
        color:#399CFF;
    }
	.accountmanagement_county {
		position: absolute;
		top: 0;
		left: 0;
		.title_account {
			@include wh(83.1rem, 2.7rem);
			background: #ffffff;
			span {
				display: block;
				padding: 0.8rem 0 0 1.6rem;
			}
		}
		.area_list {
			margin: 1.2rem 0 0 1.5rem;
			@include wh(80.1rem, auto);
			background-color: #ffffff;
			.line {
				@include wh(80.1rem, 0.2rem);
				background: #E7EAEC;
			}
			ul {
				@include wh(80.1rem, 1rem) margin: 0.8rem 0 0 1.16rem;
				li {
					font-size: 0.7rem;
					float: left;
					margin-right: 1rem;
				}
			}
			.push_data {
				margin: 0.6rem 0 0 1.16rem;
				font-size: 0.7rem;
				.copmyany_name {
					display: inline-block;
					margin-left: 1.5rem;
				}
				.name {
					@include wh(12rem, 1.7rem) margin-left: 1.5rem;
				}
				.search {
					@include wh(4.4rem, 1.9rem) background: #399CFF;
					color: #ffffff;
					margin-left: 1.5rem;
				}
			}
		}
		.status_account {
			/*@include wh(80.1rem, 38.5rem);*/
			margin: 1.3rem 0 0 1.5rem;
			background-color: #ffffff;
			.status_line {
				@include wh(80.1rem, 0.2rem);
				background: #E7EAEC;
			}
			.address {
				font-size: 16px;
				padding: 1rem 0 0 1.5rem;
			}
			.slide {
				@include wh(80.1rem, 0.1rem);
				background: #E7EAEC;
				margin-top: 0.75rem;
			}
			.status_table {
				@include wh(78rem, 100%);
				margin: 1.5rem 0 0 1.5rem;
			}
			.item {
				display: inline-block;
			}
		}
	}
</style>
