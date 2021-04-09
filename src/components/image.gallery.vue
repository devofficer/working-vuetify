<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="image, idx in images"
              :key="idx"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="image"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <gallery :images="images" :index="index" @close="index = null" />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import VueGallery from "vue-gallery";

export default {
  name: 'ImageGallery',
  components: {
    gallery: VueGallery
  },
  data: () => ({
    images: [
      "https://dummyimage.com/800/ffffff/000000",
      "https://dummyimage.com/1600/ffffff/000000",
      "https://dummyimage.com/1280/000000/ffffff",
      "https://dummyimage.com/400/000000/ffffff",
    ],
    index: null,
  }),
}
</script>
