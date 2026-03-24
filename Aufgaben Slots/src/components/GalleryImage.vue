<script setup>
const props = defineProps({
  src: String,
  description: String,
})
</script>

<template>
    <img class="image__img" :src="src" alt=""/>
    <p class="image__description">
      {{description}}
    </p>
</template>
