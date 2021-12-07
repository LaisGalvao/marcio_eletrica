<template>
  <div>
    <form class="form-contato">
      <span>Nome:</span>
      <label for="">
        <b-form-input type="text" v-model="form.name" />
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
        @click="sendMail"
        >Enviar</b-button
      >
    </form>
  </div>
</template>
<script>
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
          { value: null, text: "Please select an option" },
          { value: "a", text: "This is First option" },
          { value: "b", text: "Selected Option" },
          { value: { C: "3PO" }, text: "This is an option with object value" },
          { value: "d", text: "This one is disabled", disabled: true }
        ]
      }
    };
  },
  methods: {
    sendMail() {
      localStorage.setItem("form", JSON.stringify(this.form));
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
