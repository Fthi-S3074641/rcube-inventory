<template>
  <div class="text-center">
    <v-menu v-model="dialog" :close-on-content-click="false" offset-y >
      <template v-slot:activator="{ on }">
        <v-btn icon color="red lighten-1" v-on="on"><v-icon large>mdi-delete</v-icon></v-btn>
      </template>
      <v-card>
        <v-card-title class="headline red lighten-1" primary-title>Deleting: "{{dcode}}"</v-card-title>
        <v-card-text>
          It will be deleted from the database forever.<br> Are you sure you want to delete this item "<span class="font-weight-bold">{{dcode}}</span>"???
        </v-card-text>
        <v-card-actions>
          <v-btn color="secondary" text @click="cancel()"> Cancel</v-btn>
          <div class="flex-grow-1"></div>
          <v-btn color="red lighten-1" @click="yesRemove">Yes Remove</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  export default {
  props: ['dcode'],
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
      cancel() {
        this.dialog = false
      },
      yesRemove() {
      this.$store.dispatch('removeItem', this.getIndex).then(()=>{
        this.dialog = false
        const shuqbara = JSON.stringify(this.$store.state.allItems)
        window.localStorage.setItem('shuqbara', shuqbara)
      });

      }
    },
    computed: {
        getIndex(){
        return this.getAll.map(function(e) {
              return e.icode;}).indexOf(this.dcode);
        },
        getAll() {
          return this.$store.state.allItems
        }
    }
  }
</script>
