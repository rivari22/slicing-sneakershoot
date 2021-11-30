<template>
  <b-container class="container-content-detail">
    <b-row>
      <b-col>
        <div class="h6">
          <strong>{{ product.merk }}</strong>
        </div>
        <p class="text-muted name-product">
          {{ product.name }}
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="text-muted option-label">
          Size
        </p>
      </b-col>
    </b-row>
    <b-row class="row-options">
      <b-col
        v-for="variant in product.size"
        :key="variant.id"
        cols="2"
        class="column-space-custom"
      >
        <CardMini :variant="variant" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="text-muted option-label">
          Color
        </p>
      </b-col>
    </b-row>
    <b-row class="row-options">
      <b-col
        v-for="color in product.color"
        :key="color.id"
        cols="2"
        class="column-space-custom"
      >
        <CardMini :variant="color" :coloroption="true" />
      </b-col>
    </b-row>
    <b-row align-v="center" class="mt-5">
      <b-col>
        <b-row
          class="rounded-custom-md border border-light shadow-sm p-3 primary-bg-color"
          align-v="center"
        >
          <b-col class="mr-auto text-white" cols="6">
            {{ currencyFormatter(+product.price) }}
          </b-col>
          <b-col class="ml-4">
            <div
              class="container-add-cart d-flex align-items-center justify-content-around rounded-custom-md border border-light shadow-sm p-2 bg-white"
              @click="
                () =>
                  !product.isInTheCart ? addToCart({ product }) : undefined
              "
            >
              <b-icon icon="cart2" font-scale="1.5" variant="black" flip-h />
              <div class="cursor-pointer-custom">
                <strong>Add to cart</strong>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
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
    currencyFormatter: (value: number) => {
      return currencyFormatter(value)
    }
  }
};
</script>

<style scoped>
.container-content-detail {
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
  background-color: #f3f4f6;
  width: 100%;
  max-width: 576px !important;
  margin-top: 70px;
  padding: 40px 36px 60px 36px;
}
.column-space-custom {
  margin-right: -20px;
}
.name-product {
  margin-top: -8px;
  font-weight: 600;
  font-size: 0.9em;
}
.option-label {
  font-size: 0.9em;
  font-weight: 600;
}
.row-options {
  margin-top: -4px;
  margin-bottom: 14px;
}
.container-add-cart {
  width: 180px;
}
</style>
