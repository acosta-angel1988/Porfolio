<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// State
const coffees = ref([]);
const loading = ref(true);

// Form fields
const name = ref("");
const price = ref("");
const roastLevel = ref("Light");
const origin = ref("");
const type = ref("Decaf");

// Fetch coffees from backend
const fetchCoffees = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/coffee");
    console.log("Frontend received:", res.data); // DEBUG
    coffees.value = res.data;
  } catch (err) {
    console.error("Axios error:", err);
  } finally {
    loading.value = false;
  }
};

// Add new coffee
const addCoffee = async () => {
  if (!name.value || !price.value || !origin.value) return alert("Fill all fields!");
  try {
    await axios.post("http://localhost:5000/api/coffee", {
      name: name.value,
      price: parseFloat(price.value),
      roastLevel: roastLevel.value,
      origin: origin.value,
      type: type.value
    });
    // Clear form
    name.value = "";
    price.value = "";
    origin.value = "";
    fetchCoffees(); // Refresh list
  } catch (err) {
    console.error("Add coffee error:", err);
  }
};

onMounted(fetchCoffees);
</script>

<template>
  <div class="container">
    <h1>Coffee Shop Menu</h1>

    <!-- Add Coffee Form -->
    <div class="form">
      <input v-model="name" placeholder="Coffee Name" />
      <input v-model="price" type="number" placeholder="Price" />
      <input v-model="origin" placeholder="Origin" />

      <select v-model="roastLevel">
        <option>Light</option>
        <option>Medium</option>
        <option>Dark</option>
      </select>

      <select v-model="type">
        <option>Decaf</option>
        <option>Espresso</option>
        <option>Blends</option>
      </select>

      <button @click="addCoffee">Add Coffee</button>
    </div>

    <!-- Loading message -->
    <p v-if="loading">Loading coffees...</p>

    <!-- Coffee List -->
    <ul v-else-if="coffees.length">
      <li v-for="coffee in coffees" :key="coffee._id" class="coffee-item">
        <strong>{{ coffee.name }}</strong> — ${{ coffee.price.toFixed(2) }} <br>
        Roast: {{ coffee.roastLevel }} | Origin: {{ coffee.origin }} | Type: {{ coffee.type }}
      </li>
    </ul>

    <p v-else>No coffees found.</p>
  </div>
</template>

<style>
.container {
  max-width: 600px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

.form {
  margin-bottom: 20px;
}

input, select, button {
  margin: 5px;
  padding: 6px;
}

.coffee-item {
  background: #f5f5f5;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 5px;
}
</style>