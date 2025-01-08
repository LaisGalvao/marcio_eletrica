<template>
  <router-view />
</template>

<script>
/* import HomeView from './views/HomeView.vue'; */

export default {
/*   components: {
     HomeView
  }, */
}
</script>

<style scoped>
.hero {
  background: url('@/assets/images/eletricista.jpg') no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  color: white;
}

.cta-buttons {
  margin-top: 20px;
}

.btn-whatsapp, .btn-chatbot {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
}

.btn-whatsapp {
  background-color: #25d366;
  color: white;
  border: none;
  border-radius: 5px;
}

.btn-chatbot {
  background-color: #ff9f00;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
