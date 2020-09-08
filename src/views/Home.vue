<template>
  <div class="home">
    <!-- <v-img height="100vh" :src="image> -->
      <login></login>
    <!-- </v-img> -->
  </div>
</template>

<script>

import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>

