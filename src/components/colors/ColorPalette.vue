<template>
  <div class="color-palette">
    <h3 class="color-palette__title">{{colorPalette.title}}</h3>
    <div class="colors-grid">
      <ColorCard
        v-for="item in colorPalette.colors" :key="item.id"
        :color="item"
      />
    </div>
    <hr>
  </div>
</template>

<script>
import ColorCard from '@/components/colors/ColorCard'
export default {
  props: {
    colorPalette: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  components: {
    ColorCard
  }
}
</script>

<style lang="scss" scoped>
.color-palette {
  & hr {
    border-width: 0px 0px 1px;
    border-top-style: initial;
    border-right-style: initial;
    border-left-style: initial;
    border-image: initial;
    border-bottom-style: solid;
    border-color: rgb(192, 202, 213);
    background-color: rgb(192, 202, 213);
    margin: 48px 0;
  }
}
</style>
