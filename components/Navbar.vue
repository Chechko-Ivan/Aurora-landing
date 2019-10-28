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

  @media (max-width: 991.98px) {
    height: 80px;
  }

  @media (max-width: 575.98px) {
    height: auto;
    padding: 10px 0;
  }

  > div.ant-row {
    width: 100%;
  }
}
</style>
