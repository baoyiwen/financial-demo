<template>
  <el-button :disabled="disabled" @click="handleClick" size="small" :type="primary">
    <slot/>
  </el-button>
</template>
<script>
  export default {
    props: {
      disabled: Boolean,
      primary: {
        default:'primary',
        type: String,
      },
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
</script>
