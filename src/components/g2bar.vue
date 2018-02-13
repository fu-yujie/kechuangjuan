<template>
    <div class="g2bar">
        <div :id="id"></div>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import G2 from 'g2'
export default {
    name: 'g2bar',
    props : ['datalist','axislist','id','colorarr'],
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
        var data = this.datalist;
        for(var i=0; i < data.length; i++) {
            var item = data[i];
            var datas = item.data;
            var moneys = this.axislist;
            for(var j=0; j < datas.length; j++) {
            item[moneys[j]] = datas[j];
            }
            data[i] = item;
        }
        var Stat = G2.Stat;
        var Frame = G2.Frame;
        var frame = new Frame(data);
        frame = Frame.combinColumns(frame, this.axislist,'年龄','金额','name');
        var chart = new G2.Chart({
            id: this.id,
            forceFit: true,
            height : 350,
            plotCfg: {
                margin: [20,90,60,60]
            }
        });
        chart.legend(false);
        chart.source(frame,{
            '金额': {
                alias: ' ',
                formatter: function(val) {
                    return  val;
                }
            },
            '年龄': {
                alias: ' ',
                formatter: function(val) {
                    return  val;
                }
            }
        });
        chart.col('name',{alias: '城市'});
        chart.intervalDodge().position('金额*年龄').color('name',this.colorarr);
        chart.render();
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .g2bar{
        min-width:50rem;
    }
</style>
