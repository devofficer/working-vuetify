<template>
  <div>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vesta Lease</h1>
      </v-col>
    </v-row>
    <Footer />
  </div>
</template>

<script>
export default {
  title: "Vesta Leese",
  name: "HomePage",
  data: () => ({}),
};
</script>
