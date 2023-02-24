<script setup>
defineProps({
  navbtn: []
})


</script>
  
<template>
  <div class="container">
    <figure class="logo menu-item" itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
      <a class="img" href="/" aria-current="page">
        <span>Go To Home</span>
        <img itemprop="thumbnail" :src="navbtn.logoimg.imgUrl"  :alt="navbtn.logoimg.imgAlt" />
      </a>
      <figcaption itemprop="caption"></figcaption>
    </figure>

    <div  class="main-nav-links">
      <ul v-for="(mainLink, index) in navbtn.mainNav" :key="index" class="dropdown">
        <li class="dropbtn">
          <a  :href="mainLink.linkUrl">{{ mainLink.linkText }} </a>
        </li>
        <li class="" v-for="subLinks in mainLink.subNav" >
          <a class="dropdown-content" :href="subLinks.url">{{ subLinks.text }}</a>
        </li>
      </ul>
    </div>

    <div v-for="btn in navbtn.buttonLinks" class=" main-nav-links">
      <ul>
        <li class="demo-btn" >
          <a  :href="btn.linkUrl">{{ btn.linkText }}</a>
        </li>
      </ul>
    </div>
  
  </div>
</template>

<style scoped>
.main-nav-links {
  margin-right: 0;
  width: 100%;
  text-align: right;
}

/* .main-nav-links a {
  font-weight: var(--fw-bold);
  transition: 300ms;
  position: relative;
} */

.main-nav-links a::after {
  content: "";
  display: block;
  position: absolute;
  height: 4px;
  background: var(--accent-light);
  width: 0px;
  bottom: 0;
  left: 0;
  transition: 500ms;
}

.main-nav-links li a:hover {
  color: var(--secondary-light);
}

/* .main-nav-links li a:hover::after {
  width: 100%;
  transition: 500ms;
  height: 4px;
} */

.img>span {
  display: none;
}

figure {
  margin: unset;
  margin-top: auto;
  margin-bottom: auto;

}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

ul {
  margin-top: auto;
  margin-bottom: auto;
  padding: 20px;
}

li {
  display: inline;
  color: var(--bg-layer-100);
  /* padding-right: 20px; */
  vertical-align: middle;
}

.demo-btn {
  color: var(--primary);
  background-color: var(--secondary);
  border: 2px solid var(--secondary);
  font-weight: var(--fw-bold);
  height: auto;
  border-radius: 5px;
  padding: 4px 10px;
}



nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  padding: 12px 0;
}

.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}


</style>