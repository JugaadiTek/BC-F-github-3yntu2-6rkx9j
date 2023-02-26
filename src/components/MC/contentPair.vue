<script setup>
import { setSliceVars } from '@/utils/setSliceVars.js'

defineProps({
  data: {Object},
  sliceType: String,
})
</script>


<template>

<div class="codecont">
    <div class="codeloop">
      <h1>service card</h1>
    <pre class="title">{{ JSON.parse(data) }}</pre>
    <code>{{ setSliceVars(data) }}</code>
    </div>
    </div>
  <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <span>
          <h2>{{ contentPairData.title }}</h2>
          <p>{{ contentPairData.description }}</p>
        </span>
        <span>
          <img v-for="image in contentPairData.imageList" :src="image.imageurl" alt="">
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