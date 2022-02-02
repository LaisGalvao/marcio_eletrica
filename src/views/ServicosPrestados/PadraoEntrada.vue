<template>
  <div>
    <Header />
    <div class="desce-jumbo">
      <JumbotronBanner
        title="Projetos para padrão de entrada de energia"
        lead="Porque fazer e qual a imprtância?"
        class="padrao-entrada"
        text-variant="dark"
      />
    </div>
    <div class="container">
      <div class="col-md-12">
        <p class="paragraph">
          Um projeto de padrão de entrada de energia tem como objetivo a
          concessão de energia elétrica da concessionária para sua casa, de modo
          a garantir a segurança e uma boa eficiência energética.
        </p>
        <p class="paragraph">
          As informações técnicas para a montagem e instalação correta do padrão
          de entrada da residência, serão disponibilizadas pelas concessionárias
          responsáveis pela distribuição de energia elétrica da sua região,
          cidade ou estado.
        </p>
        <p class="paragraph">
          Elaboramos projetos e instalação com até 3 medidores de entrada, e
          também executamos projetos já elaborados com mais de 3 medidores.
        </p>
      </div>
      <div class="container"><ModalContato /></div>
    </div>
  </div>
</template>
<style>
.paragraph {
  text-align: justify;
  font-size: 1.6em;
  margin: 3%;
}
.desce-jumbo {
  margin-top: 45px;
}
.jumbotron {
  height: 70vh;
}

.padrao-entrada {
  background: url(https://drive.google.com/uc?export=view&id=1TaVU1CNVAqP8jqN_a_szkd49GaCuAh5Q);
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
    ModalContato: ModalContato,
  },
};
</script>
