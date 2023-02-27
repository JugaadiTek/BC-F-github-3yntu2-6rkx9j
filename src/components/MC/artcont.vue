<script setup>
import { imagePrefix } from '@/utils/imgurlPrefix.js';

defineProps({
  data: { Object },
  preImgUrl: String,
  sliceType: String,

})
</script>


<template>
  <div class="mcFix">
    <div class="container">
      <div class="inner-container">
        <div class="content">
          <div class="content-block">
            <h2>{{ JSON.parse(data).bricks.title }}</h2>
            <p> {{ JSON.parse(data).bricks.description }} </p>
            <p v-if="JSON.parse(data).bricks.description2 == ! ' '"> {{ JSON.parse(data).bricks.description2 }} </p>
          </div>
          <a v-for="button in JSON.parse(data).bricks.atoms" :href="button.url" :class="[button.type, button.variant]"> {{
            button.text }} </a>
          <img v-for="image in JSON.parse(data).bricks.imageList" :src="[imagePrefix(preImgUrl)] + image.imageurl"
            :alt="image.alt">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
}
</style>