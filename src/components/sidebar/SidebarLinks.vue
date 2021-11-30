<template>
  <div class="sidebar-links">
    <div class="sidebar-links__title">
      <slot name="title"></slot>
    </div>
    <slot name="body"></slot>
  </div>
</template>

<script>
export default {
  name: 'SidebarLinks'
}
</script>

<style lang="scss">
.sidebar-links {
  &__title {
    padding: 32px 0 24px 0;
    & h3 {
      color: #A0A0A0;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }
  & ul {
    & li {
      padding: 0 0 20px 0;
      & a {
        color: #001833;
      }
    }
  }
}
</style>
