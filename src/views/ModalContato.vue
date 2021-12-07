<template>
  <div>
    <b-button v-b-modal.modal-1>Contato!</b-button>

    <b-modal id="modal-1" title="Entre em contato" class="text-center">
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
