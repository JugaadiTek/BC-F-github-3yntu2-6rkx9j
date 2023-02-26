<script setup>
import { setSliceVars } from '@/utils/setSliceVars.js'

defineProps({
  artcontent: {Object},
  sliceType: String,
})
</script>


<template>
  <div class="codecont">
    <div class="codeloop">
      <h1>{{JSON.stringify(artcont.title) }}</h1>
    <pre class="title">{{ JSON.stringify(artcontent) }}</pre>
    <code>{{ setSliceVars(artcontent) }}</code>
    </div>
    </div>
  <!-- <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <h2>{{ artcontent.title }}</h2>
        <p> {{ artcontent.description }} </p>
        <p> {{ artcontent.description2 }} </p>
      </div>
      <span>
        <a :class="[button.type, button.variant]" v-for="button in artcontent.atoms" href="">{{ button.text }} </a>
      </span>
    </div>
  </div> -->
</template>

<style scoped>
.content {
  text-align: center;
}
</style>