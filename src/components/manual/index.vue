<template>
    <div>
       <el-container>
            <el-header>Header</el-header>
            <el-main>
                <NEWS></NEWS>
                <CATEGORY></CATEGORY>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
import news from './news'
import category from './category'
export default {
  data(){
      return{

      }
  },
  components:{
          NEWS:news,
         CATEGORY:category,
         
     },
}
</script>

<style scoped>

</style>
