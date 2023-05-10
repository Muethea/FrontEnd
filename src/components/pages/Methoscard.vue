<template>
  <div class="card">
    <div class="content">
      <div class="list" v-if="!showList">
        <ul>
          <li>Share</li>
          <li>Select...</li>
          <li>Add to space</li>
          <li>Delete</li>
        </ul>
      </div>
    </div>
    <div class="info">
      <img src="../../assets/img/images.jpeg" alt="" />
      <div class="details">
        <h3>Title</h3>
        <p>last modification</p>
      </div>
      <div class="dot" @click="showList = !showList">
        <span class="dot-svg">
          <img
            src="../../assets/img/dot-menu-more-2-svgrepo-com.svg"
            class="svg-img"
          />
        </span> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
        showList: true
      }
    }
};
</script>

<style scoped>
.card {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
  border-radius: 5px; 


} 

.card:hover {
    transition: 1s;
    box-shadow: 0 4px 12px rgb(0 0 0 /0.2);

}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  height: 100%;
  color: var(--color-text);
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.info img {
  width: 70px;
  height: 70px;
  padding: 10px;
  border-radius: 50%;
}

.details {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-basis: 90%;
}
.details h3 {
  text-align: left;
  margin-top: 16px;
  font-size: 18px;
}

.details p {
  font-size: 12px;
  line-height: 8px;
}

.dot {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  flex-basis: 10%;
}

.dot span .svg-img {
  width: 40px;
  height: auto;
  border-radius: 2px;
  cursor: pointer;
  transition: 1s;
}

.dot span .svg-img:hover {
  background: #ccc;
}

ul {
  list-style: none;
  border-radius: 5px;
  padding: 5px;
  background: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 /0.2);
  position: relative;
  top: 90px;
  left: 180px;
}

ul li {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  width: 100px;
  line-height: 22px;
  padding: 5px;
}
.list { 
  width: 40%;
  transition: 1s;
} 

</style>
