<template>
  <v-app>
    <!-- Start of Navigation -->
    <nav>
      <!-- Start of app toolbar style="background: rgba(0,0,0,0);" -->
      <v-app-bar app class="elevation-0">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="headline flex-grow-1" style="padding-top: 20px;">
        <v-container fluid>
          <v-text-field placeholder="Search ID / Code" append-icon="mdi-magnify" color="primary darken" autofocus clearable v-model="searchString" :loading="getLoading" >
          </v-text-field>
        </v-container>
      </v-toolbar-title>
                
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
          v-for="(it, index) in items"
          :key="index"
          :to="it.link" text exact class="elevation-0"> {{ it.text}} 
          </v-btn>

          <v-btn text exact :to="'/comments'"> Comments </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <!-- End of app toolbar -->

      <!-- Start of mobile side menu -->
      <v-navigation-drawer app v-model="drawer" left >
        <!-- Menu title -->
        <v-app-bar flat>
          <v-list>
            <v-subheader class="title" @click="$router.push('/')"> Shuqbara </v-subheader>
          </v-list>
        </v-app-bar>
        <v-divider></v-divider>
        <!-- Menu Links -->
        <v-list>
          <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
             <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="'/comments'">
          <v-list-item-icon>
            <v-icon color="red" v-text="'mdi-heart'"> </v-icon>
              <v-list-item-content>
                <v-list-item-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comment </v-list-item-title>
              </v-list-item-content>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <!-- End of mobile side menu -->
    </nav>
    <!-- End of Navigation -->

    <v-content style="padding: 0px;">
      <Dashboard :finder="searchString" />
    </v-content>
      <v-footer app fixed class="transparent">
        <div class="flex-grow-1"></div>
        <v-btn  fab dark color="primary" @click="$router.push('/register')">
          <v-icon > mdi-plus</v-icon>
        </v-btn>
      </v-footer>
  </v-app>
</template>

<script>
import Dashboard from './../components/dashboard'

export default {
    data(){
        return {
            drawer: false,
            item: 1,
            items: [
                { text: 'Register', icon: 'mdi-plus', link: '/register' },
                { text: 'Read', icon: 'mdi-folder-edit-outline', link: '/read' },
                { text: 'Report', icon: 'mdi-collapse-all', link: '/report' }
            ],
            searchString: null,
        }
    },
    methods: {
        goThere(distnation){
            this.$router.push(distnation)
        }
  },
    computed: {
      getLoading() {
        if ( this.searchString !== null) { return true}
        else {return false}
      }
    },
    components: {
      Dashboard
    }
}
</script>