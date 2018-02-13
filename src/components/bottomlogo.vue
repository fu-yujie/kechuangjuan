<template>
  <div class="bottomlogo content">
      <div><span>Copyright </span><span></span></div>
  </div>
</template>

<script>

export default {
  name: 'bottomlogo',
  props : [],
  data () {
    return {

    }
  },
  methods : {

  },
  mounted(){

  }
}

</script>

<style lang="scss" scoped>
  .bottomlogo{
        background-color:$wihte_c;
        @include minw(24rem);
        @include wh(auto,2.7rem);
        left:12.9rem;
        bottom:0;
        top:auto;
        @include font(0.7rem,2.7rem);
        border-bottom:1px solid $bordercolor;
        >div{
            position: absolute;
            left:1.5rem;
            color:$gray2;
            >span:nth-child(1){
                color:$gray;
            }
        }
  }
</style>
