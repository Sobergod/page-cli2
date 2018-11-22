<template>
    <footer class="footer">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #eee;
}
</style>