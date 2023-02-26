<script setup>
defineProps({
  artcontent: {Object},
  sliceType: String,
})
</script>


<template>
  <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <h2>{{ JSON.parse(artcont).title }}</h2>
        <p> {{ JSON.parse(artcont).description }} </p>
        <p> {{ JSON.parse(artcont).description2 }} </p>
      </div>
      <span>
        <a :class="[button.type, button.variant]" v-for="button in JSON.parse(artcont).atoms" href="">{{ button.text }} </a>
      </span>
    </div>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
}
</style>