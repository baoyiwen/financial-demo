<template>
  <div class="info-item">
    <label>{{ label }}</label>
    <div class="info-content">
     <div v-for="item in value">
       <a :href="baseIp+item.url">{{item.name}}</a>
     </div>
    </div>
  </div>
</template>
<script>
  import config from '../../config'
export default {
  data() {
      return{
        baseIp: config.baseIp
      }
  },
  props: {
    label: {
      type: String
    },
    value: {
    }
  },
  mounted() {

    this.value = JSON.parse(this.value)
      console.log(this.value)
  }
}
</script>
