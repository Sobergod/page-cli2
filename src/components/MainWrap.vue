<template>
    <div class="main-wrap" :style="wrapStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "MainWrap",
  props: {
    paddingBottom: {
      type: Number,
      default: 0
    }
  },
  computed: {
    wrapStyle() {
      return {
        paddingBottom: this.paddingBottom + "px",
        minHeight: document.documentElement.clientHeight + "px"
      };
    }
  }
};
</script>

<style scoped>
.main-wrap {
  box-sizing: border-box;
}
</style>