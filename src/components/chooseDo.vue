<template>
    <div id="chooseDo" ref="chooseDoDiv">
      <header>操作</header>
<!--      <router-link to="/administratorHome/myCar/updateCharge" tag="div">-->
      <button @click="updateCharge">修改价格</button>
<!--      </router-link>-->
      <button @click="deleConfirm">删除车辆</button>
      <button @click="cancel">&nbsp;&nbsp;取消&nbsp;&nbsp;</button>
    </div>
</template>

<script>
    export default {
        name: "chooseDo",
      data(){
          return{
            allObj: {},
          }
      },
      methods: {
        updateCharge(){
          this.$prompt('请输入新价格（元/天）', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            // this.$store.state.newCharge = value;
            this.allObj[this.$store.state.liIndex2].charge = value;
            localStorage.setItem('car',JSON.stringify(this.allObj));
            this.$message({
              type: 'success',
              message: '修改成功'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        },
        deleConfirm() {
          this.$confirm('此操作将永久删除该车辆, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {
            let arr1 = this.allObj.slice(0,this.$store.state.liIndex2);
            let arr2 = this.allObj.slice(this.$store.state.liIndex2+1,this.allObj.length);
            let newAllObj = arr1.concat(arr2);
            localStorage.setItem('car',JSON.stringify(newAllObj));
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        cancel() {
          window.history.back();
          // this.allObj[this.$store.state.liIndex2].charge = this.$store.state.newCharge;
          // localStorage.setItem('car',JSON.stringify(this.allObj));
        }
      },
      beforeMount() {
        this.allObj = JSON.parse(localStorage.getItem('car'));
      },
      mounted() {
        this.$refs.chooseDoDiv.style.top = (this.$store.state.pageY - 70) + 'px';
        this.$refs.chooseDoDiv.style.left = this.$store.state.pageX + 'px';
      }
    }
</script>
<style scoped>
#chooseDo{
  position: absolute;
  width: 100px;
  height: 140px;
  color: white;
  font-size: 14px;
  background-color: rgba(0,0,0,0.2);
  padding-top: 6px;
}
#chooseDo header{
  font-weight: bold;
  font-size: 15px;
}
#chooseDo button{
  margin-top: 12px;
}
</style>
