<template>
    <div id="addCar">
      <header>添加车辆信息</header>
      <div><span>车型：</span><input type="text" v-model="carName" placeholder="请输入车型"></div>
      <div><span>图片：</span><input type="url" v-model="carImage" placeholder="请输入图片的URL" @blur="getImgUrl" @focus="clearGetImgUrl"></div>
      <div class="yulan"><span>预览：</span></div>
      <div class="show">
        <div class="title" v-text="carName"></div>
        <div class="msg"><span class="fee">{{carFee|fee}}</span></div>
        <router-view/>
      </div>
      <div><span>费用：</span><input type="number" v-model="carFee" placeholder="租车费用（元/天）"></div>
      <button class="add" @click="add">添加</button>
      <button class="cancel" @click="cancel">取消</button>
    </div>
</template>

<script>
    export default {
        name: "addCar",
      data(){
          return{
            carName: '',
            carImage: '',
            carFee: '',
            showCarImage: '<img src="">',
            carObj: {},
            carArray: []
          }
      },
      methods: {
          add(){
            if (this.carName!=this.carImage!=this.carFee!=''){
              this.carObj = {
                name: this.carName,
                url: this.carImage,
                charge: this.carFee
              };
              this.carArray.push(this.carObj);
              localStorage.setItem('car',JSON.stringify(this.carArray))
              alert('添加成功！')
            }else{
              alert('添加失败，请检查添加信息!');
            }
 },
        cancel(){
            window.history.back();
        },
        getImgUrl(){
          this.$store.state.preImgUrl = this.carImage;
          window.location.replace(this.$store.state.addBaseUrl+'/preShow');
        },
        clearGetImgUrl(){
          window.location.replace(this.$store.state.addBaseUrl);
        }
      },
      filters: {
          fee(m){
            return m+'元/天';
          }
      },
      beforeMount() {
        this.$store.state.addBaseUrl = window.location.href;
        try {
          var localArray = localStorage.getItem('car');
          var localObj = eval('('+localArray+')');
          for (let i=0;i<localObj.length;i++){
            this.carArray.push(localObj[i]);
          }
        }catch (e) {
          console.log('当前车辆信息为空')
        }
      }
    }
</script>

<style scoped>
#addCar header{
padding-top: 24px;
}
#addCar div{
  margin: 15px 40px;
  padding-left: 15px;
}
#addCar button{
  padding: 2px 20px;
  margin-top: 195px;
  margin-right: 10px;
  margin-left: 25px;
  border-radius: 5px;
  background-color: rgba(0,0,0,0.1);
  border-color: transparent;
}
#addCar .yulan{
  position: absolute;
  top: 290px;
  left: 590px;
}
  #addCar .show{
    position: absolute;
    top: 42%;
    left: 51.7%;
    width: 12%;
    height: 23%;
    border: 1px solid lightgrey;
  }
#addCar .show .title{
  font-size: 12px;
  background-color: rgba(0,0,0,0.1);
  white-space: nowrap;
  width: 100%;
  margin-left: -15px;
  margin-top: 0;
}
#addCar .show .msg span{
  float: left;
  font-size: 12px;
}
#addCar .show .msg .fee{
  position: absolute;
  top: 145px;
  left: 73px;
}
</style>
