<template>
  <b-row align-h="between" class="mt-2">
    <b-col v-for="(product, index) in shoes" :key="product.id" class="column-cardList">
      <CardProduct :product="product" :index="index" />
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'shoes'
  ])
};
</script>

<style>
.column-cardList {
  margin-top: -70px;
}
</style>
