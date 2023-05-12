<template>
  <nav>
    <div class="nav-left">
      <div class="nav-user-icon">
        <font-awesome-icon icon="fa-solid fa-user" class="user" />
      </div>
    </div>
    <div class="nav-right">
      <div class="search-box">
        <font-awesome-icon icon="fa-solid fa-search" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  </nav>
</template> 

<script>
</script> 
<style scoped>
nav {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  background: #5d5a88;
  padding: 5px 5%;
  border-bottom: 1px solid #000;

  position: sticky;
  top: 0;
  z-index: 0;
  grid-area: nav;
}

.logo {
  width: 160px;
  margin-right: 45px;
}
.nav-left {
  display: flex;
  align-items: baseline;
  justify-content: center;
}
.nav-right {
  display: flex;
  align-items: center;
  margin-left: 8rem;
}
.nav-left ul li {
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.nav-user-icon {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-left: 26px;
}
.search-box {
  background: #efefef;
  width: 350px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 15px;

  margin-left: 180px;
}
.search-box input {
  background: transparent;
  padding: 8px;
  outline: none;
  border: 0;
  width: 400px;
}
</style>