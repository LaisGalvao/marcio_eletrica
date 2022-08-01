<template>
  <div>
    <div class="desce-jumbo">
      <JumbotronBanner
        title="Atendimento de emergência"
        lead=""
        class="emergencia"
        text-variant="dark"
      />
    </div>
    <div class="container">
      <div class="col-md-12">
        <p class="paragraph">
        Atendemos emergências em caso de:
        <ul>
          <li>Anomalias da rede elétrica</li>
          <li>Queda total ou parcial de energia</li>
          <li>Lâmpada piscando</li>
          <li>Tomadas apresentando mau funcionamento</li>
        </ul>
      </p>
      <p class="paragraph">
        Trabalhamos com execução de projetos elétricos já elaborados, entre em
        contato para saber mais.
      </p>
        <div class="container"><ModalContato /></div>
      </div>

    </div>

  </div>
</template>
<style scoped>
.paragraph {
  text-align: justify;
  font-size: 1.6em;
  margin: 3%;
}
.desce-jumbo {
  padding-top: 45px;
}
.jumbotron {
  height: 70vh;
}

.emergencia {
  background: url(https://drive.google.com/uc?export=view&id=1wr7Kmkx55bhSQ1aN2oK5OzZ1IHv1lm8q);
  filter: brightness(50.8%);
}
</style>
<script>
import ModalContato from "@/views/ModalContato";
import JumbotronBanner from "@/components/Interface/JumbotronBanner";
export default {
  components: {
    JumbotronBanner: JumbotronBanner,
    ModalContato: ModalContato,
  },
};
</script>
