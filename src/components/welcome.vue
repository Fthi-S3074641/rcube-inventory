<template>
 <v-row justify="center" style="margin-top: 10px;">
        <v-col cols="12" sm="10" md="8" lg="6">
  <v-container>
    <v-layout
      text-center
      wrap
      justify-center
      align-center
    >
    <v-flex xs12 sm10 md8>
      <v-card flat style="margin: 5px;" class="transparent elevation-0">
      <v-card-title>
            <v-flex xs12>
                <v-img
                :src="require('../assets/shuqbara.svg')"
                class="my-3"
                contain
                height="200"
                @click="$router.go('/')"
                ></v-img>
            </v-flex>
       </v-card-title>

    <v-card-text>
                <v-flex mb-4>
                    <h1 class="headline text-uppercase mb-3 black--text">
                <span> Shuqbara </span>
                <span class="font-weight-light blue--text"> Inventory</span>
                </h1>
            </v-flex>
      <v-flex mb-5 xs12 >
        <h3 class=" text--center font-weight-light">
            Manage Buisness Inventory  <br> Generate buisness Reports        <br>
        For more than <span class="blue--text"> 10,000 </span>items
        </h3>
        
        <div> &nbsp; </div>
        <v-btn outlined color="blue lighten-1" large @click="$router.push('/read')"> Get started  </v-btn>
        <br>

      </v-flex>
    </v-card-text>

    <v-card-actions> 
    <v-layout justify="center">
    <v-flex mb-5 xs12 >
        <div class="text--primary">
            <h4 class="font-weight-light"> 
            <v-icon>mdi-web</v-icon>
              www.shuqbara.com </h4>
            <h4 class="font-weight-light">
            <!-- <v-icon small>mdi-email</v-icon> -->
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fthialem@gmail.com </h4>
            <h4 class="font-weight-light">
            +251953166155 </h4>
            <h4 class="font-weight-light"> &nbsp;&nbsp; &copy; {{ new Date().getFullYear() }} </h4>
            <!-- <h4> {{wholeResponse}} </h4> -->
        </div>
        </v-flex>
        </v-layout>
    </v-card-actions>


  </v-card>
    </v-flex>
    </v-layout>
  </v-container>
  </v-col>
  </v-row>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
        inumber: null,
        started: false,
        wholeResponse: null
    }
  },
  methods: {
    requestPremium() {
        if(!this.inumber){
            this.$router.push('/read')
        }
    }
  },
  created() {
  //   axios
  //   .get('http://127.0.0.1:5000/ping')
  //   .then(response => {
  //     this.wholeResponse = response.data
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  }
};
</script>
