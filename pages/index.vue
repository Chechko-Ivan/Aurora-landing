<template>
  <div class="root">
    <header class="header">
      <Container>
        <img
          src="~/static/images/shape1.svg"
          alt="shape"
          aria-hidden="true"
          class="header-shape"
        />
        <Navbar>
          <Row :gutter="20">
            <Col :span="6" :offset="2">
              <Logo></Logo>
            </Col>

            <Col :span="8">
              <ActionLink
                :href="`http://maps.yandex.ru/?text=${OFFICE_COORDINATES}`"
              >
                <Icon
                  slot="icon"
                  icon-name="pin"
                  fill="#f16922"
                  width="32"
                  height="32"
                ></Icon
                >г. Смоленск, <br />ул.Энгельса, дом №23, офис 426
              </ActionLink>
            </Col>

            <Col :span="4">
              <div class="header-info">
                <span class="header-info-work-time">с 9:00 до 21:00</span>
                <ActionLink href="+74956404886" scheme="tel"
                  >+7 495 640-48-86</ActionLink
                >
              </div>
            </Col>
          </Row>
        </Navbar>
      </Container>
    </header>

    <main class="main">
      <Row :gutter="20">
        <Col :span="24">
          <RecucleAnimation></RecucleAnimation>
        </Col>
      </Row>
    </main>
  </div>
</template>

<script>
import { Row, Col } from 'ant-design-vue'
import 'ant-design-vue/es/grid/style/index.css'

import Container from '~/components/Container.vue'
import Navbar from '~/components/Navbar.vue'
import Logo from '~/components/Logo.vue'
import ActionLink from '~/components/ActionLink.vue'
import Icon from '~/components/Icon.vue'
import RecucleAnimation from '~/components/RecucleAnimation.vue'

import { OFFICE_COORDINATES } from '~/assets/js/constants.js'

export default {
  components: {
    Row,
    Col,

    Container,
    Navbar,
    Logo,
    ActionLink,
    Icon,
    RecucleAnimation
  },

  data() {
    return {
      OFFICE_COORDINATES
    }
  }
}
</script>

<style lang="scss">
.header {
  position: relative;
}

.header-shape {
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
}

.header-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 18px;
  line-height: 1.22;
  font-weight: 600;
  color: rgba(#ffffff, 0.5);
}
</style>
