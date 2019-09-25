<template>
  <div>
    <el-row>
      <el-col>
        <el-col :span="8">
          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>
          <el-tree
            style="min-width: 260px;margin-top:10px;height: 400px;overflow: auto"
            ref="tree"
            :data="treeData"
            :props="treeProps"
            :filter-node-method="filterNode"
            @node-click="selectPersonalClickTree"
            :load="treeLoadNode"
            highlight-current lazy>
          </el-tree>
        </el-col>
        <el-col :span="16" style="padding-left: 15px;">
          <el-col class="text-right ">
            <el-input
              placeholder="请输入姓名"
              v-model="searchValue" style="width: 217px">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="primary" @click="searchValueFu">搜索</el-button>
          </el-col>
          <el-col class="mt10">
            <el-table
              ref="personalTable2"
              :data="personalTableData"
              :border="true"
              highlight-current-row
              @row-click="handleCurrentChange"
            >
              <el-table-column
                label="序号"
                width="80">
                <template slot-scope="scope">
                  {{(scope.$index + 1) + page.size * (page.currentPage - 1)}}
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
              >
              </el-table-column>
              <el-table-column
                prop="organizationName"
                label="组织名称"
              >
              </el-table-column>
            </el-table>
          </el-col>
          <el-col class="text-center mt10">
            <el-pagination
              layout="prev, pager, next"
              :total="page.total"
              :page-size="page.size"
              :current-page="page.currentPage"
              @current-change="currentChange"
            ></el-pagination>
          </el-col>
        </el-col>
      </el-col>
    </el-row>

  </div>

</template>
<script>
  import Config from '@/config'

  export default {
    data() {
      return {
        personalTableData: [],
        treeData: [],
        isSearch: false,
        filterText:'',
        searchValue: '',
        selectPersonalNodeHand: '',
        treeProps: {
          label: 'organizationName',
          children: 'zones'
        },
        page: {
          size: 10,
          total: 1,
          currentPage: 1
        },
      }
    },
    props: {
      selectedSinglePersonalList: {
        type: Array
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
      getSingleSelectionList: function () {
        const that = this;
        return that.selectedSinglePersonalList;
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.organizationName.indexOf(value) !== -1;
      },
      clear: function () {
         this.$refs.personalTable2.setCurrentRow(null);
      },
      setCurrentRowTable:function (row) {
        this.$refs.personalTable2.setCurrentRow(row);
      },
      currentRowTable: function () {
        const that = this;
        that.personalTableData.forEach(function (row) {
          if (that.selectedSinglePersonalList.length && row.id == that.selectedSinglePersonalList[0].id) {
            that.$refs.personalTable2.setCurrentRow(row);
          }
        });
      },
      searchValueFu: function () {
        this.isSearch = true;
        this.getPersonalTable(1);
      },
      selectPersonalClickTree: function (val) {
        this.selectPersonalNodeHand = val;
        this.getPersonalTable();
      },
      currentChange: function (val) {
        if (this.page.currentPage != val) {
          this.page.currentPage = val;
          this.getPersonalTable(val);
        }
      },
      treeLoadNode: function (node, resolve) {
        const that = this;
        that.$http.get(Config.portalApiUrl + "/organization/getTree",
          {params: {'pid': node.data.organizationCode}}).then(function (data) {
          if (showError(data, that)) {
            resolve(data.data.data);
          }
        });
      },
      handleCurrentChange: function (val) {
        const that = this;
        that.selectedSinglePersonalList[0] = val;
        that.$emit("val", that.selectedSinglePersonalList);
//        console.log(that.selectedSinglePersonalList);
      },
      getPersonalTable: function (val) {
        const that = this;
        let params = {
          orderBy: 'id asc',
          page: val-1,
          size: that.page.size,
          name:that.searchValue,
        };
        that.personalTableData = [];
        if (that.selectPersonalNodeHand) {
          // params.value = that.selectPersonalNodeHand.organizationCode;
          // params.property = 'organizationCode';
          params.organizationCode = that.selectPersonalNodeHand.organizationCode;
        }
        that.$http.get(Config.portalApiUrl + "/staff/", {params: params})
          .then(function (data) {
            if (data.data.code == '200' && data.data.data) {
              that.personalTableData = data.data.data.content;
              that.page.total = data.data.data.totalElements;
              setTimeout(function () {
                that.currentRowTable();
              }, 20)
            }
          });
      },
    }
  }

  function showError(data, that) {
    if (data.data.code != '200') {
      that.$message({
        message: data.data.msg,
        type: 'warning'
      });
      return null;
    } else {
      return data;
    }
  }
</script>
