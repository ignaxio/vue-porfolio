
<script setup>

import './nav-bar.scss'
import CLink from "../../atoms/cLink/CLink.vue";

defineProps({
  // title: {
  //   type: String,
  //   required: true
  // }
})
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img alt="Dana logo" src="../../../assets/logo.svg" width="30" height="24" />
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <CLink classes="nav-link" href="about-me" linkText="About me" />
        </li>
      </ul>
    </div>
  </nav>
</template>


