<template>

 <nav class="navbar navbar-expand-lg " >
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
          <li class="nav-item item"  >
            <router-link v-if="!isAuthenticated"   class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item item">
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
      this.$router.replace('/');
    },
  }

}
</script>

<style scoped>


  .item{
    display: flex;
    gap: 2rem;
    justify-content: flex-end;
  }


  /* Laptops and desktops */
@media only screen and (min-width: 992px)  {

 
  /* CSS styles for laptops and desktops */
  form {

    display: flex;
    gap: 2rem;
    flex-direction: column;
  }

  .btnlogin {
    background-color: #4c49d1;
    color: #fff;
    width: 7rem;
    height: 2.4rem;
    border: none;
    border-radius: .5rem;
  }

  main {
    max-width: none;
    margin: 0 auto;
  }

  .loginform {


    margin-top: 14rem;

  }

  .back {
    color: #fcfcff;
    position: fixed;
    top: 0;
    left: 0;
    width: 25rem;
    height: 100%;
    z-index: 0;
    background-color: #f2f2f2;
    background-image: radial-gradient(#000 5%, transparent 5%),
      radial-gradient(#000 5%, transparent 5%);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
  }

  .card2,
  .card3,
  .card4 {
    padding: 1.4rem;
    width: 10rem;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 2px, transparent 2px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.1) 2px, transparent 2px),
      linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);

    font-size: 18px;
    transform: rotate(-3deg);

  }

  .pont {
    position: relative;
    top: -3rem;
    left: -2rem;
    width: 2rem;
    height: 2rem;
    background-image: url('../../assets/piker.png');
    background-position: center;
    background-size: 3rem;

    clip-path: circle();
  }

  .card2 {
    transform: rotate(-30deg);

    background: orange;
  }

  .card3 {

    position: relative;
    top: 4rem;
    left: 4rem;
    color: #000000;
    background: rgb(255, 255, 255);
  }

  .card4 {
    position: relative;
    top: 7rem;
    left: 1rem;
    background: rgb(44, 7, 164);
  }

  .card {
    background: hsla(0, 0%, 100%, 0.8);
    backdrop-filter: blur(30px);
    width: 30rem;
    margin: 0 auto;
    height: 26rem;
    padding: 3rem;
    margin-top: 15rem;
  }

  .card h2 {
    color: #000000;

  }
}
</style>