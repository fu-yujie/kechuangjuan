<template>
    <div class="accountmanagement" >
            <div class="title_account"><span>审核管理/企业、团队信息审核</span></div>
            <div class="area_list">
                 <div class="line"></div>
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
                 </ul>
                 <div class="push_data">
                    <span>提交日期</span>
                    <el-date-picker
                            v-model="value6"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                    <span class="copmyany_name font14">输入单位名称</span>
                    <el-input class="name font14" v-model="input" placeholder="请输入单位名称查询"></el-input>
                    <el-button class="search font14">查询</el-button>
                 </div>
            </div>

            <div class="status_account">
                <div class="status_line"></div>
                <div class="address">三河市</div>
                <div class="slide"></div>
                <el-radio-group v-model="tabPosition" style="margin:24px 0 0 30px;">
                    <el-radio-button label="top" @click="bus_apply_review">审核中</el-radio-button>
                    <el-radio-button label="right">审核通过</el-radio-button>
                    <el-radio-button label="bottom">审核不通过</el-radio-button>
                    <el-radio-button label="left">已驳回</el-radio-button>
                </el-radio-group>
                <div class="status_table">
                     <el-table :data="tablelist" tooltip-effect="dark"  style="width: 100%" >
                        <el-table-column  label="区县审核通过日期"  prop="time"></el-table-column>
                        <el-table-column  label="账号类型" prop="status"></el-table-column>
                        <el-table-column  label="单位名称" prop="message"></el-table-column>
                        <el-table-column  label="注册地址/办公地址所属区域" prop="message"></el-table-column>
                        <el-table-column  label="审核状态" prop="message"></el-table-column>
                        <el-table-column  label="审核人" prop="message"></el-table-column>
                        <el-table-column  label="操作">
                            <template slot-scope="scope">
                                <div class="item" @click="detail">查看详情</div>
                                <i class="divline"></i>
                                	<div class="item" @click="reject">驳回</div>
                            </template>
                        </el-table-column>

                    </el-table>
                    <el-pagination style="margin-buttom: 2.0rem"
                            class="pagingpage pagingpage2"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-size="15"
                            layout="total, prev, pager, next, jumper"
                            :total="400">
                    </el-pagination>
                </div>
            </div>
       </div>
</template>
<script>

import util from 'src/util/util.js'
export default {
    name: 'accountmanagement',
    props : [],
    data () {
        return {
                value6: '',
        		input:'',
            currentPage:1,//当前页面
            tablelist:[
                {time:'2017-11-13 11:36:54',status:'区县审核中',message:'暂无'},
                {time:'2017-11-13 11:36:54',status:'区县审核中',message:'暂无'},
                {time:'2017-11-13 11:36:54',status:'区县审核中',message:'暂无'},
                {time:'2017-11-13 11:36:54',status:'区县审核中',message:'暂无'},
                {time:'2017-11-13 11:36:54',status:'区县审核中',message:'暂无'},
                {time:'2017-11-13 11:36:54',status:'区县审核中',message:'暂无'},
                {time:'2017-11-13 11:36:54',status:'区县审核中',message:'暂无'},
                {time:'2017-11-13 11:36:54',status:'区县审核中',message:'暂无'},
                {time:'2017-11-13 11:36:54',status:'区县审核中',message:'暂无'},
                {time:'2017-11-13 11:36:54',status:'区县审核中',message:'暂无'}
            ]
        }
    },
    components: {

    },
    watch:{

    },
    created(){

    },
    methods : {
        //分页改变时候
        handleCurrentChange(val){
            console.log(val)
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        bus_apply_review(){
            this.$router.push({'name':'bus_apply_review'});
        },
        detail(){

        },
        reject(){

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
     .accountmanagement{
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
            @include wh(80.1rem,5.3rem);
            background-color:#ffffff;
            .line{
                @include wh(80.1rem,0.2rem);
                background:#E7EAEC;
            }
            ul{
                @include wh(80.1rem,1rem)
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
                    @include wh(12rem,1.7rem)
                    margin-left: 1.5rem;
                }
                .search{
                    @include wh(4.4rem,1.9rem)
                     background:#399CFF;
                     color:#ffffff;
                     margin-left: 1.5rem;
                }

            }
        }
        .status_account{
            @include wh(80.1rem,100%);
            margin: 2.3rem 0 0 1.5rem;
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
