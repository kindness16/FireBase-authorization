<template>
  <div id="nav">
    <router-link class="menu" to="/">Home</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
router-link{
    color: red;
}</style>
<script>
import './assets/style.scss'
import {onBeforeMount} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import firebase from 'firebase'

export default {
  setup(){
    const router = useRouter()
    const route = useRoute()

    onBeforeMount(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
          router.replace('/login')
        }else if(route.path == '/login' || route.path == '/register'){
          router.replace('/')
        }
      })
    })
  }
}
</script>
