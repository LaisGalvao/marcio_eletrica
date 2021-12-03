<template>
  <div>
    <Header />
    <div class="desce-jumbo">
      <b-jumbotron
        text-variant="dark"
        header="Galvão Elétrica"
        lead="Eletricista Residencial, Predial e Industrial"
        id="banner-fadeIn"
      >
        <b-button variant="danger" href="#" @click="scrollIntoPage"
          >Mais informações</b-button
        >
      </b-jumbotron>
    </div>
    <div class="container-fluid">
      <h3 id="paragraph-fadeIn">
        Serviço de qualidade há mais de 25 anos no mercado.
      </h3>
      <b-icon icon="tools" class="h2"></b-icon>
      <b-icon icon="lightning" class="h2"></b-icon>
      <br />
      <hr />
      <h3 id="paragraph-fadeIn">
        Realizamos serviços em:
      </h3>
      <div>
        <b-card
          title="Residências"
          :img-src="image_card_local[0].src"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="cards-container"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>

        <b-card
          title="Comércios"
          :img-src="image_card_local[1].src"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="cards-container"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>

        <b-card
          title="Prédios"
          :img-src="image_card_local[2].src"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="cards-container"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
      <br />
      <hr />
      <h3 id="paragraph-fadeIn">
        Também apresentamos soluções em:
      </h3>
      <div>
        <b-card
          title="Automação"
          :img-src="image_card_local[3].src"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="cards-container"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>

        <b-card
          title="Execução de projetos elétricos"
          :img-src="image_card_local[4].src"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="cards-container"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>

        <b-card
          title="Projetos para padrão de entrada de energia"
          :img-src="image_card_local[5].src"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="cards-container"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        <b-card
          title="Atendimento de energência 24h"
          :img-src="image_card_local[2].src"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="cards-container"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Interface/Cards";
import Header from "@/components/Interface/Header";
export default {
  name: "HelloWorld",
  data() {
    return {
      image_card_local: [
        {
          src:
            "https://drive.google.com/uc?export=view&id=1rl3RgWFu_VYUlNlj9Y2XYG3SCz0uDpt-"
        },
        {
          src:
            "https://drive.google.com/uc?export=view&id=19mSrBevky7pAqtFF2bqCgfNhlQ5j3kHC"
        },
        {
          src:
            "https://drive.google.com/uc?export=view&id=1H9XSbGNxIUGKlxeAP8wXlRm5r8ttWPwu"
        },
        {
          src:
            "https://drive.google.com/uc?export=view&id=1wr7Kmkx55bhSQ1aN2oK5OzZ1IHv1lm8q"
        },
        {
          src:
            "https://drive.google.com/uc?export=view&id=1wr7Kmkx55bhSQ1aN2oK5OzZ1IHv1lm8q"
        },
        {
          src:
            "https://drive.google.com/uc?export=view&id=1wr7Kmkx55bhSQ1aN2oK5OzZ1IHv1lm8q"
        }
      ]
    };
  },
  components: { Header, Cards },
  computed: {},
  methods: {
    scrollIntoPage(p) {
      p =
        document.getElementById("paragraph-fadeIn").getBoundingClientRect().y -
        80;
      window.scrollTo(0, p);
    }
  }
};
</script>

<style>
.card-img-top {
  height: 50vh !important;
}

.card.cards-container {
  background: whitesmoke;
  border: 0.9px solid;
  border-color: gray;
  border-radius: 15px;
  position: relative;
  margin: 1%;
  opacity: 0.9;
  display: inline-flex !important;
}

.jumbotron {
  background: url("https://drive.google.com/uc?export=view&id=1GC9LZ3Kz23W3lJRR-qv1UKPIZiMeLMBj")
    no-repeat fixed center;
  background-size: contain;
  height: 80vh;
}

#banner-fadeIn {
  opacity: 1;
  animation-name: FadeIn;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
}

.fadeIn {
  opacity: 1;
  animation-name: FadeIn;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
}

@keyframes FadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.desce-jumbo {
  margin-top: 45px;
}
.jumbotron-header {
  filter: opacity(0.9);
  background-color: #000;
}

.container-fluid {
  height: 130vh;
  position: absolute;
  margin-top: 5%;
}
</style>
