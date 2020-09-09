<template>
  <div>
    <v-card width="400px" class="mx-auto mt-5" color="red darken-1" dark>
      <v-card-title><h1 class="mx-auto">Login</h1></v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="email" label="userName" prepend-icon="mdi-account-circle"/>
          <v-text-field v-model="password"
          @click:append="showPassword = !showPassword"
          label="password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"/>
        </v-form>
      </v-card-text>
        <v-card-actions>
          <v-btn color="blue-grey darken-4">Register</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click.prevent="login" color="blue-grey darken-4">Login</v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data()  {
    return {
      email: '',
      password: '',
      showPassword: false
    }
  },
  methods: {
  ...mapActions(['setUser']),
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        this.setUser(this.email)
        this.$router.push('/toys')
      })
      .catch(() => {
        alert('stopppppppp!')
      })
    }
  }
}

</script>

<style>

</style>

