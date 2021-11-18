<template>
  <b-card
    title="Card Title"
    :img-src="image"
    :img-alt="alt"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>
<script>
export default {
  props: ["image", "alt"]
};
</script>
