<template>
  <div>
    <header-item :class="isHeaderActive?'header-item-active':'header-item'" :pageTitle="pageTitle"></header-item>
    <main-wrap :paddingBottom="paddingBottom">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main-wrap>
    <footer-item v-if="hasFooter" :style="footerStyle"></footer-item>
  </div>
</template>

<script>
import HeaderItem from "../components/HeaderItem";
import FooterItem from "../components/FooterItem";
import MainWrap from "../components/MainWrap";
const DEFAULT_PAGE_TITLE = "ict";
const HEADER_HEIGHT = 48;
const FOOTER_HEIGHT = 50;
export default {
  name: "MainPage",
  components: {
    HeaderItem,
    FooterItem,
    MainWrap
  },
  data() {
    return {
      pageTitle: DEFAULT_PAGE_TITLE,
      hasFooter: false,
      isHeaderActive: false
    };
  },
  computed: {
    // 动态设置页面信息
    paddingBottom() {
      if (this.hasFooter) {
        return FOOTER_HEIGHT;
      } else {
        return 0;
      }
    },
    footerStyle() {
      return {
        height: FOOTER_HEIGHT + "px"
      };
    }
  },
  created() {
    this.setPageInfo();
    this.documentScroll();
  },
  watch: {
    // 监听路由变化，页面变化
    $route(to, from) {
      let pageTitle = to.meta.pageTitle,
        hasFooter = to.meta.isMainPage;
      this.pageTitle = this._setPageTitle(pageTitle);
      this.hasFooter = this._setFooter(hasFooter);
    }
  },
  methods: {
    // 集中设置页面信息
    setPageInfo() {
      let routeMeta = this.$route.meta;
      this.pageTitle = this._setPageTitle(routeMeta.pageTitle);
      this.hasFooter = this._setFooter(routeMeta.isMainPage);
    },
    // 设置页面标题
    _setPageTitle(title) {
      if (title && title !== undefined) {
        return title;
      } else {
        return DEFAULT_PAGE_TITLE;
      }
    },
    // 设置是否有底边栏
    _setFooter(hasFooter) {
      if (hasFooter === true && hasFooter !== undefined) {
        return true;
      } else {
        return false;
      }
    },
    // 屏幕滚动
    documentScroll() {
      const SCROLL_OFFSET = 1;
      let mainWrap = window.document;
      mainWrap.onscroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop);
        if (scrollTop > SCROLL_OFFSET) {
          this.isHeaderActive = true;
        } else {
          this.isHeaderActive = false;
        }
      };
    }
  }
};
</script>

<style scoped>
.header-item {
  height: 48px;
  overflow: hidden;
  transition: all 0.5s linear;
}
.header-item-active {
  height: 30px;
  transition: all 0.5s linear;
}
</style>