<template>
    <div id="myCar">
      <ul>
        <router-link to="/administratorHome/myCar/chooseDo" tag="div">
          <router-view/>
        <li v-for="(item,index) in allObj" @click="getPageXY(index)">
        <div class="show">
          <div class="title" v-text="item.name"></div>
          <img :src="item.url">
          <div class="msg"><span class="fee">{{item.charge|fee}}</span></div>
        </div>
      </li>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "myCar",
      data() {
        return {
          allObj: {},
          carName: '',
          carFee: ''
        }
      },
      methods: {
        getPageXY(index,e){
          e = e || window.event;
          this.$store.state.pageX = e.pageX;
          this.$store.state.pageY = e.pageY;
          this.$store.state.liIndex2 = index;
        },
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
  #myCar .show{
    border: 1px solid lightgrey;
  }
  #myCar ul li{
    float: left;
    margin: 25px 45px;

  }
  #myCar .show .title{
    font-size: 12px;
    background-color: rgba(0,0,0,0.1);
    white-space: nowrap;
  }
  #myCar .show img{
    width: 152px;
    height: 100px;
  }
  #myCar .show .msg span{
    float: left;
    font-size: 12px;
  }
  #myCar .show .msg .fee{
    margin-left: 55px;
    margin-top: 11px;
  }
</style>
