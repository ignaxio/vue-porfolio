<script setup>
import './project-card.scss'

import ListItem from "../../atoms/listItem/ListItem.vue";

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  listItems: {
    type: Array,
  },
  image: {
    type: Array,
  },
});
// if(this.image.position == 'right') {
// console.log('image positoin right');
// }

</script>

<template>
  <article class="card row">
    <div class="card_image col-12 col-md-6">
      <img :src="image.url" class="img-fluid" :alt="image.alt">
    </div>
    <div class="card_body col-12 col-md-6">
      <h3 class="card_body--title">{{ title }}</h3>
      <p class="card_body--text">{{ description }}</p>

      <dl class="card_body__list row">
        <ListItem v-for="listItem in listItems" :label="listItem.label" :description="listItem.description"></ListItem>
      </dl>
      <a href="#" class="btn btn-primary">Case study</a>
    </div>
  </article>
</template>


