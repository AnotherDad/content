<template>
    <div>
        <el-row>
            <el-col class="sdd" :span="6" v-for="(o, index) in 9" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                <img :src="urldd[index]" class="image" width="376px" height="250px">
                <div style="padding: 10px;">
                    <span>{{sdde[index]}}</span>
                    <div class="bottom clearfix">
                    <span class="time">{{ddes[index]}}</span>
                    <el-button type="text" class="button">更多信息</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row >
            <el-col class="sddee" :span="24">
                   <el-pagination 
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        layout="prev, pager, next"
                        :total="25">
                    </el-pagination>
            </el-col>
        </el-row>       
    </div>
</template>

<script>
export default {
    data(){
        return{
             urldd:'',
             sdde:'',
             ddes:'',
        }
    },
    created(){
       let $this=this
        this.axios({
               url:"/sde",
               method:'get',
           }).then(function(rst){
               $this.urldd=rst.data.url
               $this.ddes=rst.data.content
               $this.sdde=rst.data.title
               console.log($this.sdde)
          })
   },
    watch:{
    spa: 'spaData' 
   },
   methods:{
       handleSizeChange(v){
    //    console.log(v)
       },
       handleCurrentChange(i){
           if(i==2){
                    let $this=this
        this.axios({
               url:"/xiaoyou",
               method:'get',
           }).then(function(rst){
                $this.urldd=rst.data.url
                $this.sdde=rst.data.title
                $this.ddes=rst.data.content
                // console.log(rst.data)
          })
           }else if(i==3){
        let $this=this
        this.axios({
               url:"/tupian",
               method:'get',
           }).then(function(rst){
                $this.urldd=rst.data.url
                $this.sdde=rst.data.title
                $this.ddes=rst.data.content
                
          })
           }else{
        let $this=this
        this.axios({
               url:"/sde",
               method:'get',
           }).then(function(rst){
               $this.urldd=rst.data.url
               $this.sdde=rst.data.title
               $this.ddes=rst.data.content
            //    console.log($this.ddes)
          }) 
           }
       },
     spaData(v){
          if(v=='按校友筛选'){
        let $this=this
        this.axios({
               url:"/xiaoyou",
               method:'get',
           }).then(function(rst){
                $this.urldd=rst.data.url
                $this.sdde=rst.data.title
                $this.ddes=rst.data.content
                // console.log(rst.data)
          })
          }else if(v=='按图片筛选'){
         let $this=this
        this.axios({
               url:"/tupian",
               method:'get',
           }).then(function(rst){
                $this.urldd=rst.data.url
                $this.sdde=rst.data.title
                $this.ddes=rst.data.content
                // console.log(rst.data)
          })
          }else {
        let $this=this
        this.axios({
               url:"/sde",
               method:'get',
           }).then(function(rst){
               $this.urldd=rst.data.url
               $this.sdde=rst.data.title
               $this.ddes=rst.data.content
            //    console.log($this.ddes)
          })
          }
     }  
   },
   props:['spa']
}
</script>

<style scoped>
.sdd{
box-sizing: inherit;
margin-left: 97px;
margin-top: 30px;
}
.sddee{
   padding: 50px 0px
}
.el-pagination{
    width: 99%;
}

 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 30px;
    height: 130px;
    border: 0px solid;
  }
  .button {
    margin-top: 10px;
    float: left;
  }




</style>
