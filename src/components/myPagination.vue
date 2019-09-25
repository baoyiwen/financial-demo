
<template>
  <div class="my-page-box">
    <el-select v-model="pageConfig.pageSize" @change="sizeChange" placeholder="显示10条">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <button @click="currentChange(1)" :disabled="pageConfig.currentPage==1"  class="btn-page arrow-left"><i class="iconfont  icon-shuangjiantouyou"></i></button>
    <button @click="prePage(-1)" :disabled="pageConfig.currentPage==1"  class="btn-page arrow-left"><i class="iconfont  icon-arrow"></i></button>
    <div class="page-middle">
      第<span class="page-num-box">{{pageConfig.currentPage}}</span>页/共{{pageConfig.totalPage}}页
    </div>
    <button @click="prePage(1)" :disabled="pageConfig.currentPage==pageConfig.totalPage"  class="btn-page"><i class="iconfont icon-arrow"></i></button>
    <button @click="currentChange(pageConfig.totalPage)" :disabled="pageConfig.currentPage==pageConfig.totalPage"  class="btn-page"><i class="iconfont icon-shuangjiantouyou"></i></button>
    <div class="page-middle">
      跳转至第
      <input class="page-num" v-model="pageConfig.goPage" type="text">
      页
      <button @click="skipPage" class="go-page">
        确定
      </button>

    </div>
    <div class="page-right">
        共{{pageConfig.total}}条数据
      </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        pageConfig:{
          pageSize:10,
          currentPage:1,
          goPage:1,
          totalPage:1,
          total:0,
        },
        options: [
          {
            value: 10,
            label:'显示10条'
          }, {
            value: 20,
            label:'显示20条'
          }, {
            value: 50,
            label:'显示50条'
          }, {
            value: 100,
            label:'显示100条'
          }, {
            value: 200,
            label:'显示200条'
          }],
      }
    },
    watch:{
      total(val){
        this.pageConfig.total = val;
        this.pageConfig.totalPage = Math.ceil(this.total/this.pageConfig.pageSize)>0?Math.ceil(this.total/this.pageConfig.pageSize):1;
      }
    },
    props: {
      currentPage:{
        default:1
      },
      total:{
        default:0
      },
      pageSize:{
        default:10
      }
    },
    mounted(){
        this.pageConfig.currentPage = this.currentPage;
        this.pageConfig.pageSize = this.pageSize;
        this.pageConfig.total = this.total;
        this.pageConfig.totalPage = Math.ceil(this.total/this.pageConfig.pageSize);
    },
    updated(){
      this.pageConfig.currentPage = this.currentPage;
      this.pageConfig.pageSize = this.pageSize;
      this.pageConfig.total = this.total;
      this.pageConfig.totalPage = Math.ceil(this.total/this.pageConfig.pageSize);
    },
    methods:{
      sizeChange(val) {
        this.pageConfig.goPage = 1;
        this. currentChange(1);
        this.$emit('sizeChange',val);
      },
      skipPage() {
        this.pageConfig.goPage =isNaN(this.pageConfig.goPage)? this.pageConfig.currentPage : parseInt(this.pageConfig.goPage);
        this.pageConfig.goPage =this.pageConfig.goPage>this.pageConfig.totalPage?this.pageConfig.totalPage:this.pageConfig.goPage;
        this.pageConfig.goPage =this.pageConfig.goPage<1?1:this.pageConfig.goPage;
        this.pageConfig.currentPage = this.pageConfig.goPage;
        this.$emit('currentChange',this.pageConfig.goPage);
      },
      currentChange(val){
        this.pageConfig.currentPage = val;
        this.pageConfig.goPage = this.pageConfig.currentPage;
        this.$emit('currentChange',val);
      },
      prePage(val){
        this.pageConfig.currentPage = parseInt(this.pageConfig.currentPage);
        val = parseInt(val);
        this.pageConfig.currentPage += val;
        this.pageConfig.goPage = this.pageConfig.currentPage;
        this.$emit('currentChange',this.pageConfig.currentPage);
      }
    }
  }
</script>
