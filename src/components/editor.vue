<template>
  <div :id="id">
    <script type="text/plain"></script>
  </div>
</template>
<style>
  .edui-editor .edui-box {
    line-height:20px !important;
  }
</style>
<script>
  export default {
    name: 'UE',
    data() {
      return {
        editor: null
      }
    },
    props: {
      defaultMsg: {
        type: String
      },
      id: {
        default: 'editor'
      },
      config: {
        toolbars: [
          ['bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'fontfamily',
            'superscript', 'subscript', 'removeformat', 'formatmatch', 'pasteplain', '|',
            'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist'
            , 'selectall', 'cleardoc', '|',
            'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
            'customstyle', 'paragraph', 'fontsize', '|',
            'directionalityltr', 'directionalityrtl', 'indent', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
            'link', 'unlink', 'anchor', '|',
            'attachment', 'simpleupload', 'fullscreen', 'undo', 'redo', '|'
          ]
        ],
        elementPathEnabled: false,
        wordCount: false,
        maximumWords:{
          default: 10000
        }

      }
    },
    mounted() {
      const _this = this;
      console.log(_this.defaultMsg)
      _this.editor = UE.getEditor(_this.id, _this.config); // 初始化UE
      _this.editor.addListener("ready", function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
        // console.log(_this.config,"======config")
      });
    },
    methods: {
      getUEContent() { // 获取内容方法
        return this.editor.getContent()
      },
      setContent(value, status) {
         return this.editor.setContent(value, status);
      },
      getContentTxt() {
         return this.editor.getContentTxt();
      },
      //获取当前数据的字数
      getContentLength() {
        return this.editor.getContentLength(true);
      },
      getPlainTxt(){
        return this.editor.getPlainTxt()
      },
      inserthtml(val){
        return this.editor.execCommand( 'inserthtml', val);
      }

    },
    destroyed() {
      this.editor.destroy();
    }
  }
</script>
