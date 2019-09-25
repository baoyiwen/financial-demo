<style scoped>
  .el-card__header {
    padding: 100px 0 !important;
  }

  .form-header-box {
    background-color: #f0f0f0;
    display: flex;
    /*padding: 4px 10px;*/
    vertical-align: center;
    line-height: 44px;
    font-weight: bolder;
    border: 1px solid #dfdfdf;
    border-radius: 2px;

    /*border-bottom: 1px solid #dddddd;*/
  }

  .mt15 {
    margin-top: 15px;
  }

  .form-title-box {
    color: #333;
    font-size: 20px;
    font-weight: normal;

  }

  .sub-form-header-box:hover {
    cursor: pointer;
  }

  .sub-form-header-box {
    border-left: 4px solid #2BA943;
    text-align: left;
    padding-left: 15px;
    line-height: 44px;

  }

  .sub-form-header-box span {
    font-size: 20px;
  }

  .form-buuton-box {
    margin-right: 10px;
    /*padding: 4px 0;*/
    box-sizing: border-box;
    /*height: 50px;*/
  }

  .form-buuton-box > div {
    vertical-align: middle;
    line-height: normal;
    margin: auto 10px;
    height: 32px;
    min-width: 122px;
    display: inline-block;
  }
</style>
<template>
  <div>
    <div v-if="name" slot="header"
         class="form-header-box"
         v-bind:class="{'sub-form-header-box':align==='left','mt15':isNone==='true'}"
         :style="headerStyle"
    >
      <span class="form-title-box" @click="collapsing = !collapsing" style="flex-grow: 1;" :style="panelTitleStyle">{{name}}</span>

      <div class="form-buuton-box" v-show="collapse">
        <slot name="header"/>
      </div>
    </div>
    <el-collapse-transition>
      <div style="padding: 18px 20px" v-show="collapse">
        <el-row>
          <el-col>
            <slot/>
          </el-col>
        </el-row>
      </div>
    </el-collapse-transition>
  </div>
</template>
<script>
  export default {
    props: {
      name: String,
      align: {
        type: String,
        default: 'center'
      },
      isNone: {
        type: String,
        default: 'true'
      },
      collapsible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        collapsing: false
      };
    },
    computed: {
      collapse() {
        if (this.collapsible) {
          if (this.collapsing) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      },
      panelTitleStyle() {
        const style = {};
        if (this.align === 'center') {
          style.textAlign = 'center';
        }
        if (this.align === 'left') {
          style.textAlign = 'left';
        }
        return style;
      },
      headerStyle() {
        const style = {};
        if (this.align === 'center') {
          style.justifyContent = 'space-around';
        }
        if (this.align === 'left') {
          style.justifyContent = 'start';
        }
        return style;
      }
    },
  }
</script>

