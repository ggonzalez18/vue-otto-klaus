<template>
  <div>
    <v-container>
      <v-row>
        <v-cols cols="12" sm="6" lg="6" md="6">
          <form @submit.prevent="submitForm" class="mx-4 px-1">
            <v-text-field
              v-model="currentToy.data.name"
              label="Name"
            ></v-text-field>

            <v-text-field
              v-model="currentToy.data.price"
              label="Price"
            ></v-text-field>

            <v-text-field
              v-model="currentToy.data.stock"
              label="Stock"
            ></v-text-field>

            <v-text-field
              v-model="currentToy.data.code"
              label="Code"
            ></v-text-field>

            <div class="mb-5">   
              <v-btn class="mr-4 red darken-4" dark>{{currentToy.id ? 'Editar' : 'Ingresar nuevo' }}</v-btn>
            </div>
          </form>
        </v-cols>
        <v-cols cols="12" sm="6" lg="6" md="6">
          <v-simple-table class="mx-4 px-1">
            <tr class="deep-orange lighten-3">
              <th class="text-left">NAME</th>
              <th class="text-left">PRICE</th>
              <th class="text-left">CODE</th>
              <th class="text-left">STOCK</th>
            </tr>
            <tbody>
              <tr v-for="toy in toys" :key="toy.id" class="mt-2">
                <th>{{ toy.data.name }}</th>
                <th>{{ toy.data.price }}</th>
                <th>{{ toy.data.code }}</th>
                <th>{{ toy.data.stock }}</th>
                <v-btn class="green darken-2 mx-2" dark>Modificar</v-btn>
                <v-btn class="green darken-4 mx-2" dark>Eliminar</v-btn>
              </tr>
            </tbody>
          </v-simple-table>
        </v-cols>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  data() {
    return {
      currentToy: {
        id: undefined,
        data: {
          name: '',
          price: '',
          stock: '',
          code:''
        }
      }
    }
  },
    created() {
      this.setToys()
    },
    computed: {
      ...mapState(['toys'])
    },
    methods : {
      ...mapActions(['setToys', 'submitToy']),
      submitToy() {
      if (this.currentToy.id) { //si existe editamos
        this.$emit('edit-Toy', this.currentToy)
      } else { // si no existe creamos una nueva cerveza
        this.createToy()
      }
      this.cleanCurrentToy()
    },
    createToy() {
      const toy = {
        name: this.currentToy.data.name,
        price: this.currentToy.data.price,
        stock: this.currentToy.data.stock,
        code: this.currentToy.data.code,
      }
      this.submitToy(toy) // metodo del store que hace la llamada a axiosApi
    },
    cleanCurrentToy() {
      this.currentToy.data.name = '',
      this.currentToy.data.price = 0,
      this.currentToy.data.stock = '',
      this.currentToy.data.code = '',
      this.currentBeer.id = undefined
    }
    }
  }
</script>

<style>

</style>