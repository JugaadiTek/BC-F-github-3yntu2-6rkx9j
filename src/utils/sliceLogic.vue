<script setup>
// import { ref } from 'vue';
// import { directus } from '@/services/directus';
// import { RouterLink, useRoute, useRouter } from 'vue-router';
// import { KeyObject } from 'crypto';
// import QueryString from 'querystring';
// =========================  COMPONENTS  ==========================================================
import hero from "@/components/MC/hero.vue";
import servicescard from "@/components/MC/servicescard.vue";
import imageWithContentList from "@/components/MC/imageWithContentLIst.vue";
import imgSlider from "@/components/MC/imgSlider.vue";
import ContentPairsRepeater from "@/components/MC/ContentPairsRepeater.vue";
import ctaHero from "@/components/MC/ctaHero.vue";
import artcont from "@/components/MC/artcont.vue";
import postfeed from "@/components/MC/postfeed.vue";
import newsletter from "@/components/MC/newsletter.vue";
import contentPair from "@/components/MC/contentPair.vue";
import FAQs from "@/components/MC/FAQs.vue";
import contentPairsWithLists from "@/components/MC/contentPairsWithLists.vue";
import flexItemDisplay from '@/components/MC/flexItemDisplay.vue';
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

  <div v-else-if="sliceType == 'imageWithContentList'" :class="container">
    <imageWithContentList :data="sliceData" />
  </div>

  <div v-else-if="sliceType == 'ctaHero'" :class="container">
    <ctaHero :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'ContentPairsRepeater'" :class="container">
    <ContentPairsRepeater :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'imgSlider'" :class="container">
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

  <div v-else-if="sliceType == 'FAQs'" :class="container">
    <FAQs :data="sliceData"/>
  </div> 

  <div v-else-if="sliceType == 'contentPairsWithLists'" :class="container">
    <contentPairsWithLists :data="sliceData"/>
  </div> 

  <div v-else-if="sliceType == 'flexItemDisplay'" :class="container">
    <flexItemDisplay :data="sliceData"/>
  </div> 

</template>


<style scoped>
</style>