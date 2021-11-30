<template>
  <div class="page-content">
    <h1 class="page-content__title">Палитра</h1>
    <p class="page-content__description">
      The design system includes a palette that can be used to theme components.
    </p>
    <ColorPalette
      v-for="palette in palettes" :key="palette.id"
      :colorPalette="palette"
    />
  </div>
</template>

<script>
import ColorPalette from '@/components/colors/ColorPalette'
export default {
  data () {
    return {
      palettes: [
        { 
          title: 'Primary',
          colors: [
            { name: 'light', value: '#e8f2ff' },
            { name: 'base', value: '#0068EF' },
            { name: 'dark', value: '#049' }
          ]
        },
        { 
          title: 'Secondary',
          colors: [
            { name: 'light', value: '#ecf7ec' },
            { name: 'base', value: '#0a0' },
            { name: 'dark', value: '#060' }
          ]
        },  
      ]
    }
  },
  components: {
    ColorPalette
  }
}
</script>

<style lang="scss" scoped>

</style>
