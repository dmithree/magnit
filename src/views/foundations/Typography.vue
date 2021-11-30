<template>
  <div class="page-content">
    <h3 class="page-content__title">Шрифты</h3>
    <p class="page-content__description">
      The design system includes base styles for typography and a typographic scale for determining font sizes.
    </p>
    <section>
      <h2 class="page-content__title">Montserrat font</h2>
      <p>
        To use the Montserrat font-family in you project, be sure to include a link in your document <code></code>
      </p>
      <SshPre language="html">
        {{montserratFont}}
      </SshPre>
    </section>
    <div class="font-box">
      <h3>72px (8) Discover...</h3>
      <h3>56px (7) Discover new...</h3>
      <h3>40px (6) Discover new deals eve...</h3>
      <h3>32px (5) Discover new deals every day.</h3>
      <h3>24px (4) Discover new deals every day.</h3>
      <h3>20px (3) Discover new deals every day.</h3>
      <h3>16px (2) Discover new deals every day.</h3>
      <h3>14px (1) Discover new deals every day.</h3>
      <h3>12px (0) Discover new deals every day.</h3>

      <h3>Font Weight Regular</h3>
      <h3>Font Weight Bold</h3>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.font-box {
  & h3 {
    margin: 32px 0;
    &:nth-of-type(1) {
      margin-top: 64px;
      font-size: 70px;
    }
    &:nth-of-type(2) {
      margin-top: 48px;
      font-size: 56px;
    }
    &:nth-of-type(3) {
      font-size: 40px;
    }
    &:nth-of-type(4) {
      font-size: 32px;
    }
    &:nth-of-type(5) {
      font-size: 24px;
    }
    &:nth-of-type(6) {
      font-size: 20px;
    }
    &:nth-of-type(7) {
      font-size: 16px;
    }
    &:nth-of-type(8) {
      font-size: 14px;
    }
    &:nth-of-type(9) {
      font-size: 12px;
    }
    &:nth-of-type(10) {
      font-weight: 400;
    }
    &:nth-of-type(11) {
      font-weight: 700;
    }
  }
}
</style>

<script>
export default {
  name: 'Home',
  data () {
    return {
      themeProvider: `import React from 'react'
 import { ThemeProvider } from 'pcln-design-system'
 import SomeView from './SomeView'

 class App extends React.Component {
   render() {
    return (
     <ThemeProvider>
       <h1>Hello</h1>
     </ThemeProvider>
    )
   }
 }`,
      montserratFont: `<link
   href="Ссылка на шрифт"
   rel="stylesheet"
 />`
    }
  }
}
</script>
