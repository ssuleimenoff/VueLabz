<script setup>

</script>

<template>
  <div>
    <footer class="footer">
      <div class="footer-text">
        <h1>WSHOP</h1>
        <p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
      </div>

      <div class="footer-categories">
        <div class="nav">
          <h2>All Products</h2>
          <ul class="nav-list">
            <li class="nav-item"><a href="#bereket" class="nav-link">Phone</a></li>
            <li class="nav-item"><a href="#bereket" class="nav-link">Tablet</a></li>
            <li class="nav-item"><a href="#bereket" class="nav-link">Laptop</a></li>
            <li class="nav-item"><a href="#bereket" class="nav-link">Watch</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-contacts">
        <div class="nav">
          <h2>Company</h2>
          <ul class="nav-list">
            <li class="nav-item"><a href="#bereket" class="nav-link">About</a></li>
            <li class="nav-item"><a href="#bereket" class="nav-link">Support</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-contacts">
        <div class="nav">
          <h2>Follow us</h2>
          <ul class="nav-list">
            <li class="nav-item"><a href="#bereket" class="nav-link">Instagram</a></li>
            <li class="nav-item"><a href="#bereket" class="nav-link">Facebook</a></li>
            <li class="nav-item"><a href="#bereket" class="nav-link">Linkedin</a></li>
            <li class="nav-item"><a href="#bereket" class="nav-link">Youtube</a></li>
          </ul>
        </div>
      </div>
    </footer>

  </div>

</template>

<style scoped>
.footer {

  position: relative;
  border-top: #d0d8d6 1px solid;

  font-family: 'Inter', sans-serif;

  height: 270px;
  margin-top: 60px;

  display: flex;
  padding-top: 30px;

}


.footer-text {
  height: 191px;
  width: 394px;
}

.footer-text h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 17px;
  text-transform: uppercase;

  color: #000000;
}

.footer-text p {
  height: 39px;
  width: 304px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
}

.footer-categories {
  margin-left: 100px;
}

.footer-contacts {
  margin-left: 100px;
}

.nav {
}

.nav-list {
  list-style-type: none;
}

.nav h2 {
  /* All products */
  height: 28px;
  font-family: 'Readex Pro', sans-serif;

  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;

  color: #000000;
}

.nav-item {

  margin-top: 13px;

}

.nav-link {
  text-decoration: none;
  height: 22px;

  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;

  margin-left: -40px;
  margin-top: 20px;

  color: #000000;

  transition: 0.3s ease-in-out;

}

.nav-link:hover {
  color: #abbab5;
}





</style>