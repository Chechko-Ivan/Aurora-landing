<template>
  <div class="waste-item">
    <div class="waste-item-inner">
      <div class="wast-item-icon">
        <div class="icon-in-circle">
          <Icon
            slot="icon"
            icon-name="plus"
            fill="#ffffff"
            width="20"
            height="20"
          ></Icon>
        </div>
      </div>
      <div class="waste-item-content">
        <h3 class="waste-item-title">
          <slot name="title"></slot>
        </h3>
        <!-- <span class="waste-item-desc">
          <slot name="desc"></slot>
        </span>-->
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/Icon.vue'

export default {
  name: 'WasteItem',
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.waste-item {
  position: absolute;
  max-width: 320px;
  width: 100%;
  cursor: default;

  @media (max-width: 1439.98px) {
    max-width: 300px;
  }

  @media (max-width: 991.98px) {
    max-width: 230px;
  }

  @media (max-width: 767.98px) {
    position: relative;
    max-width: 350px;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
  }

  &:hover {
    .icon-in-circle {
      background-image: linear-gradient(180deg, #ffbe52 0%, #ff8734 100%);
      box-shadow: 0 0 2px 0 rgba(255, 163, 20, 0.5), 0 0 8px 0 #ffcf84;
    }
  }

  &:not(:last-of-type) {
    @media (max-width: 767.98px) {
      margin-bottom: 30px;
    }
  }
}

.waste-item-inner {
  display: flex;

  @media (max-width: 767.98px) {
    flex-direction: row !important;
  }
}

.waste-item-content {
  margin: 0 10px;
}

.waste-item-title {
  font-size: 19px;
  margin-bottom: 15px;

  @media (max-width: 1439.98px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
}

/* .waste-item-desc {
  @media (max-width: 1439.98px) {
    font-size: 15px;
  }
} */
</style>
