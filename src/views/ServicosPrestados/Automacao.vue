<template>
  <div>
    <Header />
    <div class="desce-jumbo">
      <JumbotronBanner
        title="Serviços de automação"
        lead="Porque fazer e onde se aplica?"
        class="automacao"
        text-variant="dark"
      />
    </div>
    <div class="container">
      <p class="paragraph">
        A automação, através de meios tecnológicos, dispensa trabalhos braçais,
        fazendo com que as atividades ganhem mais conforto, agilidade e
        eficiência.
      </p>
      <p class="paragraph">
        Soluções de automação elétrica podem ser aplicadas na indústria, em
        casas, comércios, prédios, e até chácaras.
        Algumas aplicações comuns em que se encaixam sistemas de automação elétrica são:
        <ul>
          <li>Bombas de recalque</li>
          <li>Sistemas de polos</li>
          <li>Cisternas</li>
          <li>Sistemas de alarme de incêndio</li>
          <li>Partida de motores</li>
        </ul>
      </p>
      <p class="paragraph">
         Trabalhamos com soluções de automação, entre em
        contato para saber mais.
      </p>
    </div>
    <Contato />
  </div>
</template>
<style>
.paragraph {
  text-align: justify;
  font-size: 16px;
  margin: 3%;
}
.desce-jumbo {
  margin-top: 45px;
}

.jumbotron {
  height: 80vh;
}
.automacao {
  background: url(https://drive.google.com/uc?export=view&id=1tJsJR-PJbp-2-46cnji_0cD7X7in76-f);
  filter: brightness(70.8%);
}
</style>
<script>
import Contato from "@/components/Interface/Contato";
import Header from "@/components/Interface/Header";
import JumbotronBanner from "@/components/Interface/JumbotronBanner";
export default {
  components: {
    JumbotronBanner: JumbotronBanner,
    Header: Header,
    Contato: Contato
  }
};
</script>
