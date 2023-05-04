<template>
 
   <div>
    <Nav/>

  <main>
    <section class="section1">
      <h2>Welcome to collaborative whiteboard app</h2>

      <button id="btn" class="btnget">
        <router-link  to="/sigunp">
          Get started</router-link>

      </button>
      <div class="lucas">
        <!-- <font-awesome-icon icon="fa-solid fa-arrow-pointer" size="xl" style="color: #1d0887;" /> <span>Lucas</span> -->
      </div>

      <div class="fernando">
        <div class="note"></div>
        <!-- <font-awesome-icon icon="fa-solid fa-arrow-pointer" size="xl" style="color: #fe2;" /> <span>Fernando</span> -->
      </div>

    </section>

    <section class="cards">
      <div class="card">

      </div>
      <div class="card2">

      </div>
    </section>
  </main>

  <footer>
    <div class="footer-info">
      <div class="copy">

        Copyright &copy; 2023 Dev Frontend
      </div>


      <div class="terms">

        All Rights Reserved |<a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a>
      </div>
    </div>

  </footer>

  </div>
</template>

<script>
import Nav from '../Navbar/Nav.vue'

export default {
  components: { Nav },


}
</script>

<style scoped>



footer {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  height: 5rem;

  background: #ffffff;
}

.footer-info {
  display: flex;
  gap: 53rem;
  margin: 0 80px;

}

.lucas {
  position: absolute;
  top: 23rem;
  left: 12rem;
  animation: move 5s infinite;
  transition: right 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}


.fernando {
  position: absolute;
  top: 13rem;
  left: 82rem;

}





.fernando span {
  position: relative;
  top: 1rem;
  padding: .2rem .4rem;
  color: #FFFFFF;
  background: rgb(211, 194, 8);
}

.lucas span {
  padding: .2rem .4rem;
  position: relative;
  top: 1rem;
  font-weight: 500;

  color: #FFFFFF;
  background: #5D5A88;
}

