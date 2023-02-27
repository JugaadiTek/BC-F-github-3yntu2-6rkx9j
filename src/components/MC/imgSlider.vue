<script setup>

defineProps({
  data: [Object],
  sliceType: String,
})
</script>


<template>
  <!-- <div class="codecont">
    <div class="codeloop">
      <h1>imgSlider</h1>
      <code class="title">{{ JSON.parse(data) }}</code>
    </div>
  </div> -->
  <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <div v-for="slide in JSON.parse(data).bricks.slides" >
          <span v-html="slide.icon"> </span><span v-html="slide.icon"> </span><span v-html="slide.icon"> </span><span v-html="slide.icon"> </span><span v-html="slide.icon"> </span>
          <h3>{{ slide.testimony }}</h3>
          <span>
            <h4>{{ slide.name }}</h4>
            <p>{{ slide.title }}</p>
          </span>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3, h4, p  {
  margin: auto;
}

.content {
  text-align: center;
}

</style>