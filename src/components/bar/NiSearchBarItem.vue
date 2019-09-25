<template>
    <el-col :span="span" class="el-form-box">
        <el-form-item :label="label">
            <slot/>
        </el-form-item>
    </el-col>
</template>
<script>
    export default {
      props: {
        label: {
          type: String
        },
        span: {
          type:Number,
          default:8
        }
      }
    }
</script>
