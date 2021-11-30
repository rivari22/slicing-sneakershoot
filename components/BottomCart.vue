<template>
  <div v-if="cart.totalPrice !== 0">
    <b-container class="override bg-transparant d-flex p-3 pl-4">
      <b-row align-v="center">
        <b-col v-for="item in cart.items" :key="item.id" cols="1" class="ml-2">
          <div
            class="d-inline-flex justify-content-center align-items-center border rounded-circle container-circle bg-dark p-3"
          >
            <b-img
              :src="require(`@/assets/img/${item.image}`)"
              height="26px"
              width="26px"
              center
              class="mb-2"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container
      class="container-cart-bottom position-fixed fixed-bottom bg-dark"
    >
      <b-row class="rowCart">
        <b-col cols="auto" class="mr-auto">
          <div class="text-white">
            Cart
          </div>
        </b-col>
        <b-col cols="auto" class="d-flex">
          <div class="text-white mr-3">
            {{ currencyFormatter(cart.totalPrice) }}
          </div>
          <div
            class="d-inline-flex justify-content-center align-items-center border rounded-circle border-warning container-circle"
          >
            <b-icon icon="arrow-right" font-scale="1.5" variant="light" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { currencyFormatter } from '@/utils/currencyFormatter'

export default {
  computed: mapState(['cart']),
  methods: {
    currencyFormatter: (value) => {
      return currencyFormatter(value)
    }
  }
};
</script>

<style scoped>
.container-cart-bottom {
  max-width: 576px;
  height: 120px !important;
}
.override {
  z-index: 9999 !important;
  bottom: 70px !important;
  position: fixed;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  height: 50px;
  background-color: #f3f4f6 !important;
  max-width: 576px;
  margin-left: -15px;
}
.rowCart {
  padding: 70px 40px;
}
.container-circle {
  height: 32px;
  width: 36px;
  padding: 10px;
  margin-top: -4px;
}
</style>
