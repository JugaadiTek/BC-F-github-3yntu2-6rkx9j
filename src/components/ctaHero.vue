<script setup>
defineProps({
  ctaHeroCont: []
})
</script>


<template>
  <div class="inner-container">
    <div class="content">
      <div class="content-block flexClass">
        <div>
          <h2>{{ ctaHeroCont.title }}</h2>
          <p>{{ ctaHeroCont.description }}</p>
          <span v-for="button in ctaHeroCont.atoms">
          <a :class="[button.type, button.variant, button.styleModifiers]" :href="button.url">Schedule demo</a>
          </span>
        </div>
        <span v-for="image in ctaHeroCont.imageList">
        <img class="ctaImg " :src="image.imageurl" alt="">
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
}
h2 {
  text-align: left;
}
p {
  text-align: left;
}

.ctaImg {
  flex: right;
}

.flexClass {
  display: flex;

}

img{
 min-width: 400px;
}
</style>