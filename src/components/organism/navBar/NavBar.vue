<script setup>

import './nav-bar.scss'
// import CLink from "../../atoms/cLink/CLink.vue";
</script>

<template>
  <nav class="navbar bg-secondary bg-opacity-75">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img alt="Dana logo" src="../../../assets/logo.svg" width="55"/>
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About me</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>


