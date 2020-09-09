<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" lg="4" md="4">
          <form class="mx-4 px-1">
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
              <v-btn @click="submitform" class="mr-4 red darken-4" dark>{{currentToy.id ? 'Editar' : 'Ingresar nuevo' }}</v-btn>
            </div>
          </form>
        </v-col>
        <v-col cols="12" sm="8" lg="8" md="8">
          <v-simple-table class="mx-4 px-1">
            <tr class="deep-orange lighten-3">
              <th class="text-left">NAME</th>
              <th class="text-left">PRICE</th>
              <th class="text-left">CODE</th>
              <th class="text-left">STOCK</th>
              <th></th>
            </tr>
            <tbody>
              <tr v-for="toy in toys" :key="toy.id" class="mt-2">
                <th>{{ toy.data.name }}</th>
                <th>{{ toy.data.price }}</th>
                <th>{{ toy.data.code }}</th>
                <th>{{ toy.data.stock }}</th>
                <td><v-icon @click="editProduct(toy)" color="green darken-4">mdi-pencil-outline</v-icon></td>
                <td><v-icon @click="removeToy(toy.id)" color="red accent-4">mdi-delete</v-icon></td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
        <v-overlay :value="overlay">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
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
          price: 0,
          stock: 0,
          code:''
        }
      }
    }
  },
    created() {
      this.setToys()
    },
    computed: {
      ...mapState(['toys', 'overlay'])
    },
    methods : {
      ...mapActions(['setToys', 'submitToy', 'updateToy', 'deleteToy']),
      submitform() {
      if (!this.currentToy.id) { //si no existe creamos
        this.createToy()
      } else { // si no existe actualizamos
        this.update(this.currentToy)
      }
      },
      createToy() {
        const toy = this.currentToy.data //los llama a todos de una
        this.submitToy(toy) // metodo del store que hace la llamada a axiosApi
        this.cleanCurrentToy()
      },
      cleanCurrentToy() {
        this.currentToy.data.name = '',
        this.currentToy.data.price = 0,
        this.currentToy.data.stock = 0,
        this.currentToy.data.code = '',
        this.currentToy.id = undefined
      },
      editProduct(toy) {
        this.currentToy.data.name = toy.data.name,
        this.currentToy.data.price = toy.data.price,
        this.currentToy.data.stock = toy.data.stock,
        this.currentToy.data.code = toy.data.code,
        this.currentToy.id = toy.id
      },
      update() {
        this.updateToy(this.currentToy)
        this.cleanCurrentToy()
      },
      removeToy(id) {
        let confirmation = confirm("¿respuesta definitiva?")
        if (confirmation) {
          this.deleteToy(id)
          this.cleanCurrentToy()
        }
      }
    }
  }
</script>

<style>

</style>