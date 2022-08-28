<template>
  <div class="header">
    <nav>
      <ul class="navigation-items navbar-ul">
        <li class="navigation-item"><a href=""> Home </a></li>
        <li class="navigation-item"><a href=""> About </a></li>
        <li class="navigation-item"><a href=""> Portfolio </a></li>
        <li class="navigation-item"><a href=""> Contact </a></li>

        <!-- <span
          ><li class="navigation-item"><a href=""> Sign Up </a></li></span
        > -->
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.header {
  height: 15%;
  background-color: rgb(171, 9, 44);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.navigation-items {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation-item {
  padding: 0 1rem;
}

nav {
  padding: 0 15%;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: bisque;
}

a:hover {
  color: rgb(248, 249, 245);
}
</style>
