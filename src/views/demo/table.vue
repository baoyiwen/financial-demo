<template>
  <div class="g-pt50 app-child-box">
    <div class="toolbar-box">
      <div class="toolbar">
        <el-button type="primary" size="small" @click="add">新增</el-button>
      </div>
    </div>
    <div class="main-content-box has-pagination">
      <el-scrollbar style="height: 100%" >
<!--        <ni-search-bar v-model="searchForm.findWord" @query="table_getList">-->
<!--          <ni-search-bar-item label="名称">-->
<!--            <el-input v-model="searchForm.name" placeholder="请输入单据编号"/>-->
<!--          </ni-search-bar-item>-->
<!--          <ni-search-bar-item label="项目">-->
<!--            <el-input v-model="searchForm.projectName" placeholder="请输入项目"/>-->
<!--          </ni-search-bar-item>-->
<!--          <ni-search-bar-item label="项目">-->
<!--            <el-input v-model="searchForm.projectName" placeholder="请输入项目"/>-->
<!--          </ni-search-bar-item>-->
<!--          <ni-search-bar-item label="项目">-->
<!--            <el-input v-model="searchForm.projectName" placeholder="请输入项目"/>-->
<!--          </ni-search-bar-item>-->
<!--        </ni-search-bar>-->
        <div class="has-tree-content-box" >
          <div class="main-tree-box">
            <div class="title">
              部门列表
            </div>
            <el-scrollbar class="main-tree-scroll-box" >
              <div>
                232222
              </div>
            </el-scrollbar>
          </div>
          <div class="app-container-child pull-auto" style="">
            <el-table
              :data="tableData3"
              :max-height="maxHeight"
              border
              stripe
            >
              <el-table-column
                prop="date"
                label="日期"
                width="150"/>
              <el-table-column
                prop="name"
                label="姓名"
                width="120"/>
              <el-table-column
                prop="province"
                label="省份"
                width="120"/>
              <el-table-column
                prop="city"
                label="市区"
                width="120"/>
              <el-table-column
                prop="address"
                label="地址"
              />
              <el-table-column
                prop="zip"
                label="邮编"
                width="120"/>
            </el-table>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <div class="m-page-box mt10">
<!--      <my-page :current-page="page.currentPage" :total="page.total" @currentChange="currentChange" @sizeChange="sizeChange"/>-->
    </div>
  </div>
</template>
<script>
export default{
  components: {

  },
  data() {
    return {
      searchForm: {
        findWord: '',
        name: '',
        projectName: ''
      },
      maxHeight: 0,
      heightCount: false,
      page: {
        currentPage: 1,
        total: 1,
        size: 10
      },
      tableData3: []
    }
  },
  mounted() {
    //console.log(this.$store.tagsView.state.visitedViews);
    this.tableData3 = [
      {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
  },
  updated() {
    const that = this
    that.setHeight()
    window.onresize = function() {
      that.setHeight()
    }
  },
  methods: {
    setHeight() {
      const a = document.querySelector('.main-content-box').offsetHeight
      const b = document.querySelector('#searchBox').offsetHeight
      document.querySelector('.main-tree-box').style.height = a - b - 15 + 'px'
      document.querySelector('.has-tree-content-box').style.height = a - b - 13 + 'px'
      document.querySelector('.app-container-child').style.height = a - b - 13 + 'px'
      this.maxHeight = a - b - 20
    },
    table_getList() {},
    handleSelectionChange() {

    },

    selectabled(row, index) {
      if (index === 1) {
        return false
      } else {
        return true
      }
    },
    add() {
      this.$router.push('/demo/menu1/form')
    },
    page_handleCurrentChange(val) {},
    sizeChange(val) {},
    currentChange() {}
  }
}
</script>
