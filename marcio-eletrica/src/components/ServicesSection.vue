<template>
  <section class="services-section">
    <div class="container">
      <h2 class="section-title">Também apresentamos soluções em:</h2>
      <div class="services-grid">
        <!-- Cards Existentes -->
        <div class="service-card">
          <img src="https://placehold.co/10" alt="Imagem" class="service-image" />
          <h3 class="service-title">Serviços de automação</h3>
          <p class="service-description">Reduza custos, garanta a segurança, e traga melhor qualidade na sua produção através da automação</p>
          <button class="cta-button">Saiba mais</button>
        </div>
        <div class="service-card">
          <img src="https://placehold.co/10" alt="Imagem" class="service-image" />
          <h3 class="service-title">Execução de projetos elétricos</h3>
          <p class="service-description">Um projeto elétrico bem articulado influencia positivamente em todas as etapas de uma instalação elétrica</p>
          <button class="cta-button">Saiba mais</button>
        </div>
        <div class="service-card">
          <img src="https://placehold.co/10" alt="Imagem" class="service-image" />
          <h3 class="service-title">Projetos para padrão de entrada de energia</h3>
          <p class="service-description">Instalação do padrão de entrada, de acordo com as concessionárias responsáveis pela distribuição de energia elétrica da sua região</p>
          <button class="cta-button">Saiba mais</button>
        </div>
      </div>

      <!-- Nova Seção de Cards -->
      <h2 class="section-title">Outras soluções disponíveis:</h2>
      <div class="services-grid">
        <div class="service-card">
          <img src="https://placehold.co/10" alt="Imagem" class="service-image" />
          <h3 class="service-title">Instalações elétricas prediais</h3>
          <p class="service-description">Realizamos instalações seguras e eficientes em ambientes residenciais e comerciais</p>
          <button class="cta-button">Saiba mais</button>
        </div>
        <div class="service-card">
          <img src="https://placehold.co/10" alt="Imagem" class="service-image" />
          <h3 class="service-title">Manutenção preventiva</h3>
          <p class="service-description">Evite imprevistos com um plano de manutenção elétrica adaptado às suas necessidades</p>
          <button class="cta-button">Saiba mais</button>
        </div>
        <div class="service-card">
          <img src="https://placehold.co/10" alt="Imagem" class="service-image" />
          <h3 class="service-title">Consultoria técnica</h3>
          <p class="service-description">Orientação especializada para otimizar a eficiência energética e garantir segurança</p>
          <button class="cta-button">Saiba mais</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",
  data() {
    return {
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