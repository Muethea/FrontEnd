<template>
   
 <Nav/>
     <div class="back">
 <header class="container">

    <div class="layouts">
            <div class="card1">
         <router-link to="whiteboard" class="link">
               <font-awesome-icon icon="fa-solid fa-plus" size="2xl" />
               <h5>Create new  </h5>
                 </router-link>
            </div>
            <div class="recentopen">
                <small>Recently opened </small>
                   <div class="card2">

                    <div class="card-body">
                        <div class="name">
                            <div class="card-title">
                                <small>Untitled</small>
                        </div>
                        </div>
                        <div class="img">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">
                            <small>Modified 11 days ago</small>
                        </div>
            <p class="card-text"></p>
            </div>
                </div>
                  <div class="card2">

                    <div class="card-title">
                        
                    </div>
                        <p>untitled</p>
                        <small>Modified 11 days ago</small>
                    </div>
            </div>
         
                
            </div>
 </header>

</div>
</template>

<script>
import axiosInstances from '../../services/AxiosTokenInstance';
import { mapGetters, mapMutations } from 'vuex';
import { GET_USER_TOKEN_GETTER, LOADING_SPINNER_SHOW_MUTATION } from '../../store/storeconstants';
import Nav from '../Navbar/Nav.vue';

export default {
    data() {
        return {
            dashboard: [],
        };
    },
    computed: {
        ...mapGetters("auth", {
            token: GET_USER_TOKEN_GETTER
        })
    },
    mounted() {
        this.showLoading(true);
        axiosInstances.get(`https://login-vue-8ef52-default-rtdb.firebaseio.com/posts.json`).then(response => {
            this.formatDashboard(response.data);
            this.showLoading(false);
        }).catch(() => {
            this.showLoading(false);
        });
    },
    methods: {
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION
        }),
        formatDashboard(dashboard) {
            for (let key in dashboard) {
                this.dashboard.push({ ...dashboard[key], id: key });
            }
        }
    },
    components: { Nav }
}
</script>

<style scoped>
.back{
    height: 100vh;
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



.recent-selec{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

a{

    color: #222;
    
    text-decoration: none;

}
*, ::after, ::before {
    box-sizing: border-box;
}

.back{
      background-color: #F8FAF9;
  
}

.card2, .card3{
    background: #fff;
    cursor: pointer;
    justify-content: space-between;
     margin-top: 3rem;
    cursor: pointer;
     width: 24rem;
    height: 14rem;
}

.card1{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    border: 1px solid #E5E5E5;
    border-radius: 6px;
}

.link{
      display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
}

.recent{
    padding-top: 2rem ;
    margin-top: 10rem;
}

.card-group{
    display: flex;
}
.card{
    border: 1px solid #E5E5E5;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 3rem;
    width: 100%;
    height: 100%;
  
    background: rgb(255, 255, 255);
}


.card2:hover{
        background-color: white;
    box-shadow: 0 10px 40px rgba(0,0,0,.2);
    transition: box-shadow 0.5s ease-in-out;
}


/* Mobile phones */
@media only screen and (max-width: 480px) {
  /* CSS styles for mobile phones */

  
.recent{
    margin-top: 10rem;
}

.card-group{
    display: flex;
}

.card, .card1{
    border: 1px solid #E5E5E5;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 3rem;

    background: rgb(255, 255, 255);
}

}

/* Tablets */
@media only screen and (min-width: 481px) and (max-width: 768px) {

    
    .card1{
    
        max-width: 20rem;
        margin: 0 auto;
    }



    .card, .card1{
    border: 1px solid #E5E5E5;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 3rem;
    width: 100%;
    height: 100%;


}


    .recent{
    margin: 10rem 5rem;
}

.card-group{
    max-width: 20em;
    margin: 0 auto;
    gap: 2rem;
    display: flex;
    flex-direction: column;
}
.card, .card1{
    width: 20rem;
    height: 20rem;

}
}

/* Laptops and desktops */
@media only screen and (min-width: 768px) and (max-width: 992px) {


.recent{
    margin:10rem 5rem
}

.card-group{
    display: flex;
    flex-direction: row;
    gap: 2rem;
}

.card1{
     margin-top: 3rem;
}

.card{
    border: 1px solid #E5E5E5;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background: rgb(255, 255, 255);
}


.card div:hover, .card1:hover{
        background-color: white;
    box-shadow: 0 10px 40px rgba(0,0,0,.2);
    transition: box-shadow 0.5s ease-in-out;
}
.card, .card1{
    width: 20rem;
    height: 20rem;
    

}
}

@media only screen and (min-width: 992px) {
 
    
    .card-title small{
        font-size: 18px;
        font-weight: 500;
    }
    .card-title{
        border-top: 1px solid #55555510;
        margin-top: 8rem;
        margin-bottom: .4rem;
    }

    .img{
        display: flex;
        align-items: center;
        gap: 1rem;
         
    }

    .img small{
        font-size: 12px;
        color: #737373;
    }
    .img img{
      
        width: 2rem;
        clip-path: circle();
    }
    .recentopen{
        margin-top: 4rem;
        display: flex;
        gap: 2rem;
    }
    .layouts{
        max-width: 100vw;
        display: flex;
        align-items: center;
        gap: 5rem;
    }
    .container{
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .card1{
     margin-top: 3rem;
}


.card2, .card3{
    background: #fff;
    cursor: pointer;
    justify-content: space-between;
     margin-top: 3rem;
    cursor: pointer;
     width: 24rem;
    height: 16rem;
    padding: 2rem;
}

.recent{
    margin:10rem 5rem
}

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

 .container{
        margin-left: 4rem;
    }
.recent{
    margin:10rem 5rem
}


.card-group{
    max-width: 90rem;
    display: flex;
    flex-direction: row;
}


.card{
    border: 1px solid #E5E5E5;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background: rgb(255, 255, 255);
}


.card div:hover, .card1:hover{
        background-color: white;
    box-shadow: 0 10px 40px rgba(0,0,0,.2);
    transition: box-shadow 0.5s ease-in-out;
}
.card, .card1{
    
    width: 20rem;
    height: 20rem;

}
}

/* XX-Large devices (larger desktops, 1400px and up) */

@media (min-width: 1400px) {


.recent{
    margin-top: 10rem;
}

.card-group{
    display: flex;
}
.card{
    width: 20rem;
    height: 20rem;
   
}
}
</style>