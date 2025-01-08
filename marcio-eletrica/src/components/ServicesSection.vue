<template>
  <section class="services service-list">
    <h2>Nossos Serviços</h2>
    <ul>
      <li v-for="service in services" :key="service.id">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <button @click="requestService(service)">Solicite Orçamento</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        { id: 1, title: 'Instalações Elétricas', description: 'Instalação de fiação, tomadas, interruptores e mais.' },
        { id: 2, title: 'Manutenção e Reparos', description: 'Consertos e manutenção de sistemas elétricos.' },
        { id: 3, title: 'Emergências Elétricas', description: 'Atendimento 24h para emergências elétricas.' }
      ]
    };
  },
  methods: {
    requestService(service) {
      window.location.href = 'https://wa.me/55XXXXXXX?text=' + encodeURIComponent('Gostaria de um orçamento para ' + service.title);
    }
  }
}
</script>

<style scoped>
/* .services {
  padding: 40px 20px;
  background-color: #f4f4f4;
}
 */
h2 {
  text-align: center;
  margin-bottom: 30px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: white;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button {
  padding: 10px 20px;
  background-color: #ff9f00;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
