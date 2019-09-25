<!--
  -    Copyright (c) 2018-2025, lengleng All rights reserved.
  -
  - Redistribution and use in source and binary forms, with or without
  - modification, are permitted provided that the following conditions are met:
  -
  - Redistributions of source code must retain the above copyright notice,
  - this list of conditions and the following disclaimer.
  - Redistributions in binary form must reproduce the above copyright
  - notice, this list of conditions and the following disclaimer in the
  - documentation and/or other materials provided with the distribution.
  - Neither the name of the pig4cloud.com developer nor the names of its
  - contributors may be used to endorse or promote products derived from
  - this software without specific prior written permission.
  - Author: lengleng (wangiegie@gmail.com)
  -->

<template>
  <el-color-picker size="mini" class="theme-picker" popper-class="theme-picker-dropdown" v-model="themeVal" :predefine="predefineColors" ></el-color-picker>
</template>

<script>
import theme from '@/utils/theme'

export default {
  name: 'topTheme',
  mixins: [theme()],
  data() {
    return {
      chalk: '',
      predefineColors: [
        '#D70000',
        '#FF7300',
        '#17BB30',
        '#03CBBF',
        '#0F73FF',
        '#0F1BFF',
        '#8419FF'
      ]
    }
  }
}
</script>

<style >
  .theme-picker{
    width: 25px;
    height: 25px;
    line-height: 25px;
  }
  .el-color-picker--mini .el-color-picker__trigger{
    width: 25px!important;
    height: 25px!important;
    line-height: 25px;
  }
.theme-picker .el-color-picker__trigger {
  vertical-align: middle;

}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
