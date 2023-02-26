<script setup>
import { imagePrefix } from '@/utils/imgurlPrefix.js';

defineProps({
  data: { Object },
  sliceType: String,
  preImgUrl: String,
})


</script>
<template>
  <!-- <div class="codecont">
    <div class="codeloop">
      <h1>Hero</h1>
      <pre class="title">{{ JSON.parse(data) }}</pre>
    </div>
  </div> -->
  <!-- <code>{{ setSliceVars(herocont) }}</code> -->
  <!-- <p>{{ imagePrefix(preImgUrl) }}</p> -->


  <div class="inner-container">
    <!-- <img class="hero" :src="JSON.parse(data).heroBG" :alt="JSON.parse(data).AltText"> -->
    <div class="content">
      <div class="content-block">
        <div>
          <span v-for="(logo, index) in JSON.parse(data).bricks.imageList" 
            :key="index">
          <img v-if="logo.type == 'aboveImg_logo'"
            :src="[imagePrefix(preImgUrl)] + logo.imageurl" 
            :alt="JSON.parse(data).bricks.AltText">
          </span>
          <h2>{{ JSON.parse(data).bricks.title }}</h2>
          <p>{{ JSON.parse(data).bricks.description }}</p>
          <span v-for="(atom, index) in JSON.parse(data).bricks.atoms" :key="index" >
            <a :class="[atom.type, atom.variant, atom.styleMods]" :href="atom.url">{{ atom.text }}</a>
          </span>
        </div>
        <span v-for="(image, index) in JSON.parse(data).bricks.imageList" :key="index">
          <img v-if="image.type== 'img_halfContent'" :src="[imagePrefix(preImgUrl)] + image.imageurl" :alt="image.alt">
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

.content-block>span>img {
  border: 22px solid var(--bg-layer-100);
  border-radius: 20px;
}

/* div.inner-container {
  align-self: center;
} */

@media (max-width: 600px) {
  .content-block {
    grid-template-columns: repeat(1, 1fr);
  }
}

div>span {
  padding-right: 20px;
}
</style>