main {

  padding-bottom: 8rem;
  background: #F9F9FF;
  background-image: radial-gradient(circle, #00000046 5px, transparent 5px);
  background-size: 25px 25px;
  background-repeat: repeat;
}

.section1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

section {
  max-width: 1200px;
  margin: 0 auto;
}

section h2 {
  padding-top: 60px;
  width: 420px;
  margin: 0 auto;
  text-align: center;
  line-height: 58px;
  font-size: 48px;
  color: #5D5A88;
}

.cards {
  display: flex;

  align-items: center;
  margin-top: 80px;
  justify-content: center;
}

.card {
  width: 313.62px;
  height: 213.61px;
  border-radius: 30px;
  background: url('https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80');
  background-position: center;
  background-size: cover;
}


.card2 {
  width: 470.38px;
  height: 332.46px;
  background: url('https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-position: center;
  background-size: cover;
  border-radius: 30px;
}



.home {
  margin-left: 5rem;
}

.btns {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-right: 5rem;
}


button:nth-child(1) {
  width: 7rem;
  height: 3rem;
  background: #FFFFFF;

  border: 1px solid #D4D2E3;
  border-radius: 10px;
}

.btnlogin {
  color: #5D5A88;
}


.btnsignup{
  width: 12rem;
  height: 3rem;
  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup a, .btnget a{
  color: #ffffff;
}

.btnget{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 18px 34px;
  gap: 8px;

  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup {
  color: #FFFFFF;
}



/* Mobile phones */
@media only screen and (max-width: 480px) {
  /* CSS styles for mobile phones */


footer {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  height: 5rem;

  background: #ffffff;
}

.footer-info {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 2rem;

}

.lucas {
display: none;
}


.fernando {
display: none;

}





.fernando span {
  position: relative;
  top: 1rem;
  padding: .2rem .4rem;
  color: #FFFFFF;
  background: rgb(211, 194, 8);
}

.lucas span {
  padding: .2rem .4rem;
  position: relative;
  top: 1rem;
  font-weight: 500;

  color: #FFFFFF;
  background: #5D5A88;
}

main {

  padding-bottom: 8rem;
  background: #F9F9FF;
  background-image: radial-gradient(circle, #00000046 5px, transparent 5px);
  background-size: 25px 25px;
  background-repeat: repeat;
}

.section1 {

  display: flex;
  flex-direction: column;
  gap: 2rem;
}



section {
  display: flex;
  max-width: 25rem;
  margin: 0 auto;
}

section h2 {
  padding-top: 60px;
  width: 320px;
  margin: 0 auto;
  text-align: left;
  line-height: 58px;
  font-size: 22px;
  color: #5D5A88;
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 80px;
  justify-content: center;
}

.card {
  width: 400.62px;
height: 332.46px;
  border-radius: 30px;
  background: url('https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80');
  background-position: center;
  background-size: cover;
}


.card2 {
  width: 400.38px;
  height: 332.46px;
  background: url('https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-position: center;
  background-size: cover;
  border-radius: 30px;
}



.home {
  margin-left: 5rem;
}

.btns {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-right: 5rem;
}


button:nth-child(1) {
  width: 7rem;
  height: 3rem;
  background: #FFFFFF;

  border: 1px solid #D4D2E3;
  border-radius: 10px;
}

.btnlogin {
  color: #5D5A88;
}


.btnsignup{
  width: 12rem;
  height: 3rem;
  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup a, .btnget a{
  color: #ffffff;
}

.btnget{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 18px 34px;
  gap: 8px;

  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup {
  color: #FFFFFF;
}



}

/* Tablets */
@media only screen and (min-width: 481px) and (max-width: 768px) {
  /* CSS styles for tablets */

.terms {
  position: relative;
  right: 0;
}

footer {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  height: 5rem;

  background: #ffffff;
}

.footer-info {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  margin: 0 80px;

}

.lucas {
display: none;
}


.fernando {
display: none;

}


main {

  padding-bottom: 8rem;
  background: #F9F9FF;
  background-image: radial-gradient(circle, #00000046 1px, transparent 1.5px);
  background-size: 25px 25px;
  background-repeat: repeat;
}

.section1 {
  display: flex;

  flex-direction: column;
  gap: 2rem;
}

section {
  max-width: 25rem;
  margin: 0 auto;
}

section h2 {
  padding-top: 60px;
  width: 420px;
  margin: 0 auto;
  text-align: left;
  line-height: 58px;
  font-size: 28px;
  color: #5D5A88;
}

.cards {
  display: flex;
flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 80px;
  justify-content: center;
}

.card {
  width: 400.62px;
  height: 332.46px;
  border-radius: 10px;
  background: url('https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80');
  background-position: center;
  background-size: cover;
}


.card2 {
  width: 400.38px;
  height: 332.46px;
  background: url('https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-position: center;
  background-size: cover;
  border-radius: 10px;
}



.home {
  margin-left: 5rem;
}

.btns {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-right: 5rem;
}


button:nth-child(1) {
  width: 7rem;
  height: 3rem;
  background: #FFFFFF;

  border: 1px solid #D4D2E3;
  border-radius: 10px;
}

.btnlogin {
  color: #5D5A88;
}


.btnsignup{
  width: 12rem;
  height: 3rem;
  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup a, .btnget a{
  color: #ffffff;
}

.btnget{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 18px 34px;
  gap: 8px;

  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup {
  color: #FFFFFF;
}
}

/* Laptops and desktops */
@media only screen and (min-width: 768px) and (max-width: 992px) {

.terms {
  position: relative;
  right: 0;
}

footer {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  height: 5rem;

  background: #ffffff;
}

.footer-info {
  display: flex;
  gap: 13rem;
  margin: 0 80px;

}

.lucas {
  position: absolute;
  top: 23rem;
  left: 12rem;
  animation: move 5s infinite;
  transition: right 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}


.fernando {
  position: absolute;
  top: 13rem;
  left: 42rem;

}





.fernando span {
  position: relative;
  top: 1rem;
  padding: .2rem .4rem;
  color: #FFFFFF;
  background: rgb(211, 194, 8);
}

.lucas span {
  padding: .2rem .4rem;
  position: relative;
  top: 1rem;
  font-weight: 500;

  color: #FFFFFF;
  background: #5D5A88;
}

main {

  padding-bottom: 8rem;
  background: #F9F9FF;
  background-image: radial-gradient(circle, #00000046 1px, transparent 1.5px);
  background-size: 25px 25px;
  background-repeat: repeat;
}

.section1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

section {
  max-width: 1200px;
  margin: 0 auto;
}

section h2 {
  padding-top: 60px;
  width: 420px;
  margin: 0 auto;
  text-align: center;
  line-height: 58px;
  font-size: 48px;
  color: #5D5A88;
}

.cards {
  display: flex;

  align-items: center;
  margin-top: 80px;
  justify-content: center;
}

.card {
  width: 313.62px;
  height: 213.61px;
  border-radius: 30px;
  background: url('https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80');
  background-position: center;
  background-size: cover;
}


.card2 {
  width: 470.38px;
  height: 332.46px;
  background: url('https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-position: center;
  background-size: cover;
  border-radius: 30px;
}

nav {
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 5px 14px rgba(20, 20, 43, 0.05);
}

.home {
  margin-left: 5rem;
}

.btns {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-right: 5rem;
}


button:nth-child(1) {
  width: 7rem;
  height: 3rem;
  background: #FFFFFF;

  border: 1px solid #D4D2E3;
  border-radius: 10px;
}

.btnlogin {
  color: #5D5A88;
}


.btnsignup{
  width: 12rem;
  height: 3rem;
  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup a, .btnget a{
  color: #ffffff;
}

.btnget{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 18px 34px;
  gap: 8px;

  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup {
  color: #FFFFFF;
}
}

@media only screen and (min-width: 992px) {

.terms {
  position: relative;
  right: 0;
}

footer {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  height: 5rem;

  background: #ffffff;
}

.footer-info {
  display: flex;
  gap: 53rem;
  margin: 0 80px;

}

.lucas {
  position: absolute;
  top: 23rem;
  left: 12rem;
  animation: move 5s infinite;
  transition: right 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}


.fernando {
  position: absolute;
  top: 13rem;
  left: 82rem;

}





.fernando span {
  position: relative;
  top: 1rem;
  padding: .2rem .4rem;
  color: #FFFFFF;
  background: rgb(211, 194, 8);
}

.lucas span {
  padding: .2rem .4rem;
  position: relative;
  top: 1rem;
  font-weight: 500;

  color: #FFFFFF;
  background: #5D5A88;
}

main {

  padding-bottom: 8rem;
  background: #F9F9FF;
  background-image: radial-gradient(circle, #00000046 1px, transparent 1.5px);
  background-size: 25px 25px;
  background-repeat: repeat;
}

.section1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

section {
  max-width: 1200px;
  margin: 0 auto;
}

section h2 {
  padding-top: 60px;
  width: 420px;
  margin: 0 auto;
  text-align: center;
  line-height: 58px;
  font-size: 48px;
  color: #5D5A88;
}

.cards {
  display: flex;

  align-items: center;
  margin-top: 80px;
  justify-content: center;
}

.card {
  width: 313.62px;
  height: 213.61px;
  border-radius: 30px;
  background: url('https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80');
  background-position: center;
  background-size: cover;
}


.card2 {
  width: 470.38px;
  height: 332.46px;
  background: url('https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-position: center;
  background-size: cover;
  border-radius: 30px;
}

nav {
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 5px 14px rgba(20, 20, 43, 0.05);
}

.home {
  margin-left: 5rem;
}

.btns {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-right: 5rem;
}


button:nth-child(1) {
  width: 7rem;
  height: 3rem;
  background: #FFFFFF;

  border: 1px solid #D4D2E3;
  border-radius: 10px;
}

.btnlogin {
  color: #5D5A88;
}


.btnsignup{
  width: 12rem;
  height: 3rem;
  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup a, .btnget a{
  color: #ffffff;
}

.btnget{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 18px 34px;
  gap: 8px;

  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup {
  color: #FFFFFF;
}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

.terms {
  position: relative;
  right: 0;
}

footer {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  height: 5rem;

  background: #ffffff;
}

.footer-info {
  display: flex;
  gap: 53rem;
  margin: 0 80px;

}

.lucas {
  position: absolute;
  top: 23rem;
  left: 12rem;
  animation: move 5s infinite;
  transition: right 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}


.fernando {
  position: absolute;
  top: 13rem;
  left: 82rem;

}





.fernando span {
  position: relative;
  top: 1rem;
  padding: .2rem .4rem;
  color: #FFFFFF;
  background: rgb(211, 194, 8);
}

.lucas span {
  padding: .2rem .4rem;
  position: relative;
  top: 1rem;
  font-weight: 500;

  color: #FFFFFF;
  background: #5D5A88;
}

main {

  padding-bottom: 8rem;
  background: #F9F9FF;
  background-image: radial-gradient(circle, #00000046 1px, transparent 1.5px);
  background-size: 25px 25px;
  background-repeat: repeat;
}

.section1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

section {
  max-width: 1200px;
  margin: 0 auto;
}

section h2 {
  padding-top: 60px;
  width: 420px;
  margin: 0 auto;
  text-align: center;
  line-height: 58px;
  font-size: 48px;
  color: #5D5A88;
}

.cards {
  display: flex;

  align-items: center;
  margin-top: 80px;
  justify-content: center;
}

.card {
  width: 313.62px;
  height: 213.61px;
  border-radius: 30px;
  background: url('https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80');
  background-position: center;
  background-size: cover;
}


.card2 {
  width: 470.38px;
  height: 332.46px;
  background: url('https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-position: center;
  background-size: cover;
  border-radius: 30px;
}

nav {
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 5px 14px rgba(20, 20, 43, 0.05);
}

.home {
  margin-left: 5rem;
}

.btns {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-right: 5rem;
}


button:nth-child(1) {
  width: 7rem;
  height: 3rem;
  background: #FFFFFF;

  border: 1px solid #D4D2E3;
  border-radius: 10px;
}

.btnlogin {
  color: #5D5A88;
}


.btnsignup{
  width: 12rem;
  height: 3rem;
  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup a, .btnget a{
  color: #ffffff;
}

.btnget{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 18px 34px;
  gap: 8px;

  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup {
  color: #FFFFFF;
}
}

/* XX-Large devices (larger desktops, 1400px and up) */

@media (min-width: 1400px) {

.terms {
  position: relative;
  right: 0;
}

footer {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  height: 5rem;

  background: #ffffff;
}

.footer-info {
  display: flex;
  gap: 53rem;
  margin: 0 80px;

}

.lucas {
  position: absolute;
  top: 23rem;
  left: 12rem;
  animation: move 5s infinite;
  transition: right 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}


.fernando {
  position: absolute;
  top: 13rem;
  left: 82rem;

}





.fernando span {
  position: relative;
  top: 1rem;
  padding: .2rem .4rem;
  color: #FFFFFF;
  background: rgb(211, 194, 8);
}

.lucas span {
  padding: .2rem .4rem;
  position: relative;
  top: 1rem;
  font-weight: 500;

  color: #FFFFFF;
  background: #5D5A88;
}

main {

  padding-bottom: 8rem;
  background: #F9F9FF;
  background-image: radial-gradient(circle, #00000046 1px, transparent 1.5px);
  background-size: 25px 25px;
  background-repeat: repeat;
}

.section1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

section {
  max-width: 1200px;
  margin: 0 auto;
}

section h2 {
  padding-top: 60px;
  width: 420px;
  margin: 0 auto;
  text-align: center;
  line-height: 58px;
  font-size: 48px;
  color: #5D5A88;
}

.cards {
  display: flex;

  align-items: center;
  margin-top: 80px;
  justify-content: center;
}

.card {
  width: 313.62px;
  height: 213.61px;
  border-radius: 30px;
  background: url('https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80');
  background-position: center;
  background-size: cover;
}


.card2 {
  width: 470.38px;
  height: 332.46px;
  background: url('https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-position: center;
  background-size: cover;
  border-radius: 30px;
}

nav {
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 5px 14px rgba(20, 20, 43, 0.05);
}

.home {
  margin-left: 5rem;
}

.btns {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-right: 5rem;
}


button:nth-child(1) {
  width: 7rem;
  height: 3rem;
  background: #FFFFFF;

  border: 1px solid #D4D2E3;
  border-radius: 10px;
}

.btnlogin {
  color: #5D5A88;
}


.btnsignup{
  width: 12rem;
  height: 3rem;
  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup a, .btnget a{
  color: #ffffff;
}

.btnget{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 18px 34px;
  gap: 8px;

  background: #5D5A88;
  border-radius: 10px;
  border: none;
}

.btnsignup {
  color: #FFFFFF;
}
}

</style>