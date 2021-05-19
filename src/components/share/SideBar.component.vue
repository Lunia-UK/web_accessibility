<template>
  <aside class="sidebar">
    <ul v-show="mobileScreen">
      <li v-for="link in navContent" :key="link.name" class="link">
        <router-link :to="link.path">{{link.name}}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
  props: [
    'navContent',
    'mobileScreen'
  ]
}
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  padding: 1.2rem 0;
  width: 20rem;
  overflow-y: auto;
  border-right: 1px solid #eaecef;
}
.sidebar-heading {
  font-size: 1.1em;
  font-weight: 700;
  line-height: 1.7;
  margin: 0;
}

ul {
  list-style: none;
  padding-left: 1rem;
  line-height: 1.7;

li {
  padding: 0.3rem 0;
}

.sidebar-link {
  box-sizing: border-box;
  text-decoration: none;

&:hover {
   color: #2c3e50;
 }
}
}
</style>