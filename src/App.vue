<template>
  <v-app>
      <v-app-bar app color="blue-grey darken-4 mb-5" dark>
        <!-- <v-toolbar-title>Edutecno</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="/toys" text>Toys</v-btn>
        <v-btn @click.prevent="logout" to="/toys" text v-if="currentUser">Cerrar sesión</v-btn>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
    <v-footer class="font-weight-medium blue-grey darken-4" dark>
        <v-col class="text-center" cols="12" dark>
          {{ new Date().getFullYear() }} — Juguetería mis jueguetes
        </v-col>
      </v-footer>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['setUser']),
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/')
        this.setUser(undefined)
      })
    }
  },
  computed: {
  ...mapState(['currentUser'])
  }
}
</script>
