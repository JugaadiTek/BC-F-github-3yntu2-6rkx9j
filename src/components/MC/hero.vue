<script setup>
// import { setSliceVars } from '@/utils/setSliceVars.js'
defineProps({
  herocont: { Object },
  sliceType: String,
})


</script>
<template>
  <div class="codecont">
    <div class="codeloop">
      <h1>Hero</h1>
      <pre class="title">{{ JSON.parse(herocont) }}</pre>
    </div>
  </div>
  <!-- <code>{{ setSliceVars(herocont) }}</code> -->


  <div class="inner-container">
    <img class="hero" :src="JSON.parse(herocont).bricks.heroBG" :alt="JSON.parse(herocont).bricks.AltText">
    <div class="content">
      <div class="content-block">
        <div>
          <img class="hero" :src="JSON.parse(herocont).bricks.heroBG" :alt="JSON.parse(herocont).bricks.AltText">
          <h2>{{JSON.parse(herocont).bricks.title}}</h2>
          <p>{{JSON.parse(herocont).bricks.description}}</p>
          <span v-for="(atom, index) in JSON.parse(herocont).bricks.title" :key="index">
            <a :class="[atom.type, atom.variant, atom.styleMods]" :href="atom.url">{{ atom.text }}</a>
          </span>
        </div>
        <div>
          <img v-for="(image, index) in JSON.parse(herocont).bricks.imageList" :src="image.imageurl" :alt="image.alt">
        </div>
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

.content-block>div:last-of-type>img {
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