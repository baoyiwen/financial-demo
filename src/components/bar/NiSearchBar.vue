
<template>
  <div id="searchBox" :class="{'hs-search-box':hs}" class="ui-search-box">
    <!--<el-button style="margin-left: 10px;" @click="btn_query" icon="el-icon-search" type="primary">查询</el-button>-->
    <!--<el-button @click="hs = !hs">高级筛选</el-button>-->

    <div class="ui-search-box-child">
      <div class="search-btn-top" >
        <div style="display: inline-flex;justify-content: flex-end;width: 100%;max-width: 410px">
          <!--<el-button @click="btn_reset" icon="el-icon-refresh" size="small" type="primary">重置</el-button>-->
          <el-button v-if="hs" icon="el-icon-search" size="small" type="primary" @click="btn_query">查询</el-button>
          <!--<el-button v-else @click="btn_query2" icon="el-icon-search" size="small" type="primary">查询</el-button>-->

          <!--<el-button @click="hs = !hs"  size="small"  >-->
          <!--高级筛选-->
          <!--<i  class=" el-icon-arrow-down"  v-if="hs"></i>-->
          <!--<i class="el-icon-arrow-up" v-else></i>-->
          <!--</el-button>-->
        </div>
      </div>
      <div class="search-item-box">
        <div v-if="!hs">
          <el-input
            v-model="value"
            class="value-search-box"
            style="flex-grow:1"
            placeholder="请输入"
            prefix-icon="el-icon-search"/>
        </div>
        <el-form v-if="hs" :label-width="labelWidth" label-position="right" class="search-form">
          <el-row>
            <slot/>
          </el-row>
        </el-form>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  props: {
    value: String,
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  data() {
    return {
      hs: true
    }
  },
  watch: {

    value: function(val) {
      this.$emit('input', val)
    }

    // value(val) {
    //     this.$emit('input', val);
    // }
  },
  methods: {
    btn_query(evt) {
      this.$emit('query', evt)
    },
    btn_query2(evt) {
      this.$emit('quick-query', evt)
    },
    btn_reset(evt) {
      this.$emit('reset', evt)
    }
  }

}
</script>
