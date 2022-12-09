<template>
  <footer class="footer bg-dark">
    <div class="content has-text-centered has-text-light">
      <p>
        O site <strong class="has-text-light">Galvão Elétrica</strong> foi desenvolvido por
        <a
          target="_blank"
          href="https://github.com/LaisGalvao"
          >Laís Galvão</a
        >. Siga a página da Galvão Elétrica no
        <a
          target="_blank"
          href="https://www.facebook.com/El%C3%A9trica-Predial-Residencial-Galv%C3%A3o-241037206588537/"
          >Facebook</a
        >.
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
@media screen and (min-width: 1200px) {
  .footer {
    position: absolute !important;
    bottom: 0 !important;
    top: calc(100% - -270vh);
    width: 100% !important;
  }
}

@media screen and (min-width: 1025px) {
  .footer {
    position: absolute !important;
    bottom: 0 !important;
    top: calc(100% - -320vh);
    width: 100% !important;
  }
}

@media screen and (max-width: 1024px) {
  .footer {
    bottom: 0 !important;
    top: 260rem !important;
    position: relative;
    clear: both;
    width: 100% !important;
  }
}
</style>
