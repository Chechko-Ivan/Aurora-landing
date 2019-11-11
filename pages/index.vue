<template>
  <div class="root">
    <header class="header">
      <Container>
        <img
          src="~/static/images/shape1.svg"
          alt="shape"
          aria-hidden="true"
          class="header-shape"
          data-aos="fade"
          data-aos-delay="600"
        />
        <Navbar>
          <Row :gutter="{ xs: layout.gutterMobile, md: layout.gutterDesktop }">
            <Col :xl="{ offset: 2 }" :lg="{ span: 6 }" :sm="{ span: 8 }">
              <Logo data-aos="zoom-out" data-aos-delay="600"></Logo>
            </Col>

            <Col :lg="{ span: 8, offset: 2 }" :sm="{ span: 10 }">
              <ActionLink
                data-aos="zoom-out"
                data-aos-delay="800"
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
              <div
                class="header-info"
                data-aos="zoom-out"
                data-aos-delay="1000"
              >
                <span class="header-info-work-time">с 9:00 до 21:00</span>
                <ActionLink href="+74956404886" scheme="tel"
                  >+7 495 640-48-86</ActionLink
                >
                <ActionLink href="+74959751214" scheme="tel"
                  >+7 495 975-12-14</ActionLink
                >
                <ActionLink href="+79206616576" scheme="tel"
                  >+7 920 661-65-76</ActionLink
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
            <h1 class="main-title" data-aos="zoom-out" data-aos-delay="200">
              Покупаем отходы ПВХ
              <br />на постоянной основе
            </h1>

            <div class="main-text" data-aos="zoom-out" data-aos-delay="1300">
              <p>
                Мы подходим к каждому клиенту индивидуально и приглашаем к
                долгосрочному взаимовыгодному сотрудничеству производителей
                дверей и окон ПВХ, а также коммерческие организации,
                занимающиеся скупкой и продажей отходов ПВХ.
              </p>
            </div>
          </Col>
          <Col
            class="main-recucle-animation"
            :lg="{ span: 10 }"
            :md="{ span: 12 }"
            :sm="{ span: 8 }"
          >
            <RecucleAnimation
              data-aos="zoom-out"
              data-aos-delay="1500"
            ></RecucleAnimation>
          </Col>
        </Row>
      </Container>
    </main>

    <section class="s-blank">
      <Container>
        <Row :gutter="{ xs: layout.gutterMobile, md: layout.gutterDesktop }">
          <Col :lg="{ span: 20, offset: 2 }">
            <Blank
              data-aos="fade"
              data-aos-offset="300"
              data-aos-delay="200"
            ></Blank>
          </Col>
        </Row>
      </Container>
    </section>

    <section class="s-types-waste">
      <Container>
        <Row :gutter="{ xs: layout.gutterMobile, md: layout.gutterDesktop }">
          <Col :span="24">
            <h2 class="s-contract-title" data-aos="fade" data-aos-delay="200">
              Виды отходов
            </h2>
          </Col>

          <Col :xl="{ span: 20, offset: 2 }" :span="24">
            <div class="s-types-waste-content">
              <WasteItem data-aos="fade" data-aos-delay="200">
                <template slot="title">
                  Обрезки оконного профиля ПВХ белого, цветного, с
                  интегрированной резинкой TPE и EPDM
                </template>
              </WasteItem>

              <WasteItem data-aos="fade" data-aos-delay="400">
                <template slot="title"
                  >Штапик оконный с резинкой TPE и EPDM и без</template
                >
              </WasteItem>

              <WasteItem data-aos="fade" data-aos-delay="400">
                <template slot="title"
                  >Дробленка оконного профиля, панели, вагонки, сайдинга
                  ПВХ</template
                >
              </WasteItem>

              <WasteCircle></WasteCircle>

              <WasteItem data-aos="fade" data-aos-delay="200">
                <template slot="title"
                  >Подоконник ПВХ, кроме ДПК</template
                >
              </WasteItem>

              <WasteItem data-aos="fade" data-aos-delay="400">
                <template slot="title"
                  >Мебельная пленка ПВХ однослойная</template
                >
              </WasteItem>

              <WasteItem data-aos="fade" data-aos-delay="400">
                <template slot="title"
                  >Литники ПВХ</template
                >
              </WasteItem>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section class="s-contract">
      <img
        src="~/static/images/shape2.svg"
        alt="shape"
        aria-hidden="true"
        class="s-contract-shape"
      />
      <Container>
        <Row :gutter="{ xs: layout.gutterMobile, md: layout.gutterDesktop }">
          <Col :span="24">
            <h2 class="s-contract-title" data-aos="fade" data-aos-delay="200">
              Договор на долгосрочное сотрудничество
            </h2>
          </Col>

          <Col :lg="{ span: 20, offset: 2 }" :span="24">
            <div class="s-contract-content">
              <div
                class="s-contract-content-text"
                data-aos="fade"
                data-aos-delay="200"
              >
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

              <img
                src="../static/images/contract.svg"
                alt="icon"
                data-aos="zoom-out"
                data-aos-delay="200"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section class="s-form">
      <Container>
        <Row :gutter="{ xs: layout.gutterMobile, md: layout.gutterDesktop }">
          <Col :span="24">
            <h2 class="s-form-title" data-aos="fade" data-aos-delay="200">
              Отходы Ваши –
              <span class="accent" data-aos="fade" data-aos-delay="450"
                >товары и деньги наши</span
              >
            </h2>
          </Col>

          <Col :lg="{ span: 16, offset: 4 }" :span="24">
            <Form
              data-aos="zoom-out"
              data-aos-delay="200"
              data-aos-offset="150"
            >
              <div class="form-header">
                <h3 class="form-title">Оставьте заявку</h3>
                <span class="form-subtitle">
                  Напишите нам и наш менеджер свяжется с вами в кратчайшие
                  сроки!
                </span>
              </div>
              <FormFieldRow>
                <FormField
                  placeholder="* Представьтесь"
                  :error="name.error"
                  @update="(e) => (name.value = e)"
                ></FormField>
              </FormFieldRow>

              <FormFieldRow>
                <FormField
                  type="tel"
                  placeholder="* Контактный телефон"
                  :error="phone.error"
                  @update="(e) => (phone.value = e)"
                ></FormField>
                <FormField
                  type="email"
                  placeholder="Контактный e-mail"
                  :error="email.error"
                  @update="(e) => (email.value = e)"
                ></FormField>
              </FormFieldRow>

              <FormFieldRow>
                <FormFieldTextarea
                  placeholder="* Сообщение"
                  :error="message.error"
                  @update="(e) => (message.value = e)"
                ></FormFieldTextarea>
              </FormFieldRow>

              <div class="form-action">
                <Button type="submit" @click.prevent="send">Отправить</Button>
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

                <ActionLink scheme="tel" href="+79206616576">
                  <Icon
                    slot="icon"
                    icon-name="tel"
                    fill="#f16922"
                    width="18"
                    height="18"
                  ></Icon
                  >+7 920 661-65-76
                </ActionLink>

                <ActionLink scheme="mailto" href="info@othodi-pvh.ru">
                  <Icon
                    slot="icon"
                    icon-name="mail"
                    fill="#f16922"
                    width="18"
                    height="18"
                  ></Icon
                  >info@othodi-pvh.ru
                </ActionLink>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>

    <footer class="footer">
      <div class="footer-inner">
        <div
          class="footer-copyright"
          data-aos="fade"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          &copy; 2019 ООО «Секвойя»
        </div>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="#" data-aos="fade" data-aos-delay="200" data-aos-offset="0"
          >Политика обработки персональных данных</a
        >
        <span class="bull">&bull;</span>
        <a
          href="https://maksis.by"
          data-aos="fade"
          data-aos-delay="300"
          data-aos-offset="0"
          >Разработано студией Maksis</a
        >
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
import WasteCircle from '~/components/WasteCircle.vue'
import WasteItem from '~/components/WasteItem.vue'
import Form from '~/components/Form.vue'
import FormField from '~/components/FormField.vue'
import FormFieldRow from '~/components/FormFieldRow.vue'
import FormFieldTextarea from '~/components/FormFieldTextarea.vue'
import Button from '~/components/Button.vue'

