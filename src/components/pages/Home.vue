<template>
  <div class="opacity-layout" id="blur">
    <Nav />
    <main>
      <section class="section1">
        <div class="top-right">
          <div class="perf">
            <div class="nota nota3"></div>
             <small>Alexandre I. Amado</small>
          </div>
        <div class="midia">
            <font-awesome-icon icon="fa-solid fa-phone" />
           <font-awesome-icon icon="fa-solid fa-video" />
           <font-awesome-icon icon="fa-solid fa-share" />
           </div>
        </div>
        <div class="tool">

          <font-awesome-icon icon="fa-solid fa-arrow-pointer" size="xl" />

        <font-awesome-icon icon="fa-solid fa-pen-nib" rotation={90} size="xl" />

    <font-awesome-icon icon="fa-solid fa-note-sticky" size="xl" />

    <font-awesome-icon icon="fa-solid fa-text" size="xl"/>

    <font-awesome-icon icon="fa-solid fa-shapes" size="xl"/>
  <font-awesome-icon icon="fa-solid fa-square-plus" size="xl" />

    <font-awesome-icon icon="fa-solid fa-upload" size="xl" />


        </div>
        <div class="wellcome">
            <div class="text">

              <h2>Welcome to collaborative whiteboard app</h2>
            </div>

            <div class="botoes">
          <button  class="start">
              <router-link to="/sigunp"> Get Start</router-link>
            </button>
             <button  class=" watch">
                <router-link to="#"> Watch the Video 
                  <font-awesome-icon icon="fa-solid fa-circle-play" size="xl"/>
                </router-link>
              </button>
            </div>
        
        </div>
       
      </section>
   <div class="notas">
            <div class="nota nota1"></div>
            <div class="nota nota2"></div>
            <div class="nota nota3"></div>
                  </div>
    </main>
    <section class="ideas section2 container">
      <div class="infinito">
        <div class="info-ideas">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-users" size="2xl" />
          </div>
          <div class="info">
            <h3>Remote Collaboration</h3>
            <small>Enable users to collaborate on a project, allowing them to create, draw, write, and add notes and
              comments</small>
          </div>
        </div>
        <div class="info-ideas">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-infinity" size="2xl" />
          </div>
          <div class="info">

            <h3>Infinito Board</h3>
            <small>You need to be free and get an infinite space for your ideas to flow </small>
          </div>

        </div>

        <div class="info-ideas">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-lightbulb" size="2xl" />
          </div>
          <div class="info">

            <h3>Allow your ideas to flow</h3>
            <small>You need to be free and get an infinite space for your ideas to flow </small>
          </div>
        </div>
        <div class="w">
          <button type="button" class="btn  creacte">
            Creacte a whiteboard
          </button>
        </div>
      </div>
      <div class="rigth">
        <img src="/Collaboration.jpg" alt="">
      </div>
    </section>
    <div class="collabor">
      <section class="ideas section3 container">
        <div class="rigth">
          <img src="/cola.jpg" alt="">
        </div>
        <div class=" text-align">
          <h5> Collaborate anytime, anywhere</h5>
          <ul>
            <li>
              <span>01.</span>
              Easily share ideas with team members on an interactive drag-and-drop canvas.
            </li>


            <li>
              <span>02.</span>
              Lead productive workshops with facilitation features like timer, private mode, call users, and more.
            </li>
            <li>
              <span>03.</span>
              Add comments and notes that move with your stickies so you never lose the conversation.
            </li>
            <li>
              <span>04.</span>
              Generate results quickly with hundreds of templates for retrospectives, brainstorms, and more.
            </li>
          </ul>
          <div class="w">
            <button type="button" class="btn  creacte">
              Creacte a whiteboard
            </button>
          </div>

        </div>

      </section>
    </div>
    <footer>
      <div class="footer-info">
        <div class="copy">Copyright &copy; 2023 Dev Frontend</div>
        <div class="terms">
          All Rights Reserved |<a href="#">Terms and Conditions</a> |
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  </div>
  <div class="container btn-right"></div>
  <div id="popup" class="popup">
    <div class="popup-width">
      <h1>Create Beautiful Projects using a whiteboard</h1>
    </div>

    <div class="popup-button">
      <p>Open a free account and start building you projects</p>
      <button type="submit" class="button-btn" id="btn">
        <router-link to="/sigunp">Sign up for free</router-link>
      </button>
    </div>
    <a href="#" @click="toggle()" class="close-button" title="close">
      <font-awesome-icon icon="fa-solid fa-circle-xmark" />
    </a>
  </div>
