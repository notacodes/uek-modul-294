<script setup>
import {RouterLink, RouterView} from "vue-router";
</script>
<template>
  <h1>Über uns</h1>
  <RouterLink to="/about/jobs">Jobs</RouterLink>
  <RouterLink to="/about/news">News</RouterLink>
  <RouterView />
</template>
