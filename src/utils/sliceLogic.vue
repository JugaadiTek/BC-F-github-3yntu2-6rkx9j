<script setup>
import hero from "@/components/MC/hero.vue";
import servicescard from "@/components/MC/servicescard.vue";
import imageWithContentList from "@/components/MC/imageWithContentLIst.vue";
import imgSlider from "@/components/MC/imgSlider.vue";
import ContentPairsRepeater from "@/components/MC/ContentPairsRepeater.vue";
import ctaHero from "@/components/MC/ctaHero.vue";
import artcont from "@/components/MC/artcont.vue";
import postfeed from "@/components/MC/postfeed.vue";
import newsletter from "@/components/MC/newsletter.vue";
defineProps({
  sliceData: {},
  sliceType: String,
  // pindex: number,
  // required: true,
})

</script>

<template>

  <div  v-if="sliceType == 'hero'">
    <hero :herocont="sliceData" />
  </div>

  <div  v-else-if="sliceType == 'servicecard'" :class="container">
    
    <servicescard :servicecardCont="sliceData" />
  </div>

  <div v-else-if="sliceType == 'imageWithContentList'">
    <imageWithContentList :contPairCont="sliceData" />
  </div>

  <div v-else-if="sliceType == 'ctaHero'">
    <ctaHero :ctaHeroCont="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'ContentPairsRepeater'">
    <ContentPairsRepeater :pairsRepeaterCont="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'imgSlider'">
    <imgSlider :sliderCont="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'artcont'"  :class="container">
    <artcont :artcontent="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'postfeed'" :class="container">
    <postfeed :postsCont="sliceData" />
  </div>
  
  <div v-else-if="sliceType == 'newsletter'" :class="container">
    <newsletter />
  </div> 

</template>


<style scoped>
</style>