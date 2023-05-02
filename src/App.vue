<script >


import Loader from './components/loader/Loader.vue';
import {  AUTO_LOGIN_ACTION } from './store/storeconstants'
import { mapState } from 'vuex';

export default{

  computed:{

    ...mapState({
     showLoading: (state) => state.showLoading
    })
  },
  components:{
    Loader,
 
},

    created(){
      this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`)
    }
}

</script>

<template>
  <div>
   
    <Loader v-if="showLoading"/>
    <router-view></router-view>
  </div>
</template>

<style >

a{
  text-decoration: none;
}

*, ::after, ::before {
    box-sizing: border-box;
}


</style>
