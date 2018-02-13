<template>
    <div class="messagemanagement" v-loading="loading">
       <div class="divhead searchcon">
            <span class="font16">信息管理</span>
             <el-button type=" Maintenance" v-on:click="$router.push({name : 'unreview_t'})">维护信息</el-button>
        </div>
        <div class="tablepadding">
                <!--表格组件-->
                <el-table :data="tableData" tooltip-effect="dark"  style="width: 100%" >
                    <el-table-column  label="信息提交审核日期" prop="createTime">
                    	    <template slot-scope="scope"  >
		                		<span>{{scope.row.createTime | timeymdhandle }}</span>
		                </template>
                    </el-table-column>
                    <el-table-column  label="审核状态" prop="auditstatus">
                    	    <template slot-scope="scope"  >
		                		<span>{{scope.row.auditstatus | changeMessageStatus }}</span>
		                </template>
                    </el-table-column>
                    <el-table-column  label="备注" prop="comment">
                    	
                    </el-table-column>
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
import { post_management_b_Message,get_listpage_Message } from '../../model/api.js';

export default {
    name: 'messagemanagement',
    props : [],
    data () {
        return {
            loading:true,
            currentPage:1,//当前页面
            tableData:[],
            auditstatus:''
           
        }
    },
    components: {

    },
    watch:{

    },
    created(){
	
    },
    methods : {
    		//获取列表数据信息
    		async  get_listpage_Message_all(){
    			 	var obj={};
                obj.pageNum = 1;
                obj.pageSize = 15;
                var res = await get_listpage_Message(obj);
                console.log(res);
                var list = [
                            {
	                            "auditstatus": "",//审核状态
	                            "comment": "",//备注
	                            "createTime": "",
	                            "enterpriseId": "",//企业编号
	                            "id": "",//编号
                            }
                        ]
                list.forEach(function(v, i) {
                    v.applicationTime = new Date(v.applicationTime).Format('yyyy-MM-dd hh:mm:ss');
                    v.cashcutoffDate = new Date(v.cashcutoffDate).Format('yyyy-MM-dd hh:mm:ss');
                    v.usecutoffDate = new Date(v.usecutoffDate).Format('yyyy-MM-dd hh:mm:ss');
                });
                this.tableData = list;
                if(res.body.code == 0) {
                    this.tableData = res.body.data.list;
                    var type = res.body.data.list.auditstatus;
                    if(type==0){this.auditstatus = "区县审核中"}
                } else {
                    util.alertip(res.body.errorDesc);
                }
    		},
        //分页改变时候
        handleCurrentChange(val){
            console.log(val)
        }
    },
     mounted(){
        setTimeout(()=>{
            this.loading = false;
        },1000);
        this.get_listpage_Message_all();
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
            padding:10px 20px;
        }
    }

</style>
