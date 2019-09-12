<template>
    <div id="preShow">
      <img :src='this.$store.state.preImgUrl'>
    </div>
</template>

<script>
    export default {
        name: "preShow"
    }
</script>

<style scoped>
#preShow img{
  position: absolute;
  top: 14px;
  left: 0;
  width: 168px;
  height: 121px;
}
</style>
