<template>
  <a href="/" class="logo">
    ООО
    <span>Секвойя</span>
  </a>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
.logo {
  text-transform: uppercase;
  font-size: 32px;
  line-height: 1.45;
  letter-spacing: 0.5px;
  color: var(--color-from-hell);

  span {
    color: var(--color-orange);
    font-weight: 600;
  }
}
</style>
