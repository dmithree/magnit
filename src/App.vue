<template>
  <div id="app">
    <div class="wrapper">
      <TheSidebar />
      <div class="page">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import TheSidebar from '@/components/sidebar/TheSidebar'

export default {
  name: 'App',
  components: {
    TheSidebar
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  position: relative;
}
</style>
