<template>
  <div class="tourist-item">
    <img :src="image" :alt="name" class="pixelated" />
    <h2 class="pixelated-title">{{ name }}</h2>
    <p class="pixelated-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'description', 'image'] 
}
</script>

<style scoped>
.tourist-item {
  text-align: center;
  margin-bottom: 20px;
  border: 2px solid #000; 
  border-radius: 10px;
  background-color: #f0f0f0;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.pixelated {
  image-rendering: pixelated; 
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.pixelated-title {
  font-family: 'Press Start 2P', cursive; 
  font-size: 24px;
  color: #090979; 
  margin: 10px 0; 
}

.pixelated-description {
  font-family: 'Press Start 2P', cursive; 
  font-size: 16px; 
  color: #34495e; 
  margin: 0; 
}
</style>
