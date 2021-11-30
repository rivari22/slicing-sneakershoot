<template>
  <div
    :class="`custom-container-cardmini border rounded-custom p-2 ${variant.isSelected && coloroption ? 'color-option-container bg-white' : variant.isSelected ? 'primary-bg-color text-white' : 'bg-white'} border-light shadow-sm d-inline-flex align-self-center justify-content-center text-center align-items-center`"
  >
    <div v-if="coloroption" :class="`color-${variant.value} color-option`" />
    <strong v-else>{{ variant.value }}</strong>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: Object,
      required: true
    },
    coloroption: {
      type: Boolean
    }
  }
};
</script>

<style>
  .custom-container-cardmini {
    width: 62px !important;
    height: 50px !important;
  }
  .color-option-container {
    outline-color: #FF8901 !important;
    border-color: #FF8901 !important;
    border-width: 2px !important;
  }
  .color-option {
    width: 60%;
    height: 70%;
    border-radius: 40%;
  }
</style>
