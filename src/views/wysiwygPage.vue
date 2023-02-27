<script setup>
// import { imagePrefix } from '@/utils/imgurlPrefix.js';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

defineProps({
  data: { Object },
  sliceType: String,
  preImgUrl: String,
})
</script>

<template>
  <Header />
  <main>
    <div class="container">
      <div class="inner-container">
        <div class="content">
          <div class="content-block">
            <div class="hero">

              
            </div>
            <div class="wysiwyg" v-html="JSON.parse(data)">

            </div>            
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>


<style scoped></style>