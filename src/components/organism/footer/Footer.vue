<script setup>
import Image from "../../atoms/image/Image.vue"
import './footer.scss'

defineProps({
  image: {
    type: Object,
  },
})
</script>

<template>
  <footer>
    <Image :alt="image.alt" :url="image.url"/>
  </footer>
</template>


