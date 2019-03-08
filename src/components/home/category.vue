<template>
    <div>
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                              <el-radio-group v-model="tabPosition"  style="margin-bottom: 30px;">
                                    <el-radio-button  label="top">类别</el-radio-button>
                                    <el-radio-button  label="right">校园</el-radio-button>
                                    <el-radio-button label="bottom">年</el-radio-button>
                              </el-radio-group>
                    </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light" >
                            <el-dropdown @command="handleCommand" size="medium" split-button   type="primary">
                            {{spa}}
                            <el-dropdown-menu slot="dropdown" >
                                <el-dropdown-item command="按类别筛选">按类别筛选</el-dropdown-item>
                                <el-dropdown-item command="按校友筛选">按校友筛选</el-dropdown-item>
                                <el-dropdown-item command="按图片筛选">按图片筛选</el-dropdown-item>
                            </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </el-col>
                </el-row>
                <CONTENT :spa="this.spa"></CONTENT>
    </div>
</template>

<script>
import content from './content'
export default {
  data(){
      return{
         tabPosition: 'top',
         spa:"按类别筛选",   
      }
      
  },
  methods:{
          handleClick(tab, event) {
        console.log(tab, event);
      },
      handleCommand(command) {
          this.spa=command   
      }
  },
     components:{CONTENT:content}
}
</script>

<style scoped>
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
</style>
