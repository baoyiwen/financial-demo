<template>
  <div>
    <Upload
      ref="upload"
      :default-file-list="defaultList"
      :before-upload="handleBeforeUpload"
      :on-success="handleSuccess"
      :action="action"
      type="drag">
      <div style="padding: 20px 0">
        <Icon type="upload" size="52" />
        <p>点击或将文件拖拽到这里上传</p>
      </div>
    </Upload>

  </div>
</template>
<script>
export default {
  name: 'UploadCustom',
  props: {
    defaultList: { // 默认
      type: Array,
      default() {
        return []
      }
    },
    maxSize: { // 文件大小
      type: Number,
      default: 2048
    },
    action: { // 提交地址
      type: String,
      default: ''
    },
    type: { // 支持拖拽
      type: String,
      default: 'select'
    },
    name: {
      type: String,
      default: 'photo'
    }
  },
  data() {
    return {
      formData: {
        file_name: '',
        index: -1
      },
      imgName: '',
      visible: false,
      uploadList: []

    }
  },
  mounted() {
    this.uploadList = this.$refs.upload.fileList
  },
  methods: {
    handleChangeAlias() {
      this.uploadList[this.formData.index]['file_name'] = this.formData.file_name
      this.uploadList[this.formData.index]['visible'] = false
      this.$emit('handleUploadsValue', this.uploadList)
      this.formData = {
        file_name: '',
        index: -1
      }
    },
    handleAlias(item, index) {
      // 有上传操作未完成的
      if (this.formData.index != -1) {
        this.$set(this.uploadList[this.formData.index], 'visible', false)
      }
      this.formData = Object.assign({}, this.formData, {
        file_name: item.file_name || '',
        index
      })
      this.$set(this.uploadList[index], 'visible', true)
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
      // 更新uploadList
      this.uploadList = this.$refs.upload.fileList
    },
    handleSuccess(res, file) {
      file.url = res.data
      //      file.name = res.items.name;
      //      file.file_name = res.items.name;
      // 更新uploadList
      this.uploadList = this.$refs.upload.fileList
      this.$emit('handleUploadsValue', this.uploadList)
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: '文件格式不正确',
        desc: '文件：' +
          file.name +
          '格式不正确, 请选择 jpg/png.'
      })
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: '超出最大限制',
        desc: '文件：' + file.name + '超出设定最大限制' + this.maxSize + 'kb'
      })
    },
    handleBeforeUpload(file) {
      // 更新uploadList
      this.uploadList = this.$refs.upload.fileList
      const check = this.uploadList.length < 5
      if (!check) {
        this.$Notice.warning({
          title: '一次最多选择五个文件进行上传.'
        })
      }
      return check
    }
  }
}

</script>
<style>
.demo-upload-list {
  margin-top: 15px;
  display: block;
  line-height: 20px;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  margin-right: 4px;
}

.demo-upload-list .ivu-progress-bg {
  height: 5px !important;
}

.demo-upload-list input {
  padding-top: 0;
  padding-bottom: 0;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  line-height: 19px;
  height: 18px;
}

.demo-upload-list input:focus {
  box-shadow: inherit;
}

.alias-btn {
  margin-right: 10px
}

</style>
