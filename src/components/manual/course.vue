<template>
    <div class="sdd">
                <el-collapse v-model="activeNames" @change="handleChange" >
                    <el-collapse-item title="厨艺课程"  name="1" >
                       <div v-for="(o, index) in 5" :key="o.key" :offset="index > 0 ? 2 : 0">
                           <div class="title">{{ppap[index]}}</div>
                          <img :src="urldd[index]" alt="" width="220px" height="250px">
                          <div >{{language[index]}}</div>
                         <el-form ref="form"  :model="form" >
                              <el-form-item prop="fAdderss">
                               <el-checkbox label="English" name="type"></el-checkbox>
                               <el-checkbox label="日本語" name="type"></el-checkbox>
                               <el-checkbox label="中文" name="type"></el-checkbox>
                              </el-form-item>
                         </el-form>
                       </div>
                    </el-collapse-item>
                      <el-collapse-item title="管理&美食课程" name="2">
                       <div v-for="(o, index) in 2" :key="o.key" :offset="index > 0 ? 2 : 0">
                           <div class="title">{{ppap1[index]}}</div>
                          <img :src="urldd1[index]" alt="" width="220px" height="250px">
                          <div >{{language1[index]}}</div>
                         <el-form ref="form"  :model="form" >
                              <el-form-item prop="fAdderss">
                               <el-checkbox label="English" name="type"></el-checkbox>
                               <el-checkbox label="日本語" name="type"></el-checkbox>
                               <el-checkbox label="中文" name="type"></el-checkbox>
                              </el-form-item>
                         </el-form>
                       </div>
                      </el-collapse-item>
                      <el-collapse-item title="申请表及证明文件"  name="3" >
                       <div v-for="(o, index) in 8" :key="o.key" :offset="index > 0 ? 2 : 0">
                           <div class="title">{{ppap2[index]}}</div>
                          <img :src="urldd2[index]" alt="" width="220px" height="250px">
                          <div >{{language2[index]}}</div>
                        <el-form ref="form"   :model="form" >
                             <el-form-item prop="fAdderss" >
                               <el-checkbox label="English" name="type"></el-checkbox>
                               <el-checkbox label="日本語" name="type"></el-checkbox>
                               <el-checkbox label="中文" name="type"></el-checkbox>
                             </el-form-item>
                         </el-form>
                       </div>
                    </el-collapse-item>
                </el-collapse>
                <div class="dief">{{dief}}</div>
                <el-button type="primary" @click="bunt" round>寄宣传册</el-button>
                <div class="top" @click="but">TOP</div>
    </div>
</template>

<script>
export default {
  data(){
      return{
        activeNames:"1",
        urldd:'',
        ppap:'',
        language:'',
        urldd1:'',
        ppap1:'',
        language1:'',
        urldd2:'',
        ppap2:'',
        language2:'',
         form: {
             fAdderss:'',
         },
         dief:''
        
      }
  },
  created(){
         let $this=this
        this.axios({
               url:"/login",
               method:'get',
           }).then(function(rst){
               $this.ppap=rst.data.toponym
               $this.urldd=rst.data.url
               $this.language=rst.data.correlation
          })
  },
   methods:{
       bunt(){
        this.dief='请选择至少一本宣传册下载 '
       },
       but(){
           document.documentElement.scrollTop=0
       },
      handleChange(v) {
          if(v==1){
         let $this=this
        this.axios({
               url:"/login",
               method:'get',
           }).then(function(rst){
               $this.ppap=rst.data.toponym
               $this.urldd=rst.data.url
               $this.language=rst.data.correlation
                 console.log(v)
          })
          }else if(v==2){
                let $this=this
                this.axios({
                    url:"/login1",
                    method:'get',
                }).then(function(rst){
                    $this.ppap1=rst.data.toponym
                    $this.urldd1=rst.data.url
                    $this.language1=rst.data.correlation
                        console.log(v)
                })
          }else if(v==3){
                let $this=this
                this.axios({
                    url:"/login2",
                    method:'get',
                }).then(function(rst){
                    $this.ppap2=rst.data.toponym
                    $this.urldd2=rst.data.url
                    $this.language2=rst.data.correlation
                        console.log(v)
                })
          }
        
      }
 },
}
</script>

<style scoped>
.sdd{
   margin-top: 50px;
}
.el-collapse-item{
    width: 70%;
    margin-left: 190px;
}
.title {
    font-size: 24px;
    font-size: 2.4rem;
    color: #062b68;
    position: relative;
    margin-bottom: 2rem;
    line-height: 1.3;
}
.wrapper {
    width: 214px;
    width: 21.4rem;
    margin-bottom: 4rem;
}
.form-row {
    position: relative;
    padding-bottom: 4rem;
}
.input{
    width: 20px;
    height: 20px;
}
.title{
    margin-top: 20px;
   font-size: 16px;
}
.el-button{
    margin-top: 50px;
}
.dief{
    margin-top: 10px;
    font-size: 13px;
    color: red;
}
.top{
    width: 60px;
    height: 60px;
    border: 1px solid;
    position: absolute;
    margin-left: 94.5%;
    text-align: center;
    line-height: 60px;
    background: #062b68;
    color: aliceblue;
    cursor:pointer
}
</style>
