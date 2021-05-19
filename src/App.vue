<template>
  <header>
    <div id="nav">
      <router-link to="/" id="home">Home</router-link>
      <router-link to="/learn">Learn</router-link>
      <router-link to="/check">Check</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  height: 3.6rem;
  border-bottom: 1px solid #eaecef;
  padding: 0 2rem;
  #home {
    margin-right: auto;
  }

  a {
    margin: 20px 0;
    padding: 0  20px;
    font-weight: bold;
    color: #2c3e50;
    height: auto;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

main {
  margin-top: 3.6rem;
}
</style>
