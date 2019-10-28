<template>
  <form class="form">
    <div class="form-inner">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  background-color: var(--color-dark-blue);
  box-shadow: 0 8px 20px 0 rgba(13, 28, 84, 0.25);
  border-radius: 8px;
  box-sizing: border-box;
}

.form-inner {
  padding: 60px 140px 90px 140px;
  box-sizing: border-box;

  @media (max-width: 1439.98px) {
    padding: 50px 110px 80px 110px;
  }

  @media (max-width: 1199.98px) {
    padding: 40px 70px 50px 70px;
  }

  @media (max-width: 767.98px) {
    padding: 40px 50px 50px;
  }

  @media (max-width: 575.98px) {
    padding: 35px 15px 45px;
  }
}

.form-header {
  margin-bottom: 50px;

  @media (max-width: 991.98px) {
    margin-bottom: 30px;
  }
}

.form-title,
.form-subtitle {
  display: block;
  text-align: center;
  color: #ffffff;
}

.form-title {
  font-size: 40px;
  margin-bottom: 30px;

  @media (max-width: 1199.98px) {
    margin-bottom: 20px;
  }

  @media (max-width: 991.98px) {
    font-size: 30px;
  }

  @media (max-width: 767.98px) {
    font-size: 27px;
  }

  @media (max-width: 575.98px) {
    font-size: 25px;
  }
}

.form-subtitle {
  color: rgba(#ffffff, 0.7);
}

.form-action {
  margin-top: 40px;
  display: flex;
  align-items: center;

  @media (max-width: 1199.98px) {
    margin-top: 30px;
    align-items: flex-start;
  }

  @media (max-width: 575.98px) {
    margin-top: 20px;
  }

  @media (max-width: 575.98px) {
    flex-direction: column-reverse;
  }

  .button {
    margin-right: 20px;
  }
}

.form-action-message {
  font-size: 14px;
  color: #ffffff;

  @media (max-width: 575.98px) {
    margin-bottom: 20px;
  }
}

.form-contact {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 60px -10px 0;

  @media (max-width: 1199.98px) {
    margin-top: 40px;
  }

  @media (max-width: 575.98px) {
    margin-top: 20px;
  }

  .action-link {
    padding: 0 10px;

    &:not(:last-of-type) {
      @media (max-width: 575.98px) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
