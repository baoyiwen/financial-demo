<template>
  <div>
    <el-row :gutter="24">
        <el-col :span="24" style="max-height: 400px; overflow: auto">
          <el-tree
            :data="treeData"
            :props="treeProps"
            @node-click="choseOgr"
            :load="unitTreeLoadNode"
            highlight-current lazy>
          </el-tree>
        </el-col>
    </el-row>
  </div>

</template>
<script>
  import Config from '@/config'

  export default {
    data() {
      return {
        treeData: [],
        treeProps: {
          label: 'organizationName',
          children: 'children'
        },
        Org:''
      }
    },
    props: {
      selectedOrg: {
        type: Object
      }
    },
    mounted:function () {

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

      choseOgr (val) {  //选择组织 树查询
        this.Org = val;
        this.$emit("choseOgr",this.Org);

      },
      selectOgr(){
        return this.Org;
      },
      unitTreeLoadNode: function (node, resolve) {
        let that = this;
        that.$http.get(Config.portalApiUrl + "/organization/getUnitTree",
          {params: {'organizationCode': node.data.organizationCode}}).then(function (data) {
          if (showError(data, that)) {
            resolve(data.data.data);
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
