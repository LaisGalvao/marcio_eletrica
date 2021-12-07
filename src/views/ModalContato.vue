<template>
  <div>
    <b-button v-b-modal.modal-1 variant="warning" class="btn-contato"
      >Preencha o formulário, responderemos sua solicitação o mais rápido
      possíve!</b-button
    >

    <b-modal id="modal-1" hide-footer title="Envie uma mensagem!" class="text-center">
      <Contato />
    </b-modal>
  </div>
</template>
<script>
import Contato from "@/components/Interface/Contato";
export default {
  components: {
    Contato: Contato
  }
};
</script>
<style scoped>
  .btn-contato{
    margin: 2%;
    width: 30%;
  }
</style>