<template>
  <div class="recucle">
    <img
      class="recucle-gradient"
      src="~/static/images/greenCircle.png"
      alt="recucle icon"
      aria-hidden="true"
    />

    <img
      class="recucle-gradient"
      src="~/static/images/orangeCircle.png"
      alt="recucle icon"
      aria-hidden="true"
    />

    <img
      class="recucle-icon"
      src="~/static/images/recucle.svg"
      alt="recucle icon"
      aria-hidden="true"
    />
  </div>
</template>

<script>
export default {
  name: 'RecucleAnimation'
}
</script>

<style lang="scss">
.recucle {
  position: relative;
  width: var(--recucle-width);
  height: var(--recucle-height);

  @media (max-width: 1199.98px) {
    --recucle-width: 270px;
    --recucle-height: 270px;
  }

  @media (max-width: 767.98px) {
    --recucle-width: 150px;
    --recucle-height: 150px;
  }

  @media (max-width: 575.98px) {
    display: none;
  }
}

.recucle-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--recucle-icon-width);
}

.recucle-gradient {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: rotate;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &:nth-of-type(1) {
    width: 100%;
  }

  &:nth-of-type(2) {
    width: 76.59%;
    animation-direction: reverse;
    animation-duration: 10s;
  }
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
</style>
