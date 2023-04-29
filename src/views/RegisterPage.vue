<template>
  <v-container>
    <v-row justify="center">
      <v-col md="6" sm="10" xs="12">
        <v-card>
          <v-card-title>
            <h1>Registration Form</h1>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="username"
                label="Username"
                
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                
                :rules="[v => /.+@.+\..+/.test(v) || 'E-mail must be valid']"
              ></v-text-field>
              <v-text-field
                v-model="phone_number"
                label="Phone Number"
                type="tel"
                
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                label="Confirm Password"
                type="password"
                
                :rules="[v => v === password || 'Passwords do not match']"
              ></v-text-field>
              <v-alert class="mb-3" v-if="errorMessage" type="error">{{ errorMessage }}</v-alert>
              <v-btn color="primary" class="mr-2" @click="submit">Submit</v-btn>
              <v-btn color="secondary" @click="backToLogin">Back to Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ApiService from '@/utils/api'
export default {
  data() {
    return {
      valid: false,
      username: '',
      email: '',
      phone_number: '',
      password: '',
      confirmPassword: '',
      errorMessage : ''
    };
  
  },
  methods: {
    submit() {
     
  
        const formData = {
          username: this.username,
          email: this.email,
          phone_number: this.phone_number,
          password: this.password,
          password_confirmation: this.confirmPassword
        };
        
        ApiService.post('/register', formData)
          .then(response => {
            console.log(response)
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('user_details', JSON.stringify(response.data.user))
            this.$router.push({ name: 'LandingPage' })
          })
          .catch(error => {
            this.errorMessage = "Please fill the required fields."
          })
     
    },
    backToLogin() {
      // Navigate back to the login page
      this.$router.push({ name: 'HomePage' });
    },
  },
};
</script>

