<template>
  <div class="waste-circle">
    <div class="waste-circle-image">
      <img
        src="~/static/images/waste.png"
        role="presentation"
        alt="waste"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WasteCircle'
}
</script>

<style lang="scss" scoped>
.waste-circle {
  position: relative;
  width: 440px;
  height: 440px;
  padding: 40px;
  box-sizing: border-box;

  @media (max-width: 1439.98px) {
    width: 350px;
    height: 350px;
    padding: 30px;
  }

  @media (max-width: 991.98px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 767.98px) {
    margin-bottom: 20px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px dashed #a1a8c2;
    border-radius: 50%;
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 30s;
  }

  &::after {
    top: 20px;
    left: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    animation-duration: 25s;

    @media (max-width: 1439.98px) {
      top: 15px;
      left: 15px;
      width: calc(100% - 30px);
      height: calc(100% - 30px);
    }
  }
}

.waste-circle-image {
  position: relative;
  background-color: #f0f2fd;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: rotate(-5deg);
  animation-name: wiggle;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 15s;
  animation-direction: alternate;

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 114%;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes wiggle {
  0% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(5deg);
  }
}
</style>
