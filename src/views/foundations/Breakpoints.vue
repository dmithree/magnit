<template>
  <div class="page-content">
    <h1 class="page-content__title">Breakpoints</h1>
    <p class="page-content__description">
      Priceline's Design System is built around a set of breakpoints on the
      theme that Styled System uses to create a responsive layout.
    </p>
    <table>
      <thead>
        <tr>
          <th>
            <strong>Name</strong>
          </th>
          <th>
            <strong>EM</strong>
          </th>
          <th>
            <strong>Pixels*</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SM</td>
          <td>32</td>
          <td>512</td>
        </tr>
        <tr>
          <td>MD</td>
          <td>40</td>
          <td>640</td>
        </tr>
        <tr>
          <td>LG</td>
          <td>48</td>
          <td>768</td>
        </tr>
        <tr>
          <td>XL</td>
          <td>64</td>
          <td>1024</td>
        </tr>
        <tr>
          <td>XXL</td>
          <td>80</td>
          <td>1280</td>
        </tr>
      </tbody>
    </table>
    <p>* Base pixel size = 16px</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
table {
  border-collapse: separate;
  border-spacing: 0px;
  max-width: 100%;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  line-height: 1.6;
  font-weight: 500;
  & th {
    text-align: left;
    background-color: rgb(246, 248, 250);
    vertical-align: bottom;
  }
  & td {
    &:first-child {
      min-width: 128px;
    }
  }
}
th, td {
  padding: 12px 8px;
  line-height: inherit;
  border-bottom: 1px solid rgb(192, 202, 213);
}
</style>
