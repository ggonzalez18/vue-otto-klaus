<template>
  <div>
    <v-container>
      <v-simple-table>
        <tr class="deep-orange lighten-3 pt-2 pb-3" heigth="100vh" fixed-header>
          <th class="text-left">NAME</th>
          <th class="text-left">PRICE</th>
          <th class="text-left">CODE</th>
          <th class="text-left">STOCK</th>
        </tr>
        <tbody>
          <tr v-for="toy in toys" :key="toy.id">
            <th>{{ toy.data.name }}</th>
            <th>{{ toy.data.price }}</th>
            <th>{{ toy.data.code }}</th>
            <th>{{ toy.data.stock }}</th>
          </tr>
        </tbody>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    created() {
      this.setToys()
    },
    computed: {
      ...mapState(['toys'])
    },
    methods : {
      ...mapActions(['setToys'])
    }
  }
</script>

<style>

</style>