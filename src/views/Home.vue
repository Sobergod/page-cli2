<template>
  <div class="home">
    <h1 v-for="item in 100" :key="item">{{item}}this is home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
