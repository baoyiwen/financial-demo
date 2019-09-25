<template>
  <el-button @click="handleClick" size="small">
    <slot/>
  </el-button>
</template>
<script>
  export default {
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>
