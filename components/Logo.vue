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

  @media (max-width: 1199.98px) {
    font-size: 27px;
    letter-spacing: 0.2px;
  }

  @media (max-width: 767.98px) {
    font-size: 22px;
  }

  @media (max-width: 575.98px) {
    color: var(--color-white);
  }

  span {
    color: var(--color-orange);
    font-weight: 600;
  }
}
</style>
