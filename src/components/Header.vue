<script setup>
import NavBar from '@/components/MC/NavBar.vue';
import { ref } from 'vue';


const navigations = ref([
  {
    component: "NavBar",
    logo: {
      type: "svg/img/text",
      text: "",
      altText: "",
      logoFill: "",
    },
    alt: ["nogap", "darkbg"],
    bricks: [
      { label: "Solution", url: '' },
      { label: "Resources", url: '' },
      { label: "About Us", url: '' }
    ],
    buttons: [
      {
        type: "",
        text: "",
        url: "",
        alt: [""],
        external: true,
        rel: [""]
      }
    ]
  }
])

</script>

<template>
  <header>
    <nav class="container mainNav nogap darkbg" v-for="navigationbar in navigations" >
      <!--- Here ----->
      <NavBar :navbtn="navigationbar.bricks" />
    </nav>
  </header>
</template>

  
<style scoped>


</style>