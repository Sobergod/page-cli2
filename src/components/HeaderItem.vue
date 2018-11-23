<template>
  <header class="header" :class="isHeaderActive?'header-item-active':'header-item'">
    <div class="title">
      <span>{{pageTitle}}</span>
    </div>
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
  data() {
    return {
      isHeaderActive: false
    };
  },
  created() {
    this.documentScroll();
  },
  computed: {},
  methods: {
    documentScroll() {
      this.isHeaderActive = false;
      let mainWrap = window.document;
      mainWrap.onscroll = this._.debounce(this._scroll, 10);
    },
    _scroll() {
      const SCROLL_OFFSET = 1;
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > SCROLL_OFFSET) {
        this.isHeaderActive = true;
      } else {
        this.isHeaderActive = false;
      }
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  background: #eee;
}
.header-item {
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.header-item-active {
  transform-origin: top;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.title {
  position: absolute;
  transition: left 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.header-item-active .title {
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
}
</style>