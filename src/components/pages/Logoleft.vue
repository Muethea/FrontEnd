<template>
    <div class="logo__left">
        <div class="logo">
            <h2>Logo</h2>
        </div>
        <ul>
            <li>Home</li>
            <li>Documents</li>
            <li>Spaces</li>
            <li>Apps</li>
        </ul>
    </div>
</template> 

<script>

</script> 

<style scoped>
.logo__left {
  position: fixed;
  top: 0;
  left: 0;
  width: 8%;
  height: 100vh;
  background-color: #f1f1f1;
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
}

ul li:hover {
  background-color: #ddd;
  color: #333;
  cursor: pointer;
}
</style>