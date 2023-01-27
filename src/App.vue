<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/admin">Admin</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

#app {
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #EFEEF4;
  height: 100vh;
}


</style>
