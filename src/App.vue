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
import scrollToTop from './mixins/scrollToTop';
export default {
  name: "App",
  components: { Footer, Header },
  mixins: [scrollToTop]
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
/* testeee */
html,
body {
  min-height: 100vh !important;
  scroll-behavior: smooth;
}
</style>
