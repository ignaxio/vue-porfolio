<script setup>

import './intro-text.scss'

defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="container intro-text-section">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 text-center">
        <p>{{ text }}</p>
      </div>
    </div>
  </section>
</template>