</template>

<script>
import Nav from "../Navbar/Nav.vue";
export default {
  components: { Nav },
  mounted() {
    setTimeout(() => {
      this.toggle();
    }, 2000)
  },
  methods: {
    toggle() {
      var blur = document.getElementById("blur");
      blur.classList.toggle("active");

      var popup = document.getElementById("popup");
      popup.classList.toggle("active");

      if (!popup.classList.contains("active")) {
        setTimeout(() => {
          blur.classList.remove("active");
        }, 500);
      }
    },
  },
};
</script>

<style scoped>  


    .text-align ul {
      margin-top: 3rem;
      list-style: none;
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 1.3rem;
      width: 22rem;
    }

    .text-align h5 {
      font-weight: 600;
      font-size: 18px;
    }

    .alin {
      text-align: justify;
    }

    .text-align h5 {
      text-align: center;
    }


    li {
      display: flex;
      font-size: 1rem;
      gap: 1rem;
    }

    li span {
      
      font-weight: 600;
      font-size: 1.2rem;
    }

.section2{
  margin-top: 4rem;
}



    .top-right{
       display: none;
    }

    .top-right .nota3{
      margin-top: -2rem;
      margin-left: 1rem;
      width: 2.3rem;
      height: 2.3rem;
 
    }

    .top-right .perf{
      display: flex;
      align-items: center;
    }
    .top-right small{
           margin-top: -2rem;
      margin-left: 1rem;
      font-weight: 500;
    }

    .top-right .midia{
      display: none;
    }
 
    .notas{
      display: none;
    }

    .nota{
      width: 3rem;
      height: 3rem;
       box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
      background: rgb(191, 191, 191);
      border-radius: .7rem;
    
    }

  .nota1{
    background-image: url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80');

    background-repeat: none;
    background-size: cover;
  }

  .nota2{
    background-image: url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80');

    background-repeat: none;
    background-size: cover;
  }

  .nota3{
    background-image: url('https://avatars.githubusercontent.com/u/46411490?v=4');

    background-repeat: none;
    background-size: cover;
  }
    .tool{
     display: none;
    }

    .botoes .start{
       padding: 30px ;
    }
 .botoes{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
.botoes .start{
     display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
       padding: 18px 34px;
      gap: 8px;
      width: 13rem;
      background: #5d5a88;
    }
    .wellcome{
      max-width: 320px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      text-align: center;
      gap: 3rem;
      flex-direction: column;
  
    }

    .wellcome h2{
      margin-top: 12rem;
      width: 30rem;
      font-size: 1.3rem;
      color: #000000;
    }

    .wellcome .btnget{
      display: flex;
      justify-content: center;
      text-align: center;
      width: 13rem;
    }

 

    .info-ideas{
      margin-top: 3rem;
      display: flex;
      gap: 1rem;
    }

    .info-ideas .info{
      width: 24rem;
    }

    .w {
      display: flex;
      justify-content: center;
    }

    .ideas{
      padding: 2rem;
      display: flex;
      flex-direction: column-reverse;
    }
.watch{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 18px 34px;
      gap: 8px;
        background: none;

      border-radius: 10px;
      border: none;
}


   .popup-width {
    width: 220px;
    font-size: 1.3rem;
    line-height: 45px;
    margin-bottom: 24px;
    font-weight: bold;
  }

.watch a{
      color: #5d5a88;

      font-size: 20px;
      font-weight: 600;
}
.collabor {
  padding: 4rem 0;
    background: #ededed;
  }



  .rigth img {
    width: 100%;
    margin: 0 auto;
    border-radius: 1rem;
  }

  .w .creacte {
    border: none;
    color: #fff;
    width: 12rem;
    background: #5d5a88;
    margin-bottom: 3rem;
  }

  .opacity-layout#blur.active {
    filter: blur(20px);
    pointer-events: none;
    user-select: none;
  }

  .opacity-layout {
    opacity: 1;
    transition: opacity 0.6s ease-in-out;
  }

  .opacity-layout.active {
    opacity: 1;
    pointer-events: none;
    user-select: none;
  }

  a {
    color: #ffffff;
  }

  #popup {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 380px;
    padding: 50px;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
    background: #fff;
    visibility: hidden;
    transition: 0.5s;
    opacity: 0;
    border-radius: 5px;
  }

  #popup.active {
    top: 50%;
    visibility: visible;
    opacity: 1;
    transition: 0.6s;
  }

  .popup-width {
    width: 250px;
    font-size: 1.2rem;
    line-height: 45px;
    margin-bottom: 24px;
    font-weight: bold;
  }

 
  .popup-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 38px;
  }

  .button-btn {
    width: 80%;
    margin-top: 16px;
    padding: 16px;
    border: none;
    background-color: #5d5a88;
    border-radius: 5px;
    color: #fff;
    transition: 0.6s;
    cursor: pointer;
    font-size: 16px;
  }

  .button-btn:hover {
    background-color: #5d5a88aa;
    color: #fff;
  }

  .close-button {
   
    color: #000000;
    border: none;
    padding: 12px;
    font-size: 24px;
    border-radius: 50%;
    cursor: pointer;

    position: absolute;
    top: 0;
    right: 0;
    margin-top: 25px;
    margin-right: 25px;
    transition: 0.5s;
  }

  .btn-right {
    position: relative;
  }


  footer {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    height: 5rem;

    background-color: #00031f;
  }

  .footer-info {
    display: flex;
    gap: 53rem;
    margin: 0 80px;

  }



  main {

    background: #f9f9ff;
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



  .cards {
    display: flex;

    align-items: center;
    margin-top: 80px;
    justify-content: center;
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
    background: #ffffff;

    border: 1px solid #d4d2e3;
    border-radius: 10px;
  }

  .btnlogin {
    color: #5d5a88;
  }

  .btnsignup {
    width: 12rem;
    height: 3rem;
    background: #5d5a88;
    border-radius: 10px;
    border: none;
  }

  .btnsignup a,
  .btnget a {
    color: #ffffff;
  }

  .btnget {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 18px 34px;
    gap: 8px;

    background: #5d5a88;
    border-radius: 10px;
    border: none;
  }

  .btnsignup {
    color: #ffffff;
  }

  footer {
    padding: 4rem 0;
    background-color: #00031f;
  }

  /* Mobile phones */
  @media only screen and (max-width: 480px) {
      .popup-width {
    width: 420px;
    font-size: 1.3rem;
    line-height: 45px;
    margin-bottom: 24px;
    font-weight: bold;
  }

    footer {
      display: flex;
      align-items: center;
      margin-top: 2rem;
      height: 5rem;
         color: #fff;

    }

    .footer-info {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 0 2rem;
      color: #fff;
    }

  

  
    main {
      
      background: #f9f9ff;
      background-image: radial-gradient(circle, #00000046 5px, transparent 5px);
      background-size: 25px 25px;
      background-repeat: repeat;
    }

    .section1 {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }




    .cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      margin-top: 80px;
      justify-content: center;
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
      background: #ffffff;

      border: 1px solid #d4d2e3;
      border-radius: 10px;
    }

    .btnlogin {
      color: #5d5a88;
    }

    .btnsignup {
      width: 12rem;
      height: 3rem;
      background: #5d5a88;
      border-radius: 10px;
      border: none;
    }

    .btnsignup a,
    .btnget a {
      color: #ffffff;
    }

    .btnget {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 18px 34px;
      gap: 8px;

      background: #5d5a88;
      border-radius: 10px;
      border: none;
    }

    .btnsignup {
      color: #ffffff;
    }
  }

  /* Tablets */
  @media only screen and (min-width: 481px) and (max-width: 768px) {

  .wellcome{
      padding: 5rem 0;
      display: flex;
      align-items: center;
      text-align: center;
      gap: 2rem;
      
      flex-direction: column;
      justify-content: center;
    }

    .wellcome h2{
      width: 27rem;
      margin: 0 auto;
      font-size: 1.6rem;
      color: #000000;
    }


    .info h3 {
      font-size: 20px;
      width: 20rem;
    }


      #popup {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:460px;
    padding: 50px;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
    background: #fff;
    visibility: hidden;
    transition: 0.5s;
    opacity: 0;
    border-radius: 5px;
  }

      .popup-width {
    width: 388px;
    font-size: 1.3rem;
    line-height: 45px;
    margin-bottom: 24px;
    font-weight: bold;
  }

    .terms {
      position: relative;
      right: 0;
    }

    footer {
      display: flex;
      align-items: center;
      margin-top: 2rem;
      height: 5rem;

    }

    .footer-info {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 1rem;
      margin: 0 80px;
         color: #fff;
    }

    .footer-info a{
      color: #5d5a88;
    }


    main {
      padding-bottom: 8rem;
      background: #f9f9ff;
      background-image: radial-gradient(circle, #00000046 1px, transparent 1.5px);
      background-size: 25px 25px;
      background-repeat: repeat;
    }

    .section1 {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }




    .cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      margin-top: 80px;
      justify-content: center;
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
      background: #ffffff;

      border: 1px solid #d4d2e3;
      border-radius: 10px;
    }

    .btnlogin {
      color: #5d5a88;
    }

    .btnsignup {
      width: 12rem;
      height: 3rem;
      background: #5d5a88;
      border-radius: 10px;
      border: none;
    }

    .btnsignup a,
    .btnget a {
      color: #ffffff;
    }

    .btnget {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 18px 34px;
      gap: 8px;

      background: #5d5a88;
      border-radius: 10px;
      border: none;
    }

    

    .btnsignup {
      color: #ffffff;
    }
  }

  /* Laptops and desktops */
  @media only screen and (min-width: 768px) and (max-width: 992px) {

      .wellcome{
      padding: 5rem 0;
      display: flex;
      align-items: center;
      text-align: center;
      gap: 4rem;
      
      flex-direction: column;
      justify-content: center;
    }

    .wellcome h2{
      width:30rem;
      margin: 0 auto;
      font-size: 2.5rem;
      color: #000000;
    }

      .info h3 {
      font-size: 18px;
      width: 20rem;
    }

    .ideas{
       display: flex;
       justify-content: center;
       padding-bottom: 4rem ;
       padding-left: 3rem;
       padding-right:3rem ;
      flex-direction: row;
    }
   .infinito {
      display: flex;
      padding: 3rem ;
      gap: 1rem;
      flex-direction: column;
    }
   .info-ideas {
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      display: flex;
      gap: 1rem;
    }

    .ideas {
      padding: 4rem 0;
      justify-content: center;
      gap: 1rem;
      display: flex;
      align-items: center;
    }
     .botoes{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
    }
    .watch{

      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 18px 34px;
      gap: 2px;
        background: none;
      border-radius: 10px;
      border: none;
}


      #popup {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 570px;
    padding: 50px;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
    background: #fff;
    visibility: hidden;
    transition: 0.5s;
    opacity: 0;
    border-radius: 5px;
  }
    .popup-width {
    width: 480px;
    font-size: 1.3rem;
    line-height: 45px;
    margin-bottom: 24px;
    font-weight: bold;
  }

    .section2 .btn .creacte {
      margin-right: 10rem;
    }


    .text-align ul {
      margin-top: 3rem;
      list-style: none;
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 1.3rem;
      width: 22rem;
    }

    .text-align h5 {
      font-weight: 600;
      font-size: 18px;
    }

    .alin {
      text-align: justify;
    }

    .text-align h5 {
      text-align: right;
    }


    li {
      display: flex;
      font-size: .9rem;
      gap: 1rem;
    }

    li span {
      font-weight: 600;
      font-size: 1.2rem;
    }

    .alin {
      text-align: right;
    }

    .collabor {
      padding: .4rem ;
    }

    .rigth img {
      width: 13rem;
    
    }


    .info small {
      display: flex;
      text-align: justify;
      width: 12rem;

    }

    .icon {
      padding: 1rem;
      background: #f1f1f141;
    }
    .terms {
      position: relative;
      right: 0;
    }

    footer {
      display: flex;
      align-items: center;
      margin-top: 2rem;
      height: 5rem;

    }

    .footer-info {
      display: flex;
      gap: 7rem;
      margin: 0 60px;
      color: #fff;
    }


      .footer-info a{
      color: #5d5a88;
    }



    main {
      padding: 5rem 0;
      background: #f9f9ff;
      background-image: radial-gradient(circle, #00000046 1px, transparent 1.5px);
      background-size: 25px 25px;
      background-repeat: repeat;
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
      background: #ffffff;

      border: 1px solid #d4d2e3;
      border-radius: 10px;
    }

    .btnlogin {
      color: #5d5a88;
    }

    .btnsignup {
      width: 12rem;
      height: 3rem;
      background: #5d5a88;
      border-radius: 10px;
      border: none;
    }

    .btnsignup a,
    .btnget a {
      color: #ffffff;
    }

    .btnget {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 18px 34px;
      gap: 8px;

      background: #5d5a88;
      border-radius: 10px;
      border: none;
    }

    .btnsignup {
      color: #ffffff;
    }
  }

  @media only screen and (min-width: 992px) {

      .info h3 {
      font-size: 20px;
      width: 20rem;
    }


    .botoes{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
    }
.botoes .start{
     display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
       padding: 18px 34px;
      gap: 8px;
      width: 13rem;
      background: #5d5a88;
    }
    .wellcome{
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      text-align: center;
      gap: 3rem;
      flex-direction: column;
      justify-content: center;
    }

    .wellcome h2{
      width: 60rem;
      margin: 0 auto;
      font-size: 2.3rem;
      color: #000000;
    }

    .wellcome .btnget{
      display: flex;
      justify-content: center;
      text-align: center;
      width: 13rem;
    }
     .creacte {
      margin-left: 14rem;
    }

    .section2  .creacte {
      margin-left: -14rem;
    }

    li {
      display: flex;
      font-size: 1.1rem;
      gap: 1rem;
    }

    li span {
      font-weight: 600;
      font-size: 1.5rem;
    }


    .text-align ul {
      margin-top: 3rem;
      list-style: none;
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 3rem;
      width: 26rem;
    }

    .text-align h5 {
      font-weight: 600;
      font-size: 20px;
    }

    .alin {
      text-align: justify;
    }

    .text-align h5 {
      text-align: right;
    }

    .collabor {
      padding: 4rem 0;
    }

    .rigth img {
      width: 100%;
      border-radius: 1rem;
    }

    .infinito {
      display: flex;
      padding: 4rem 0;
      gap: 1rem;
      flex-direction: column;
    }

    .info h3 {
      font-size: 20px;
      width: 20rem;
    }

    .info small {
      display: flex;
      text-align: justify;
      width: 18rem;

    }

     .icon {
      padding: 1rem;
      background: #f1f1f173;
        margin-bottom: 2.3rem;
    }



    .info-ideas {

      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }

    .ideas {
   
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .terms {
      position: relative;
      right: 0;
    }

    footer {
      display: flex;
      align-items: center;
      margin-top: 2rem;
      height: 5rem;


    }

    .footer-info {
      display: flex;
      gap: 13rem;
      margin: 0 80px;
      color: #fff;
    }

    .footer-info a{
        color: #5d5a88;
    }

  
    
    main {
      padding: 12rem 0;
      background: #f9f9ff;
      background-image: radial-gradient(circle, #00000046 1px, transparent 1.5px);
      background-size: 25px 25px;
      background-repeat: repeat;
    }

    .section1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
    }




    .cards {
      display: flex;

      align-items: center;
      margin-top: 80px;
      justify-content: center;
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
      background: #ffffff;

      border: 1px solid #d4d2e3;
      border-radius: 10px;
    }

    .btnlogin {
      color: #5d5a88;
    }

    .btnsignup {
      width: 12rem;
      height: 3rem;
      background: #5d5a88;
      border-radius: 10px;
      border: none;
    }

    .btnsignup a,
    .btnget a {
      color: #ffffff;
    }

    .btnget {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 18px 34px;
      gap: 8px;

      background: #5d5a88;
      border-radius: 10px;
      border: none;
    }

    .btnsignup {
      color: #ffffff;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {

    .section2 {
      padding: 4rem 0;
    }

    .terms {
      position: relative;
      right: 0;
    }

    footer {
      display: flex;
      align-items: center;
      margin-top: 2rem;
      height: 5rem;

    }

    .footer-info {
      display: flex;
      gap: 63rem;
      margin: 0 60px;
    }

    main {
      padding-bottom: 8rem;
      background: #f9f9ff;
      background-image: radial-gradient(circle, #00000046 1px, transparent 1.5px);
      background-size: 25px 25px;
      background-repeat: repeat;
    }

    .section1 {
      padding-top: 12rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
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
      background: url("https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80");
      background-position: center;
      background-size: cover;
    }

    .card2 {
      width: 470.38px;
      height: 332.46px;
      background: url("https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
      background-position: center;
      background-size: cover;
      border-radius: 30px;
    }

    nav {

      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;

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
      background: #ffffff;

      border: 1px solid #d4d2e3;
      border-radius: 10px;
    }

    .btnlogin {
      color: #5d5a88;
    }

    .btnsignup {
      width: 12rem;
      height: 3rem;
      background: #5d5a88;
      border-radius: 10px;
      border: none;
    }

    .btnsignup a,
    .btnget a {
      color: #ffffff;
    }

    .btnget {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 18px 34px;
      gap: 8px;

      background: #5d5a88;
      border-radius: 10px;
      border: none;
    }

    .btnsignup {
      color: #ffffff;
    }
  }

  /* XX-Large devices (larger desktops, 1400px and up) */

  @media (min-width: 1400px) {

    .ideas

    .wellcome{
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      text-align: center;
      gap: 3rem;
      flex-direction: column;
      justify-content: center;
    }

    .wellcome h2{
      width: 60rem;
      margin: 0 auto;
      font-size: 2.3rem;
      color: #000000;
    }

    .wellcome .btnget{
      display: flex;
      justify-content: center;
      text-align: center;
      width: 13rem;
    }
    .btn .creacte {
      margin-left: 14rem;
    }

    .section2 .btn .creacte {
      margin-left: -14rem;
    }

    li {
      display: flex;
      font-size: 1.1rem;
      gap: 1rem;
    }

    li span {
      font-weight: 600;
      font-size: 1.5rem;
    }


    .text-align ul {
      margin-top: 3rem;
      list-style: none;
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 3rem;
      width: 26rem;
    }

    .text-align h5 {
      font-weight: 600;
      font-size: 20px;
    }

    .alin {
      text-align: justify;
    }

    .text-align h5 {
      text-align: right;
    }

    .collabor {
      padding: 4rem 0;
    }

    .rigth img {
      width: 40rem;
      border-radius: 1rem;
    }

    .infinito {
      display: flex;
      padding: 4rem 0;
      gap: .3rem;
      flex-direction: column;
    }

    .info h3 {
      font-size: 20px;
      width: 20rem;
    }

    .info small {
      display: flex;
      text-align: justify;
      width: 28rem;

    }

    .info-ideas{
      display: flex;
      gap: 1rem;
    }

    .info-ideas .info{
      width: 24rem;
    }


    .btn {
      display: flex;
      justify-content: center;
    }

    .ideas{
      display: flex;
      justify-content: center;
      gap: 20rem;
      flex-direction: row;
    }

     #popup {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    padding: 50px;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
    background: #fff;
    visibility: hidden;
    transition: 0.5s;
    opacity: 0;
    border-radius: 5px;
  }

      .popup-width {
    width: 500px;
    font-size: 1.3rem;
    line-height: 45px;
    margin-bottom: 24px;
    font-weight: bold;
  }


    .top-right{
          display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: 2rem;
      gap: 2rem;
      background: #ffffff;
      top: 4rem;
      right:.3rem;
      width: 22rem;
      height: 4rem;
      border-radius: 1rem;
       box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
      position: absolute;
    }

    .top-right .nota3{
      margin-top: -2rem;
      margin-left: 1rem;
      width: 2.3rem;
      height: 2.3rem;
 
    }

    .top-right .perf{
      display: flex;
      align-items: center;
    }
    .top-right small{
           margin-top: -2rem;
      margin-left: 1rem;
      font-weight: 500;
    }

    .top-right .midia{
      margin-top: -2rem;
      display: flex;
      gap: 1rem;
    }
 
    .notas{
    margin-top: 18rem;
      display: flex;
      justify-content: center;
      gap: 2rem;
     
      
    }

    .nota{
      width: 3rem;
      height: 3rem;
       box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
      background: rgb(191, 191, 191);
      border-radius: .7rem;
    
    }

  .nota1{
    background-image: url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80');

    background-repeat: none;
    background-size: cover;
  }

  .nota2{
    background-image: url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80');

    background-repeat: none;
    background-size: cover;
  }

  .nota3{
    background-image: url('https://avatars.githubusercontent.com/u/46411490?v=4');

    background-repeat: none;
    background-size: cover;
  }
    .tool{
      display: flex;
      flex-direction: column;
      padding-top: 2rem;
      gap: 3rem;
      background: #ffffff;
      top: 15rem;
      left:.3rem;
      width: 4rem;
      height: 30rem;
      border-radius: 1rem;
       box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
      position: absolute;
    }

    .botoes .start{
       padding: 30px ;
    }

    .note {
      position: absolute;
    }

    .terms {
      position: relative;
      right: 0;
    }

    footer {
      margin-top: 0;
      display: flex;
      align-items: center;
      padding: 4rem;
      height: 15rem;
      color: #fff;

    }

    .footer-info {
      display: flex;
      justify-content: space-around;

    }


    main {
      padding-bottom: 10rem;
      background: #f9f9ff;
      background-image: radial-gradient(circle, #00000046 1px, transparent 1.5px);
      background-size: 25px 25px;
      background-repeat: repeat;
    }

    .section1 {
      margin: 0 12rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }



    section h2 {
      width: 400px;
      color: #5d5a88;
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
      background: url("https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80");
      background-position: center;
      background-size: cover;
    }

    .card2 {
      width: 470.38px;
      height: 332.46px;
      background: url("https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
      background-position: center;
      background-size: cover;
      border-radius: 30px;
    }

    nav {

      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
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
      background: #ffffff;

      border: 1px solid #d4d2e3;
      border-radius: 10px;
    }

    .btnlogin {
      color: #5d5a88;
    }

    .btnsignup {
      width: 12rem;
      height: 3rem;
      background: #5d5a88;
      border-radius: 10px;
      border: none;
    }

    .btnsignup a,
    .btnget a {
      color: #ffffff;
    }

    .btnget {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 18px 34px;
      gap: 8px;

      background: #5d5a88;
      border-radius: 10px;
      border: none;
    }

    .btnsignup {
      color: #ffffff;
    }
  }</style>