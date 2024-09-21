<template>
  <div class="background">
    <HeaderComponent title="Discover Switzerland Tourism" />
    
    <div class="container">
      <VisitCounterComponent class="item counter" />
      
      <div class="tourist-list">
        <TouristItemComponent 
          class="item picture"
          name="Matterhorn"
          description="A majestic mountain in the Swiss Alps."
          :image="require('./assets/swit1.webp')"
        />
        
        <TouristItemComponent 
          class="item picture"
          name="Zurich Lake"
          description="A beautiful lake in the city of Zurich."
          :image="require('./assets/swit2.jpg')"
        />
        
        <TouristItemComponent 
          class="item picture"
          name="Jungfraujoch"
          description="The top of Europe, a high-altitude railway station in the Alps."
          :image="require('./assets/swit3.avif')"
        />

        <TouristItemComponent 
          class="item picture"
          name="Château de Chillon"
          description="A historic castle located on the shores of Lake Geneva."
          :image="require('./assets/swit4.webp')"
        />
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import TouristItemComponent from './components/TouristItemComponent.vue';
import VisitCounterComponent from './components/VisitCounterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    TouristItemComponent,
    VisitCounterComponent
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.background {
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.counter {
  margin-bottom: 20px;
  width: 250px; 
  padding: 10px; 
}

.tourist-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 800px;
}

.item {
  background-color: #f0f0f0;
  padding: 15px;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.picture {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
