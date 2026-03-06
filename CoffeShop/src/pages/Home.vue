<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import "./Home.css";
import coffeeBean from "../assets/videos/CoffeeBean.mp4";
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <NavBar/>
    <video controls autoplay muted loop class="video-bg">
      <source :src="coffeeBean" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>



