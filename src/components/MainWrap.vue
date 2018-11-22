<template>
    <div class="main-wrap">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "MainWrap"
};
</script>

<style scoped>
.main-wrap {
    padding-top: 50px;
    padding-bottom: 50px;
}
</style>