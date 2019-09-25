<template>
  <div class="g-pt50">
    <div class="toolbar-box">
      <div class="toolbar">

      </div>
    </div>
    <el-scrollbar class="m-content-box">
      <div class="m-content">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ui-form ">
          <div class="ui-title-b " style="margin-top: 0"><span>基本信息：</span></div>
          <div class="content-item g-mt20">
            <el-row>
              <el-col :xs="24" :md="12" :xl="8">
                <el-form-item label="活动名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :xs="24" :md="12" :xl="8">
                <el-form-item label="活动区域" prop="region">
                  <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :md="12" :xl="8">
                <el-form-item label="活动时间" required>
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :md="12" :xl="8">
                <el-form-item label="是否自费" prop="delivery">
                  <el-switch v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :md="12" :xl="8">
                <el-form-item label="活动性质" prop="type">
                  <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :md="12" :xl="8">
                <el-form-item label="特殊资源" prop="resource">
                  <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <div class="ui-title-b " ><span>附件上传：</span></div>
          <el-form-item label="附件上传" prop="fileList">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="ruleForm.fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <span slot="tip" class="g-ml10">只能上传jpg/png文件，且不超过500kb</span>
            </el-upload>
          </el-form-item>
          <div class="btn-box">
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button type="danger" @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="back">返回</el-button>
          </div>
        </el-form>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>

  export default{
    components:{
    },
    data(){
        return{
          ruleForm: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
            fileList: [],
          },

          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            region: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            date2: [
              { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            resource: [
              { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            desc: [
              { required: true, message: '请填写活动形式', trigger: 'blur' }
            ]
          }
        }
    },
    mounted(){

    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      back(){
          this.$router.go(-1)
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>
<style>

</style>
