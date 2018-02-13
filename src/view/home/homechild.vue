<template>
    <div class="homechild" v-loading="loading">
        <!--体检四个方块数据-->
        <section>
            <ul class="rectul">
                <li><div class="rect rect1"><div class="title">体检总数（人）</div><div class="fontext">{{persionobj.num1}}</div><div class="img1"></div></div></li>
                <li><div class="rect rect2"><div class="title">今日体检数量（人）</div><div class="fontext">{{persionobj.num2}}</div><div class="img2"></div></div></li>
                <li><div class="rect rect3"><div class="title">异常体检数量（人）</div><div class="fontext">{{persionobj.num3}}</div><div class="img3"></div></div></li>
                <li><div class="rect rect4"><div class="title">未总检数量（人）</div><div class="fontext">{{persionobj.num4}}</div><div class="img4"></div></div></li>
            </ul>
        </section>
        <!--体检详情-->
        <section class="detail">
            <div class="divhead">体检详情</div>
            <div class="info padleft">
                <ul>
                    <li><div class="detailimg"><img src="../../../static/img/icon_no.png"/></div>未体检人员<span>10</span>人</li>
                    <li><div class="detailimg"><img src="../../../static/img/icon_yes_2.png"/></div>已完成体检<span>23</span>人</li>
                    <li><div class="detailimg"><img src="../../../static/img/icon_deng.png"/></div>待总检<span>12</span>人</li>
                </ul>
            </div>
        </section>
        <!--体检统计-->
        <section class="statistics">
            <div class="divhead">体检统计</div>
            <div class="info">
                <div class="infodata">
                    <section class="tongjidata">
                        <div class="title">本月体检总数</div>
                        <div class="bignum">13879</div>
                        <div class="updata"><span class="updownspan"><b class="triangledown"/>10%</span><span>同比上月</span></div>
                    </section>
                    <section class="tongjidata">
                        <div class="title" >本周体检总数</div>
                        <div class="bignum">8903</div>
                        <div class="downdata"><span class="updownspan"><b class="triangleup"/>10%</span><span>同比上周</span></div>
                    </section>
                </div>
                <div class="infoimg">
                    <div>
                        <div class="tiptitle">近一周统计</div>
                        <el-radio-group class="weekfromto" v-model="radiozhe" size="medium">
                            <el-radio-button label="今日" ></el-radio-button>
                            <el-radio-button label="本周"></el-radio-button>
                            <el-radio-button label="本月"></el-radio-button>
                        </el-radio-group>
                        <el-date-picker
                            class="datefromto"
                            v-model="datefromto"
                            type="daterange"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                    <g2line :id="g2lineobj.id" :datalist="g2lineobj.datalist" :colorarr="g2lineobj.colorarr" :keypro="g2lineobj.keypro" :optionarr="g2lineobj.optionarr" class="chartstyle"></g2line>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import g2line from 'src/components/g2line'
import { get_healthInformationCategoryList } from 'src/model/api.js'