import { OFFICE_COORDINATES } from '~/assets/js/constants.js'
import validateEmail from '~/assets/js/validateEmail.js'

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
    WasteCircle,
    WasteItem,
    Form,
    FormField,
    FormFieldRow,
    FormFieldTextarea,
    Button
  },

  data() {
    return {
      OFFICE_COORDINATES,
      layout: {
        gutterDesktop: 20,
        gutterMobile: 10
      },
      name: { value: '', error: null },
      phone: { value: '', error: null },
      email: { value: '', error: null },
      message: { value: '', error: null }
    }
  },

  methods: {
    validate() {
      const errors = {}
      const { name, phone, email, message } = this

      // Reset old erorors
      name.error = null
      phone.error = null
      email.error = null
      message.error = null

      if (!name.value) {
        errors.name = true
      }

      if (!phone.value) {
        errors.phone = true
      }

      if (!message.value) {
        errors.message = true
      }

      if (email.value && !validateEmail(email.value)) {
        errors.email = true
      }

      if (!Object.keys(errors).length) {
        return true
      }

      name.error = errors.name
      phone.error = errors.phone
      email.error = errors.email
      message.error = errors.message
    },

    send() {
      if (this.validate()) {
        const { name, phone, email, message } = this

        const body = new FormData()
        body.append('name', name)
        body.append('phone', phone)
        body.append('email', email)
        body.append('message', message)

        const options = {
          method: 'POST',
          body
        }

        fetch('./mail.php', options)
          .then((data) => {
            return data.json()
          })
          .then((res) => {
            if (res.success) {
              this.$notification.open({
                class: 'custome-ant-notification',
                message: 'ООО СЕКВОЙЯ',
                duration: 7,
                description: res.success
              })

              this.name = ''
              this.phone = ''
              this.email = ''
              this.message = ''
            } else {
              this.$notification.open({
                class: 'custome-ant-notification',
                message: 'ООО СЕКВОЙЯ',
                duration: 7,
                description: res.error
              })
            }
          })
      } else {
        this.$notification.open({
          class: 'custome-ant-notification',
          message: 'ООО СЕКВОЙЯ',
          duration: 7,
          description:
            'Проверьте правильность введенных данных и попробуйте еще раз.'
        })
      }
    }
  }
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

    &:hover {
      @media (max-width: 767.98px) {
        color: var(--color-from-hell) !important;
      }
    }

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

