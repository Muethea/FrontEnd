<template>
    <nav>
        <div class="nav-left">
            <ul>
                <li>Upgrade Now</li>
                <li><i class="fa-regular fa-grid-2"></i></li>
                <li><font-awesome-icon icon="fa-solid fa-bell"/></li>
            </ul>
            <div class="nav-user-icon">
                <font-awesome-icon icon="fa-solid fa-user" class="user" />
            </div>
        </div>
        <div class="nav-right">
            <div class="search-box">
                <font-awesome-icon icon="fa-solid fa-search" />
                <input type="text" placeholder="Search">
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
  
  /* Posicao fixa */
  position: sticky;
  top: 0;
  z-index: 0;
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
  padding: 0 15px;
}

.search-box input {
  width: 100%;
  background: transparent;
  padding: 10px;
  outline: none;
  border: 0;
}
</style>