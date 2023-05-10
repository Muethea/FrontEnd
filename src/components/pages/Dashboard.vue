<template>
  <div class="opacity-layout">
    <Search/>
    <Logoleft/>
    <header class="container">
      <div class="card1">
        <div class="tainer btn-right" id="blur">
          <div>
            <Popup/>
          </div>
        </div>
      </div>
      <Methodcard />
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
  
</template>

<script>
import axiosInstances from "../../services/AxiosTokenInstance";
import { mapGetters, mapMutations } from "vuex";
import {
  GET_USER_TOKEN_GETTER,
  LOADING_SPINNER_SHOW_MUTATION,
} from "../../store/storeconstants";
import Nav from "../Navbar/Nav.vue";
import Methodcard from "./Methoscard.vue";
import Popup from "./Popup.vue";
import Search from './Search.vue';
import Logoleft from './Logoleft.vue';


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
  components: { Nav, Methodcard, Popup,Search, Logoleft},
};
</script>

<style scoped>
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

.container {
  display: flex;
  flex-direction: row;
  gap: 22px;
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