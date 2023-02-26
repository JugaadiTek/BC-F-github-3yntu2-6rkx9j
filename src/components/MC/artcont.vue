<script setup>
defineProps({
  data: {Object},
  sliceType: String,
  
})
</script>


<template>
  <div class="codecont">
    <div class="codeloop">
      <h1>art cont</h1>
      <code class="title">{{ JSON.parse(data) }}</code>
    </div>
  </div>
  <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <h2>{{ JSON.parse(data).bricks.title }}</h2>
        <p> {{ JSON.parse(data).bricks.description }} </p>
        <p> {{ JSON.parse(data).bricks.description2 }} </p>
      </div>
      <span>
        <a :class="[button.type, button.variant]" v-for="button in JSON.parse(data).bricks.atoms" href="">{{ button.text }} </a>
      </span>
    </div>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
}
</style>