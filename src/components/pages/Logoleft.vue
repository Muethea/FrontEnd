<template>
    <div class="logo__left">
        <div class="logo">
            <h2>Logo</h2>
        </div>
        <ul>
            <li>
              <font-awesome-icon icon="fa-solid fa-home" class="icon" />
              Home</li>
            <li>
              <font-awesome-icon icon="fa-solid fa-layer-group" class="icon" />
              Documents</li>
            <li>
              <font-awesome-icon icon="fa-user-group" class="icon" />
              Group</li>
        </ul>

        <div class="user__name">
           <p>Alexandre</p>
        </div>
    </div>
</template> 

<script>

</script> 

<style scoped>
.logo__left {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
}

.logo {
  text-align: center;
  padding: 20px;
}

.logo h2 {
  color: #333;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul li {
  padding: 10px;
  color: #666;
  font-size: 12px;
}

ul li:hover {
  background-color: #ddd;
  color: #333;
  cursor: pointer;
} 

.user__name {
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0; 

  display: flex;
  justify-content: center;
  align-items: center; 

  background: #ddd;
  padding: 10px;
} 

.user__name p {
  font-size: 12px;
} 

.icon {
  font-size: 18px;
}
</style>