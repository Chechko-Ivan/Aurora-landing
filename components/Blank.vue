<template>
  <div class="blank">
    <div class="blank-icon">
      <Icon slot="icon" icon-name="info-circle" width="40" height="40"></Icon>
    </div>

    <div class="blank-inner">
      <span class="blank-organization-name">ООО Секвойя</span>

      <div class="blank-body">
        <div class="blank-body-row">
          <span class="blank-body-title">Закупает</span>
          <span class="line"></span>
          <span class="blank-body-text">
            <b>лицензия № 00064,</b> выдана Федеральной службой по надзору в
            сфере природопользования
          </span>
        </div>

        <div class="blank-body-row">
          <span class="blank-body-title">и перерабатывает</span>
          <span class="line"></span>
          <span class="blank-body-text">
            <b>лицензии № 02120/1517,</b> выданной Министерством природных
            ресурсов и охраны окружающей среды Республики Беларусь
          </span>
        </div>
      </div>

      <span class="blank-organization-name">отходы ПВХ</span>
    </div>

    <defs>
      <linearGradient id="iconGradient" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stop-color="#FF972F" />
        <stop offset="100%" stop-color="#F16922" />
      </linearGradient>
    </defs>
  </div>
</template>

<script>
import Icon from '~/components/Icon.vue'

export default {
  name: 'Blank',
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.blank {
  position: relative;
  border: 10px solid #f0f2fd;
  border-radius: 66px;
  line-height: 1.27;
  box-sizing: border-box;
}

.blank-inner {
  padding: 50px 70px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.blank-body {
  margin: 30px 0;
}

.blank-body-row {
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  .line {
    display: inline-block;
    background-color: var(--color-dark-blue);

    margin: 0 15px;
    height: 2px;
  }

  &:first-of-type {
    .line {
      width: 270px;
    }
  }

  &:last-of-type {
    .line {
      width: 150px;
    }
  }
}

.blank-body-title {
  font-size: 28px;
  white-space: nowrap;
}

.blank-body-text {
  font-size: 14px;
}

.blank-icon {
  padding: 35px 0;
  background-color: #ffffff;
  display: inline-block;
  height: max-content;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(calc(-50% - 5px), -50%);

  svg {
    fill: url('#iconGradient');
  }
}
</style>
