<template>
  <div>
    <form class="form-contato" @submit="sendMail">
      <span>Nome:</span>
      <label for="">
        <input type="text" v-model="form.name" />
      </label>

      <span>Email:</span>
      <label for="">
        <input type="email" v-model="form.email" />
      </label>

      <span>Celular:</span>
      <label for="">
        <input type="tel" v-model="form.tel" />
      </label>

      <span>Mensagem:</span>
      <label for="">
        <b-form-textarea
          id="textarea-default"
          v-model="form.msg"
          placeholder="Descreva aqui sua mensagem"
        ></b-form-textarea>
      </label>

      <b-button type="submit" variant="primary">Enviar</b-button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        tel: "",
        msg: ""
      }
    };
  },
  methods: {
    sendMail() {
      localStorage.setItem("form", JSON.stringify(this.form));
    }
  }
};
</script>
<style>
.form-contato {
  display: grid;
}
input {
  width: 90%;
}
label {
  text-align: center;
}
span {
  text-align: center;
}
</style>
