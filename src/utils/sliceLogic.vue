<script setup>
import { ref } from 'vue';
import { directus } from '@/services/directus';
import { RouterLink, useRoute, useRouter } from 'vue-router';
// =========================  COMPONENTS  ==========================================================
import hero from "@/components/MC/hero.vue";
// import QueryString from 'qs';
// import { KeyObject } from 'crypto';
import servicescard from "@/components/MC/servicescard.vue";
import imageWithContentList from "@/components/MC/imageWithContentLIst.vue";
import imgSlider from "@/components/MC/imgSlider.vue";
import ContentPairsRepeater from "@/components/MC/ContentPairsRepeater.vue";
import ctaHero from "@/components/MC/ctaHero.vue";
import artcont from "@/components/MC/artcont.vue";
import postfeed from "@/components/MC/postfeed.vue";
import newsletter from "@/components/MC/newsletter.vue";
import contentPair from "@/components/MC/contentPair.vue";
// =================================================================================================

defineProps({
  sliceData: Object,
  sliceType: String
})

</script>

<template>
  <div  v-if="sliceType == 'hero'">
    <hero :herocont="sliceData" :sliceType="sliceType" />
  </div>

  <div  v-else-if="sliceType == 'servicecard'" :class="container">
    <servicescard :servicecardCont="sliceData" />
  </div>

  <div v-else-if="sliceType == 'imageWithContentList'">
    <imageWithContentList :data="sliceData" />
  </div>

  <div v-else-if="sliceType == 'ctaHero'">
    <ctaHero :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'ContentPairsRepeater'">
    <ContentPairsRepeater :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'imgSlider'">
    <imgSlider :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'artcont'"  :class="container">
    <artcont :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'postfeed'" :class="container">
    <postfeed :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'newsletter'" :class="container">
    <newsletter />
  </div> 

  <div v-else-if="sliceType == 'contentPair'" :class="container">
    <contentPair :data="sliceData"/>
  </div> 

  <div v-else-if="sliceType == 'ctaHero'" :class="container">
    <ctaHero />
  </div> 

</template>


<style scoped>
</style>