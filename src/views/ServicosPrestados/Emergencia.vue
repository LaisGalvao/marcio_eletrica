<template>
  <div>
    <Header />
    <div class="desce-jumbo">
      <JumbotronBanner
        title="Atendimento de emergência"
        lead=""
        class="emergencia"
        text-variant="dark"
      />
    </div>
    <div class="container">
      <p class="paragraph">
        Atendemos emergências em caso de:
        <ul>
          <li>Anomalias da rede elétrica</li>
          <li>Aueda total ou parcial de energia</li>
          <li>Lâmpada piscando</li>
          <li>Tomadas apresentando mau funcionamento</li>
        </ul>
      </p>
      <p class="paragraph">
        Trabalhamos com execução de projetos elétricos já elaborados, entre em
        contato para saber mais.
      </p>
    </div>
    <ModalContato />
  </div>
</template>
<style scoped>
.paragraph {
  text-align: justify;
  font-size: 16px;
  margin: 3%;
}
.desce-jumbo {
  margin-top: 45px;
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
import Header from "@/components/Interface/Header";
import JumbotronBanner from "@/components/Interface/JumbotronBanner";
export default {
  components: {
    JumbotronBanner: JumbotronBanner,
    Header: Header,
    ModalContato: ModalContato
  }
};
</script>
