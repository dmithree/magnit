<template>
  <div class="page-content">
    <h1 class="page-content__title">Цвета</h1>
    <section>
      <p>Всего есть три палитры цветов. Общие цвета — палитра, которую используют и продуктовые и коммуникационные дизайнеры. Интерфейсные цвета — палитра, которую используют только продуктовые дизайнеры. Коммуникационные цвета  — палитра, которую используют только коммуникационные дизайнеры.</p>
      </section>
    <section>
      <h3 class="page-content__title">Общие цвета</h3>
      <p>Палитра, которую используют и продуктовые и коммуникационные дизайнеры.</p>
      <div class="colors-grid">
        <ColorCard
            v-for="color in colors" :key="color.id"
            :color="color"
        />
      </div>
      <div>
      <router-link to="https://www.figma.com/files/997934444069704857/project/27018259/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2?fuid=979665218001754536">
        <button class="button button-default">Библиотека в Фигме</button>
      </router-link>
      </div>
    </section>
    <section>
      <h3 class="page-content__title">Интерфейсные цвета</h3>
      <p>Палитра, которую используют только продуктовые дизайнеры.</p>
      <div class="colors-grid">
        <ColorCard
            v-for="color in colors" :key="color.id"
            :color="color"
        />
      </div>
      <div>
        <router-link to="https://www.figma.com/files/997934444069704857/project/27018259/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2?fuid=979665218001754536">
          <button class="button button-default">Библиотека в Фигме</button>
        </router-link>
      </div>
    </section>
    <section>
      <h3 class="page-content__title">Коммуникационные цвета</h3>
      <p>Палитра, которую используют только коммуникационные дизайнеры.</p>
      <div class="colors-grid">
        <ColorCard
            v-for="color in colors" :key="color.id"
            :color="color"
        />
      </div>
      <div>
        <router-link to="https://www.figma.com/files/997934444069704857/project/27018259/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2?fuid=979665218001754536">
          <button class="button button-default">Библиотека в Фигме</button>
        </router-link>
      </div>
    </section>
    <section>
      <h2 class="page-content__title">Как добавлять цвета</h2>
      <p>Каждый цвет существует только в одном экземпляре. Если продуктовые дизайнеры начинают использовать какой-то цвет из коммуникационной палитры, этот цвет нужно перенести в общую палитру, и наоборот: если коммуникационные дизайнеры начинают использовать какой-то цвет из интерфейсной палитры, нужно перенести этот цвет в общую палитру.</p>
      <p>Новый цвет можно добавить только в одну палитру и придумать ему два названия: базовое и контекстное. Под базовым названием (например, red) добавляем цвет в палитру Фигмы.</p>
      <p>Подробное описание того, как правильно добавлять и называть цвета по ссылке лежит в Confluence</p>
      <router-link to="https://www.figma.com/files/997934444069704857/project/27018259/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2?fuid=979665218001754536">
        <button class="button button-default">Перейти в Confluence</button>
      </router-link>
    </section>
  </div>
</template>

<script>
import ColorCard from '@/components/colors/ColorCard'
export default {
  data () {
    return {
      colors: [
        { name: 'black', value: '#000' },
        { name: 'white', value: '#fff' },
        { name: 'text', value: '#001833' },
        { name: 'blue', value: '#0068EF' },
        { name: 'lightBlue', value: '#e8f2ff' },
        { name: 'darkBlue', value: '#049' },
        { name: 'buttonGray', value: '#edf0f3' },
        { name: 'green', value: '#0a0' },
        { name: 'lightGreen', value: '#ecf7ec' },
        { name: 'darkGreen', value: '#060' },
        { name: 'red', value: '#c00' },
        { name: 'lightRed', value: '#fbebeb' },
        { name: 'darkRed', value: '#800' },
        { name: 'orange', value: '#f68013' },
        { name: 'lightOrange', value: '#fef2e7' },
        { name: 'purple', value: '#70b' },
        { name: 'lightPurple', value: '#f5ebfa' },
        { name: 'yellow', value: '#fedc2a' }
      ]
    }
  },
  components: {
    ColorCard
  }
}
</script>

<style lang="scss" scoped>
</style>
