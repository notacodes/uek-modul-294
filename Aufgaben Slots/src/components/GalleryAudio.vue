<script setup>
import {computed} from "vue";

const props = defineProps({
  src: String,
  description: String,
})

const src = computed(() => {
  return "https://w.soundcloud.com/player/?url=" + props.src + ";auto_play=false&amp;show_artwork=true&amp;color=0066cc"
})
</script>

<template>
  <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" :src="src"></iframe>
  <p>{{description}}</p>{{}}
</template>

<style scoped>

</style>