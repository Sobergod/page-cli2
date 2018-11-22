<template>
    <div>
        <header-item></header-item>
        <main-wrap>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
            <router-view></router-view>
        </main-wrap>
        <footer-item></footer-item>
    </div>
</template>

<script>
import HeaderItem from "../components/HeaderItem";
import FooterItem from "../components/FooterItem";
import MainWrap from "../components/MainWrap";
export default {
  name: "MainPage",
  components: {
    HeaderItem,
    FooterItem,
    MainWrap
  }
};
</script>

<style scoped>
</style>