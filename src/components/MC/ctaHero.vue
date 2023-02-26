<script setup>
import { imagePrefix } from '@/utils/imgurlPrefix.js';


defineProps({
  data: {Object},
  preImgUrl: String,
  sliceType: String,
})
</script>


<template>

<div class="codecont">
    <div class="codeloop">
      <h1>cta hero</h1>
      <code class="title">{{ JSON.parse(data) }}</code>
    </div>
  </div>
  <div class="inner-container">
    <div class="content">
      <div class="content-block flexClass">
        <div>
          <h2>{{ JSON.parse(data).bricks.title }}</h2>
          <p>{{ JSON.parse(data).bricks.description }}</p>
          <span v-for="button in JSON.parse(data).bricks.atoms">
          <a :class="[button.type, button.variant, button.styleModifiers]" :href="button.url">Schedule demo</a>
          </span>
        </div>
        <span v-for="image in JSON.parse(data).bricks.imageList">
        <img class="ctaImg " :src="[imagePrefix(preImgUrl)] + image.imageurl" alt="">
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
}
h2 {
  text-align: left;
}
p {
  text-align: left;
}

.ctaImg {
  flex: right;
}

.flexClass {
  display: flex;

}

img{
 min-width: 400px;
}
</style>