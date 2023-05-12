<template>
  <div id="app">
    <Search/>
    <Logoleft/>
    <Card/>
  </div>
  
</template>

<script>
import axiosInstances from "../../services/AxiosTokenInstance";
import { mapGetters, mapMutations } from "vuex";
import {
  GET_USER_TOKEN_GETTER,
  LOADING_SPINNER_SHOW_MUTATION,
} from "../../store/storeconstants";
import Search from './Search.vue';
import Logoleft from './Logoleft.vue';
import Card from "./Card.vue";



export default {
  data() {
    return {
      dashboard: [],
    };
  },
  computed: {
    ...mapGetters("auth", {
      token: GET_USER_TOKEN_GETTER,
    }),
  },
  mounted() {
    this.showLoading(true);
    axiosInstances
      .get(`https://login-vue-8ef52-default-rtdb.firebaseio.com/posts.json`)
      .then((response) => {
        this.formatDashboard(response.data);
        this.showLoading(false);
      })
      .catch(() => {
        this.showLoading(false);
      });
  },
  methods: {
    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
    formatDashboard(dashboard) {
      for (let key in dashboard) {
        this.dashboard.push({ ...dashboard[key], id: key });
      }
    }
  },
  components: { Search, Logoleft, Card},
};
</script>

<style scoped> 
* {
  font-family: Arial, Helvetica, sans-serif;

} 

body {
  margin: 0;
} 

#app {
  -webkit-font-smothing: antialiased;
  -moz-osx-font-smothing: grayscale; 

  height: 100vh;
  display: grid;

  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas: 
  "nav nav"
  "menu content"
  "menu content"
}

</style>