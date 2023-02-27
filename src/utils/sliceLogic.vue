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
import contentPairsWithList from "@/components/MC/contentPairsWithList.vue";
import flexItemDisplay from '@/components/MC/flexItemDisplay.vue';
// =================================================================================================

defineProps({
  sliceData: Object,
  sliceType: String,
})

</script>

<template>
  <div  v-if="sliceType == 'hero'" :class="[sliceType, container]" >
    <hero :data="sliceData" :sliceType="sliceType" />
  </div>

  <div  v-else-if="sliceType == 'servicecard'" :class="[sliceType, container]">
    <servicescard :data="sliceData" />
  </div>

  <div v-else-if="sliceType == 'imageWithContentList'" :class="[sliceType, container]">
    <imageWithContentList :data="sliceData" />
  </div>

  <div v-else-if="sliceType == 'ctaHero'" :class="[sliceType, container]">
    <ctaHero :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'ContentPairsRepeater'" :class="[sliceType, container]">
    <ContentPairsRepeater :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'imgSlider'" :class="[sliceType, container]">
    <imgSlider :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'artcont'"  :class="[sliceType, container]">
    <artcont :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'postfeed'" :class="[sliceType, container]">
    <postfeed :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'newsletter'" :class="[sliceType, container]">
    <newsletter />
  </div> 

  <div v-else-if="sliceType == 'contentPair'" :class="[sliceType, container]">
    <contentPair :data="sliceData"/>
  </div> 

  <div v-else-if="sliceType == 'FAQs'" :class="[sliceType, container]">
    <FAQs :data="sliceData"/>
  </div> 

  <div v-else-if="sliceType == 'content_pairs_with_list'" :class="[sliceType, container]">
    <contentPairsWithList :data="sliceData"/>
  </div> 

  <div v-else-if="sliceType == 'flex_item_display'" :class="[sliceType, container]">
    <flexItemDisplay :data="sliceData"/>
  </div> 

</template>


<style scoped>
</style>