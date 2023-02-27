<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

defineProps({
  data: { Object },
  sliceType: String,
})
</script>

<template>
  <Header />
  <main>
    <div class="container">
      <div class="inner-container">
        <div class="content">
          <div class="content-block">

            <div class="hero">
              <h2 class="title"> </h2>
              <p class="description"> </p>
            </div>

            <div class="wysiwyg" v-html="JSON.parse(data)">
            </div>            
            
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>


<style scoped></style>