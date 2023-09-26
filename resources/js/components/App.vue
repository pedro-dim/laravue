<template>
  <div class="bg-green-600 text-white text-base p-4 m-2">
    <h1>My App component</h1>
    <button
      @click="fetchUsers"
      class="p-2 bg-green-500 hover:bg-green-700 rounded m-2 ease-in duration-100"
    >
      Get Users
    </button>

    <h1></h1>
    <h2 v-for="user in users" :key="user.id">
      {{ user.firstName }}
      {{ user.lastName }}
    </h2>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from "vue";
// Define reactive data using ref
const message = ref("Hello, Vue!");
const users = ref([]);

// Define a method
const add = () => {
  alert("Alert test");
};

// Function to fetch data from the API
const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    users.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const names = computed(() => {
  return this.users.firstName + this.users.lastName;
});

// Fetch data when the component is mounted
onMounted(() => {
  // fetchPosts();
});
</script>

<style>
</style>
