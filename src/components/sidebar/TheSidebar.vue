<template>
  <div class="sidebar">
    <div class="sidebar-inner">
      <router-link to="/">
        <TheLogo />
      </router-link>
      <div class="link-start">
        <router-link to="/howtostart">О дизайн-системе</router-link>
      </div>
      <SidebarLinks>
        <h3 slot="title">С чего начать</h3>
        <ul slot="body">
          <li v-for="link in gettingstarted" :key="link.id">
            <router-link :to="{path:link.router}">{{link.name}}</router-link>
          </li>
        </ul>
      </SidebarLinks>
      <SidebarLinks>
        <h3 slot="title">Основы</h3>
        <ul slot="body">
          <li v-for="link in foundations" :key="link.id">
            <router-link :to="{path:link.router}">{{link.name}}</router-link>
          </li>
        </ul>
      </SidebarLinks>
      <SidebarLinks>
        <h3 slot="title">Гайдлайны</h3>
        <ul slot="body">
          <li v-for="link in guidelines" :key="link.id">
            <router-link :to="{path:link.router}">{{link.name}}</router-link>
          </li>
        </ul>
      </SidebarLinks>
      <SidebarLinks>
        <h3 slot="title">Компоненты</h3>
        <ul slot="body">
          <li v-for="link in designComponents" :key="link.id">
            <router-link :to="{path:link.router}">{{link.name}}</router-link>
          </li>
        </ul>
      </SidebarLinks>
    </div>
  </div>
</template>

<script>
import TheLogo from '@/components/TheLogo'
import SidebarLinks from '@/components/sidebar/SidebarLinks'
export default {
  data () {
    return {
      gettingstarted: [
        { id: '1', name: 'Дизайнеру', router: '/gettingstarted/designer' },
        { id: '2', name: 'Разработчику', router: '/gettingstarted/developer' },
        { id: '3', name: 'Менеджеру', router: '/gettingstarted/manager' },
      ],
      foundations: [
        { id: '1', name: 'Цвета', router: '/foundations/color' },
        { id: '2', name: 'Шрифты', router: '/foundations/typography' },
        { id: '4', name: 'Иконки', router: '/foundations/iconography' },
        { id: '5', name: 'Темы', router: '/foundations/theming' },
        { id: '6', name: 'Адаптивность', router: '/foundations/breakpoints' },
      ],
      guidelines: [
        { id: '1', name: 'Цифровые продукты', router: '/guidelines/digital' },
        { id: '2', name: 'Текст в интерфейсе', router: '/guidelines/textinterface' },
        { id: '3', name: 'Ошибки', router: '/guidelines/errors' },
        { id: '4', name: 'Уведомления', router: '/guidelines/notifications' },
      ],
      designComponents: [
        { id: '1', name: 'Button', router: '/guidelines/textinterface' },
        { id: '2', name: 'Input', router: '/guidelines/errors' },
      ]
    }
  },
  components: {
    TheLogo,
    SidebarLinks
  },
}
</script>

<style lang="scss" scoped>
.link-start {
  padding: 40px 0 32px 0;
}
</style>
