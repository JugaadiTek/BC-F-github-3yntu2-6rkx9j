<script setup>
import { ref } from 'vue';
import NavBar from '@/components/MC/NavBar.vue';


let navigations = ref([
  {
    component: "NavBar",
    alt: ["nogap", "darkbg"],
    bricks: {
      logoimg: { imgUrl: "/src/images/BuyChain-Logo-REV.svg", imgLink: "https://buychain.co/", imgAlt: "Brand Logo", type: "svg", variant: "", styleModifiers: "" },
      mainNav: [
        {
          linkText: "Home",
          linkUrl: "link",
          subNav: [
            { url: "https://www.flaticon.com", text: "Buychain Operations", type: "link", variant: "", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Buychain Capital", type: "link", variant: "", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Distributors", type: "link", variant: "", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Suppliers", type: "link", variant: "", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Retailers", type: "link", variant: "", styleModifiers: "" }
          ]
        },
        {
          linkText: "Solutions",
          linkUrl: "link",
          subNav: [
            { url: "https://www.flaticon.com", text: "Security", type: "link", variant: "", styleModifiers: "" },
          ]
        },
        {
          linkText: "About Us",
          linkUrl: "button",
          subNav: [
            { url: "https://www.flaticon.com", text: "Schedule A Demo", type: "link", variant: "", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Join The Waitlist", type: "link", variant: "", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Get In Touch", type: "link", variant: "", styleModifiers: "" }
          ]
        }
      ],
      buttonLinks: [
        {
          linkText: "Demo",
          linkUrl: "buttonurl"
        }
      ]

    }
  }
])

</script>

<template>
  <header>
    <nav class="container mainNav nogap darkbg" v-for="navigationbar in navigations">
      <!--- Here ----->
      <NavBar :navbtn="navigationbar.bricks" />
    </nav>
  </header>
</template>

  
<style scoped>


</style>