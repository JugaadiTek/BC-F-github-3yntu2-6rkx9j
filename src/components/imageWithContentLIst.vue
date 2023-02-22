<script setup>
defineProps({
  contPairCont: []
})
</script>


<template>
  <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <div>
          <h2>{{ contPairCont.title }}</h2>
          <p>{{ contPairCont.description }}</p>
          <span v-for="(atom, index) in contPairCont.atoms" :key="index">
            <a :href="atom.url"> {{ atom.icon }} {{ atom.text }}</a>
          </span>
        </div>
        <img v-for="image in contPairCont.imageList" :src="image.imageurl" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  text-align: left;
}

@media (max-width: 600px) {
  .content-block {
    grid-template-columns: repeat(1, 1fr);
  }
}

img {
  border: 22px solid var(--brand-white);
  border-radius: 20px;
  box-shadow: -1px 1px 10px 1px rgb(219, 218, 218);
}
</style>