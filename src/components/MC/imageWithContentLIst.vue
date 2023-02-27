<script setup>
import { imagePrefix } from '@/utils/imgurlPrefix.js';

defineProps({
  data: {Object},
  siceType: String,
  preImgUrl: String,

})
</script>


<template>
   <!-- <div class="codecont">
    <div class="codeloop">
      <h1>image with content list</h1>
      <pre class="title">{{ JSON.parse(data) }}</pre>
    </div>
  </div> -->
  
  <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <div v-for=" contetntList in JSON.parse(data).bricks">
          <h2>{{ contetntList.title }}</h2>
          <p>{{ contetntList.description }}</p>
          <span v-for="(btn, index) in contetntList.atoms" :key="index">
            <a :href="btn.url" :class="[btn.type, btn.variant, btn.styleModifiers]"> {{ btn.icon }} {{ btn.text }}</a>
          </span>
        </div>
        <span >
          <img v-for="image in JSON.parse(data).imageList" :src="[imagePrefix(preImgUrl)] + image.imageurl" alt="">
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  text-align: left;
}

@media (max-width: 600px) {
  .content-block {
    grid-template-columns: repeat(1, 1fr);
  }
}

img {
  border: 22px solid var(--brand-white);
  border-radius: 20px;
  box-shadow: -1px 1px 10px 1px rgb(219, 218, 218);
}
</style>