<template>
  <div class="registerDiv">
    <header>汽车租赁管理系统</header>
    <div class="content">
      <div class="loginPanel">
        <p>用户注册界面</p>
        <p>用 户 名:<input type="text" v-model="username"></p>
        <p>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:<input type="password" v-model="password"></p>
        <p>确认密码:<input type="password" v-model="password2"></p>
        <el-alert
          title="不能存在空项！"
          type="warning"
          v-if="alertNotNull"
          center
          @close="canAlertAgain"
          show-icon>
        </el-alert>
        <el-alert
          title="密码输入不一致！"
          type="warning"
          v-if="alertNotSame"
          center
          @close="canAlertAgain"
          show-icon>
        </el-alert>
        <el-alert
          title="用户名已存在！"
          type="warning"
          v-if="alertHasExist"
          center
          @close="canAlertAgain"
          show-icon>
        </el-alert>
        <el-alert
          title="注册成功！"
          type="success"
          v-if="ifSuccess"
          center
          show-icon>
        </el-alert>
          <button class="registerButton" @click="registerEvent">注册</button>
        <router-link to="/userLogin">
          <button class="returnUserLoginButton">返回用户登录界面</button>
        </router-link>
      </div>
    </div>
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
        password2: '',
        alertNotNull: false,
        alertNotSame: false,
        alertHasExist: false,
        ifSuccess: false
      }
    },
    methods: {
      registerEvent(){
        if (this.username==''||this.password==''||this.password2==''){this.alertNotNull=true}
        if(this.username!=''&&this.password!=''&&this.password2!=''&&this.password!=this.password2){this.alertNotSame=true}
        if(this.username!=''&&this.password!=''&&this.password2!=''&&this.password==this.password2&&localStorage.getItem(this.username)!=null){
          this.alertHasExist = true;
        }
        if(this.username!=''&&this.password!=''&&this.password2!=''&&this.password==this.password2&&localStorage.getItem(this.username)==null){
          localStorage.setItem(this.username,this.password);
          this.ifSuccess = true;
        }
      },
      canAlertAgain(){
        this.alertNotSame = false;
        this.alertNotNull = false;
        this.alertHasExist = false;
        this.ifSuccess = false;
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
    font-size: 20px;
  }
  .registerDiv .content{
    border-top: 1px solid grey;
    height: 510px;
    background: url("../images/login.jpg") no-repeat;
    background-size: 100% 100%;
  }
  footer{
    background-color: lightgrey;
    margin-top: 2px;
    font-size: 12px;
    line-height: 20px;
    opacity: 0.8;
  }
  .registerDiv .content .loginPanel{
    position: absolute;
    top: 13%;
    left: 36%;
    width: 350px;
    height: 450px;
    background: rgba(255,255,255,0.7);
    border-radius: 4%;
  }
  .registerDiv .content .loginPanel p{
    margin-top: 40px;
  }
  .registerDiv .content .loginPanel .registerButton{
    padding: 5px 100px;
    margin-top: 60px;
    font-size: 14px;
    border-radius: 5px;
    position: absolute;
    top: 51%;
    right: 16%;
    border-color: transparent;
    background-color: rgba(255,236,139,0.9);
  }

  .registerDiv .content .loginPanel input{
    height: 22px;
    width: 52%;
    margin: -20px 8px;
    border-radius: 5px;
    border-color: transparent;
    opacity: 0.9;
  }
  .registerDiv .content .loginPanel .returnUserLoginButton{
    font-size: 14px;
    position: absolute;
    top: 80%;
    right: 32%;
    border-color: transparent;
    background-color: transparent;
    text-decoration: underline;
  }
</style>
