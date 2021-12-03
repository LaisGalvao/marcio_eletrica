<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>

    <div class="mt-3">
      Submitted Names:
      <div v-if="submittedNames.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
        <li :v-for="name in submittedNames">{{ name }}</li>
      </ul>
    </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Entre em contato agora mesmo!"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Nome *"
          label-for="name-input"
          invalid-feedback="O nome é obrigatório!"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Email *"
          label-for="email-input"
          invalid-feedback="O email é obrogatório!"
          :state="emailState"
        >
          <b-form-input
            id="email-input"
            v-model="email"
            :state="emailState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Celular *"
          label-for="cel-input"
          invalid-feedback="O celular é obrogatório!"
          :state="celState"
        >
          <b-form-input
            id="cel-input"
            v-model="cel"
            :state="celState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Mensagem *"
          label-for="msg-input"
          invalid-feedback="Escreva uma mensagem!"
          :state="msgState"
        >
          <b-form-textarea
            id="msg-input"
            v-model="msg"
             :state="msgState"
            placeholder="Escreva sua mensagem..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      nameState: null,
      submittedNames: []
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    }
  }
};
</script>
