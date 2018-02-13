<template>
    <div class="g2line">
        <div :id="id"></div>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import G2 from 'g2'
export default {
    name: 'g2line',
    props : ['datalist','optionarr','keypro','colorarr','id'],
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
        let Stat = G2.Stat;
        let Frame = G2.Frame;
        let keypro = this.keypro;
        let frame = new Frame(this.datalist);
        frame = Frame.combinColumns(frame,this.optionarr,'value','type',keypro);
        let chart = new G2.Chart({
            id: this.id,
            forceFit: true,
            height: 328
        });
        chart.legend(false);
        chart.source(frame, {
            'value': {
                alias: ' ',
                formatter: function(val) {
                    return  val;
                }
            },
            [keypro]: {
                alias: ' ',
                range: [0, 1]
            }
        });
        chart.axis(keypro, {
            title: null,
            tickLine: false,
            line: {
                stroke: '#cfcfcf'
            },
            grid: {
                line: {
                    stroke: '#E5E5E5'
                }
            }
        });
        chart.axis('value', {
            title: {
                fill: '#000'
            },
            tickLine: false,
            line: {
                stroke: '#cfcfcf'
            },
            grid: {
                line: {
                    stroke: '#E5E5E5',
                    lineDash: [0, 0]
                }
            }
        });
        chart.tooltip({
            crosshairs: true
        });
        chart.area().position(keypro+'*value').color('type',this.colorarr).shape('smooth');
        chart.line().position(keypro+'*value').color('type',this.colorarr).size(2).shape('smooth');
        chart.render();
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .g2line{

    }
</style>
