<template>
    <header class="header">
        {{pageTitle}}
    </header>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  },
  computed: {}
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #eee;
}
</style>