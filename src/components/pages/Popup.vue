<template>
  <div>
    <button @click="openModal">
      <font-awesome-icon icon="fa-solid fa-plus" size="2xl" />
    </button>

    <div v-if="isOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Create new board</h2>
        <p>Name your team before chossing a new plan subscription</p>
        <form action="">
          <fieldset>
            <input type="text" placeholder="Enter name of Project" />
          </fieldset>

          <select name="" id="">
            <option value=""></option>
            <option value="">Public</option>
            <option value="">Privated</option>
          </select>

          <button class="btn">
            <router-link to="whiteboard" class="link"> Create </router-link>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
button {
  background: #fff;
  border: none;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  padding: 40px;
  width: 26%;
  border: 1px solid #888;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 32px;
  border-radius: 50%;
} 

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
} 

form fieldset {
  width: 100%;
} 

input, .btn, select {
  width: 100%;
  padding: 10px;
  border: 1px solid #888;
  border-radius: 5px;
  outline: none;
} 

select {
  background: #fff;
}  

.btn {
  background: #5d5a88;
  color: #fff;
}

</style>
