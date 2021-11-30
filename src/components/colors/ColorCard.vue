<template>
  <button
    class="color-card"
    v-clipboard="color.value"
  >
    <div
      class="color-card__box"
      :style="{ background: color.value }"
    ></div>
    <span>Скопировать</span>
    <div class="color-card__text">
      <div>{{color.name}}</div>
      <code>{{color.value}}</code>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.color-card {
  width: 100%;
  display: inline-block;
  position: relative;
  font-family: inherit;
  font-size: 12px;
  margin: 0px;
  padding: 0px;
  color: inherit;
  background-color: transparent;
  border: 0px;
  border-radius: 0px;
  appearance: none;
  transition: all 0.125s ease 0s;
  box-shadow: #d1d1d1 0px 4px 4px 0px;

  & span {
    top: 0px;
    left: 0px;
    position: absolute;
    font-size: 12px;
    padding: 8px 0px;
    width: 100%;
    color: rgb(255, 255, 255);
    border-radius: 2px 2px 0px 0px;
    background-color: rgb(0, 24, 51);
    text-align: center;
    opacity: 0;
    transition-property: opacity;
    transition-duration: 0.125s;
    transition-timing-function: ease-out;
  }

  &:hover {
    box-shadow: #d1d1d1 0px 8px 8px 0px, #d1d1d1 0px 16px 16px 0px;
    & > span {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(.9);
  }

  &__box {
    height: 100px;
  }

  &__text {
    padding: 8px;
  }

}
</style>