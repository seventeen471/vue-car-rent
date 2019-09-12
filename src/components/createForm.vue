<template>
    <div id="createForm">
      <header>用户下单</header>
      <aside class="carMsg">车辆信息：</aside>
      <div class="CXJG">
      <div class="carMsgDiv">车型：<input type="text"  v-model="carName" disabled></div>
      <div class="carMsgDiv">价格：<input type="text" v-model="carCharge" disabled></div>
      </div>
      <aside class="personMsg">个人信息：</aside>
      <div class="XMDH">
        <div class="personMsgDiv">用户：<input type="text" v-model="this.$store.state.userName" disabled></div>
        <div class="personMsgDiv">姓名：<input type="text" v-model="name"></div>
        <div class="personMsgDiv">电话：<input type="tel" v-model="phone"></div>
      </div>
      <div class="bottom">
      <input type="submit" value="返回" @click="back">
      <input type="submit" value="下单" @click="submit">
      </div>
    </div>
</template>

<script>
    export default {
        name: "createForm",
      data(){
          return{
            user: this.$store.state.userName,
            name: '',
            phone: '',
            allObj: {},
            carName: '',
            carCharge: '',
            date: '',
            allFormObj: {},
            formArray: [],
          }
      },
      methods: {
          back(){
            window.location.replace('http://localhost:8080/#/userHome/rentCar');
          },
        submit(){
            if (this.name != this.phone != ''){
              var formObj = {
                fuser: this.user,
                fcarName: this.carName,
                fcarCharge: this.carCharge,
                fname: this.name,
                fphone: this.phone,
                fdate: new Date().toLocaleString()
              }
              this.formArray.push(formObj);
              localStorage.setItem('form', JSON.stringify(this.formArray));
              alert("下单成功！");
              this.back();
            }else {
              alert("请填完整信息！")
            }
        }
      },
      beforeMount() {
        this.allObj = JSON.parse(localStorage.getItem('car'));
        let index = this.$store.state.liIndex;
        this.carName = this.allObj[index].name;
        this.carCharge = this.allObj[index].charge;
        try {
          this.allFormObj = JSON.parse(localStorage.getItem('form'));
        }catch (e) {
          console.log('当前订单为空！')
        }
        try {
          for(let i=0;i<this.allFormObj.length;i++){
            this.formArray.push(this.allFormObj[i]);
          }
        }catch (e) {
          console.log('当前订单为空！')
        }
      }
    }
</script>

<style scoped>
  #createForm{
    width: 300px;
    height: 400px;
    background-color: white;
    border: 1px solid lightgrey;
    position: absolute;
    top: 18%;
    left: 49%;
  }
  #createForm header{
    margin-top: 15px;
    font-weight: bold;
  }
  #createForm .carMsg{
    position: absolute;
    top: 40px;
    left: 20px;
    font-size: 15px;
  }
  #createForm .CXJG{
    margin-top: 20px;
  }
  #createForm .carMsgDiv{
    padding-top: 15px;
  }
  #createForm .personMsg{
    position: absolute;
    top: 170px;
    left: 20px;
    font-size: 15px;
  }
  #createForm .XMDH{
    margin-top: 60px;
  }
  #createForm .personMsgDiv{
    padding-top: 15px;
  }
  #createForm .bottom{
    position: absolute;
    bottom: 55px;
    left: 100px;
  }
  #createForm .bottom input{
    margin-right: 30px;
    padding: 1px 5px;
  }
</style>
