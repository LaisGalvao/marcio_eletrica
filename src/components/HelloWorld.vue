<template>
  <div>
    <Header />
    <div class="desce-jumbo">
      <b-jumbotron text-variant="light" header="Elétrica Residencial Galvão" lead="Eletricista Residencial e Projetos de Elétrica">
        <p>Mais informações</p>
        <b-button variant="danger" href="#">More Info</b-button>
      </b-jumbotron>
     
    </div>
     <div class="container-fluid">
        <h3>Orçamento sem compromiso e atendimento à domicílio, 
          serviço de qualidade há mais de 20 anos no mercado.</h3>
          <b-icon icon="tools" class="h2"></b-icon>
          <b-icon icon="lightning" class="h2"></b-icon>
      </div>
      <div class="parallax"></div>
  </div>
</template>

<script>
import Header from "@/components/Interface/Header"

export default {
  name: 'HelloWorld',
  data () {
   
  },
  components:{Header}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron{
  background: url('../assets/banner.png') no-repeat fixed center;
  background-size: cover;
  height: 95vh;
}
.desce-jumbo{
  margin-top: 45px;
}
.jumbotron-header{
   filter: opacity(0.9);
  background-color: #000;
}

.container-fluid{
  height: 130vh;
  position: relative;
}

.parallax{
  position: absolute;
   background: url('../assets/banner.png') no-repeat fixed center;
    background-size: cover;
    height: 95vh;
}

</style>
