<script setup>

import './c-link.scss'

defineProps({
  href: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    required: true
  },
  classes: {
    type: String
  }
})
</script>

<template>
  <a :class="classes" :href="href">{{ linkText }}</a>
</template>


