<script setup>
import './list-item.scss'

defineProps({
  label: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
})
</script>

<template>
  <dt class="list-item-label col-sm-3">{{ label }}</dt>
  <dd class="list-item-content col-sm-9">{{ description }}</dd>
</template>


