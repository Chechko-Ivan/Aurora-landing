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
          <Row :gutter="{ xs: layout.gutterMobile, md: layout.gutterDesktop }">
            <Col :xl="{ offset: 2 }" :lg="{ span: 6 }" :sm="{ span: 8 }">
              <Logo></Logo>
            </Col>

            <Col :lg="{ span: 8, offset: 2 }" :sm="{ span: 10 }">
              <div class="header-action-link">
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
              </div>
            </Col>

            <Col :xl="{ span: 4 }" :lg="{ span: 8 }" :sm="{ span: 6 }">
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
      <Container>
        <Row type="flex" align="middle" :gutter="layout.gutter">
          <Col
            :xl="{ span: 10, offset: 2 }"
            :lg="{ span: 14 }"
            :sm="{ span: 16 }"
          >
            <h1 class="main-title">
              Покупаем отходы ПВХ
              <br />на постоянной основе
            </h1>

            <div class="main-text">
              <p>
                Мы подходим к каждому клиенту индивидуально и приглашаем к
                долгосрочному взаимовыгодному сотрудничеству производителей
                дверей и окон ПВХ, а также коммерческие организации,
                занимающиеся скупкой и продажей отходов ПВХ.
              </p>
            </div>
          </Col>
          <Col
            :lg="{ span: 10 }"
            :md="{ span: 12 }"
            :sm="{ span: 8 }"
            class="main-recucle-animation"
          >
            <RecucleAnimation></RecucleAnimation>
          </Col>
        </Row>
      </Container>
    </main>

    <section class="s-blank">
      <Container>
        <Row :gutter="{ xs: layout.gutterMobile, md: layout.gutterDesktop }">
          <Col :lg="{ span: 20, offset: 2 }">
            <Blank></Blank>
          </Col>
        </Row>
      </Container>
    </section>
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
import Blank from '~/components/Blank.vue'

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
    RecucleAnimation,
    Blank
  },

  data() {
    return {
      layout: {
        gutterDesktop: 20,
        gutterMobile: 10
      },
      OFFICE_COORDINATES
    }
  },

  methods: {}
}
</script>

<style lang="scss">
// Header
.header {
  position: relative;

  .navbar {
    div[class*='ant-col-'] {
      margin-bottom: 15px;
    }
  }
}

.header-action-link {
  @media (max-width: 575.98px) {
    display: flex;
    justify-content: flex-end;
  }

  .action-link {
    font-size: 18px;

    @media (max-width: 1199.98px) {
      font-size: 16px;
    }

    @media (max-width: 991.98px) {
      font-size: 15px;
    }

    @media (max-width: 767.98px) {
      font-size: 13px;
    }
  }

  .action-link-icon {
    @media (max-width: 767.98px) {
      margin-right: 5px;
    }

    svg {
      @media (max-width: 767.98px) {
        width: 25px;
        height: 25px;
      }
    }
  }
}

.header-shape {
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;

  @media (max-width: 575.98px) {
    width: 120%;
  }
}

.header-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 18px;
  line-height: 1.22;
  font-weight: 600;
  color: rgba(#ffffff, 0.5);

  @media (max-width: 767.98px) {
    font-size: 13px;
  }
}

// Main
.main {
  margin-top: 40px;
}

.main-title {
  margin-bottom: 30px;
  font-size: 50px;

  @media (max-width: 1199.98px) {
    font-size: 40px;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  @media (max-width: 991.98px) {
    font-size: 30px;
  }

  @media (max-width: 767.98px) {
    font-size: 27px;
  }
}

.main-text {
  max-width: 520px;
}

.main-recucle-animation {
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1199.98px) {
    justify-content: center;
  }
}

.s-blank {
  padding: 80px 0;
}
</style>
