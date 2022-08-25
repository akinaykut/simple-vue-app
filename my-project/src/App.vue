<template>
  <div>
    <the-header></the-header>
    <hello-world></hello-world>
    <the-footer></the-footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TheHeader,
    TheFooter,
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
  color: #2c3e50;
  height: 100vh;
}
</style>
