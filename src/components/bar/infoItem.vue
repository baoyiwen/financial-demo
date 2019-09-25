<template>
  <div class="info-item">
    <label>{{ label }}</label>
    <div class="info-content">
      {{ value }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String
    },
    value: {
    }
  }
}
</script>
