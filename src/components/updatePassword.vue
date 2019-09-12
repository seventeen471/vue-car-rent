<template>
  <div class="updatePasswordDiv">
    <header>修改密码</header>
    <div>请输入原密码：<input type="password" v-model="oldPassword"></div>
    <div>请输入新密码：<input type="password" v-model="newPassword"></div>
    <div>请确认新密码：<input type="password" v-model="newPassword2"></div>
    <div class="button">
    <button @click="cancel">取消</button>
    <button @click="submit">确定</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "updatePassword",
      data(){
          return{
            oldPassword: '',
            newPassword: '',
            newPassword2: '',
          }
      },
      methods: {
          cancel(){
            window.history.back();
          },
          submit(){
            if (this.oldPassword!=this.newPassword!=''&&this.newPassword==this.newPassword2&&this.oldPassword==this.$store.state.userPassword){
              localStorage.setItem(this.$store.state.userName,this.newPassword2);
              alert('修改成功！');
              window.location.replace(this.$store.state.homeUrl);
            }else{
              alert("修改失败，请检查输入！")
            }
          }
      }
    }
</script>

<style scoped>
  .updatePasswordDiv header{
    padding-top: 80px;
    font-weight: bold;
    font-size: 18px;
  }
  .updatePasswordDiv div{
    margin: 30px;
  }
  .updatePasswordDiv button{
    padding: 3px 6px;
    margin: 10px;
  }
  .updatePasswordDiv .button{
    position: absolute;
    top: 56%;
    right: 28%;
  }
</style>
