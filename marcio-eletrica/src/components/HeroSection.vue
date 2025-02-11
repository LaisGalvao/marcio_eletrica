<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="heading-primary">Eletricista Profissional em Santo André - 25 Anos de Experiência</h1>
      <p class="text-body">Serviços rápidos, seguros e de qualidade para sua casa ou empresa.</p>
      <div class="cta-buttons">
        <a href="https://wa.me/55XXXXXXX" class="btn-whatsapp">Fale Conosco no WhatsApp</a>
        <button @click="startChatbot" class="btn-chatbot">Iniciar Conversa Rápida</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    startChatbot() {
      // Lógica para abrir o chatbot
      console.log("Abrindo o chatbot...");
    }
  }
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
  text-align: center;
  color: black;
  padding: 0 20px;
}

.hero-content {
  max-width: 800px;
}

.heading-primary {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  animation: fadeInDown 1s ease-out;
}

.text-body {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease-out;
}

.cta-buttons {
  margin-top: 20px;
}

.btn-whatsapp, .btn-chatbot {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn-whatsapp {
  background-color: #25d366;
  color: white;
  border: none;
}

.btn-whatsapp:hover {
  background-color: #1ebd5a;
}

.btn-chatbot {
  background-color: #ff9f00;
  color: white;
  border: none;
}

.btn-chatbot:hover {
  background-color: #e68a00;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .heading-primary {
    font-size: 2rem;
  }

  .text-body {
    font-size: 1rem;
  }

  .btn-whatsapp, .btn-chatbot {
    font-size: 14px;
  }
}
</style>