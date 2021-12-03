<template>
  <b-card
    :title="title"
    :img-src="image"
    :img-alt="alt"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="image-card "
  >
    <b-card-text>
     {{desc}}
    </b-card-text>
  </b-card>
</template>
<script>
export default {
  props: ["title", "image", "alt", "card_class", "desc"]
};
</script>
