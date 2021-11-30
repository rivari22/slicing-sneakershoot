<template>
  <b-container class="container-custom bg-gray-100 h-100">
    <Header />
    <FilterBrand />
    <CardList />
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
  background-color: #F3F4F6;
  padding-bottom: 100px;
  }
</style>
