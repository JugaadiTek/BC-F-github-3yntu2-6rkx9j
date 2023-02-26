<script setup>
defineProps({
  artcontent: []
})
</script>


<template>
  <div class="inner-container">
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
  </div>
</template>

<style scoped>
.content {
  text-align: center;
}
</style>