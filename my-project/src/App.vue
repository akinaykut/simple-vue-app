<template>
  <div>
    <the-header></the-header>

    <router-view></router-view>

    <hello-world></hello-world>
    <zilan-section></zilan-section>
    <the-footer></the-footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import ZilanSection from "./components/ZilanSection.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TheHeader,
    TheFooter,
    ZilanSection,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: bisque;
  height: 100vh;
}
</style>
