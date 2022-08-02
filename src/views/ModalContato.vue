<template>
  <div>
    <button
      v-b-modal.modal-1
      variant="warning"
      class="btn-contato is-warning"
      id="toggle-btn"
      @click="modalShow = !modalShow"
      >Preencha o formulário, responderemos sua solicitação o mais rápido
      possíve!</button
    >

    <b-modal
      id="modal-1"
      ref="my-modal"
      size="lg"
      v-model="modalShow"
      centered
      hide-footer
      title="Envie uma mensagem!"
      class="text-center"
    >
      <Contato />
    </b-modal>
  </div>
</template>
<script>
import Contato from "@/components/Interface/Contato";
export default {
  components: {
    Contato: Contato
  },
  data() {
    return {
      modalShow: false
    };
  }
  /*   methods: {
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    } */
};
</script>
<style scoped>
.btn-contato {
  margin: 2%;
  width: auto;
  height: max-content;
  padding: 2%;
  overflow: hidden;
  background-color: hsl(48, 100%, 67%);
  border: none;
  border-radius: 10px;
}
 .btn-contato span{
    width: auto;
    overflow: hidden;
  }

@media screen and (max-width: 1024px){
  .btn-contato{
    width: 80% !important;
    margin: 2%;
  }
}
</style>
