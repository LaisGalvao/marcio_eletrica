<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
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
    top: 370vh !important;
    width: 100% !important;
  }
}

@media screen and (max-width: 1024px) {
  .footer {
    bottom: 0 !important;
    top: 600vh !important;
    position: relative;
    clear: both;
    width: 100% !important;
  }
}
</style>
