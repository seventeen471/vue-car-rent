<template>
    <div id="myForm">
      <header>我的订单</header>
      <div class="th">
        <span>车型</span>
        <span>价格(元/天）</span>
        <span>下单时间</span>
      </div>
      <ul>
        <li v-for="item in allFormObj" v-if="showLi">
          <div class="tr">
            <span>{{item.fcarName}}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.fcarCharge}}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.fdate}}</span>
          </div>
        </li>
      </ul>
      <button @click="back">返回</button>
    </div>
</template>

<script>
    export default {
        name: "myForm",
      data(){
          return{
            allFormObj: {},
            showLi: true
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
          var name = this.$store.state.userName;
          // console.log(this.$store.state.userName);
          // console.log(this.allFormObj[0].fuser);
          // if(this.allFormObj[0].fuser==name){
          //   this.showLi = true
          // }
        }catch (e) {
          console.log('当前订单为空！')
        }
      }
    }
</script>

<style scoped>
#myForm header{
  padding-top: 20px;
  font-weight: bold;
  font-size: 18px;
}
#myForm .th{
  margin-top: 20px;
}
#myForm .th span{
  padding: 0 131px;
  font-weight: bold;
}
#myForm ul li{
  margin-top: 10px;
}
#myForm .tr{
  margin-top: 20px;
}
#myForm .tr span{
  padding: 0 105px;
}
#myForm button{
  position: absolute;
  bottom: 80px;
  left: 59%;
  border: 1px solid grey;
  padding: 6px 24px;
  border-radius: 5px;
}
</style>
