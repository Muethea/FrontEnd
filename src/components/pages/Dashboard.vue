<template>
  <div class="opacity-layout">
    <Nav />
    <header class="container">
      <div class="card1">
        <div class="tainer btn-right" id="blur">
          <div>
            <a href="#" @click="toggle()">
              <font-awesome-icon icon="fa-solid fa-plus" size="2xl" />
            </a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="back">
        <div class="recent">
          <div class="recent-selec">
            <h5>Recent boards</h5>

            <div class="opnios">
              <select id="select" boards name="select" class="select-input">
                <option value="">Last opened</option>
                <option value="">Last modified</option>
                <option value="">Alphabetically</option>
              </select>
            </div>
          </div>

          <div class="card-group">
            <div v-for="titles in dashboard" :key="titles.id">
              <div class="card">
                <div class="card-body"></div>
                <div class="card-footer">
                  <h5 class="card-title">{{ titles.title }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <div id="popup" class="popup">
    <div class="popup-width">
      <h3>Create new board</h3>
      <p>Name your team before chossing a new plan subscription</p>
    </div>
    <div class="popup-button">
      <form>
        <fieldset>
          <label>Nome</label>
          <input type="text" placeholder="Enter name of project" />
        </fieldset>
        <fieldset>
          <label>Project</label>
          <select name="" id="">
            <option value="privated">privated</option>
            <option value="privated">public</option>
          </select>
        </fieldset>
      </form>
      <button type="submit" class="button-btn" id="btn">
        <router-link to="whiteboard" class="link"> Create </router-link>
      </button>
    </div>
    <a href="#" @click="toggle()" class="close-button" title="close">X</a>
  </div>
</template>

<script>
import axiosInstances from "../../services/AxiosTokenInstance";
import { mapGetters, mapMutations } from "vuex";
import {
  GET_USER_TOKEN_GETTER,
  LOADING_SPINNER_SHOW_MUTATION,
} from "../../store/storeconstants";
import Nav from "../Navbar/Nav.vue";

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
    },
    toggle() {
      var blur = document.getElementById("blur");
      blur.classList.toggle("active");

      var popup = document.getElementById("popup");
      popup.classList.toggle("active");
    },
  },
  components: { Nav},
};
</script>

<style scoped>
form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

fieldset {
  margin: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="text"]:focus {
  outline: none;
  border-color: #555;
}

select {
  width: 30%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 4px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23666' d='M5 7l3-3 3 3z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px 16px;
}

select:focus {
  outline: none;
  border-color: #000;
}

#popup {
  background-color: fff;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 600px;
  padding: 80px;
  border-radius: 20px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: visible;
  transition: 0.5s;
  opacity: 0;
  border-radius: 5px;
}

#popup.active {
  top: 50%;
  visibility: visible;
  opacity: 1;
  transition: 0.6s;
}

.popup-width {
  width: 350px;
}

.button-btn {
  width: 100%;
  margin-top: 16px;
  padding: 16px;
  border: none;
  background-color: #5d5a88;
  border-radius: 5px;
  color: #fff;
  transition: 0.6s;
  cursor: pointer;
  font-size: 16px;
}

.button-btn:hover {
  background-color: #5d5a88aa;
  color: #fff;
}

.close-button {
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 12px;
  font-size: 22px;
  border-radius: 100%;
  cursor: pointer;

  position: absolute;
  top: 0;
  right: 0;
  margin-top: 25px;
  margin-right: 25px;
  transition: 0.5s;
}

.btn-right {
  position: relative;
}

.back {
  padding-bottom: 3rem;
}

/* Reset de estilos padrão do select */
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  border: none;
  font-size: 16px;
  padding: 10px;
  width: 150px;
  cursor: pointer;
}

/* Estilo do select */
.select-input {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  color: #555;
}

.recent-selec {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a {
  color: #222;

  text-decoration: none;
}

*,
::after,
::before {
  box-sizing: border-box;
}

.back {
  background-color: #f8faf9;
}

.card1 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
}

.link {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.recent {
  padding-top: 2rem;
  margin-top: 10rem;
}

.card-group {
  display: flex;
}

.card {
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  max-width: 100%;
  background: rgb(255, 255, 255);
}

.card div:hover,
.card1:hover {
  background-color: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s ease-in-out;
}

/* Mobile phones */
@media only screen and (max-width: 480px) {
  /* CSS styles for mobile phones */

  .recent {
    margin-top: 10rem;
  }

  .card-group {
    display: flex;
  }

  .card,
  .card1 {
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background: rgb(255, 255, 255);
  }
}

/* Tablets */
@media only screen and (min-width: 481px) and (max-width: 768px) {
  .card1 {
    max-width: 20rem;
    margin: 0 auto;
  }

  .card,
  .card1 {
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    max-width: 100%;
  }

  .recent {
    margin: 10rem 5rem;
  }

  .card-group {
    max-width: 20em;
    margin: 0 auto;
    gap: 2rem;
    display: flex;
    flex-direction: column;
  }

  .card,
  .card1 {
    width: 20rem;
    height: 20rem;
  }
}

/* Laptops and desktops */
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .recent {
    margin: 10rem 5rem;
  }

  .card-group {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  .card1 {
    margin-top: 3rem;
  }

  .card {
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background: rgb(255, 255, 255);
  }

  .card div:hover,
  .card1:hover {
    background-color: white;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.5s ease-in-out;
  }

  .card,
  .card1 {
    width: 20rem;
    height: 20rem;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .card1 {
    margin-top: 3rem;
  }

  .recent {
    margin-top: 10rem 5rem;
  }

  .card-group {
    display: flex;
    gap: 3rem;
  }

  .card {
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background: rgb(255, 255, 255);
  }

  .card div:hover,
  .card1:hover {
    background-color: white;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.5s ease-in-out;
  }

  .card,
  .card1 {
    width: 20rem;
    height: 20rem;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .container {
    margin-left: 4rem;
  }

  .recent {
    margin: 10rem 5rem;
  }

  .card-group {
    max-width: 90rem;
    display: flex;
    flex-direction: row;
  }

  .card {
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background: rgb(255, 255, 255);
  }

  .card div:hover,
  .card1:hover {
    background-color: white;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.5s ease-in-out;
  }

  .card,
  .card1 {
    width: 20rem;
    height: 20rem;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */

@media (min-width: 1400px) {
  .recent {
    margin-top: 10rem;
  }

  .card-group {
    display: flex;
  }

  .card {
    width: 20rem;
    height: 20rem;
  }
}
</style>
