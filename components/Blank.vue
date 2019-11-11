<template>
  <div class="blank">
    <div class="blank-icon">
      <div class="icon-in-circle">
        <Icon slot="icon" icon-name="info" fill="#ffffff" width="20" height="20"></Icon>
      </div>
    </div>

    <div class="blank-inner">
      <h2 class="blank-organization-name">ООО "Секвойя" закупает отходы ПВХ</h2>

      <div class="blank-body">
        <div class="blank-item">
          <a href="./serf/lic1.pdf" target="_blank">Лицензия №00064</a>
          выдана Федеральной службой по надзору в сфере природопользования
        </div>
        <div class="blank-item">
          <a href="./serf/lic2.pdf" target="_blank">Лицензия №00064</a>
          выдана Федеральной службой по надзору в сфере природопользования
        </div>
        <div class="blank-item">
          <a href="./serf/lic3.pdf" target="_blank">Лицензия №00064</a>
          выдана Федеральной службой по надзору в сфере природопользования
        </div>
        <!-- <div class="blank-body-row">
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
        </div>-->
      </div>

      <!-- <span class="blank-organization-name">отходы ПВХ</span> -->
    </div>
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

  @media (max-width: 991.98px) {
    border-radius: 60px;
  }
}

.blank-organization-name {
  text-align: center;

  @media (max-width: 575.98px) {
    margin-bottom: 30px;
  }
}

.blank-inner {
  padding: 50px 70px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;

  @media (max-width: 1199.98px) {
    padding: 30px 50px;
  }

  @media (max-width: 991.98px) {
    padding: 20px 40px;
  }

  @media (max-width: 575.98px) {
    padding: 20px 30px;
    text-align: left;
  }
}

.blank-body {
  margin: 30px 0 0;

  @media (max-width: 1199.98px) {
    margin: 20px 0;
  }

  @media (max-width: 991.98px) {
    margin: 15px 0;
  }

  @media (max-width: 767.98px) {
    margin: 10px 0;
  }
}

.blank-item {
  font-size: 20px;

  @media (max-width: 991.98px) {
    font-size: 18px;
  }

  @media (max-width: 575.98px) {
    font-size: 16px;
  }

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  a {
    color: #000000;
    font-weight: 600;
    margin-right: 10px;

    @media (max-width: 575.98px) {
      margin-right: 0;
    }

    &:hover {
      color: var(--color-light-orange);
    }
  }
}

/* .blank-body-row {
  display: flex;
  align-items: center;

  @media (max-width: 575.98px) {
    flex-wrap: wrap;
  }

  &:not(:last-of-type) {
    margin-bottom: 10px;

    @media (max-width: 1199.98px) {
      margin-bottom: 5px;
    }
  }

  .line {
    display: inline-block;
    background-color: var(--color-dark-blue);

    margin: 0 15px;
    height: 2px;

    @media (max-width: 575.98px) {
      display: none;
    }
  }

  &:first-of-type {
    .line {
      width: 270px;

      @media (max-width: 1199.98px) {
        width: 150px;
      }
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

  @media (max-width: 1199.98px) {
    font-size: 25px;
  }

  @media (max-width: 991.98px) {
    font-size: 21px;
  }

  @media (max-width: 575.98px) {
    font-size: 24px;
    margin-bottom: 5px;
  }
}

.blank-body-text {
  font-size: 14px;
} */

.blank-icon {
  padding: 35px 0;
  background-color: #ffffff;
  display: inline-block;
  height: max-content;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(calc(-50% - 5px), -50%);

  @media (max-width: 767.98px) {
    padding: 20px 0;
  }
}
</style>
