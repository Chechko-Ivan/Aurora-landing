<template>
  <div class="navbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 95px;

  > div.ant-row {
    width: 100%;
  }
}
</style>
