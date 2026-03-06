<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <NavBar/>
    <h1>Home</h1>
  </div>
</template>