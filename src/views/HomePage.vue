<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="email" label="Email"></v-text-field>
              <v-text-field v-model="password" label="Password" type="password"></v-text-field>
              <v-alert v-if="errorMessage" type="error">{{ errorMessage }}</v-alert>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="white" style="background-color: #000000;" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
        <div class="text-center mt-3">
          <v-btn  color="primary" @click="goToRegister">Register Now</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
  import ApiService from '@/utils/api'
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: ''
      }
    },
    methods: {
      login() {
        ApiService.post('/login', {
          email : this.email,
          password : this.password
        }).then(response => {
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('user_details', JSON.stringify(response.data.user))
            this.$router.push({ name: 'LandingPage' })
        }).catch(error => {
          if(error.response.request.status === 422) {
            this.errorMessage = 'Please fill in all required fields to proceed.'
            return;
          }
          this.errorMessage = 'Invalid email or password'
        });
      },
 
      goToRegister() {
        this.$router.push({ name: 'RegisterPage' })
      }
    },
    mounted() {
      if (localStorage.getItem('user-details') !== null) {
        this.$router.push({ name: 'LandingPage' })
      }
    },
  }
  </script>
  