<script setup>
// import PageTitle from '../../atoms/pageTitle/PageTitle.vue';
import './mast-head.scss'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <!-- Full Page Image Header with Vertically Centered Content -->
  <header class="masthead">
    <div class="masthead-filter h-100">
      <div class="container h-100">
        <div class="row h-100 align-items-end">
          <div class="col-12 text-center">
            <h1>{{ title }}</h1>
            <!--          <PageTitle :title="title" />-->
            <p class="lead">{{ subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>


