<template>
  <b-container class="container-content-detail" fluid>
    <b-row>
      <b-col>
        <div class="h6"><strong>Jordan</strong></div>
        <p class="text-muted name-product">
          Jordan 1 High Element Gore-Tex Light Bone
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="text-muted option-label">Size</p>
      </b-col>
    </b-row>
    <b-row class="row-options">
      <b-col cols="2" class="column-space-custom">
        <CardMini />
      </b-col>
      <b-col cols="2" class="column-space-custom">
        <CardMini />
      </b-col>
      <b-col cols="2" class="column-space-custom">
        <CardMini />
      </b-col>
      <b-col cols="2" class="column-space-custom">
        <CardMini />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="text-muted option-label">Color</p>
      </b-col>
    </b-row>
    <b-row class="row-options">
      <b-col cols="2" class="column-space-custom">
        <CardMini />
      </b-col>
      <b-col cols="2" class="column-space-custom">
        <CardMini />
      </b-col>
      <b-col cols="2" class="column-space-custom">
        <CardMini />
      </b-col>
      <b-col cols="2" class="column-space-custom">
        <CardMini />
      </b-col>
    </b-row>
    <b-row align-v="center" class="mt-5">
      <b-col>
        <b-row
          class="rounded-custom-md border border-light shadow-sm p-3 bg-warning"
          align-v="center"
        >
          <b-col class="mr-auto" cols="6">IDR 1000</b-col>
          <b-col>
            <div
              class="d-flex align-items-center justify-content-around rounded-custom-md border border-light shadow-sm p-2 bg-white"
            >
              <b-icon icon="cart2" font-scale="1.5" variant="black" flip-h />
              <div>Add to cart</div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.container-content-detail {
  margin-top: 80px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  background-color: #f3f4f6;
  width: 576px !important;
  margin-left: -15px;
  padding: 20px 32px 30px 32px;
}
.column-space-custom {
  margin-right: -30px;
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
</style>
