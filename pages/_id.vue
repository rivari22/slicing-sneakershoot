<template>
  <b-container class="container-custom-detail bg-gray-100">
    <HeaderDetail
      :image="productDetail.image"
      :isfavorite="productDetail.isFavorite"
    />
    <ContentDetail :product="productDetail" />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
export default {
  computed: {
    productDetail () {
      return this.$store.getters.getProductDetail(this.$route.params.id);
    }
  }
};
</script>

<style>
.container-custom-detail {
  max-width: 576px !important;
  background-color: #a9a6d5 !important;
  /* padding-bottom: 100px; */
}
</style>
