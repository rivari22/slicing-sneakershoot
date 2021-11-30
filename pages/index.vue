<template>
  <b-container class="container-rule container-custom bg-gray-100 h-100">
    <Header />
    <FilterBrand />
    <CardList />
    <BottomCart />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

export default Vue.extend({});
</script>

<style>
.container-custom {
  max-width: 576px !important;
  background-color: #f3f4f6;
  padding-bottom: 140px;
}
</style>
