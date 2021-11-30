<template>
  <div class="page-content">
    <h1 class="page-content__title">Визуальный язык цифровых продуктов</h1>
    <p class="page-content__description">
      Цели
    </p>
    <section>
      <p>Визуальный язык коммуникации позволяет пользователям идентифицировать, запоминать и в последствии доверять продукту, услуге и компании.</p>
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
    </section>
  </div>
</template>


<script>
export default {
  name: 'TextInterfacePage',
};
</script>

<style lang="scss" scoped>
</style>