export default {
    name: 'homechild',
    props : [],
    data () {
        return {
            loading: true,
            g2lineobj:{//支持多组的覆盖型曲线图
                id:'g2line',//id
                keypro:'year',//X轴的属性
                optionarr:['ACME','Compitor'],//要展示的Y轴数据
                colorarr:['#e5e4e5', '#1CC09F'],//自定义颜色
                datalist:[
                    {"year": "07-01 周六", "ACME": 165, "Compitor": 29},
                    {"year": "07-02 周日", "ACME": 160, "Compitor": 48,},
                    {"year": "07-03 周一", "ACME": 180, "Compitor": 40},
                    {"year": "07-04 周二", "ACME": 180, "Compitor": 20},
                    {"year": "07-05 周三", "ACME": 155, "Compitor": 88},
                    {"year": "07-06 周四", "ACME": 155, "Compitor": 26},
                    {"year": "07-07 周五", "ACME": 140, "Compitor": 90}
                ]
            },
            datefromto:'',//日期
            radiozhe:'本周',//今日 本周 本月
            persionobj:{'num1':214,'num2':308,'num3':106,'num4':52}
        }
    },
    components: {
        g2line
    },
    watch:{
        //监听选择 今日 本周 本月
        radiozhe(val){
            console.log(val)
        }
    },
    created(){

    },
    methods : {
        async get_info(params){
            let res = await get_healthInformationCategoryList(params);
            console.log(res)
            res.datetime = new Date(res.updateDate).Format('yyyy-MM-dd');
            this.infomation = res;

        },
    },
    mounted(){
        //this.get_info()
        setTimeout(()=>{
            this.loading = false;
        },1000);
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .homechild{
        .rectul{
            width:100%;
            display: flex;
            justify-content: space-between;
            >li{
                width:23.5%;
                max-width: 18.9rem;
                .rect{
                    border-radius: 4px;
                    position: relative;
                    @include wh(100%,6.8rem);
                    >div{
                        position: absolute;
                    }
                    .title{
                        color:$wihte_c;
                        left: 1.4rem;
                        top:1rem;
                        @include font(0.8rem,0.8rem);
                    }
                    .fontext{
                        @include font(1.9rem,1.9rem);
                        font-weight: bold;
                        bottom:1.6rem;
                        left:1.2rem;
                        color:$wihte_c;
                    }
                    .img1{
                        right: 0.45rem;
                        top: 0.9rem;
                        @include wh(4rem,4.7rem);
                        @include bis('../../../static/img/tijian.png');
                    }
                    .img2{
                        right: 0.45rem;
                        top: 1rem;
                        @include wh(4.5rem,4.5rem);
                        @include bis('../../../static/img/img_2.png');
                    }
                    .img3{
                        right: 0.45rem;
                        top: 1.2rem;
                        @include wh(4.7rem,4rem);
                        @include bis('../../../static/img/img_3.png');
                    }
                    .img4{
                        right: 0.45rem;
                        top: 1.2rem;
                        @include wh(4.4rem,4.4rem);
                        @include bis('../../../static/img/img_4.png');
                    }
                }
                .rect1{
                    background-color:#00C0EF;
                }
                .rect2{
                    background-color:#00A65A;
                }
                .rect3{
                    background-color:#F39C12;
                }
                .rect4{
                    background-color:#F56954;
                }
            }
        }
        .detail{
            margin-top:1.5rem;
            .info{
                background-color:$wihte_c;
                height: 4.4rem;
                @include font(0.8rem,4.4rem);
                >ul>li{
                    width: 23.5%;
                    max-width: 18.9rem;
                    display: inline-block;
                    margin-right: 1.6%;
                    >span{
                        @include font(1.2rem,1.2rem);
                        margin-left: 2.7rem;
                    }
                }
                .detailimg{
                    margin-right: 0.45rem;
                    position: relative;
                    top: 0.2rem;
                    width:1rem;
                    display: inline-block;
                }
            }
        }
        .statistics{
            margin-top:1.5rem;
            .info{
                background-color:$wihte_c;
                height:21.75rem;
                position: relative;
                .infodata{
                    width:8.75rem;
                    top: 0;
                    left: 0;
                    position: absolute;
                    border-right: 1px solid $bordercolor;
                    height: 100%;
                    .tongjidata{
                        margin: 1.25rem 0 1.45rem 1.25rem;
                        .bignum{
                            @include font(1.8rem,2.5rem);
                            margin: 0.25rem 0;
                        }
                        .title{
                            @include font(0.7rem,0.7rem);
                        }
                        .updata{
                            @include font(0.7rem,0.7rem);
                            >span:nth-child(1){
                                background-color:$red_c;
                            }
                            >span:nth-child(2){
                                margin-left:.25rem;
                                color:$gray2;
                            }
                        }
                        .downdata{
                            @include font(0.7rem,0.7rem);
                            >span:nth-child(1){
                                background-color:$topgreen;
                            }
                            >span:nth-child(2){
                                margin-left:.25rem;
                                color:$gray2;
                            }
                        }
                    }
                }
                .infoimg{
                    height: 100%;
                    margin-left:8.75rem;
                    .tiptitle{
                        position: absolute;
                        top:1.3rem;
                        left:10.9rem;
                        @include font(0.7rem,0.7rem);
                    }
                    .weekfromto{
                        position: absolute;
                        top: 1.3rem;
                        right: 4.2rem;
                    }
                    .datefromto{
                        position: absolute;
                        top: 1.34rem;
                        right: 15.5rem;
                    }
                    .chartstyle{
                        position: relative;
                        top: 4.5rem;
                        left: -0.25rem;
                    }
                }
            }
        }
    }
</style>
