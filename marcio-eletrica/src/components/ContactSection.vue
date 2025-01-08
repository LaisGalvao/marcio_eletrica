<template>
  <section class="contact">
    <h2>Entre em Contato</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Mensagem</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit" class="btn-submit">Enviar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Aqui você pode integrar com um backend ou enviar para o WhatsApp
      alert('Formulário enviado com sucesso!');
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 40px 20px;
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, textarea {
  width: 90vw;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

textarea {
  height: 150px;
}

button {
  padding: 10px 20px;
  background-color: #ff9f00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
