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
            Instalações elétricas de baixa tensão, seguindo a norma NBR 5410 da
            ABNT, garantindo sua segurança
          </b-card-text>
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
            Serviços feitos prezando a excelência visando melhoria na qualidade
            e funcionalidade do seu comércio.
          </b-card-text>
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
            Agregando segurança a edifícios e prédios, visando o bem estar das
            pessoas.
          </b-card-text>
        </b-card>
      </div>
      <br />
      <hr />
      <h3 id="paragraph-fadeIn">
        Também apresentamos soluções em:
      </h3>
      <div>
        <b-card
          title="Serviços de automação"
          :img-src="image_card_local[3].src"
          img-alt="Image"
          img-top
          tag="article"
          class="cards-container cards-soluction card-img-soluction"
        >
          <b-card-text>
            Reduza custos, garanta a segurança, e traga melhor qualidade na sua
            produção através da automação
          </b-card-text>
          <b-button
            @click="$router.push('/servicos/automacao')"
            variant="primary"
            >Saiba mais</b-button
          >
        </b-card>

        <b-card
          title="Execução de projetos elétricos"
          :img-src="image_card_local[4].src"
          img-alt="Image"
          img-top
          tag="article"
          class="cards-container cards-soluction card-img-soluction"
        >
          <b-card-text>
            Um projeto elétrico bem articulado influencia positivamente em todas
            as etapas de uma instalação elétrica
          </b-card-text>
          <b-button
            @click="$router.push('/servicos/projetos-eletricos')"
            variant="primary"
            >Saiba mais</b-button
          >
        </b-card>

        <b-card
          title="Projetos para padrão de entrada de energia"
          :img-src="image_card_local[5].src"
          img-alt="Image"
          img-top
          tag="article"
          class="cards-container cards-soluction card-img-soluction"
        >
          <b-card-text>
            Instalação do padrão de entrada, de acordo com as concessionárias
            responsáveis pela distribuição de energia elétrica da sua região
          </b-card-text>
          <b-button
            @click="$router.push('/servicos/padrao-entrada')"
            variant="primary"
            >Saiba mais</b-button
          >
        </b-card>
        <b-card
          title="Atendimento de energência 24h"
          :img-src="image_card_local[6].src"
          img-alt="Image"
          img-top
          tag="article"
          class="cards-container cards-soluction card-img-soluction"
        >
          <b-card-text>
            Atendimento de emergência 24 horas, perzando sua segurança e a
            qualidade dos nossos serviços
          </b-card-text>

          <b-button
            @click="$router.push('/servicos/emergencia')"
            variant="primary"
            >Saiba mais</b-button
          >
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
            "https://drive.google.com/uc?export=view&id=1tJsJR-PJbp-2-46cnji_0cD7X7in76-f"
        },
        {
          src:
            "https://drive.google.com/uc?export=view&id=1XBOw1kS7Vy-n4kLclZBhV8B9w3X_sIva"
        },
        {
          src:
            "https://drive.google.com/uc?export=view&id=1TaVU1CNVAqP8jqN_a_szkd49GaCuAh5Q"
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

.card-img-top.card-img-soluction {
  height: 40vh !important;
}

.card.cards-container.cards-soluction {
  max-width: 280px !important;
  position: relative;
  display: inline-block !important;
  font-size: 14px;
}

.btn.btn-danger:hover {
  border: 1px solid #e57e7e !important;
  transform: scale(1) !important;
  box-shadow: 0 5px 15px #e57e7e !important;
}
.card:hover {
  border: 1px solid black !important;
  transform: scale(1) !important;
  box-shadow: 0 5px rgba(0, 0, 0, 0.6) !important;
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
  background-size: cover;
  height: 100vh;
  filter: brightness(95.8%);
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
