<template>
  <button class="button" :type="type" v-on="$listeners">
    <slot></slot>
    <Icon
      slot="icon"
      icon-name="arrow-right"
      fill="#ffffff"
      width="16"
      height="16"
    ></Icon>
  </button>
</template>

<script>
import Icon from '~/components/Icon.vue'

export default {
  name: 'Button',

  components: {
    Icon
  },

  props: {
    type: {
      type: String,
      default: 'button',
      validator(value) {
        return ['button', 'menu', 'reset', 'submit'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 0 40px;
  height: 50px;
  background: var(--color-orange);
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  color: var(--color-white);
  border: 0;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  transition: all 0.25s ease;

  &:hover {
    background: #ff8935;
    box-shadow: 0 0 2px 0 #ff8935, 0 0 8px 0 #ffcf84;
  }

  svg {
    margin-left: 15px;
  }
}
</style>
