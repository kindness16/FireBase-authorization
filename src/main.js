import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxgePMRr3zbpIIqDffyTriCKBwear3360",
  authDomain: "vue-author-c55aa.firebaseapp.com",
  projectId: "vue-author-c55aa",
  storageBucket: "vue-author-c55aa.appspot.com",
  messagingSenderId: "903013232989",
  appId: "1:903013232989:web:fd269ed44d8b76c9a6f8b4",
};
firebase.initializeApp(firebaseConfig)
createApp(App)
  .use(router)
  .mount("#app");
