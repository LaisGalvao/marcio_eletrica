<template>
  <div>
    <Header />
    <div class="desce-jumbo">
      <b-jumbotron
        text-variant="light"
        header="Galvão Elétrica"
        lead="Eletricista Residencial, Predial e Industrial"
        id="banner-fadeIn"
      >
        <p>Mais informações</p>
        <b-button variant="danger" href="#" @click="scrollIntoPage"
          >More Info</b-button
        >
      </b-jumbotron>
    </div>
    <div class="container-fluid">
      <h3 id="paragraph-fadeIn">
        Serviço de qualidade há mais de 20 anos no mercado.
      </h3>
      <b-icon icon="tools" class="h2"></b-icon>
      <b-icon icon="lightning" class="h2"></b-icon>

      <div v-for="card in getCards" :key="card.route">
        <Cards :img-src="card.src" :alt="card.alt" />
      </div>
    </div>
    <div class="parallax"></div>
  </div>
</template>

<script>
import Cards from "@/components/Interface/Cards";
import Header from "@/components/Interface/Header";
//import images from "../store/modules/images";

export default {
  name: "HelloWorld",
  data() {
    return {
      card: null
    };
  },
  components: { Header, Cards },
   computed: {
    getCards() {
      console.log(this.$store.getters.images);
      return this.card = this.$store.getters.images
    }
  },
  methods: {
    scrollIntoPage(p) {
      p =
        document.getElementById("paragraph-fadeIn").getBoundingClientRect().y -
        80;
      window.scrollTo(0, p);
      console.log(images.state);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  background: url("../assets/banner.png") no-repeat fixed center;
  background-size: cover;
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
  margin-top: 20%;
}
</style>
