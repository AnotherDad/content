<template>
    <div class="newsbox">
                <div class="context">
                    <div class="wrapper">
                        <div class="side-panel">
                            <div class="category"><p>新闻事件</p></div>
                            <div class="title"><p>蓝带国际学院的众多精彩之处</p></div>
                            <p class="bais">总有一些事件活动发生在蓝带国际学院。从学生竞赛到重大节日，我们将带给您带来从世界各地的最新新闻，视频和事件。</p>
                            <el-button type="info" icon="el-icon-arrow-down" @click="but" circle></el-button>
                        </div>
                    </div>
                </div>
                <el-row>
                    <el-col :span="24" ><div class="grid-content bg-purple-dark " id="box1"  > 新闻与活动</div></el-col>
                </el-row>
    </div>
</template>

<script>
export default {
   data(){
       return{
           tabPosition: 'top',
           sdd:'',
       }
   },
   methods:{
    //        handleScroll(e){
    //             this.sdd=e.pageY
    //       console.log(e.pageY)
    //   },滚动条监听
      but(){

         let box= this.$el.querySelector("#box1")
        //  console.log(box)
        //  console.log(box.offsetTop)
         document.documentElement.scrollTop=box.offsetTop+800
      }
  },
    // mounted(){
    //   window.addEventListener('scroll',this.handleScroll,true)
    //   console.log(window.addEventListener('scroll',this.handleScroll,true))
    // },滚动条监听
 
   }
   

</script>

<style lang='scss' scoped>
 @import "~@/assets/css/function.scss";

 .newsbox{
     .el-container{
         .el-header{padding: 0px}
         .el-main{padding: 0px}
         .el-footer{padding: 0px}
     }
 .context{
     background: url("../../../static/img/news/newsdatu.jpg")no-repeat center center ;
     background-size: 100% 100%;
     height: 100vh;
     width: 100%;
  }
  .wrapper{
         width: 100%;
         height: 33%;
         background-color: rgba(55, 86, 136, 0.8);
         border: 0px solid;
         float: right;
     }
     .category{
        color: #988854;
        font-size: 12px;
        font-size: 1.2rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
        font-family: "Noto Sans",Helvetica,Arial,sans-serif;
     }
     .title{
        color: #FFF;
        line-height: 1;
        font-size: 48px;
        font-size: 2.8rem;
        margin-bottom: 0.5rem;
     }
     .bais{
        color: #FFF; 
     }
  .bg-purple-dark{
      margin-top: 10px;
  }
  .grid-content{
      font-size: 60px;
      height: 80px;
  }
 .bg-purple-light, .bg-purple{
     margin-top: 50px;
     line-height: 0px;
 }

 }
 
 </style>
