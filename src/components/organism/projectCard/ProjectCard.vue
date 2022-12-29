<script setup>
import './project-card.scss'

import ListItem from "../../atoms/listItem/ListItem.vue";
import Separator from "../../atoms/separator/Separator.vue";
import Image from "../../atoms/image/Image.vue"

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  listItems: {
    type: Object,
  },
  image: {
    type: Object,
  },
});
</script>

<template>
  <article class="project-card row" v-if="image.position === 'left'">
    <div class="project-card_image col-12 col-md-6">
      <Image :alt="image.alt" :url="image.url"/>
    </div>
    <div class="project-card_body col-12 col-md-6">
      <h3 class="project-card_body--title">{{ title }}</h3>
      <p class="project-card_body--text">{{ description }}</p>

      <dl class="project-card_body__list row">
        <ListItem v-for="listItem in listItems" :label="listItem.label" :description="listItem.description"></ListItem>
      </dl>
      <div class="text-center dn-btn-wrapper">
        <a href="#" class="dn-btn-outline-old-mauve">
          Case study
          <font-awesome-icon icon="fa-regular fa-circle-right"/>
        </a>
      </div>
    </div>
  </article>

  <article class="project-card row" v-else>
    <div class="project-card_body col-12 col-md-6 order-2 order-md-1">
      <h3 class="project-card_body--title">{{ title }}</h3>
      <p class="project-card_body--text">{{ description }}</p>

      <dl class="project-card_body__list row">
        <ListItem v-for="listItem in listItems" :label="listItem.label" :description="listItem.description"></ListItem>
      </dl>
      <div class="text-center dn-btn-wrapper">
        <a href="#" class="dn-btn-outline-old-mauve">
          Case study
          <font-awesome-icon icon="fa-regular fa-circle-right"/>
        </a>
      </div>
    </div>
    <div class="project-card_image col-12 col-md-6 order-1 order-md-2">
      <Image :alt="image.alt" :url="image.url"/>
    </div>
  </article>
  <Separator/>
</template>


