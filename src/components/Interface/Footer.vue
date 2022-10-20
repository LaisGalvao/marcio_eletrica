<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        O site <strong>Galvão Elétrica</strong> foi desenvolvido por
        <a
          style="color: black"
          target="_blank"
          href="https://github.com/LaisGalvao"
          >Laís Galvão</a
        >. Siga a página da Galvão Elétrica no
        <a
          style="color: black"
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
@media screen and (min-width: 1025px) {
  .footer {
    position: relative !important;
    bottom: 0 !important;
    top: 320vh !important;
    width: 100% !important;
  }
}

@media screen and (max-width: 1024px) {
  .footer {
    bottom: 0 !important;
    top: 270rem !important;
    position: relative;
    clear: both;
    width: 100% !important;
  }
}
</style>
