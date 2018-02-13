<template>
    <div class="apply_review"   v-loading="loading">
        <div class="title_account"><span>审核管理/科技创新券申领审核</span></div>
        <div class="area_list">
            <!--<div class="line"></div>
            <ul>
                <li>区县</li>
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
                <li>大厂回族自治县</li>
            </ul>-->
            <div class="push_data">
                <span>申领日期</span>
                <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
                <span class="copmyany_name font14">输入单位名称</span>
                <el-input class="name font14" v-model="input_company" placeholder="请输入单位名称查询"></el-input>
                <el-button class="search font14" @click="search()">查询</el-button>
            </div>
        </div>

        <div class="status_account">
            <div class="status_line"></div>
           <!-- <div class="address">{{areaname}}</div>-->
            <div class="slide"></div>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="区县审核中" name="1">
                    <el-table :data="tablelist" tooltip-effect="dark"  style="width: 100%" >
                        <el-table-column  label="申领科技创新券日期"  prop="createTime">
                            <template slot-scope="scope">
                                <span>{{scope.row.createTime | timeymdhandle }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column  label="账号类型" prop="enttype">
                            <template slot-scope="scope">
                                <span>{{scope.row.enttype | qiyestatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column  label="单位名称" prop="entname"></el-table-column>
                        <el-table-column  label="注册地址/办公地址所属区域" prop="fkCountydistrict"></el-table-column>
                        <el-table-column  label="申领金额" prop="appliMoney"></el-table-column>
                        <el-table-column  label="科技创新券状态" prop="innovateStatusCode">
                            <template slot-scope="scope">
                                <span>{{scope.row.innovateStatusCode | changejuanStatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column  label="审核状态" prop="reviewedStatusCode">
                            <template slot-scope="scope">
                                <span>{{scope.row.reviewedStatusCode | changeReviewStatus }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column  label="操作">
                            <template slot-scope="scope">
                                <div class="item" @click="shenhe(scope.row)">审核</div>
                            </template>
                        </el-table-column>

                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="区县审核通过" name="3">
                    <el-table :data="tablelist" tooltip-effect="dark"  style="width: 100%" >
                        <el-table-column  label="区县审核通过日期"  prop="createTime">
                            <template slot-scope="scope">
                                <span>{{scope.row.createTime | timeymdhandle }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column  label="账号类型" prop="enttype">
                            <template slot-scope="scope">
                                <span>{{scope.row.enttype | qiyestatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column  label="单位名称" prop="entname"></el-table-column>
                        <el-table-column  label="注册地址/办公地址所属区域" prop="fkCountydistrict"></el-table-column>
                        <el-table-column  label="申领金额" prop="appliMoney"></el-table-column>
                        <el-table-column  label="科技创新券状态" prop="innovateStatusCode">
                            <template slot-scope="scope">
                                <span>{{scope.row.innovateStatusCode | changejuanStatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column  label="审核状态" prop="reviewedStatusCode">
                            <template slot-scope="scope">
                                <span>{{scope.row.reviewedStatusCode | changeReviewStatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="审核人" prop="relName"></el-table-column>
                        <el-table-column  label="操作">
                            <template slot-scope="scope">
                                <div class="item" @click="detail(scope.row)">查看详情</div>
                            </template>
                        </el-table-column>

                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="区县审核不通过" name="2">
                    <el-table :data="tablelist" tooltip-effect="dark"  style="width: 100%" >
                        <el-table-column  label="区县审核不通过日期"  prop="createTime">
                            <template slot-scope="scope">
                                <span>{{scope.row.createTime | timeymdhandle }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column  label="账号类型" prop="enttype">
                            <template slot-scope="scope">
                                <span>{{scope.row.enttype | qiyestatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column  label="单位名称" prop="entname"></el-table-column>
                        <el-table-column  label="注册地址/办公地址所属区域" prop="fkCountydistrict"></el-table-column>
                        <el-table-column  label="申领金额" prop="appliMoney"></el-table-column>
                        <el-table-column  label="科技创新券状态" prop="innovateStatusCode">
                            <template slot-scope="scope">
                                <span>{{scope.row.innovateStatusCode | changejuanStatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column  label="审核状态" prop="reviewedStatusCode">
                            <template slot-scope="scope">
                                <span>{{scope.row.reviewedStatusCode | changeReviewStatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="审核人" prop="relName"></el-table-column>
                        <el-table-column  label="操作">
                            <template slot-scope="scope">
                                <div class="item" @click="detail(scope.row)">查看详情</div>
                            </template>
                        </el-table-column>

                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="市科技局审核通过" name="5">
                <el-table :data="tablelist" tooltip-effect="dark"  style="width: 100%" >
                    <el-table-column  label="市科技局审核通过日期"  prop="createTime">
                        <template slot-scope="scope">
                            <span>{{scope.row.createTime | timeymdhandle }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column  label="账号类型" prop="enttype">
                        <template slot-scope="scope">
                            <span>{{scope.row.enttype | qiyestatus }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column  label="单位名称" prop="entname"></el-table-column>
                    <el-table-column  label="注册地址/办公地址所属区域" prop="fkCountydistrict"></el-table-column>
                    <el-table-column  label="申领金额" prop="appliMoney"></el-table-column>
                    <el-table-column  label="科技创新券状态" prop="innovateStatusCode">
                        <template slot-scope="scope">
                            <span>{{scope.row.innovateStatusCode | changejuanStatus }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column  label="审核状态" prop="reviewedStatusCode">
                        <template slot-scope="scope">
                            <span>{{scope.row.reviewedStatusCode | changeReviewStatus }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="审核人" prop="relName"></el-table-column>
                    <el-table-column  label="操作">
                        <template slot-scope="scope">
                            <div class="item" @click="detail(scope.row)">查看详情</div>
                        </template>
                    </el-table-column>

                </el-table>
            </el-tab-pane>
                <el-tab-pane label="市科技局审核不通过" name="6">
                    <el-table :data="tablelist" tooltip-effect="dark"  style="width: 100%" >
                        <el-table-column  label="市科技局审核不通过"  prop="createTime">
                            <template slot-scope="scope">
                                <span>{{scope.row.createTime | timeymdhandle }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column  label="账号类型" prop="enttype">
                            <template slot-scope="scope">
                                <span>{{scope.row.enttype | qiyestatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column  label="单位名称" prop="entname"></el-table-column>
                        <el-table-column  label="注册地址/办公地址所属区域" prop="fkCountydistrict"></el-table-column>
                        <el-table-column  label="申领金额" prop="appliMoney"></el-table-column>
                        <el-table-column  label="科技创新券状态" prop="innovateStatusCode">
                            <template slot-scope="scope">
                                <span>{{scope.row.innovateStatusCode | changeReviewStatus }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column  label="审核状态" prop="reviewedStatusCode"></el-table-column>
                        <el-table-column label="审核人" prop="relName"></el-table-column>
                        <el-table-column  label="操作">
                            <template slot-scope="scope">
                                <div class="item" @click="detail(scope.row)">查看详情</div>
                            </template>
                        </el-table-column>

                    </el-table>
                </el-tab-pane>
            </el-tabs>
            <!--<el-radio-group v-model="tabPosition" style="margin:24px 0 0 30px;">
                <el-radio-button label="top">市科技局审核中</el-radio-button>
                <el-radio-button label="right">市科技局审核通过</el-radio-button>
                <el-radio-button label="bottom">市科技局审核不通过</el-radio-button>
                <el-radio-button label="left">区县审核中</el-radio-button>
            </el-radio-group>-->
            <div class="status_table">

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
    import {enterApplyAll,innovateOne,userInfo} from 'src/model/api'
    import util from 'src/util/util.js'
    export default {
        name: 'apply_review',
        props : [],
        data () {
            return {
                tabname:1,
                areaname:'',
                input_company:'',
                value6:'',
                activeName: '1',
                page:1,
                pageSize:15,
                total:0,
                loading:true,
                currentPage:1,//当前页面
                tablelist:[

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
            let a=util.handleCookieGet('userType');
            userInfo().then(function(res){
                console.log(res);
                console.log(555);
                console.log(res.body.data);
                _this.areaname=res.body.data.area;
                var obj={};
                if(a.userType==3){
                    obj.area=_this.areaname;
                }else if(a.userType==4){
                    obj.area='';
                }
                /*obj.area='';*/
                obj.userType=a.userType;
                obj.auditstatus=1;
                obj.page=_this.page;
                obj.rows=_this.pageSize;
                /* try{
                     var result=enterAll(obj);
                     console.log(result);
                 }*/
                enterApplyAll(obj).then(function(res){
                    console.log(11)
                    console.log(res);
                    _this.tablelist=res.body.data.rows;
                    console.log(_this.tablelist);
                    _this.total=res.body.data.total;
                })
                //_this.city=res.body.data.city;
            })
            console.log(555);
            console.log(a);

        },
        methods : {
            handleClick(tab, event) {
                console.log(tab.name);
                let a=util.handleCookieGet('userType')
                console.log(555);
                console.log(a);
                var _this=this;
                _this.input_company='';
                _this.value6=[]
                var obj={};
                obj.area=_this.areaname;
                obj.userType=a.userType;
                obj.auditstatus=tab.name;
                _this.tabname=tab.name;
                obj.page=this.page;
                obj.rows=this.pageSize;
                /* try{
                     var result=enterAll(obj);
                     console.log(result);
                 }*/
                enterApplyAll(obj).then(function(res){
                    console.log(11);
                    console.log(res);
                    _this.tablelist=res.body.data.rows;
                    console.log(_this.tablelist)
                })
                //console.log(event.target.getAttribute('id'));
            },
            //分页改变时候
            handleCurrentChange(val){
                console.log(val);
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
                enterApplyAll(obj).then(function(res){
                    console.log(11);
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
            detail(row){
                this.$router.push({'name':'apply_review_detail',params:{id:row.id,enttype:row.enttype,polcode:row.polcode}});
            },
            shenhe(row){
                this.$router.push({
                    'name': 'no_pass_bus',params:{id:row.id,enttype:row.enttype,polcode:row.polcode}
                });

            },
            reject(){

            },
            apply(){
                this.$router.push({'name':'apply'});
            },
            search(){
                let a=util.handleCookieGet('userType');
                console.log(555);
                console.log(a);
                var _this=this;
                var obj={};
                obj.area=_this.areaname;
                if(_this.value6.length==0){
                    obj.timeStart='';
                    obj.timeEnd='';
                }else{
                    var myDate = new Date(_this.value6[0]);
                    obj.timeStart=myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + "-"+myDate.getDate()+' '+ myDate.getHours()+':'+myDate.getMinutes()+':'+myDate.getSeconds() ;
                    /*console.log(_this.value6[0])
                    console.log(obj.timeStart);*/
                    var myDate1=new Date(_this.value6[1]);
                    obj.timeEnd=myDate1.getFullYear() + '-' + (myDate1.getMonth() + 1) + "-"+myDate1.getDate()+' '+ 23+':'+59+':'+59 ;
                }
                obj.userType=a.userType;
                obj.auditstatus=_this.tabname;
                /*obj.auditstatus=tab.name;*/
                obj.entname=_this.input_company;
                /*obj.page=this.page;
                obj.rows=this.pageSize;*/
                /* try{
                     var result=enterAll(obj);
                     console.log(result);
                 }*/
                enterApplyAll(obj).then(function(res){
                    console.log(11);
                    console.log(res);
                    if(res.body.code==0){
                        _this.tablelist=res.body.data.rows;
                        console.log(_this.tablelist);
                        _this.total=res.body.data.total;
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
    .apply_review{
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
            margin: 1.2rem 0 0 1.5rem;
            @include wh(80.1rem,2rem);
            background-color:#ffffff;
            .line{
                @include wh(80.1rem,0.2rem);
                background:#E7EAEC;
            }
            ul{
                @include wh(80.1rem,1rem);
                margin: 0.8rem 0 0 1.16rem;
                li{
                    font-size:0.7rem;
                    float:left;
                    margin-right:1rem;
                }
            }
            .push_data{
                margin: 0.8rem 0 0 1.16rem;
                font-size:0.7rem;
                .copmyany_name{
                    display:inline-block;
                    margin-left: 1.5rem;
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

            }
        }
        .status_account{
            @include wh(80.1rem,100%);
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
                margin-top:0.75rem;
            }
            .status_table{
                @include wh(77.5rem,100%);
                margin: 1.5rem 0 0 1.5rem;
            }
            .item{
                display:inline-block;
                color:#399CFF;
                margin-left: 1.15rem;
            }
            .divline{
                background-color:$gray2;
                @include wh(1px,1rem);
                display: inline-block;
                margin: 0 0 0 0.8rem;
                vertical-align: middle;
            }
        }

    }
</style>
