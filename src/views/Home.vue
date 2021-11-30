<template>
  <div class="page-container page-hero">
    <div class="page-hero__bg"></div>
    <h1 class="page-hero__title text-largetitle">Спектр</h1>
    <p class="page-content__description">
      Спектр — дизайн-система цифровых продуктов Магнита, которая помогает быстрее собирать продукты без ущерба качеству и клиентскому опыту.
    </p>
    <router-link to="/howtostart">
      <button class="button button-default">С чего начать</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss">
.page-hero {
  &__bg {
    background: url(../assets/heroBackground.png) no-repeat left;
    height: 600px;
    width: 100%;
  }
  &__title {
    padding: 72px 0 24px 0;
    font-size: 36px;
  }
}
</style>
