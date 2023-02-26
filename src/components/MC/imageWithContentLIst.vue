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
      <code class="title">{{ JSON.parse(data) }}</code>
    </div>
  </div> -->
  <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <div>
          <h2>{{ JSON.parse(data).bricks.title }}</h2>
          <p>{{ JSON.parse(data).bricks.description }}</p>
          <span v-for="(atom, index) in JSON.parse(data).bricks.atoms" :key="index">
            <a :href="atom.url"> {{ atom.icon }} {{ atom.text }}</a>
          </span>
        </div>
        <img v-for="image in JSON.parse(data).bricks.imageList" :src="[imagePrefix(preImgUrl)] + image.imageurl" alt="">
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