<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light" >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#">Whiteboard</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" v-if="isAuthenticated" to="/">Home</router-link>
          
          </li>
          <li class="nav-item">
            <router-link v-if="!isAuthenticated"   class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
              <router-link v-if="!isAuthenticated"  class="nav-link" to="/sigunp">Sigunp</router-link>
            </li>
                <li class="nav-item">
                <router-link v-if="isAuthenticated" class="nav-link" to="/dashboard">Dashboard</router-link>
              </li>
                  <li class="nav-item">
                  <router-link v-if="isAuthenticated" class="nav-link" to="/whiteboard">Whiteboard</router-link>
                </li>

                  <li class="nav-item">
                   <a v-if="isAuthenticated"  href="#" class="nav-link" @click.prevent="onLogout()">Logout</a>
                  </li>
        </ul>

        
      
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IS_USER_AUTHENTICATE_GETTER, LOGOUT_ACTION } from '../../store/storeconstants';
export default {
  computed: {
    ...mapGetters('auth', {
      isAuthenticated: IS_USER_AUTHENTICATE_GETTER,
    })
  },

  methods: {

    ...mapActions('auth', {
      logout: LOGOUT_ACTION,
    }),
    onLogout() {
      this.logout();
      this.$router.replace('/login');
    },
  }

}
</script>

<style>

</style>