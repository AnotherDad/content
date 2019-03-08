<template>
    <div> 
        <el-row>
          <el-col :span="12">
                <el-button size="166px" type="primary">类别</el-button>
                <el-button type="primary" plain>位置</el-button>
          </el-col> 
                  <el-col :span="12">
            <div class="block">
                <el-cascader
                    :options="options"
                     placeholder="按位置筛选"
                    v-model="selectedOptions"
                    @change="handleChange">
                </el-cascader>
            </div>
        </el-col>
        </el-row>
        <COURSE></COURSE>
    </div>
</template>

<script>
import course from './course'
export default {
  data(){
      return{
          selectedOptions:'',
          options: [
              {
          value: 'zhinan',
          label: '上海丶中国',
          },{
          value: 'zujian',
          label: '东京丶日本',
          },{
          value: 'zujian',
          label: '悉尼丶澳洲',
          }
          ]
      }
  },
    components:{
     COURSE:course
    },
       methods:{
         handleChange(v){
             console.log(v)
         } 
       }

}
</script>

<style scoped>
.el-row{
    margin-top: 50px;
}
.el-button--primary{
    width: 166px;
    height: 55px;
    margin-left: 0px;
}
.el-cascader{
border: 1px solid #66b1ff;
}
</style>
