<template>
  <div>
    <Header />
    <div class="desce-jumbo">
      <JumbotronBanner
        title="Execução de projetos elétricos"
        lead="Porque fazer e qual a importância?"
        class="projeto-eletrico"
        text-variant="dark"
      />
    </div>
    <div class="container">
      <p class="paragraph">
        Um projeto elétrico tem como objetivo viabilizar a segurança da
        instalação, e oferece melhor eficiência energética. Também evita
        desperdício de materiais, e transtornos decorrentes de uma execução não
        adequada ou uma instalação fora das normas.
      </p>
      <p class="paragraph">
        Trabalhamos com execução de projetos elétricos já elaborados, entre em
        contato para saber mais.
      </p>
    </div>
    <ModalContato />
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

.projeto-eletrico {
  background: url(https://drive.google.com/uc?export=view&id=1XBOw1kS7Vy-n4kLclZBhV8B9w3X_sIva);
  filter: brightness(50.8%);
  background-size: contain;
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
