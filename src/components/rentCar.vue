<template>
  <div id="rentCar">
    <router-view/>
    <header>点击图片租车</header>
    <ul><li v-for="(item, index) in allObj" @click="createForm(index)">
      <div class="show">
        <div class="title" v-text="item.name"></div>
        <img :src="item.url">
        <div class="msg"><span class="fee">{{item.charge|fee}}</span></div>
      </div>
    </li></ul>
  </div>
</template>

<script>
  export default {
    name: "myCar",
    data() {
      return {
        allObj: {},
        carName: '',
        carFee: '',
      }
    },
    methods: {
      createForm(index){
        this.$store.state.liIndex = index;
        window.location.replace('http://localhost:8080/#/userHome/rentCar/createForm');
      }
    },
    filters: {
      fee(m){
        return m+'元/天';
      }
    },
    beforeMount() {
      this.allObj = JSON.parse(localStorage.getItem('car'));
    }
  }
</script>

<style scoped>
  #rentCar header{
    font-weight: bold;
    font-size: 18px;
  }
  #rentCar .show{
    border: 1px solid lightgrey;
  }
  #rentCar ul li{
    float: left;
    margin: 25px 45px;

  }
  #rentCar .show .title{
    font-size: 12px;
    background-color: rgba(0,0,0,0.1);
    white-space: nowrap;
  }
  #rentCar .show .msg span{
    float: left;
    font-size: 12px;
  }
  #rentCar .show .msg .fee{
    margin-left: 55px;
    margin-top: 11px;
  }
  #rentCar .show img{
    width: 152px;
    height: 100px;
  }
</style>
