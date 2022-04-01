<template>
  <b-jumbotron
    :text-variant="text_variant"
    :header="title"
    :lead="lead"
    :class="img_class"
  >
  </b-jumbotron>
</template>
<script>
export default {
props:["text_variant", "title", "lead", "img_class"]
}
</script>
