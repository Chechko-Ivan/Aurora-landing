<template>
  <a
    class="action-link"
    :href="`${scheme ? `${scheme}:` : ''}${href}`"
    :target="target"
    :rel="rel"
  >
    <div class="action-link-icon">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'ActionLink',

  props: {
    href: {
      type: String,
      default: '#'
    },
    // eslint-disable-next-line vue/require-default-prop
    scheme: {
      type: String
    },
    target: {
      type: String,
      default: '_blank'
    },
    rel: {
      type: String,
      default: 'noreferrer'
    }
  }
}
</script>

<style lang="scss" scoped>
.action-link {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  color: var(--color-white);
  line-height: 1.22;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(#ffffff, 0.8);
  }
}

.action-link-icon {
  display: flex;
  margin-right: 10px;
}
</style>
