<template>
    <div class="personComponents-box">
      <div class="person-tree-box">
        <div class="title">
          部门列表
        </div>
        <div class="filterInput">
          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>
        </div>
        <el-scrollbar class="scrollbar-box">
          <el-tree
            node-key="orgCode"
            class="org-tree"
            :data="treeData"
            highlight-current
            :props="treeProps"
            @node-click="nodeClick"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree">
          </el-tree>
        </el-scrollbar>
      </div>
      <div class="person-table-box">
        <div class="search-box">
          <el-input
            placeholder="输入姓名"
            v-model="filterName">
          </el-input>
          <el-button size="small" @click="getTableData">查询</el-button>
        </div>
        <div class="table-box">
          <el-table
            :data="personalTableData"
            ref="personalTable1"
            height="270px"
            @select="selectRow"
            @select-all="selectAll1"
            @current-change="currentChange"
            highlight-current-row
            border
            >
            <el-table-column
              fixed
              highlight-current-row
              v-if="!isSingle"
              type="selection"
              width="40">
            </el-table-column>
            <el-table-column width="80px" align="center"  type="index" label="序号">
            </el-table-column>
            <el-table-column width="120px" align="center" label="姓名" prop="name">
            </el-table-column>
            <el-table-column min-width="140px"  align="center" label="部门" prop="companyName">
            </el-table-column>
          </el-table>
          <el-pagination
              class="mt10"
              small
              @current-change="currentPageChange"
              :page-size="10"
              layout="total,prev, pager, next,jumper"
              :total="page.total">
            </el-pagination>
        </div>
      </div>
    </div>

</template>
<script>
  import { fetchTree } from '@/api//permission/organization'
  import { fetchList } from '@/api//permission/staff'
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val)
      }
    },
    props: {
      isSingle: {
        default: true,
        type: Boolean
      },
      icon: {
        default: 'el-icon-plus',
        type: String
      },
      size: {
        default: 'small',
        type: String
      },
      init: {
        type: Array,
        default: []
      },
      singleInit: {
        type: Object,
        default: {}
      }
    },
    mounted() {
      this.init.forEach((item) => {
        this.selectedPersonalList.push(item)
      })
      this.getTree()
      this.getTableData()
    },
    updated() {
//      this.setNode()
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      },
      setToggleRowSelection(data) {
        const that = this
        that.personalTableData.forEach((row) => {
          data.forEach((item) => {
            if (row.id === item.id) {
              that.$refs.personalTable1.toggleRowSelection(row, true)
            }
          })
        })
      },
      open() {
        this.visible = true
      },
      currentChange(currentRow) {
        this.currentRow = Object.assign({}, currentRow)
      },
      currentPageChange(val) {
        this.page.currentPage = val
        this.getTableData()
      },
      setNode() {
        const that = this
        if (this.isSingle) {
          that.personalTableData.forEach((row) => {
            if (row.id === that.singleInit.id) {
              this.$refs.personalTable1.setCurrentRow(row, true)
            }
          })
        } else {
          this.setToggleRowSelection(this.selectedPersonalList)
        }
      },
      treeLoadNode(node, resolve) {
//        const that = this
      },
      getTree() {
        const that = this
        fetchTree().then(res => {
          that.treeData = res.data.data
        })
      },
      getTableData() {
        fetchList({
          page: this.page.currentPage,
          name: this.filterName,
          company_code: this.orgCode,
          limit: this.page.pageSize
        }).then(response => {
          this.personalTableData = response.data.records
          this.page.total = response.data.total
          setTimeout(() => {
            this.setNode()
          }, 100)
        })
      },
      nodeClick(node) {
        this.orgCode = node.orgCode
        this.getTableData()
      },
      checkChange(data, checked, indeterminate) {
        this.orgs = this.$refs.tree.getCheckedNodes()
      },
      selectRow(selection, row) {
        const that = this
        let isExist = false
        that.selectedPersonalList.forEach((item, index) => {
          if (item.id === row.id) {
            isExist = true
            that.selectedPersonalList.splice(index, 1)
          }
        })
        if (!isExist) {
          that.selectedPersonalList.push(row)
        }
      },
      selectAll1(selection) {
        const that = this
        if (selection.length) {
          selection.forEach((row) => {
            let isExist = false
            that.selectedPersonalList.forEach((item) => {
              if (row.id === item.id) {
                isExist = true
              }
            })
            if (!isExist) {
              that.selectedPersonalList.push(row)
            }
          })
        } else if (that.personalTableData.length) {
          for (let i = 0; i < that.selectedPersonalList.length; i++) {
            let isExist = false
            that.personalTableData.forEach((item) => {
              if (that.selectedPersonalList[i].id === item.id) {
                isExist = true
              }
            })
            if (isExist) {
              that.selectedPersonalList.splice(i, 1)
              i--
            }
          }
        }
      },
      changeSelect() {
        if (this.isSingle) {
          const currentRow = Object.assign({}, this.currentRow)
          return currentRow
        } else {
          const selectedPersonalList = []
          this.selectedPersonalList.forEach((item) => {
            selectedPersonalList.push(item)
          })
          return selectedPersonalList
        }
      }
    },
    data() {
      return {
        filterText: '',
        filterName: '',
        orgCode: '',
        treeData: [],
        orgs: [],
        currentRow: {},
        selectedPersonalList: [],
        personalTableData: [],
        visible: false,
        singleOrg: {},
        page: {
          total: 0,
          currentPage: 1,
          pageSize: 10
        },
        treeProps: {
          children: 'children',
          label: 'orgName'
        }
      }
    }
  }
</script>
