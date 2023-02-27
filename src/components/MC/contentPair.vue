<script setup>
import { imagePrefix } from '@/utils/imgurlPrefix.js';


defineProps({
  data: { Object },
  sliceType: String,
  preImgUrl: String,

})
</script>


<template>
  <div class="mcFix">
    <div class="container">
      <div class="inner-container">
        <div class="content">
          <div class="content-block">
            <span>
              <h2>{{ JSON.parse(data).bricks.title }}</h2>
              <p>{{ JSON.parse(data).bricks.description }}</p>
            </span>
            <span>
              <img v-for="image in JSON.parse(data).bricks.imageList" :src="[imagePrefix(preImgUrl)] + image.imageurl"
                alt="">
            </span>
          </div>
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

.content-block {
  align-items: center;
}

h2 {
  text-align: left;
}

span>img {
  border: 22px solid var(--brand-white);
  border-radius: 20px;
  box-shadow: -1px 1px 10px 1px rgb(219, 218, 218);
}

@media (max-width: 600px) {
  .content-block {
    grid-template-columns: repeat(1, 1fr);
  }
}

div>span {
  padding-right: 20px;
}
</style>