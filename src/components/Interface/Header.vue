<template>
  <b-navbar class="is-dark">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://img.icons8.com/officel/16/000000/lightning-bolt.png"
          alt="Galvão Elétrica Logo"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item @click="$router.push({ path: '/' })"> Home </b-navbar-item>

      <b-navbar-dropdown label="Informações">
        <b-navbar-item @click="send()">
          Fale comigo
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <!--   <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template> -->
  </b-navbar>
</template>
<script>
export default {
  methods:{
    send() {
      window.open(
        "https://api.whatsapp.com/send?phone=5511973183283&text=Ol%C3%A1%20meu%20nome%20%C3%A9"
      );
    }

  }
};
</script>
<style scoped>
.navbar {
  width: 100%;
  height: auto;
  position: fixed;
  margin-top: 0px;
  z-index: 1;
}
/*
.navbar-dropdown{
  background-color: #363636 !important;
  color: #363636 !important;
  border-top: none !important;
} */
</style>
