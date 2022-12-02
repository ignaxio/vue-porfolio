<script setup>

import './image.scss'

defineProps({
  url: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})
</script>

<template>
  <img :src="url" class="img-fluid" :alt="alt">
</template>


