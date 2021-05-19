<template>
  <header>
    <div v-show="mobileScreen" class="sidebar-button" @click="showSlidebar()">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" class="icon">
        <path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path>
      </svg>
    </div>
    <nav>
      <router-link to="/" id="home">Home</router-link>
      <div v-show="!mobileScreen" v-for="link in navLinks" :key="link.name" class="link">
        <router-link :to="link.path">{{link.name}}</router-link>
      </div>
    </nav>
  </header>
  <Sidebar v-show="isShowSidebar" :navContent="navLinks" :mobileScreen="mobileScreen"/>
  <main>
    <router-view/>
  </main>
</template>

<script>
import Sidebar from '@/components/share/SideBar.component.vue'
export default {
  name: "Learn.vue",
  components: {
    Sidebar
  },
  data(){
    return {
      navLinks: [{path: '/learn', name: 'Learn'}, {path: '/check', name: 'Check'}, {path: '/about', name: 'About'}],
      mobileScreen: false,
      isShowSidebar: true
    }
  },
  created() {
    this.onResize()
    window.addEventListener("resize", this.onResize)
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize)
  },
  methods: {
    onResize() {
      let width = window.innerWidth
      this.mobileScreen = true
      this.isShowSidebar = false
      if(width >= 800){
        this.isShowSidebar = true
        this.mobileScreen = false
      }
    },
    showSlidebar() {
      console.log('show')
      this.isShowSidebar = !this.isShowSidebar
    }
  }
}
</script>

<style lang="scss">
$nav-height: 3.6rem;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  height: $nav-height;
  border-bottom: 1px solid #eaecef;
  padding: 0 2rem;

  #home {
    margin-right: auto;
  }

  nav{
    display: flex;
    justify-content: flex-end;
    align-content: center;
    width: 95%;

    .link {
      display: flex;
      align-items: center;
    }
  }

  a {
    margin: 20px 0;
    padding: 0  20px;
    font-weight: bold;
    color: #2c3e50;
    height: auto;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


.sidebar {
  display: block;
  position: fixed;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  padding: 1.2rem 0;
  width: 20rem;
  overflow-y: auto;
  border-right: 1px solid #eaecef;
}

.sidebar-button {
  .icon {
    display: block;
    width: 1.25rem;
    padding: 15px 0;
  }
}


main {
  margin-top: $nav-height;
}
</style>
