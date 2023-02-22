<script setup>
defineProps({
  sliderCont: []
})
</script>


<template>
  <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <div v-for="slide in sliderCont.slides" >
          <p>{{ slide.icon }}</p>
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