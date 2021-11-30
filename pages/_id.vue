<template>
  <div class="container-rule container-custom-detail bg-gray-100 w-100 mr-auto ml-auto" fluid>
    <HeaderDetail
      :product="productDetail"
    />
    <ContentDetail :product="productDetail" />
  </div>
</template>

<script>
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
  background-color: #a9a6d5 !important;
}
</style>
