<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="10" md="8">
            <v-row class="mb-3">
              <v-col>
                <v-btn icon @click="goBack">
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
              </v-col>
              <v-col class="text-right">
                <v-btn color="primary" @click="logout">Logout</v-btn>
              </v-col>
            </v-row>
            <v-card class="elevation-1">
              <v-row class="d-none d-md-flex table-header">
                <v-col>ID</v-col>
                <v-col>Username</v-col>
                <v-col>Email</v-col>
                <v-col>Number</v-col>
                <v-col>User Type</v-col>
              </v-row>
              <template v-if="items.length > 0">
                <v-row v-for="(item, index) in items" :key="index" class="table-row">
                  <v-col cols="12" md="auto" class="font-weight-bold d-md-none">ID:</v-col>
                  <v-col>{{ item.id }}</v-col>
                  <v-col cols="12" md="auto" class="font-weight-bold d-md-none">Username:</v-col>
                  <v-col>{{ item.username }}</v-col>
                  <v-col cols="12" md="auto" class="font-weight-bold d-md-none">Email:</v-col>
                  <v-col>{{ item.email }}</v-col>
                  <v-col cols="12" md="auto" class="font-weight-bold d-md-none">Number:</v-col>
                  <v-col>{{ item.phone_number }}</v-col>
                  <v-col cols="12" md="auto" class="font-weight-bold d-md-none">User Type:</v-col>
                  <v-col>{{ item.user_type }}</v-col>
                </v-row>
              </template>
              <template v-else>
                <v-row class="text-center">
                  <v-col>
                    <p>No data found.</p>
                  </v-col>
                </v-row>
              </template>
            </v-card>
            <v-row class="mt-3">
              <v-col>
                <v-btn color="primary" @click="previous" :disabled="page === 1 || total === 0">Previous</v-btn>
              </v-col>
              <v-col class="text-right">
                <v-btn color="primary" @click="next" :disabled="page === total || total === 0">Next</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.table-header {
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  padding: 0.75rem;
}

.table-row {
  border-bottom: 1px solid #e0e0e0;
  padding: 0.75rem;
}

.table-row:nth-child(even) {
  background-color: #f9f9f9;
}
</style>

<script>
import ApiService from '@/utils/api'
export default {
  data() {
    return {
      items: [],
      page: 1,
      per_page: 1,
      total : 0
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'LandingPage' });
    },
    logout() {
      localStorage.removeItem('access_token')
      localStorage.removeItem('user_details')
      this.$router.push({ name: 'HomePage' });
    },
    next() {
      if(this.page >= this.total) {
        return;
      }
      this.page += 1;
      this.getUsers()
    },
    previous() {
      if(this.page == 1) {
        return;
      }
      this.page -= 1;
      this.getUsers()
    },
    getUsers() {
      
      ApiService.get('/users', {
        page : this.page,
        per_page : this.per_page
      })
        .then(response => {
          this.items = response.data.data.data;
          this.total = response.data.data.total;
        })
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>
