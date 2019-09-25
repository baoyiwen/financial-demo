<style scoped>
 /*.personal-table-box .el-table th{*/
    /*padding: 8px 0;*/
  /*}*/
 /*.personal-table-box  .el-table td{*/
    /*padding: 6px 0;*/
  /*}*/
</style>
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
            :data="treeData"
            :props="treeProps"
            @node-click="selectPersonalClickTree"
            :filter-node-method="filterNode"
            :load="treeLoadNode"
            highlight-current lazy>
          </el-tree>
        </el-col>
        <el-col :span="16"  style="padding-left: 15px;">
          <el-col class="text-right ">
            <el-input
              placeholder="请输入名称"
              v-model="searchValue" style="width: 217px">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button type="primary" @click="searchValueFu">搜索</el-button>
          </el-col>
          <el-col class="mt10">
            <el-table
              class="personal-table-box"
              ref="personalTable1"
              :data="personalTableData"
              :border="true"
              @select="selectRow"
              @select-all="selectAll1"
              highlight-current-row
            >
              <el-table-column
                type="selection"
                width="55"
              >
              </el-table-column>
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
  import $ from 'jquery'

  export default {
    data() {
      return {
        personalTableData: [],
        treeData: [],
        filterText:'',
        searchValue: '',
        selectPersonalNodeHand: '',
        isSearch: false,
        selectedList:[],
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
      selectedPersonalList: {
        type: Array
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
      setToggleRowSelection: function (data) {
        const that = this;
        that.personalTableData.forEach(function (row) {
          data.forEach(function (item) {
            if (row.staffNumber == item.staffNumber) {
              that.$refs.personalTable1.toggleRowSelection(row, true);
            }
          });
        });
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.organizationName.indexOf(value) !== -1;
      },
      getSelectionList: function () {
        const that = this;
        return that.selectedPersonalList;
      },
      clear: function () {
        this.$refs.personalTable1.clearSelection();
      },
      selectPersonalClickTree: function (val) {
        this.isSearch = false;
        this.selectPersonalNodeHand = val;
        this.getPersonalTable(1);
      },
      searchValueFu: function () {
        this.isSearch = true;
        this.getPersonalTable(1);
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
      selectRow: function (selection, row) {
        const that = this;
        var isExist = false;
        for (let j in that.selectedPersonalList) {
          if (that.selectedPersonalList[j].staffNumber === row.staffNumber) {
            isExist = true;
            that.selectedPersonalList.splice(j, 1);
          }
        }
        if (!isExist) {
          that.selectedPersonalList.push(row);
        }
      },
      selectAll1: function (selection) {
        const that = this;
        if (selection.length) {
          selection.forEach(function (row) {
            var isExist = false;
            that.selectedPersonalList.forEach(function (item) {
              if (row.staffNumber === item.staffNumber) {
                isExist = true;
              }
            });
            if (!isExist) {
              that.selectedPersonalList.push(row);
            }
          });
        } else if (that.personalTableData.length) {
          for (var i = 0; i < that.selectedPersonalList.length; i++) {
            var isExist = false;
            that.personalTableData.forEach(function (item) {
              if (that.selectedPersonalList[i].staffNumber === item.staffNumber) {
                isExist = true;
              }
            });
            if (isExist) {
              that.selectedPersonalList.splice(i, 1);
              i--;
            }
          }
        }
      },
      getPersonalTable: function (val) {
        const that = this;
        let params = {
          orderBy: 'id asc',
          page: val-1,
          // property: 'name',
          name: that.searchValue,
          size: that.page.size
        };
        that.personalTableData = [];
        if (!that.isSearch && that.selectPersonalNodeHand) {
          params.organizationCode = that.selectPersonalNodeHand.organizationCode;
          // params.property = 'organizationCode';
        } else if (that.isSearch) {
          params.name = that.searchValue;
          // params.property = 'name';
        }
         that.$http.get(Config.portalApiUrl + "/staff/", {params: params})
           .then(function (data) {
             if (data.data.code == '200' && data.data.data) {
               that.personalTableData = data.data.data.content;
               that.page.total = data.data.data.totalElements;
               setTimeout(() => {
                 that.setToggleRowSelection(that.selectedPersonalList);
               }, 100);
             }
           });
//        $.ajax({
//          method:'get',
//          url:Config.portalApiUrl + "/staff/",
//          data:{params: params},
//          async:false,
//          success:function (data) {
//            if (data.data.code == '200' && data.data.data) {
//              that.personalTableData = data.data.data.content;
//              that.page.total = data.data.data.totalElements;
//              setTimeout(() => {
//                that.setToggleRowSelection(that.selectedPersonalList);
//              }, 100);
//            }
//          }
//
//        })

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
