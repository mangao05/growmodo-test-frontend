<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title class="text-center">Welcome, {{ user.username }}</v-card-title>
            <v-card-text>
              <v-row align="center" justify="center">
                <v-col cols="12" sm="6">
                  <v-btn block v-if="user.user_type === 'guest'" color="primary" @click="unsubscribe">Unsubscribe</v-btn>
                  <v-btn block v-if="user.user_type === 'admin'" color="primary" @click="viewRecords">View Records</v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn block color="primary" @click="logout">Logout</v-btn>
                </v-col>
              </v-row>
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
      user: {
        username: '',
        email: '',
        phone_number: '',
        type: '',
        token : ''
      }
    }
  },
  methods: {
    unsubscribe() {
      ApiService.post('/unsubscribe').then(response => {
        if(response.data.status == 'success') { 
            localStorage.removeItem('access_token')
            localStorage.removeItem('user_details')
            this.$router.push({ name: 'HomePage' })
        } 
      }).catch(error => {
          alert("There was an error. Please try again.")
      });
    },
    viewRecords() {
      this.$router.push({ name: 'RecordPage' })
    },
    logout() {
      localStorage.removeItem('access_token')
      localStorage.removeItem('user_details')
      this.$router.push({ name: 'HomePage' })
    },
  },
  mounted() {
    if(localStorage.getItem('user_details') !== null) {
      this.user = JSON.parse(localStorage.getItem('user_details'));
    } else {
      this.$router.push({ name : 'HomePage' })
    }
  }
}
  </script>
  