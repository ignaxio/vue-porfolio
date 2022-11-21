<script setup>

import './page-title.scss'

defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1>{{ title }}</h1>
</template>


