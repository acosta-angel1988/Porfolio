<script setup>
import { ref } from "vue";
import "./NavBar.css";
import shoppingCart from "../assets/Images/car.png";
import searchIcon from "../assets/Images/loupe.png";
import loginIcon from "../assets/Images/user-interface.png";

const count = ref(0);
</script>

<template>
  <header class="navbar">
    <div class="logo">COFFEE LOVER</div>

    <nav class="nav-links">
      <ul>
        <li><a href="/"><img :src="shoppingCart" alt="Cart" className="cart"></a></li>
        <li><a href="/about"><img :src="searchIcon" alt="search" className="search"></a></li>
        <li><a href="/projects"><img :src="loginIcon" alt="search" className="login"></a></li>
      </ul>
    </nav>
  </header>
</template>