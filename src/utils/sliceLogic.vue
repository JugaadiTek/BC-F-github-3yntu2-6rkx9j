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
})

</script>
<template>
    <hero              v-if="sliceData.component       == 'hero'" 
    :class        =   "[sliceData.component]" 
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    />
    <servicescard     v-else-if="sliceData.component  == 'servicecard'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    />
    <imageWithContentList  v-else-if="sliceData.component == 'imageWithContentList'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    />
    <ctaHero          v-else-if="sliceData.component == 'ctaHero'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    />
    <ContentPairsRepeater  v-else-if="sliceData.component == 'ContentPairsRepeater'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    />
    <imgSlider        v-else-if="sliceData.component == 'imgSlider'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    />
    <artcont          v-else-if="sliceData.component == 'artcont'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    />
    <postfeed         v-else-if="sliceData.component == 'postfeed'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    />
    <newsletter       v-else-if="sliceData.component == 'newsletter'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    /> 
    <contentPair      v-else-if="sliceData.component == 'contentPair'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    /> 
    <FAQs             v-else-if="sliceData.component == 'FAQs'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    /> 
    <contentPairsWithList  v-else-if="sliceData.component == 'content_pairs_with_list'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    /> 
    <flexItemDisplay  v-else-if="sliceData.component == 'flex_item_display'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    />

</template>


<style scoped>
</style>