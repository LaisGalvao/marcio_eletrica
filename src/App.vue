<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Interface/Footer.vue";
import Header from "./components/Interface/Header.vue";
export default {
  name: "App",
  components: { Footer, Header },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  min-height: 100%;
}
</style>
