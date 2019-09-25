<template>
  <el-col :span="8 * col" :style="colStyle">
    <el-form-item :label="label" :prop="prop">
      <slot/>
    </el-form-item>
  </el-col>
</template>
<script>
  export default {
    props: {
      label: String,
      prop: String,
      col:{
        type:Number,
        default:1
      },
      autoHeight:{
        type:Boolean,
        default: false
      }
    },
    computed:{
      colStyle(){
        const colStyle = {};
        if(!this.autoHeight){
//          colStyle.height = '60px';
        }
        return colStyle;
      }
    },
  }
</script>
