<template>
  <section class="section fadeIn">
    <figure class="media-left">
      <p class="image is-128x128">
        <img :src="image" :alt="alt" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p style="text-align: justify">
          <strong>{{ title }}</strong>
          <br />
          {{ desc }}
        </p>
      </div>
    </div>
  </section>
  <!--  <b-card
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
  </b-card> -->
</template>
<script>
export default {
  props: ["title", "image", "alt", "card_class", "desc"]
};
</script>
<style scoped>
.section:hover {
 /*  border: 1px solid transparent !important; */
  transform: scale(1.1) !important;
/*   box-shadow: 0 5px slategrey !important; */
  transition: transform 500ms ease 0s, opacity 500ms ease 0s,
    visibility 500ms ease 0s;
}

.section {
  background: whitesmoke;
/*   border: 0.9px solid; */
  border-color: slategrey;
  border-radius: 15px;
  position: relative;
  opacity: 0.9;
  display: inline-flex !important;
 /*  height: 130px !important; */
  width: auto;
  margin: auto auto 2% auto;
}

.media-content {
  padding: 3%;
}

.image img {
  display: block;
  height: 128px !important;
  width: 100%;
  border-radius: 15px !important;
}



.fadeIn {
  opacity: 1;
  animation-name: FadeIn;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
}

@keyframes FadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