.s-types-waste {
  padding: 40px 0 40px;

  @media (max-width: 575.98px) {
    padding: 20px 0 20px;
  }
}

.s-types-waste-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 991.98px) {
    padding: 70px 0;
  }

  @media (max-width: 767.98px) {
    flex-direction: column;
    padding: 40px 0;
  }

  @media (max-width: 575.98px) {
    padding: 15px 0;
  }

  .waste-item {
    &:nth-child(1) {
      top: 15px;
      left: 45px;

      @media (max-width: 1439.98px) {
        top: 20px;
      }

      @media (max-width: 991.98px) {
        top: 20px;
        left: 0px;
      }

      .waste-item-inner {
        flex-direction: row-reverse;
      }
    }

    &:nth-child(2) {
      top: 200px;
      left: 0px;

      @media (max-width: 1439.98px) {
        top: 145px;
      }

      @media (max-width: 991.98px) {
        top: 175px;
      }

      .waste-item-inner {
        flex-direction: row-reverse;
      }
    }

    &:nth-child(3) {
      top: 50px;
      right: 20px;

      @media (max-width: 1439.98px) {
        top: 55px;
      }

      @media (max-width: 991.98px) {
        top: 20px;
      }
    }

    &:nth-child(5) {
      bottom: 55px;
      left: 0px;

      @media (max-width: 991.98px) {
        bottom: 55px;
      }

      .waste-item-inner {
        flex-direction: row-reverse;
      }
    }

    &:nth-child(6) {
      bottom: 40px;
      right: 0px;
    }

    &:nth-child(7) {
      bottom: 185px;
      right: 0px;

      @media (max-width: 1439.98px) {
        bottom: 150px;
      }
    }
  }
}

.s-contract {
  position: relative;
  padding: 50px 0 40px;

  @media (max-width: 575.98px) {
    padding: 25px 0 20px;
  }
}

.s-contract-shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 290px;
  transform: translateY(-50%);
  z-index: -1;

  @media (max-width: 1439.98px) {
    width: 200px;
  }

  @media (max-width: 1199.98px) {
    width: 120px;
  }

  @media (max-width: 991.98px) {
    width: 90px;
  }

  @media (max-width: 767.98px) {
    display: none;
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
  padding: 40px 0 25px 0;

  @media (max-width: 575.98px) {
    padding: 20px 0 0 0;
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

.form-contact {
  .action-link {
    margin-bottom: 15px;
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
