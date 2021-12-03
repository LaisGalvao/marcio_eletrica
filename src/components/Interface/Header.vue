<template>
  <div>
  <b-navbar type="dark" variant="dark" fixed>
    <b-navbar-nav>
      <b-nav-item class="text-center" @click="$router.push('/')">Home</b-nav-item>

   <!--    <b-nav-item-dropdown text="Mais">
        <b-dropdown-item href="#">Contato</b-dropdown-item>
        <b-dropdown-item href="#">Fale Comigo</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-navbar-nav>
  </b-navbar>
</div>
</template>
<script>

export default {


}
</script>
<style scoped>
.navbar{
    width: 100%;
    height: 60px;
    position: fixed;
    margin-top: -50px;
    z-index: 1;
}
</style>
