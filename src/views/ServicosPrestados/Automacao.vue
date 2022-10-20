<template>
  <div>
    <div class="desce-jumbo">
      <JumbotronBanner
        title="Serviços de automação"
        lead="Porque fazer e onde se aplica?"
        class="automacao"
        text-variant="dark"
      />
    </div>
    <div class="container">
      <div class="col-md-12">
        <p class="paragraph">
          A automação, através de meios tecnológicos, dispensa trabalhos
          braçais, fazendo com que as atividades ganhem mais conforto, agilidade
          e eficiência.
        </p>
        <p class="paragraph">
          Soluções de automação elétrica podem ser aplicadas na indústria, em
          casas, comércios, prédios, e até chácaras. Algumas aplicações comuns
          em que se encaixam sistemas de automação elétrica são:
        </p>
        <div class="container">
          <div class="row justify-content-md-center">
            <b-card
              title="Bombas de recalque"
              img-src="https://drive.google.com/uc?export=view&id=12zfOOqC4mLnPOPm8dFV4Vz5NkkxyN1aR"
              img-alt="Image"
              img-top
              tag="article"
              class="cards-container cards-soluction card-img-soluction"
            >
            </b-card>
            <b-card
              title="Cisternas e poços"
              img-src="https://drive.google.com/uc?export=view&id=1RFJt-7GxT6eSEMWbeu3biWe7Zr7D4_Jo"
              img-alt="Image"
              img-top
              tag="article"
              class="cards-container cards-soluction card-img-soluction"
            >
            </b-card>
            <b-card
              title="Alarme de incêndio"
              img-src="https://drive.google.com/uc?export=view&id=1rzmzS-8qmKMyO1XNUmHmOJhiE26deX2e"
              img-alt="Image"
              img-top
              tag="article"
              class="cards-container cards-soluction card-img-soluction"
            >
            </b-card>
            <b-card
              title="Partida de motores"
              img-src="https://drive.google.com/uc?export=view&id=1ffL-UJHfO-The-HQhs243tsKe_PUFuwB"
              img-alt="Image"
              img-top
              tag="article"
              class="cards-container cards-soluction card-img-soluction"
            >
            </b-card>
          </div>
        </div>

        <p class="paragraph text-center">
          Trabalhamos com soluções de automação, entre em contato para saber
          mais.
        </p>
        <div class="container"><ModalContato /></div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalContato from "@/views/ModalContato";
import JumbotronBanner from "@/components/Interface/JumbotronBanner";
import scrollToTop from "../../mixins/scrollToTop";
export default {
  components: {
    JumbotronBanner: JumbotronBanner,
    ModalContato: ModalContato,
  },
   metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Serviços de Automação',
      // all titles will be injected into this template
      titleTemplate: '%s | Márcio Elétrica'
    },
  mixins: [scrollToTop]
};
</script>
<style scoped>
.paragraph {
  text-align: justify;
  font-size: 1.6em;
  margin: 3%;
}
/* .desce-jumbo {
  margin-top: 45px;
} */

.jumbotron {
  height: 70vh;
}
.automacao {
  background: url(https://drive.google.com/uc?export=view&id=1tJsJR-PJbp-2-46cnji_0cD7X7in76-f);
  filter: brightness(50.8%);
}

.card-img-top {
  height: 20vh !important;
}

.card-img-top.card-img-soluction {
  height: 10vh !important;
}

.card.cards-container.cards-soluction {
  max-width: 200px !important;
  position: relative;
  display: inline-block !important;
  font-size: 10px;
  height: 240px;
}

.card:hover {
  border: 1px solid slategray !important;
  transform: scale(1.1) !important;
  box-shadow: 0 5px slategray !important;
   transition: transform 500ms ease 0s, opacity 500ms ease 0s,
    visibility 500ms ease 0s;
}

.card.cards-container {
  background: whitesmoke;
  border: 0.9px solid;
  border-color: slategray;
  border-radius: 15px;
  position: relative;
  margin: 1%;
  opacity: 0.9;
  display: inline-flex !important;
}
</style>
