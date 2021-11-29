<template>
  <b-container class="container-custom bg-gray-100 h-100">
    <Header />
    <h1>Catalog</h1>
    <FilterBrand />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default Vue.extend({})
</script>

<style>
.container-custom {
  max-width: 576px !important;
  /* background-color: #000307; */
  background-color: #F3F4F6;
  height: 100vh !important;
  }
</style>
