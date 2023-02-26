<script setup>
import { setSliceVars } from '@/utils/setSliceVars.js'
defineProps({
  herocont: { Object },
  sliceType: String,
})

</script>
<template>
  <div class="codecont">
    <div class="codeloop">
      <h1>Hero</h1>
      <pre class="title">{{ JSON.stringify(herocont) }}</pre>
      <code>{{ setSliceVars(herocont) }}</code>
    </div>
  </div>


  <div class="inner-container">
    <img class="hero" :src="herocont.bricks.heroBG" :alt="herocont.bricks.AltText">
    <div class="content">
      <div class="content-block">
        <div>
          <img class="hero" :src="herocont.bricks.heroBG" :alt="herocont.bricks.AltText">
          <h2>{{ herocont.bricks.title }}</h2>
          <p>{{ herocont.bricks.description }}</p>
          <span v-for="(atom, index) in herocont.bricks.atoms" :key="index">
            <a :class="[atom.type, atom.variant, atom.styleMods]" :href="atom.url">{{ atom.text }}</a>
          </span>
        </div>
        <div>
          <img v-for="(image, index) in herocont.bricks.imageList" :src="image.imageurl" :alt="image.alt">
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