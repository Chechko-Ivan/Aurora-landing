<template>
  <input
    class="form-field"
    :type="type"
    v-bind="$attrs"
    v-on="$listeners"
    @input="$emit('update', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'FormField',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['email', 'number', 'tel', 'text', 'url'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-field {
  width: 100%;
  padding: 0 15px 0 20px;
  height: 60px;
  background: #ebeffc;
  border: 1px solid #cfd4e9;
  border-radius: 6px;
  font-size: 18px;
  color: #000000;
  transition: all 0.25s ease;
  box-sizing: border-box;

  &::placeholder {
    color: #a1a8c2;
  }

  &:focus {
    box-shadow: inset 0 3px 2px 0 rgba(9, 20, 60, 0.25);
  }

  &:not(:last-of-type) {
    margin-right: 20px;
  }
}
</style>
