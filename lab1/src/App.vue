<template>
  <div id="app">
    <header>
      <h1>Mini Blog</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Politics</li>
          <li>Tech</li>
          <li>Entertainment</li>
          <li>Travel</li>
          <li>Sports</li>
        </ul>
      </nav>
    </header>

    <section class="content">
      <div
        v-for="(article, index) in articles"
        :key="index"
        :class="{
          'article': true,
          'center-pic': article.isCenterPic,
          'article-a': index === 0,
          'article-c': index === 1,
          'article-d': index === 3,
          'article-e': index === 4,
        }"
      >
        <div class="img-container">
          <img :src="article.img" :alt="article.title" />
          <div class="dark-overlay"></div>
          <div class="text-container">
            <h3>{{ article.title }}</h3>
            <p>{{ article.date }}</p>
          </div>
        </div>

        <div v-if="article.isCenterPic" class="buttons-container">
          <button class="btn sport-btn">Sport</button>
          <button class="btn tech-btn">Technology</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "CR7 celebrating his 900th career goal.",
          img: require("./assets/cr7.jpg"),
          date: "September 12, 2024",
        },
        {
          title: "10 Reasons Naruto is Better on a Rewatch.",
          img: require("./assets/naruto-sasuke-and-sakura-cover-image.png"),
          date: "September 10, 2024",
        },
        {
          title: "iPhone 16 Pro pre-order delays - here's the latest shipping dates.",
          img: require("./assets/Apple-iPhone-16.webp"),
          date: "September 14, 2024",
          isCenterPic: true,  
        },
        {
          title: "New SpaceX Starship launch date announced.",
          img: require("./assets/spacex.jpg"),
          date: "September 18, 2024",
        },
        {
          title: "Elon Musk unveils new AI project focused on Neuralink.",
          img: require("./assets/elonmusk.jpg"),
          date: "September 19, 2024",
        },
      ],
    };
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: #fff;
}

header {
  background-color: #1e1e1e;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

h1 {
  margin: 0;
  color: #fff;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin: 0 15px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}

.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-template-areas:
    "a center c"
    "d center e";
  gap: 20px;
  margin: 40px auto;
  max-width: 1200px;
}

.article {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.img-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dark-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}

.text-container {
  position: absolute;
  bottom: 20px;
  left: 15px;
  color: white;
}

.text-container h3 {
  margin: 0;
  font-size: 18px;
}

.text-container p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #ccc;
}

.article-a {
  grid-area: a;
}

.article-c {
  grid-area: c;
}

.article-d {
  grid-area: d;
}

.article-e {
  grid-area: e;
}

.center-pic {
  grid-area: center;
  position: relative;
}

.center-pic img {
  height: 500px;
  width: 100%;
}

.buttons-container {
  position: absolute;
  bottom: 120px;
  left: 5%; 
  transform: translateX(0); 
  display: flex;
  gap: 10px;
}


.btn {
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.sport-btn {
  background-color: #ff4500;
}

.tech-btn {
  background-color: #1e90ff;
}
</style>
