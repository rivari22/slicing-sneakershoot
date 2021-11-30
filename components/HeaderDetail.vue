<template>
  <b-container class="container-header">
    <b-row>
      <b-col cols="auto" class="mr-auto">
        <NuxtLink to="/">
          <b-icon icon="arrow-left" font-scale="1.8" variant="white" />
        </NuxtLink>
      </b-col>
      <b-col cols="auto">
        <b-icon
          class="cursor-pointer-custom"
          :icon="`${product.isfavorite ? 'suit-heart-fill' : 'suit-heart'}`"
          font-scale="1.5"
          :variant="`${product.isfavorite ? 'danger' : 'white'}`"
          @click="
            () =>
              setFavorite({ id: product.id, isFavorite: !product.isFavorite })
          "
        />
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <b-img :src="require(`@/assets/img/${product.image}`)" center />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.container-header {
  padding-top: 50px;
  padding-bottom: 70px;
}
</style>
