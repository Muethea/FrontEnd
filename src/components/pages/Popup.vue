<template>
  <div>
    <button @click="openModal">
      <span class="plus">&#43;</span>
    </button>

    <div v-if="isOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Create new board</h2>
        <p>Name your team before choosing a new plan subscription</p>
        <form action="">
          <fieldset>
            <input
              type="text"
              placeholder="Enter name of Project"
              v-model="projectName"
              required
            />
          </fieldset>

          <select v-model="visibility">
            <option value="" disabled>Select the text</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>

          <button class="btn" :disabled="!isValid">
            <router-link v-if="isValid" to="whiteboard" class="link">
              Create
            </router-link>
            <span v-else> Create </span>
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
      projectName: "",
      visibility: "",
    };
  },
  computed: {
    isValid() {
      return this.projectName !== "" && this.visibility !== "";
    },
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
  background-color: rgba(0, 0, 0, 0.2);
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

input,
.btn,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #888;
  border-radius: 5px;
  outline: none;
}

select {
  background: #fff;
  font-size: 16px;
  background-repeat: no-repeat;
  background-position: right center;
} 

select:focus, input:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    border-color: #888;
  } 
  select::-webkit-scrollbar {
    /* Estilizações da barra de rolagem */
    width: 8px;
  } 


  select::-webkit-scrollbar-thumb {
    /* Estilizações do polegar (a parte deslizante da barra de rolagem) */
    background-color: #888;
    border-radius: 4px;
  }

.btn {
  background: #5d5a88;
  color: #fff;
}

.link {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}
.link:hover {
  color: #888;
  transition: 08s;
} 

.plus {
  font-size: 60px;
  font-weight: 100;

}
</style>
