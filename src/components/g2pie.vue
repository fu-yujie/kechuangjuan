<template>
    <div class="g2pie">
        <div :id="id"></div>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import G2 from 'g2'
export default {
    name: 'g2pie',
    props : ['id','colorarr','list'],
    data () {
        return {
        }
    },
    components: {

    },
    created(){

    },
    methods : {

    },
    mounted(){
        var Stat = G2.Stat;
        var chart = new G2.Chart({
            id: this.id,
            forceFit: true,
            height: 350,
            width:300
        });
        chart.source(this.list);
        // 重要：绘制饼图时，必须声明 theta 坐标系
        chart.coord('theta', {
            radius: 1, // 设置饼图的大小
            inner: 0.35
        });
        chart.legend(false);
        chart.tooltip({
            title: null,
            map: {
                value: 'value'
            }
        });
        chart.intervalStack()
            .position(Stat.summary.percent('value'))
            .color('name',this.colorarr)
            .label('name*..percent',function(name, percent){
                percent = (percent * 100).toFixed(0) + '%';
                return percent;
            },{
                offset: -20,
                label:{
                    rotate: 2*Math.PI,
                    fontSize:14
                }
            });
        chart.render();
        // 设置默认选中
        // var geom = chart.getGeoms()[0]; // 获取所有的图形
        // var items = geom.getData(); // 获取图形对应的数据
        // geom.setSelected(items[1]); // 设置选中
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .g2pie{
        width:20rem;
    }
</style>
