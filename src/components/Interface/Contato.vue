<template>
  <div>
    <form class="form-contato" @submit="sendMail">
      <span>Nome:</span>
      <label for="">
        <b-form-input type="text" name="name" v-model="form.name" />
      </label>

      <span>Email:</span>
      <label for="">
        <b-form-input type="email" v-model="form.email" />
      </label>

      <span>Celular:</span>
      <label for="">
        <b-form-input type="tel" v-model="form.tel" />
      </label>

      <span>Selecione um serviço:</span>
      <b-form-select v-model="selected" :options="form.options"></b-form-select>

      <span>Descreva seu problema:</span>
      <label for="">
        <b-form-textarea
          id="textarea-default"
          v-model="form.msg"
          placeholder="Sua mensagem"
        ></b-form-textarea>
      </label>

      <span>Anexos</span>
      <b-form-file
        class="mt-3"
        plain
        v-model="form.file"
        placeholder="Escolha um arquivo ou arraste aqui..."
        drop-placeholder="Solte um arquivo aqui..."
        >Anexar</b-form-file
      >
      <b-button
        variant="outline-danger"
        class="btn-modal-contato"
        @click="hideModal"
        >Cancelar</b-button
      >
      <b-button
        variant="outline-success"
        class="btn-modal-contato"
        type="submit"
        >Enviar</b-button
      >
    </form>
  </div>
</template>
<script>
/* import axios from "axios"; */
export default {
  data() {
    return {
      selected: null,
      form: {
        name: "",
        email: "",
        tel: "",
        msg: "",
        file: null,
        options: [
          { value: null, text: "Selecione uma opção" },
          { value: "automacao", text: "Automação" },
          { value: "emergencia", text: "Emergência" },
          { value: "padrao_entrada", text: "Padrão de Entrada" },
          { value: "projeto_eletrico", text: "Projetos Elétricos" },
        ],
      },
    };
  },
  methods: {
    sendMail() {
      localStorage.setItem("form", JSON.stringify(this.form));
      /*   axios
        .post("../../api/mail.php")
        .then((response) => {
          console.log(response.data);
        })
        .catch(function (response) {
          //handle error
          console.log(response.data);
        }); */
    },
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    },
  },
};
</script>
<style>
.form-contato {
  display: grid;
}

.btn-modal-contato {
  width: 80% !important;
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
