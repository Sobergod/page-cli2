<template>
  <main-page></main-page>
</template>

<script>
import MainPage from "./views/MainPage";
export default {
  components: {
    MainPage
  },
  created() {
    this.test();
  },
  methods: {
    test() {
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
