<template>
  <div class="text-center">
    <form class="form-contato" ref="form" @submit="sendMail">
      <b-row>
        <b-col cols="6"
          ><span>Nome:</span>
          <b-form-input type="text" name="user_name" v-model="form.name" />
        </b-col>

        <b-col cols="6">
          <span>Email:</span>
          <b-form-input type="email" name="user_email" v-model="form.email" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <span>Celular:</span>
          <b-form-input type="tel" v-model="form.tel" />
        </b-col>

        <b-col cols="6"
          ><span>Selecione um serviço:</span>
          <b-form-select :options="form.options"></b-form-select>
        </b-col>
        <br />
      </b-row>
      <hr />
      <b-row>
        <br />
        <b-col cols="12">
          <span>Descreva seu problema:</span>

          <b-form-textarea
            id="textarea-default"
            name="message"
            v-model="form.msg"
            placeholder="Sua mensagem"
          ></b-form-textarea>
          <br />
        </b-col>

        <b-col cols="12">
          <br />
          <span>Anexos</span>
          <b-form-file
            class="mt-3"
            plain
            v-model="form.file"
            placeholder="Escolha um arquivo ou arraste aqui..."
            drop-placeholder="Solte um arquivo aqui..."
            >Anexar</b-form-file
          >
        </b-col>
      </b-row>
      <hr />
      <br /><br />
      <b-row>
        <b-col>
          <b-button
            id="btnShow"
            variant="outline-danger"
            class="btn-modal-contato"
            @click="hideModal"
            >Cancelar</b-button
          ></b-col
        >
        <b-col>
          <b-button
            variant="outline-success"
            class="btn-modal-contato"
            type="submit"
            >Enviar</b-button
          >
        </b-col>
      </b-row>
    </form>
    <b-button
      variant="outline-success"
      class="btn-modal-contato"
      type="submit"
      @click="send"
      >Whats</b-button
    >
  </div>
</template>
<script>
/* import emailjs from "emailjs-com"; */
/* import axios from "axios"; */
/* const querystring = require("querystring"); */

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        tel: "",
        msg: "",
        file: null,
        selected: null,
        options: [
          { value: null, text: "Selecione uma opção" },
          { value: "automacao", text: "Automação" },
          { value: "emergencia", text: "Emergência" },
          { value: "padrao_entrada", text: "Padrão de Entrada" },
          { value: "projeto_eletrico", text: "Projetos Elétricos" }
        ]
      },
      obj: null
    };
  },
  methods: {
    sendMail(e) {
      /* var newForm = Object.assign(this.form, this.selected, {}); */
      /*   console.log(newForm); */
      /*    axios
        .post("../../services/mail.php", querystring.stringify(this.form))
        .then((res) => console.log(res.data, e)); */
      /*   emailjs
        .sendForm(
          "service_galvaoeletrica",
          "template_2dhvsup",
          this.$refs.form,

          "user_1zmTo7op4jjuKsXYkSaHV",
         e.target
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text, result.status, result.data);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        ); */
      localStorage.setItem("form", this.form);
      e;
    },
    send() {
     /*  this.obj = {
        nome: this.form.name,
        email: this.form.email,
        celular: this.form.tel,
        mensagem: this.form.msg
      }; */
      window.open(
        `https://api.whatsapp.com/send?phone=5511973183283&text=Olá, meu nome é ${this.form.name} isso é um teste ${this.form.msg}`
      );
    },
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    }
  }
};
</script>
<style>
.form-contato {
  display: grid;
}

.btn-modal-contato {
  width: 50% !important;
  display: inline-block !important;
  margin-top: 5%;
  margin-left: 9%;
}

label {
  text-align: center;
}
span {
  text-align: center;
}
</style>
