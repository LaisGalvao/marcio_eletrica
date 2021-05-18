<template>
  <div>
    <Header />
    <div class="desce-jumbo">
      <b-jumbotron header="Elétrica Residencial Galvão" lead="Eletricista Residencial e Projetos de Elétrica">
        <p>Mais informações</p>
        <b-button variant="danger" href="#">More Info</b-button>
      </b-jumbotron>
    </div>
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
  background: url('../assets/bgparallax.jpg') no-repeat fixed center;
  background-size: cover;
  height: 80vh;
}
.desce-jumbo{
  margin-top: 25px;
}
</style>
