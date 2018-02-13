<template>
    <div class="accountmanagement_county" v-loading="loading">
        <div class="title_account"><span>账号管理</span></div>
        <div class="area_list">
            <div class="line"></div>
             <ul>
                 <li v-for="(item,index) in list" @click.prevent="selectarea(item,index)" :class="{red:index==indexPrev}">{{item.text}}</li>
               <!-- <li>区县</li>
                <li>不限</li>
                <li>三河市</li>
                <li>霸州市</li>
                <li>安次区</li>
                <li>广阳区</li>
                <li>开发区</li>
                <li>文安县</li>
                <li>大城县</li>
                <li>固安县</li>
                <li>三河市</li>
                <li>永清县</li>
                <li>大厂回族自治县</li>-->
             </ul>
            <div class="push_data">
                <el-input class="name font14" v-model="input" placeholder="请输入单位名称查询"></el-input>
                <el-button class="search font14" @click="searchClick">查询</el-button>
                <el-button class="addper font14" @click="addper()">添加用户</el-button>
            </div>
        </div>

        <div class="status_account">
            <div class="status_line"></div>
            <div style="height:57px;line-height:57px;margin-left:1.5rem">账号管理</div>
            <div class="slide"></div>

            <div class="status_table">
                <el-table :data="tablelist" tooltip-effect="dark"  style="width: 100%" >
                    <el-table-column  label="账号类型" prop="userType">
                        <template slot-scope="scope">
                            <span>{{scope.row.userType | userTypeStatus }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column  label="登录用户名" prop="userName"></el-table-column>
                    <el-table-column  label="用户姓名" prop="relName"></el-table-column>
                    <el-table-column  label="用户手机号" prop="mobile"></el-table-column>
                    <el-table-column  label="单位名称" prop="area">
                        <template slot-scope="scope">
                            <span v-if="scope.row.userType==3">{{scope.row.area | areastaus }}</span>
                            <span v-if="scope.row.userType!==3">{{scope.row.unitName}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column  label="操作">
                        <template slot-scope="scope">
                            <div style="display:flex;align-items: center">
                            <div class="item" @click="resetAccount(scope.row)">重置密码</div>
                            <div style="height:16px;background:#D8D8D8;width:2px;display:inline-block;margin:0 14px;"></div>
                            <div class="item" @click="deleteAccount(scope.row)">删除账号</div>
                            </div>
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
            </div>
        </div>
    </div>
</template>
<script>
    import util from 'src/util/util.js'
    import {userAll,initInfo,delAccount,resetAccount} from 'src/model/api'

    export default {
        name: 'accountmanagement_county',
        props : [],
        data () {
            return {
                pageSize:15,
                total:0,
                page:1,
                indexPrev:0,
                input:'',
                value:'',
                loading:true,
                currentPage:1,//当前页面
                tablelist:[

                ],
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
        watch:{

        },
        created(){
            var obj={};
            var _this=this;
            obj.area='';
            obj.page=this.page;
            obj.rows=this.pageSize;
            obj.userType=4;
            userAll(obj).then(function(res){
                console.log(res);
                _this.tablelist=res.body.data.rows;
                _this.total=res.body.data.total;
            })
        },
        methods : {
            selectarea(item,index){
                var obj={};
                var _this=this;
                _this.input='';
                _this.indexPrev=index;
                _this.value=item.value;
                obj.area=item.value;
                obj.page=this.page;
                obj.rows=this.pageSize;
                userAll(obj).then(function(res){
                    console.log(res);
                    _this.tablelist=res.body.data.rows;
                    _this.total=res.body.data.total;
                })
            },
            //点击查询
              searchClick(){
                  var obj={};
                  var _this=this;
                  obj.area=_this.value;
                  obj.page=this.page;
                  obj.rows=this.pageSize;
                  obj.user_unit_mobile_relName=_this.input
                  userAll(obj).then(function(res){
                      console.log(res);
                      _this.tablelist=res.body.data.rows;
                      _this.total=res.body.data.total
                  })

              },
        		//添加用户
        		addper(){
        			this.$router.push({'name':'addaccount'});
        		},
            //分页改变时候
            handleCurrentChange(val){
                console.log(val)
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
            reapply(){
                this.$router.push({'name':'reapply'});
            },
            detail(){
                this.$router.push({'name':'detail'});
            },
            apply(){
                this.$router.push({'name':'apply'});
            },
            resetAccount(row){
                  var _this=this;
                this.$confirm('重置密码后，账号密码将初始化为123456。您确定账号重置密码？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                   /* type: 'warning'*/
                }).then(() => {
                    var obj={};
                    obj.id=row.id
                    resetAccount(obj).then(function(res){
                        console.log(4444);
                        console.log(res);
                        if(res.body.code==0){
                            _this.$message({
                                type: 'success',
                                message: '密码重置成功!'
                            });
                        }
                    })

            }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: '已取消重置'
                });
            });
            },
            deleteAccount(row){
                  var obj={};
                  obj.id=row.id;
                  var _this=this;
                  delAccount(obj).then(function(res){
                      console.log(222);
                      console.log(res);
                      if(res.body.code==0){

                          _this.$confirm('\n' +
                              '账号删除后，用户将无法再登录系统。此账号相关的申领信息、兑付信息、团队或企业基本信息都将被自动删除，您确定删除账号？', '提示', {
                              confirmButtonText: '确定',
                              cancelButtonText: '取消',
                              /* type: 'warning'*/
                          }).then(() => {
                              var obj={};
                              obj.area=_this.value;
                              obj.page=1;
                              obj.rows=15;
                              obj.userType=4
                              userAll(obj).then(function(res){
                                  console.log(res);
                                  _this.tablelist=res.body.data.rows;
                              })

                          }).catch(() => {
                              _this.$message({
                                  type: 'info',
                                  message: '已取消删除'
                              });
                          });

                      }else{
                          util.errortip(res.body.errorDesc)
                      }
                  })
            }
        },
        mounted(){
            setTimeout(()=>{
                this.loading = false;
        },1000);
        }
    }

</script>
<style lang="scss" scoped>
    .red{
        color:#399CFF;
    }
    .accountmanagement_county{
        position:absolute;
        top:0;
        left:0;
        .title_account{
            @include wh(83.1rem,2.7rem);
            background:#ffffff;
            span{
                display:block;
                padding: 0.8rem 0 0 1.6rem;
            }

        }
        .area_list{
            margin: 0.2rem 0 0 1.5rem;
            @include wh(80.1rem,5.3rem);
            line-height:3.3rem;
            background-color:#ffffff;
            .line{
                @include wh(80.1rem,0.2rem);
                background:#E7EAEC;
            }
            ul{
            		display: block;
                @include wh(80.1rem,2rem);
                margin: 0.2rem 0 0 1.16rem;
                li{
                		height: 30px;
                    font-size:0.7rem;
                    float:left;
                    margin-right:1rem;
                }
            }
            .push_data{
            	clear: both;
                /*margin: 0.6rem 0 0 1.16rem;*/
                font-size:0.7rem;
                .copmyany_name{
                    /*display:inline-block;*/
                    /*margin-left: 1.5rem;*/
                }
                .name{
                    @include wh(12rem,1.7rem);
                    margin-left: 1.5rem;
                }
                .search{
                    @include wh(4.4rem,1.9rem);
                    background:#399CFF;
                    color:#ffffff;
                    margin-left: 1.5rem;
                }
                .addper{
                    background:#399CFF;
                    color:#ffffff;
                    float: right;
                    margin: 20px 20px 0 0 ;
                }
            }
        }
        .status_account{
            @include wh(80.1rem,38.5rem);
            margin: 1.3rem 0 0 1.5rem;
            background-color:#ffffff;
            .status_line{
                @include wh(80.1rem,0.2rem);
                background:#E7EAEC;
            }
            .address{
                font-size:16px;
                padding: 1rem 0 0 1.5rem;
            }
            .slide{
                @include wh(80.1rem,0.1rem);
                background:#E7EAEC;
                /*margin-top:0.75rem;*/
            }
            .status_table{
                @include wh(78rem,100%);
                margin: 1.5rem 0 0 1.5rem;
            }
            .item{
                color:#399CFF;
                display:inline-block;
                cursor: pointer;
            }
        }

    }
</style>
