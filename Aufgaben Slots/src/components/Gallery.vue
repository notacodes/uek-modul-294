<script setup>
const props = defineProps({
  title: String,
  description: String,
  items: Array,
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
    <div class="gallery__images" v-for="item in items">

      <!-- Bild -->
      <div class="image" v-if="item.type === 'image'">
        <img class="image__img" :src="item.src" alt=""/>
        <p class="image__description">
          {{item.description}}
        </p>
      </div>

      <!-- Video -->
      <div class="video" v-if="item.type === 'video'">
        <iframe
            class="video__iframe"
            width="640"
            height="425"
            :src="item.src"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
        <div class="video__description">
          {{item.description}}
        </div>
      </div>

    </div>
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

.gallery__images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin: 1rem 0;
}

/** Bild **/
.image__img {
  aspect-ratio: 640/425;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.image__description {
  color: #9ca3af;
  font-size: .85rem;
  margin-top: 1rem;
}

/** Video **/
.video__iframe {
  aspect-ratio: 640/425;
  max-width: 100%;
  height: auto;
  border: none;
}

.video__description {
  color: #9ca3af;
  font-size: .85rem;
  margin-top: 1rem;
}
</style>