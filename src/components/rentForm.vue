<template>
  <div id="rentForm">
    <header>租客订单</header>
    <div class="th">
      <span>用户名</span>
      <span>用户姓名</span>
      <span>电话</span>
      <span>车型</span>
      <span>价格（元/天）</span>
      <span>下单时间</span>
    </div>
    <ul>
      <li v-for="item in allFormObj">
        <div class="tr">
          <span>{{item.fuser}}</span>
          <span>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{{item.fname}}</span>
          <span>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{item.fphone}}</span>
          <span>{{item.fcarName}}</span>
          <span> {{item.fcarCharge}}</span>
          <span>{{item.fdate}}</span>
        </div>
      </li>
    </ul>
    <button @click="back">返回</button>
  </div>
</template>

<script>
  export default {
    name: "rentForm",
    data(){
      return{
        allFormObj: {}
      }
    },
    methods: {
      back(){
        window.history.back();
      }
    },
    beforeMount() {
      try {
        this.allFormObj = JSON.parse(localStorage.getItem('form'));
      }catch (e) {
        console.log('当前订单为空！')
      }
    }
  }
</script>

<style scoped>
  #rentForm header{
    padding-top: 20px;
    font-weight: bold;
    font-size: 18px;
  }
  #rentForm .th{
    margin-top: 20px;
  }
  #rentForm .th span{
    padding: 0 35px;
    font-weight: bold;
  }
  #rentForm .tr{
    margin-top: 20px;
  }
  #rentForm .tr span{
    padding: 0 20px;
  }
  #rentForm button{
    position: absolute;
    bottom: 80px;
    left: 59%;
    border: 1px solid grey;
    padding: 6px 24px;
    border-radius: 5px;
  }
</style>
