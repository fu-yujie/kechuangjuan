<template>
    <div class="messagemanagement" v-loading="loading">
       <div class="divhead searchcon">
            <span class="font16">信息管理</span>
             <el-button type=" Maintenance">维护信息</el-button>
        </div>
        <div class="tablepadding">
                <!--表格组件-->
                <el-table :data="tablelist" tooltip-effect="dark"  style="width: 100%" >
                    <el-table-column  label="信息提交审核日期" prop="time"></el-table-column>
                    <el-table-column  label="审核状态" prop="status"></el-table-column>
                    <el-table-column  label="备注" prop="message"></el-table-column>
                </el-table>
                <div></div>
                <el-pagination
                    class="pagingpage pagingpage2"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="10"
                    layout="total, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </div>
    </div>
</template>

<script>
import util from 'src/util/util.js'

export default {
    name: 'messagemanagement',
    props : [],
    data () {
        return {
            loading:true,
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
    .messagemanagement{
        .Maintenance{
            background-color:#399CFF;
            display:block;
            @include wh(5.5rem,1.75rem);
            margin: 0.5rem 0.5rem  0 0;
            float:right;
            color:#ffffff;
        }
    }
    
</style>