<script setup>
import Image from "../../atoms/image/Image.vue"
import './footer.scss'

defineProps({
  title: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  image: {
    type: Object,
  },
})
</script>

<template>
  <footer>
    <Image class="footer-image" :alt="image.alt" :url="image.url"/>
    <section class="container footer-wrapper d-flex flex-column align-items-center">
      <h2 class="footer-title title-section">{{ title }}</h2>
      <div class="footer-contact d-flex flex-column align-items-center">
        <p class="footer-contact-emmail">{{ email }}</p>
        <p class="footer-contact-phone">{{ phone }}</p>
      </div>
      <div class="footer-social d-flex justify-content-around w-100">
        <font-awesome-icon icon="fa-brands fa-linkedin" size="2x"/>
        <font-awesome-icon icon="fa-brands fa-dribbble" size="2x"/>
        <font-awesome-icon icon="fa-brands fa-behance" size="2x"/>
        <font-awesome-icon icon="fa-brands fa-github" size="2x"/>
        <font-awesome-icon icon="fa-brands fa-instagram" size="2x"/>
        <font-awesome-icon icon="fa-brands fa-twitter" size="2x"/>
      </div>
      <div class="footer-logo">
        <Image alt="Logo dana heimann" url="/logo.svg"/>
      </div>
      <div class="footer-copyright">
        © DANA HEIMANN 2023
      </div>
    </section>
  </footer>
</template>


