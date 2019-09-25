<template>
  <ni-button @click="handleClick">
   <i class="el-icon-edit-outline"></i>
    <span>修改</span>
  </ni-button>
</template>
<script>
  import NiButton from './NiButton';
  export default {
    components:{NiButton},
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>
