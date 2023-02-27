<script setup>
import { imagePrefix } from '@/utils/imgurlPrefix.js';

defineProps({
  data: { Object },
  siceType: String,
  preImgUrl: String,

})
</script>


<template>
  <div class="mcFix">
    <div class="container">
      <div class="inner-container">
        <div class="content">
          <div class="content-block">
            <div v-for="(contetntList, index) in JSON.parse(data).bricks" :key="index">
              <h2>{{ contetntList.title }}</h2>
              <p>{{ contetntList.description }}</p>

              <span v-for="(btn, index) in contetntList.atoms" :key="index" >
                
                <a v-if="btn.type== 'button' " :href="btn.url" :class="[btn.type, btn.variant, btn.styleModifiers]"> 
                  <span v-html="btn.icon"> </span>
                  <span> {{ btn.text }} </span> 
                </a>

                <a v-if="btn.type== 'icon-btn' " :href="btn.url" :class="[btn.type, btn.variant, btn.styleModifiers]"> 
                  <span v-html="btn.icon"> </span>
                  <span> {{ btn.text }} </span> 
                </a>

              </span>
            </div>

            <div>
              <img v-for="image in JSON.parse(data).imageList" :src="[imagePrefix(preImgUrl)] + image.imageurl" alt="">
            </div>

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


/* .icon-btn > span:first-of-type {
  display: block;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;

} */

.icon-btn {
  color: var(--primary);
  background-color: var(--bg-layer-600);
  border: 4px solid var(--primary);
  border-radius: 8px;
  padding: 20px;
  width: 170px;
  /* gap: 20px; */
  text-align: center;
  /* display: inline-fl; */
}

.content-block> div > span {
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center; */
  /* justify-content: center; */
  /* gap:30px; */
  font-weight: bold;
}

.icon-btn > span {
  /* display: inline-block; */
  text-align: center;
}

.icon-btn > span:first-of-type {
  font-size: 70px;
  color: red;
}
.icon-btn > span:last-of-type {
  display: inline-flex;
}
</style>