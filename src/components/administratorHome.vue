<template>
  <div class="userHomeDiv">
    <header>汽车租赁管理系统</header>
    <div class="welcomeHeader">欢迎您，管理员：{{$store.state.adminName}}</div>
    <router-link to="/administratorLogin">
    <span>注销</span>
    </router-link>
    <aside>
      <router-link to="/administratorHome/myCar" tag="div">
      <div class="watch">我的车库</div>
      </router-link>
      <router-link to="/administratorHome/addCar" tag="div">
      <div class="add">添加车辆</div>
      </router-link>
      <router-link to="/administratorHome/rentForm" tag="div">
      <div class="rentForm">租客订单</div>
      </router-link>
    </aside>
    <div class="main"><router-view/></div>
    <footer>南京林业大学信息科学技术学院&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作者：施启银</footer>
  </div>
</template>

<script>

  export default {
    name: "login",
    data(){
      return{
        username: '',
        password: '',
        routeControl: '/userLogin',
        alert: false,
        alertNotNull: false
      }
    },
    methods: {
    },
    mounted() {
      var arr = document.cookie.split(';');
      var adminArr = [];
      for(let i=0;i<arr.length;i++){
        if (arr[i].trim().startsWith('admin')){
          adminArr.push(arr[i])
        }
      }
      let getadmin = adminArr.toString().substring(adminArr.toString().indexOf('=')+1);
      if(this.$store.state.adminName==''){
        this.$store.state.adminName = getadmin;
      }
    }
  }
</script>

<style scoped>
  header{
    height: 50px;
    margin-top: -61px;
    background-color: lightskyblue;
    line-height: 50px;
    font-size: 22px;
    font-weight: bold;
  }
  .userHomeDiv .welcomeHeader{
    height: 30px;
    line-height: 30px;
    background-color: rgba(200,200,200,0.2);
    border-bottom: 1px solid grey;
  }
  .userHomeDiv span{
    float: right;
    margin-top: -26px;
    margin-right: 45px;
    cursor: pointer;
  }
  .userHomeDiv span:hover{
    background-color: rgba(200,200,200,0.4);
  }
  .userHomeDiv .main{
    height: 510px;
  }
  footer{
    background-color: lightgrey;
    margin-top: -26px;
    font-size: 12px;
    line-height: 20px;
    opacity: 0.8;
  }
  .userHomeDiv aside{
    float: left;
    width: 280px;
    height: 480px;
    background-color: lightyellow;
    border-right: 1px solid lightgrey;
    margin-top: 2px;
  }
  .userHomeDiv aside div{
    height: 60px;
    width: auto;
    border-bottom: 1px solid rgba(200,200,200,0.9);
    line-height: 60px;
    cursor: pointer;
    margin:auto;
  }
  .userHomeDiv aside div:hover{
    background-color: rgba(200,200,200,0.4);
  }
</style>
