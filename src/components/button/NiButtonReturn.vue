<template>
  <ni-button @click="handleClick">
    <i class="el-icon-plus"></i>
    <span>返回</span>
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

<style scoped>

</style>
