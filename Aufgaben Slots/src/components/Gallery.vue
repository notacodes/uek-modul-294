<script setup>
const props = defineProps({
  title: String,
  description: String,
})

</script>

<template>
  <section class="gallery">
    <h2 class="gallery__title">
      {{title}}
    </h2>
    <p class="gallery__description">
      {{description}}
    </p>
    <slot></slot>
  </section>
</template>

<style scoped>
/** Gallery **/
.gallery + .gallery {
  margin-top: 4rem;
}

.gallery__title {
  font-weight: bold;
  font-size: 2rem;
  margin: 1rem 0;
  padding: 0;
}

.gallery__description {
  margin: 0;
  padding: 0;
  font-size: 1rem;
}
</style>