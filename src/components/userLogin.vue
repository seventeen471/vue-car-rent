<template>
  <div class="loginDiv">
    <header>汽车租凭管理系统</header>
    <div class="content">
      <div class="loginPanel">
        <p>欢迎登录汽车租凭管理系统</p>
        <p><img class="userImg" src="../images/user.png">:<input type="text" v-model="username" placeholder="请输入用户名"></p>
        <p><img class="passwordImg" src="../images/password.png">:<input type="password" v-model="password" placeholder="请输入密码"></p>
          <el-alert
            title="用户名或密码不正确！"
            type="warning"
            v-if="alert"
            center
            @close="canAlertAgain"
            show-icon>
          </el-alert>
          <el-alert
            title="用户名或密码不能为空！"
            type="warning"
            v-if="alertNotNull"
            center
            @close="canAlertAgain"
            show-icon>
          </el-alert>
          <router-link :to="routeControl">
        <button class="loginButton" @click="loginEvent">登录</button>
        </router-link>
        <router-link to="/register">
        <button class="registerButton">免费注册</button>
        </router-link>
        <router-link to="/administratorLogin">
        <button class="administrator" >管理人员入口</button>
        </router-link>
      </div>
    </div>
    <footer>南京林业大学信息科学技术学院&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作者：施启银 马赛</footer>
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
          loginEvent(){
            if (this.username==''||this.password==''){this.alertNotNull=true}else {
              if (this.password == localStorage.getItem(this.username)) {
                this.$store.commit('getUserName',this.username);
                this.$store.commit('getUserPassword',this.password);
                this.routeControl = '/userHome'
              } else {
                this.alert = true
              }
            }
          },
        canAlertAgain(){
          this.alert = false;
          this.alertNotNull = false;
        },
      },
      mounted() {
          this.$store.state.homeUrl = window.location.href;
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
  .loginDiv .content{
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
  .loginDiv .content .loginPanel{
    position: absolute;
    top: 13%;
    left: 36%;
    width: 350px;
    height: 450px;
    background: rgba(255,255,255,0.7);
    border-radius: 4%;
  }
  .loginDiv .content .loginPanel p{
    margin-top: 40px;
  }
  .loginDiv .content .loginPanel .registerButton{
    font-size: 14px;
    position: absolute;
    top: 70%;
    right: 40%;
    border-color: transparent;
    background-color: transparent;
    text-decoration: underline;
  }
  .loginDiv .content .loginPanel .administrator{
    font-size: 14px;
    position: absolute;
    top: 80%;
    right: 35%;
    border-color: transparent;
    background-color: transparent;
    text-decoration: underline;
  }
  .loginDiv .content .loginPanel .loginButton{
    padding: 5px 100px;
    margin-top: 60px;
    font-size: 14px;
    border-radius: 5px;
    position: absolute;
    top: 41%;
    right: 16%;
    border-color: transparent;
    background-color: rgba(255,236,139,0.9);
  }
  .loginDiv .content .loginPanel img{
    width: 23px;
    height: 23px;
  }
  .loginDiv .content .loginPanel .userImg{
    vertical-align: center;
  }
  .loginDiv .content .loginPanel input{
    height: 22px;
    width: 52%;
    margin: -20px 8px;
    border-radius: 5px;
    border-color: transparent;
    opacity: 0.9;
  }
</style>
