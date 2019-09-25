<template>
  <div class="g-pt50">
    <div class="toolbar-box">
      <div class="toolbar">
        <el-button  @click="back">返回</el-button>
      </div>
    </div>
    <div class="m-content-box">
        <div class="m-content">
          <el-tabs class="border-card" type="border-card" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="活动详情" name="first">
              <el-scrollbar class="m-tabs-content" >
                <div class="ui-title">基本信息</div>
                <table class="ui-info-table">
                  <tr>
                    <td>工作活动编号</td>
                    <td>工作活动编号</td>
                    <td>活动主题</td>
                    <td>活动主题</td>
                    <td>活动类型</td>
                    <td>活动类型</td>
                  </tr>
                  <tr>
                    <td>工作活动编号</td>
                    <td>工作活动编号</td>
                    <td>活动主题</td>
                    <td>活动主题</td>
                    <td>活动类型</td>
                    <td>活动类型</td>
                  </tr>
                  <tr>
                    <td>工作活动编号</td>
                    <td>工作活动编号</td>
                    <td>活动主题</td>
                    <td>活动主题</td>
                    <td>活动类型</td>
                    <td>活动类型</td>
                  </tr>
                  <tr>
                    <td>工作活动编号</td>
                    <td>工作活动编号</td>
                    <td>活动主题</td>
                    <td>活动主题</td>
                    <td>活动类型</td>
                    <td>活动类型</td>
                  </tr>
                  <tr>
                    <td>工作活动编号</td>
                    <td>工作活动编号</td>
                    <td>活动主题</td>
                    <td>活动主题</td>
                    <td>活动类型</td>
                    <td>活动类型</td>
                  </tr>
                </table>
                <div class="ui-title">基本信息</div>
                <table class="ui-info-table">
                  <tr>
                    <td>工作活动编号</td>
                    <td>工作活动编号</td>
                    <td>活动主题</td>
                    <td>活动主题</td>
                    <td>活动类型</td>
                    <td>活动类型</td>
                  </tr>
                  <tr>
                    <td>工作活动编号</td>
                    <td>工作活动编号</td>
                    <td>活动主题</td>
                    <td>活动主题</td>
                    <td>活动类型</td>
                    <td>活动类型</td>
                  </tr>
                  <tr>
                    <td>工作活动编号</td>
                    <td>工作活动编号</td>
                    <td>活动主题</td>
                    <td>活动主题</td>
                    <td>活动类型</td>
                    <td>活动类型</td>
                  </tr>
                  <tr>
                    <td>工作活动编号</td>
                    <td>工作活动编号</td>
                    <td>活动主题</td>
                    <td>活动主题</td>
                    <td>活动类型</td>
                    <td>活动类型</td>
                  </tr>
                  <tr>
                    <td>工作活动编号</td>
                    <td>工作活动编号</td>
                    <td>活动主题</td>
                    <td>活动主题</td>
                    <td>活动类型</td>
                    <td>活动类型</td>
                  </tr>
                </table>
              </el-scrollbar>
            </el-tab-pane>
            <el-tab-pane label="关联日程" name="second">
              <el-scrollbar class="m-tabs-content" >
                <div class="ui-title">关联日程</div>
              </el-scrollbar>
            </el-tab-pane>
            <el-tab-pane label="关联合同" name="third">
              <el-scrollbar class="m-tabs-content" >
                <div class="ui-title">关联合同</div>
              </el-scrollbar>
            </el-tab-pane>
            <el-tab-pane label="关联附件" name="fourth">
              <el-scrollbar class="m-tabs-content" >
                <div class="ui-title">关联附件</div>
              </el-scrollbar>
            </el-tab-pane>
          </el-tabs>
        </div>
    </div>

  </div>
</template>
<script>

  export default{
    components:{
    },
    data(){
        return{
          activeName: 'first'
        }
    },
    mounted(){

    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      back(){
          this.$router.go(-1)
      }
    }
  }
</script>
<style>

</style>
