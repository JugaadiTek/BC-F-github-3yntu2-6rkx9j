<script setup>
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
  <div  v-if="sliceType == 'hero'" :class="[sliceType]" >
    <hero :data="sliceData" :sliceType="sliceType" />
  </div>

  <div  v-else-if="sliceType == 'servicecard'" :class="[sliceType]">
    <servicescard :data="sliceData" />
  </div>

  <div v-else-if="sliceType == 'imageWithContentList'" :class="[sliceType]">
    <imageWithContentList :data="sliceData" />
  </div>

  <div v-else-if="sliceType == 'ctaHero'" :class="[sliceType]">
    <ctaHero :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'ContentPairsRepeater'" :class="[sliceType]">
    <ContentPairsRepeater :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'imgSlider'" :class="[sliceType]">
    <imgSlider :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'artcont'"  :class="[sliceType]">
    <artcont :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'postfeed'" :class="[sliceType]">
    <postfeed :data="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'newsletter'" :class="[sliceType]">
    <newsletter />
  </div> 

  <div v-else-if="sliceType == 'contentPair'" :class="[sliceType]">
    <contentPair :data="sliceData"/>
  </div> 

  <div v-else-if="sliceType == 'FAQs'" :class="[sliceType]">
    <FAQs :data="sliceData"/>
  </div> 

  <div v-else-if="sliceType == 'content_pairs_with_list'" :class="[sliceType]">
    <contentPairsWithList :data="sliceData"/>
  </div> 

  <div v-else-if="sliceType == 'flex_item_display'" :class="[sliceType]">
    <flexItemDisplay :data="sliceData"/>
  </div> 

</template>


<style scoped>
</style>