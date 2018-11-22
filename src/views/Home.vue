<template>
  <div class="home">
    <div>测试</div>
    <h1 v-for="item in 100" :key="item">{{item}}this is home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  created() {
    this.setPageInfo();
  },
  activated() {
    this.setPageInfo();
  },
  methods: {
    setPageInfo() {}
  }
};
</script>
<style scope>
.home {
  padding-top: 50px;
}
</style>
