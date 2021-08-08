<template>
  <div id="btn" @click="event_fell">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    // text:{
    //   type:String,
    //   required:true
    // },
    // bg:{
    //   type:String,
    //   required:false
    // },
    // col:{
    //   type:String,
    //   require:false
    // },
    // padding:{
    //   type:String,
    //   required:false
    // }
  },
  mounted(){
    // let btn=document.getElementById("btn")
    // btn.style.padding=this.padding
    // btn.style.backgroundColor="map-get($colors,"+this.bg+")"
    // btn.style.backgroundColor=this.bg
  },
  methods:{
    event_fell(){
      this.$emit('event_fell')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
#btn {
  width: 100%;
  height: 100%;
  // padding: 8px 10px 0 10px;
  box-sizing: border-box;
  background-color: map-get($colors, da_light);
  border-radius: 2px;
  transition: all 0.2s;
  color: map-get($colors, da_dismal);
  text-align: center;
  span {
    font-weight: bold;
  }
}
#btn:hover {
  cursor: pointer;
  background-color: map-get($colors, da_blue_light);
  color: #fff;
}
</style>
