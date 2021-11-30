<template>
  <b-container class="container-custom bg-gray-100 h-100">
    <HeaderDetail />
    <ContentDetail />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
export default {};
</script>

<style>
.container-custom {
  max-width: 576px !important;
  background-color: #A9A6D5;
  padding-bottom: 100px;
}
</style>
