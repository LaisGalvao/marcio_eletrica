<template>
  <div class="flex-wrapper is-fullheight-100vh">
    <div id="conteudo">
      <div class="fadeIn">
        <Header />
        <div>
          <div class="desce-jumbo" id="banner-fadeIn">
            <div class="jumbotron jumbotron-fluid has-text-dark fade-in">
              <h1 class="display-3 has-text-dark fade-in">
                <span>
                  <img
                    src="https://drive.google.com/uc?export=view&id=11ObbAD5AgCyJmL9oOvMxWI7uvleKo4vx"
                    width="95"
                  />
                </span>
                Galvão Elétrica
              </h1>

              <p class="lead">Eletricista Residencial, Predial e Industrial</p>
              <p class="display-4">
                <b-button type="is-warning" to="/" @click="scrollIntoPage"
                  >Mais informações</b-button
                >
              </p>
            </div>
          </div>

          <div id="paragraph-fadeIn" class="container-fluid">
            <h2 class="is-size-1">
              Serviço de qualidade há mais de 25 anos no mercado.
            </h2>
            <b-icon icon="tools" class="h2"></b-icon>
            <b-icon icon="lightning" class="h2"></b-icon>

            <h1 class="is-size-2">Realizamos serviços em:</h1>
            <br /><br />
            <div :class=" wind <= 1024 ? 'ml-3' : 'ml-6'">
              <div class="columns is-vcentered is-desktop is-full-mobile">
                <div
                  class="column"
                  v-for="card in getCardLocais"
                  :key="card.title"
                >
                  <Cards
                    :image="card.imageSrc"
                    :title="card.title"
                    :desc="card.desc"
                    :imageTitle="card.imageTitle"
                  />
                </div>
              </div>
            </div>

            <br />
            <hr />
            <h3 class="is-size-3">Também apresentamos soluções em:</h3>
            <div>
              <b-card
                title="Serviços de automação"
                :img-src="image_card_local[0].src"
                img-alt="Image"
                img-top
                tag="article"
                class="cards-container cards-soluction card-img-soluction"
              >
                <b-card-text>
                  Reduza custos, garanta a segurança, e traga melhor qualidade
                  na sua produção através da automação
                </b-card-text>
                <b-button
                  @click="$router.push('/servicos/automacao')"
                  type="is-warning"
                  >Saiba mais</b-button
                >
              </b-card>

              <b-card
                title="Execução de projetos elétricos"
                :img-src="image_card_local[1].src"
                img-alt="Image"
                img-top
                tag="article"
                class="cards-container cards-soluction card-img-soluction"
              >
                <b-card-text>
                  Um projeto elétrico bem articulado influencia positivamente em
                  todas as etapas de uma instalação elétrica
                </b-card-text>
                <b-button
                  @click="$router.push('/servicos/projetos-eletricos')"
                  type="is-warning"
                  >Saiba mais</b-button
                >
              </b-card>

              <b-card
                title="Projetos para padrão de entrada de energia"
                :img-src="image_card_local[2].src"
                img-alt="Image"
                img-top
                tag="article"
                class="cards-container cards-soluction card-img-soluction"
              >
                <b-card-text>
                  Instalação do padrão de entrada, de acordo com as
                  concessionárias responsáveis pela distribuição de energia
                  elétrica da sua região
                </b-card-text>
                <b-button
                  @click="$router.push('/servicos/padrao-entrada')"
                  type="is-warning"
                  >Saiba mais</b-button
                >
              </b-card>
            </div>
            <div class="container">
              <br /><br />
              <h1 class="is-size-4">
                Precisando de ajuda em um momento de aperto? Veja sobre nosso
                serviço de emergência:
              </h1>
              <div
                class="row justify-content-md-center"
                style="margin-top: 5%; margin-bottom: 5%"
              >
                <div class="card mb-3" style="max-width: 540px">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img
                        :src="image_card_local[3].src"
                        class="card-emergency card-img-emergency"
                        alt="Atendimento de energência 24h"
                      />
                    </div>
                    <div class="column is-full">
                      <div class="card-body">
                        <h5 class="card-title">
                          Atendimento de energência 24h
                        </h5>
                        <p class="card-text">
                          Atendimento de emergência 24 horas, perzando sua
                          segurança e a qualidade dos nossos serviços
                        </p>
                        <p class="card-text">
                          <b-button
                            @click="$router.push('/servicos/emergencia')"
                            type="is-warning"
                            >Saiba mais
                          </b-button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Interface/Cards";
export default {
  name: "HelloWorld",
  data() {
    return {
      image_card_local: [
        {
          src: "https://drive.google.com/uc?export=view&id=1tJsJR-PJbp-2-46cnji_0cD7X7in76-f",
        },
        {
          src: "https://drive.google.com/uc?export=view&id=1XBOw1kS7Vy-n4kLclZBhV8B9w3X_sIva",
        },
        {
          src: "https://drive.google.com/uc?export=view&id=1TaVU1CNVAqP8jqN_a_szkd49GaCuAh5Q",
        },
        {
          src: "https://drive.google.com/uc?export=view&id=1wr7Kmkx55bhSQ1aN2oK5OzZ1IHv1lm8q",
        },
      ],
      wind: window.innerWidth
    };
  },
  components: { Cards },
  computed: {
    getCardLocais() {
      return this.$store.getters.cardsLocais;
    },
  },
  methods: {
    scrollIntoPage(p) {
      p =
        document.getElementById("paragraph-fadeIn").getBoundingClientRect().y -
        80;
      window.scrollTo(0, p);
    },
  },
};
</script>

<style>
.card-title {
  font-size: 2em !important;
}

.is-fullheight-100vh {
  height: 100vh;
}

.flex-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
}

.card-img-top {
  height: 30vh !important;
}

.card-img-top.card-img-soluction {
  height: 40vh !important;
}

.card.cards-container.cards-soluction {
  max-width: 25rem !important;
  position: relative;
  display: inline-block !important;
  font-size: 14px;
}

.btn.btn-warning:hover {
  border: 1px solid #e57e7e !important;
  transform: scale(1) !important;
  box-shadow: 0 5px 15px #e1c46d !important;
}

.card:hover {
  /*  border: 1px solid slategray !important; */
  transform: scale(1.1) !important;
  /*   box-shadow: 0 5px slategrey !important; */
  transition: transform 500ms ease 0s, opacity 500ms ease 0s,
    visibility 500ms ease 0s;
}

.card.cards-container {
  background: whitesmoke;
  /*  border: 0.9px solid;
  border-color: slategrey; */
  border-radius: 15px;
  position: relative;
  margin: 1%;
  opacity: 0.9;
  display: inline-flex !important;
}

.card-emergency {
  width: 100% !important;
}

@media screen and (max-width: 992px) {
  .card-emergency {
    width: 100% !important;
  }
}

.card-emergency .card-img-top .card-img-emergency img {
  width: 100% !important;
  height: 100% !important;
}

.jumbotron {
  background: url("https://drive.google.com/uc?export=view&id=1DQgaCQatE1Ka3YMZcjW2ZWfQOPkkL7xv"),
    no-repeat fixed center;
  background-size: cover;
  height: 60vh;
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
  padding-top: 45px;
}

.jumbotron-header {
  filter: opacity(0.9);
  background-color: #000;
}

.container-fluid {
  height: 130vh;
  position: absolute;
  margin-top: 5%;
  transition: all 1s;
}

.hide {
  opacity: 0;
}

.show {
  opacity: 1;
}

#conteudo {
  min-height: 100%;
}
</style>
