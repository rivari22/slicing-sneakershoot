<template>
  <b-container class="container-header mt-5">
    <b-row class="container-header mb-4">
      <b-col cols="auto">
        <h1>Catalog</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <div
          class="d-inline-flex align-items-center border px-4 py-2 bg-white border-light shadow-sm rounded-custom"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-funnel bolder"
            viewBox="0 0 16 16"
            style="font-weight: 700"
          >
            <path
              d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"
            />
          </svg>
          <span class="ml-2"><strong>Filter</strong></span>
        </div>
      </b-col>
      <b-col cols="auto" class="column-merk">
        <div
          class="d-inline-flex align-items-center border p-2 bg-white border-light shadow-sm rounded-custom"
          @click="() => console.log('helo')"
        >
          Nike
        </div>
      </b-col>
      <b-col cols="auto" class="column-merk">
        <div
          class="d-inline-flex align-items-center border p-2 bg-white border-light shadow-sm rounded-custom"
        >
          Adidas
        </div>
      </b-col>
      <b-col cols="auto" class="column-merk">
        <div
          class="d-inline-flex align-items-center border p-2 bg-white border-light shadow-sm rounded-custom"
        >
          Puma
        </div>
      </b-col>
      <b-col cols="auto" class="column-merk">
        <div
          class="d-inline-flex align-items-center border p-2 bg-white border-light shadow-sm rounded-custom"
        >
          Vans
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      setFilterProduct: 'setFilterProduct'
    })
  }
};
</script>

<style scoped>
  .column-merk {
    margin-right: -20px;
  }
</style>
