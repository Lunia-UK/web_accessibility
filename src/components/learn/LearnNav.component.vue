<template>
    <nav class="sidebar-links">
      <ul>
        <li>
          <section>
            <p class="sidebar-heading">What is accessibility ?</p>
            <ul class="sidebar-group-items">
              <li>
                <a class="sidebar-link" href="">AY11</a>
              </li>
              <li>
                <a class="sidebar-link" href="">History</a>
              </li>
            </ul>
          </section>
        </li>
        <li>
          <section>
            <p class="sidebar-heading">Aria</p>
            <ul class="sidebar-group-items">
              <li>
                <a class="sidebar-link" href="">Roles</a>
              </li>
              <li>
                <a class="sidebar-link" href="">States And Properties</a>
              </li>
            </ul>
          </section>
        </li>
        <li>
          <section>
            <p class="sidebar-heading">Color</p>
            <ul class="sidebar-group-items">
              <li>
                <a class="sidebar-link" href="">Contrast</a>
              </li>
              <li>
                <a class="sidebar-link" href="">Color blind safe</a>
              </li>
            </ul>
          </section>
        </li>
        <li>
          <section>
            <p class="sidebar-heading">Form</p>
            <ul class="sidebar-group-items">
              <li>
                <a class="sidebar-link" href="">Label</a>
              </li>
            </ul>
          </section>
        </li>
      </ul>
    </nav>
</template>

<script lang="ts">
export default {
  name: "LearnNav"
}
</script>

<style scoped lang="scss">


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