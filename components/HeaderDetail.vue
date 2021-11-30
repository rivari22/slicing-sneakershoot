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
          :icon="`${isfavorite ? 'suit-heart-fill' : 'suit-heart'}`"
          font-scale="1.5"
          :variant="`${isfavorite ? 'danger' : 'white'}`"
        />
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <b-img :src="require(`@/assets/img/${image}`)" center />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ['image', 'isfavorite']
};
</script>

<style scoped>
.container-header {
  padding-top: 80px;
  padding-bottom: 40px;
}
</style>
