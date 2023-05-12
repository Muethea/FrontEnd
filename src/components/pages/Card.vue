<template>
  <div class="card__main">
    <header class="container">
      <div class="card__text">
        <h1>Create you board</h1>
        <p>view alls</p>
      </div>
      <div class="card1">
        <div class="card1__component">
          <Popup class="car1__componet_pop"></Popup>
        </div>
        <Methodcard />
      </div>
    </header>
  </div>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  components: {
    Popup,
  },
};
</script>

<style scoped>
.card__main {
  display: flex;
  flex-direction: column;
  justify-content: center;

  grid-area: content;
}
.container {
  width: 100%;
  border: none;
  position: fixed;
  top: 20%;
  right: 10%;
  height: 20vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

}
.card1 {
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #808080aa;
  padding: 20px;

  border: 1px solid #5d5a88aa;
  border-radius: 5px; 

  margin-bottom: 40px;
} 

.card1__component {
  width: 200px;
  height: 200px;
  background: #fff;
}

.card1__component:hover {
  background-color: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s ease-in-out;
}

.car1__componet_pop {
  width: 100%;
  height: 100%;
}

.card__text {
  display: flex;
  justify-content: space-between;
  align-items: center;
} 

.card__text p {
  color: #5d5a88;
  margin-top: 30px;
} 
.card__text h1 {
  font-size: 26px;
  font-weight: bold;
}
</style>
