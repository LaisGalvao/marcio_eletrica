<template>
  <section class="services-section">
    <div class="container">
      <h2 class="section-title">Nossos Serviços</h2>
      <div class="services-grid">
        <!-- Renderização dinâmica dos serviços -->
        <div v-for="service in services" :key="service.id" class="service-card">
          <img :src="service.image" :alt="service.title" class="service-image" />
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </div>
      <!-- Botão CTA no final -->
      <div class="cta-container">
        <button class="cta-button" @click="goToContact">
          Entre em Contato
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Instalação Elétrica",
          description: "Realizamos instalações elétricas completas para residências e empresas.",
          image: "/images/instalacao-eletrica.jpg",
        },
        {
          id: 2,
          title: "Manutenção Preventiva",
          description: "Evite problemas com manutenções regulares de alta qualidade.",
          image: "/images/manutencao-preventiva.jpg",
        },
        {
          id: 3,
          title: "Automação Residencial",
          description: "Transforme sua casa em um ambiente inteligente e conectado.",
          image: "/images/automacao-residencial.jpg",
        },
      ],
    };
  },
  methods: {
    goToContact() {
      // Direciona o usuário para a seção de contato
      window.location.href = 'https://wa.me/55XXXXXXX?text=' + encodeURIComponent('Gostaria de um orçamento para ' + service.title);
    },
  },
};
</script>

<style scoped>
.services-section {
  padding: 4rem 1rem;
  background-color: #f8f8f8;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: bold;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.service-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.service-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.service-card:hover .service-image {
  transform: scale(1.05);
}

.service-title {
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.service-description {
  color: #666;
  line-height: 1.5;
}

.cta-container {
  text-align: center;
}

.cta-button {
  background-color: #f5a623;
  /* Amarelo destaque */
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #e5941e;
  /* Amarelo mais escuro */
}
</style>