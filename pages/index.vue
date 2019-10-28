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

    <section class="s-contract">
      <Container>
        <Row :gutter="{ xs: layout.gutterMobile, md: layout.gutterDesktop }">
          <Col :span="24">
            <h2 class="s-contract-title">
              Договор на долгосрочное сотрудничество
            </h2>
          </Col>

          <Col :lg="{ span: 20, offset: 2 }" :span="24">
            <div class="s-contract-content">
              <div class="s-contract-content-text">
                <p>
                  Заключая договора на долгосрочное сотрудничество, наша
                  компания предлагает своим партнёрам конкурентоспособные цены
                  на отходы ПВХ выше рыночных, а также приветствует работу по
                  продвижению и реализации продукции ПВХ, производимой нашей
                  компанией.
                </p>
                <p>
                  Мы подходим к каждому клиенту индивидуально и приглашаем к
                  долгосрочному взаимовыгодному сотрудничеству производителей
                  дверей и окон ПВХ, а также коммерческие организации,
                  занимающиеся скупкой и продажей отходов ПВХ.
                </p>
              </div>

              <img src="../static/images/contract.svg" alt="icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section class="s-form">
      <Container>
        <Row :gutter="{ xs: layout.gutterMobile, md: layout.gutterDesktop }">
          <Col :span="24">
            <h2 class="s-form-title">
              Отходы Ваши –
              <span class="accent">товары и деньги наши</span>
            </h2>
          </Col>

          <Col :lg="{ span: 16, offset: 4 }" :span="24">
            <Form>
              <div class="form-header">
                <h3 class="form-title">Оставьте заявку</h3>
                <span class="form-subtitle">
                  Напишите нам и наш менеджер свяжется с вами в кратчайшие
                  сроки!
                </span>
              </div>
              <FormFieldRow>
                <FormField placeholder="Представьтесь" required></FormField>
              </FormFieldRow>

              <FormFieldRow>
                <FormField
                  type="tel"
                  placeholder="Контактный телефон"
                  required
                ></FormField>
                <FormField
                  type="email"
                  placeholder="Контактный e-mail"
                ></FormField>
              </FormFieldRow>

              <FormFieldRow>
                <FormFieldTextarea
                  placeholder="Сообщение"
                  required
                ></FormFieldTextarea>
              </FormFieldRow>

              <div class="form-action">
                <Button type="submit">Отправить</Button>
                <div class="form-action-message">
                  Нажимая на кнопку я подтверждаю свое согласие с правилами
                  сервиса и даю согласие на обработку моих персональных данных
                </div>
              </div>

              <div class="form-contact">
                <ActionLink scheme="tel" href="+74956404886">
                  <Icon
                    slot="icon"
                    icon-name="tel"
                    fill="#f16922"
                    width="18"
                    height="18"
                  ></Icon
                  >+7 495 640-48-86
                </ActionLink>

                <ActionLink scheme="tel" href="+74959751214">
                  <Icon
                    slot="icon"
                    icon-name="tel"
                    fill="#f16922"
                    width="18"
                    height="18"
                  ></Icon
                  >+7 495 975-12-14
                </ActionLink>

                <ActionLink scheme="mailto" href="info@avrora-td.ru">
                  <Icon
                    slot="icon"
                    icon-name="mail"
                    fill="#f16922"
                    width="18"
                    height="18"
                  ></Icon
                  >info@avrora-td.ru
                </ActionLink>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-copyright">&copy; 2019 ООО «Секвойя»</div>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="#">Политика обработки персональных данных</a>
        <span class="bull">&bull;</span>
        <a href="https://maksis.by">Разработано студией Maksis</a>
      </div>
    </footer>
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
import Form from '~/components/Form.vue'
import FormField from '~/components/FormField.vue'
import FormFieldRow from '~/components/FormFieldRow.vue'
import FormFieldTextarea from '~/components/FormFieldTextarea.vue'
import Button from '~/components/Button.vue'

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
    Blank,
    Form,
    FormField,
    FormFieldRow,
    FormFieldTextarea,
    Button
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
      &:not(:last-of-type) {
        margin-bottom: 15px;
      }
    }
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

    @media (max-width: 575.98px) {
      color: var(--color-from-hell);
    }
  }

  .action-link-icon {
    @media (max-width: 767.98px) {
      margin-right: 5px;
    }

    @media (max-width: 575.98px) {
      margin-right: 0;
    }

    svg {
      @media (max-width: 767.98px) {
        width: 25px;
        height: 25px;
      }

      @media (max-width: 575.98px) {
        display: none;
      }
    }
  }
}

.header-shape {
  position: absolute;
  top: 0;
  right: 0;
  width: 68%;

  @media (min-width: 1920px) {
    width: 65%;
  }

  @media (min-width: 2350px) {
    width: 60%;
  }

  @media (max-width: 575.98px) {
    display: none;
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

  @media (max-width: 575.98px) {
    align-items: flex-start;
    color: var(--color-from-hell);
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
  padding: 80px 0 40px;

  @media (max-width: 575.98px) {
    padding: 40px 0 20px;
  }
}

.s-contract {
  padding: 50px 0 40px;

  @media (max-width: 575.98px) {
    padding: 25px 0 20px;
  }
}

.s-contract-title {
  text-align: center;
  font-size: 40px;
  margin-bottom: 60px;

  @media (max-width: 991.98px) {
    font-size: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 767.98px) {
    font-size: 27px;
    margin-bottom: 20px;
  }

  @media (max-width: 575.98px) {
    text-align: left;
    font-size: 25px;
  }
}

.s-contract-content {
  position: relative;
  display: flex;
  align-items: center;

  p {
    &:first-of-type {
      padding-right: 100px;
    }
  }

  img {
    max-width: 160px;
    margin-left: 40px;

    @media (max-width: 991.98px) {
      max-width: 140px;
    }

    @media (max-width: 767.98px) {
      margin-left: 20px;
    }

    @media (max-width: 575.98px) {
      position: absolute;
      top: 15px;
      right: 0;
      margin-left: 0;
      max-width: 80px;
    }
  }
}

.s-form {
  padding: 40px 0 40px;

  @media (max-width: 575.98px) {
    padding: 20px 0 20px;
  }
}

.s-form-title {
  text-align: center;
  text-transform: uppercase;
  font-size: 40px;
  margin-bottom: 80px;

  @media (max-width: 991.98px) {
    margin-bottom: 50px;
    font-size: 30px;
  }

  @media (max-width: 767.98px) {
    font-size: 27px;
  }

  @media (max-width: 575.98px) {
    font-size: 25px;
    margin-bottom: 30px;
  }

  .accent {
    color: var(--color-orange);
  }
}

.footer {
  padding: 40px 0 0;

  @media (max-width: 991.98px) {
    font-size: 14px;
  }

  @media (max-width: 575.98px) {
    font-size: 12px;
  }

  a {
    color: var(--color-from-hell);

    &:hover {
      text-decoration: underline;
    }
  }

  .bull {
    margin: 0 20px;
    color: var(--color-orange);

    @media (max-width: 991.98px) {
      margin: 0 10px;
    }
  }
}

.footer-inner {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafbff;
  text-transform: uppercase;

  @media (max-width: 767.98px) {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    height: auto;
  }
}
</style>
