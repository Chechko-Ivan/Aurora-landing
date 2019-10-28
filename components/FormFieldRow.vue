<template>
  <div class="form-field-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FormFieldRow'
}
</script>

<style lang="scss" scoped>
.form-field-row {
  display: flex;

  @media (max-width: 575.98px) {
    flex-direction: column;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  .form-field {
    &:not(:last-of-type) {
      @media (max-width: 575.98px) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
