<template>
  <MainPage></MainPage>
</template>


<script>
import MainPage from "@/components/MainPage.vue";

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-image: url('assets/background/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;

  overflow: hidden;
}
</style>
