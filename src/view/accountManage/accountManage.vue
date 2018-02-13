<template>
	<div class="accountManage">
		<div class="manage"><strong>账号管理</strong></div>
		<div class="home" v-loading="loading">

			<div class="headline">
				<strong>市区：{{areaname | areastaus}}</strong>

			</div>

			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="userType" label="账号类型" min-width="20%" style="font-size:14px">
                    <template slot-scope="scope">
                        <span>{{scope.row.userType | userTypeStatus }}</span>
                    </template>
				</el-table-column>
				<el-table-column prop="userName" label="登录用户名" min-width="16%">
				</el-table-column>
				<el-table-column prop="relName" label="用户姓名" min-width="16%">

					>

				</el-table-column>
				<el-table-column prop="mobile" label="注册手机号" min-width="16%">

					>

				</el-table-column>
				<el-table-column prop="unitName" label="单位名称" min-width="16%">

                    <template slot-scope="scope" >
                        <span v-if="scope.row.userType!==3">{{scope.row.unitName}}</span>
                        <span v-if="scope.row.userType==3">{{scope.row.area | areastaus }}</span>
                    </template>
				</el-table-column>
				<el-table-column prop="createTime" label="开通时间" min-width="16%">


                    <template slot-scope="scope">
                        <span>{{scope.row.createTime | timeymdhandle }}</span>
                    </template>

				</el-table-column>

			</el-table>
            <el-pagination style="margin-buttom: 2.0rem"
                           class="pagingpage pagingpage2"
                           @current-change="handleCurrentChange"
                           :current-page="currentPage"
                           :page-size="pageSize"
                           layout="total, prev, pager, next, jumper"
                           :total="total">
            </el-pagination>
			<!--<el-row class="bottom">
            <el-col :span="10" :offset="14">
                <el-pagination :page-size="10" layout="total,prev, pager, next, jumper" :total="100"
                               @current-change="handleCurrentChange"></el-pagination>
            </el-col>

        </el-row>-->

		</div>
	</div>
</template>

<script>
    import {userAll,initInfo,userInfo} from 'src/model/api'
    import util from 'src/util/util.js'
	export default {
		name:'accountManage',
		data() {
			return {
                pageSize:15,
                total:0,
                page:1,
                currentPage:1,//当前页面
                areaname:'',
				loading: true,
				tableData: []
			}
		},
		mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 1000);
		},
        created:function(){

            var _this=this;

            userInfo().then(function(res){
                console.log(res);
                console.log(555)
                console.log(res.body.data);
                _this.areaname=res.body.data.area;



                var obj={};
                obj.area=_this.areaname;
                /*alert(_this.areaname)*/
                obj.page=1;
                obj.rows=15;
                obj.userType=3;
                userAll(obj).then(function(res){
                    console.log(res);
                    _this.tableData=res.body.data.rows;
                    _this.total=res.body.data.total;
                })

                //_this.city=res.body.data.city;
            });
           /* let a=util.handleCookieGet('userType');
            obj.userType=a.userType;*/

        },
		methods: {
            handleCurrentChange(val){
                console.log(val)
                var _this=this;
                let a=util.handleCookieGet('userType');
                console.log(555);
                console.log(a.userType);
                var obj={};
                obj.area=_this.areaname;
                obj.userType=a.userType;
                obj.auditstatus=_this.tabname;
                obj.page=val;
                obj.rows=this.pageSize;
                /* try{
                     var result=enterAll(obj);
                     console.log(result);
                 }*/
                userAll(obj).then(function(res){
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
			detail() {
				this.$router.push({
					'name': 'detail'
				});
			},
			apply() {
				this.$router.push({
					'name': 'apply'
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	.accountManage {
		/* position:absolute;
        top:0;
        left:0;*/
	}

	.manage {
		background: white;
		margin-top: -1.5rem;
		margin-bottom: 1rem;
		height: 53px;
		line-height: 53px;
		padding-left: 24px;
	}

	.home {
		background: white;
		.headline {
			border-top: 0.2rem solid #E5E5E5;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-left: 24px;
			height: 60px;
			/*line-height:60px;*/
			border-bottom: 1px solid #E7EAEC;
			margin-bottom: 27px;
			color: #676A6C;
			font-size: 16px;
			letter-spacing: 0.3px;
			.right {
				/*height:14px;*/
				font-size: 14px;
				color: white;
				background: #399CFF;
				padding: 8px 16px;
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
		.item {
			display: inline-block
		}
	}
</style>
