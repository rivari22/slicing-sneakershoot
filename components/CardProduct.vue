<template>
  <b-container
    class="container-card rounded-custom-md border border-light shadow-lg p-4 bg-white"
  >
    <b-row align-v="center" align-content="center">
      <b-col cols="auto" class="mr-auto">
        <b-icon
          class="cursor-pointer-custom"
          :icon="`${product.isFavorite ? 'suit-heart-fill' : 'suit-heart'}`"
          font-scale="1.5"
          :variant="`${product.isFavorite ? 'danger' : 'secondary'}`"
          @click="
            () =>
              setFavorite({ id: product.id, isFavorite: !product.isFavorite })
          "
        />
      </b-col>
      <b-col cols="auto">
        <b-icon
          class="cursor-pointer-custom"
          icon="plus"
          font-scale="2.5"
          shift-v="1"
          shift-h="2"
          :variant="`${product.isInTheCart ? 'dark' : 'warning'}`"
          @click="
            () => (!product.isInTheCart ? addToCart({ product }) : undefined)
          "
        />
      </b-col>
    </b-row>
    <NuxtLink :to="`${product.id}`">
      <b-row align-h="center">
        <b-col cols="auto">
          <b-img
            :src="require(`@/assets/img/${product.image}`)"
            height="120px"
            width="150px"
          />
        </b-col>
      </b-row>
      <b-row align-h="center" class="mt-4">
        <b-col cols="auto">
          <p class="text-card-product text-center text-muted h6">
            {{ product.name }}
          </p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="auto">
          <p class="text-center text-warning h6">
            {{ currencyFormatter(+product.price) }}
          </p>
        </b-col>
      </b-row>
    </NuxtLink>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex';
import { currencyFormatter } from '@/utils/currencyFormatter'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      setFavorite: 'setFavorite',
      addToCart: 'addToCart'
    }),
    currencyFormatter: (value) => {
      return currencyFormatter(value)
    }
  }
};
</script>

<style>
.container-card {
  max-width: 220px !important;
  margin-top: 100px;
  height: 300px;
}
.text-card-product {
  font-size: 0.8em;
}
</style>
