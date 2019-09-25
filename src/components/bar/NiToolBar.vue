<style scoped>


  .tool-bar-style-bread {
    display: flex;
    position: absolute;
    top: 0px;
    /*width: calc(100% - 30px);*/
    /*right: 0;*/
    /*justify-content: space-between;*/
    background-color: #fff;



    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    right: 0;
    z-index: 999;
  }
  .tool-bar-style-bread a{
    font-size: 15px;
    color: #222!important;
    /*font-weight: normal!important;*/
  }
</style>
<template>
  <div :style="toolBarStyle" class="tool-bar-style-bread">
    <div class="flex-1">
      <el-breadcrumb >
        <el-breadcrumb-item v-for="item in breadcrumbs" :key="item.name" v-show="item.name!=='主页'">
          <router-link :to="item.path?item.path:''">{{item.name}}</router-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="tool-bar-style-button">
      <slot/>
      <!--<el-input size="small" style="width: 200px"></el-input>-->
      <!--<el-button size="small">查询</el-button>-->
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      breadcrumbs: {
        type: Array
      }
    },
    computed: {
      toolBarStyle() {
        const style = {
//           width: `calc(100vw - ${this.$style.aside.width.unCollapse}px - 30px)`,
          width: `100%`,
        };
        return style
      }
    },
  }
</script>

