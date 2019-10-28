<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1380px;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 767.98px) {
    padding: 0 15px;
  }
}
</style>
