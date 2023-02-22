<script setup>
defineProps({
  herocont: []
})
</script>


<template>
  <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <div>
          <img src="" alt="">
          <h2>{{ herocont.title }}</h2>
          <p>{{ herocont.description }}</p>
          <span v-for="(atom, index) in herocont.atoms" :key="index">
            <a :class="[atom.type, atom.variant, atom.styleModifiers]" :href="atom.url">{{atom.text}}</a>
          </span>
        </div>
        <div>
          <img v-for="image in herocont.imageList" :src="image.imageurl" alt="">
        </div>
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

.content-block>div:last-of-type>img {
  border: 22px solid var(--bg-layer-100);
  border-radius: 20px;
}

/* div.inner-container {
  align-self: center;
} */

@media (max-width: 600px) {
  .content-block {
    grid-template-columns: repeat(1, 1fr);
  }
}

div>span {
  padding-right: 20px;
}

</style>