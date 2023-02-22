<script setup>
import footerSlice from "@/components/MC/footerSlice.vue";
import { ref } from "vue";

const footerSliceCont = ref([
  {
    component: "footerSlice",
    alt: ["darkbg"],
    bricks: {
      imageList: [
        { imageurl: "src/images/BuyChain-Logo-REV.svg", alt: "Buychain Brand Logo", type: "" }
      ],
      copyright_text: [
        { text: "All rights reserved." },
        { text: "Copyright © 2023" }
      ],
      atoms: [
        {
          label: "Solutions",
          linksList: [
            { url: "https://www.flaticon.com", text: "Operations", type: "", variant: "type_03", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Capital", type: "", variant: "type_03", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "", type: "", variant: "", styleModifiers: "horizontal-line" },
            { url: "https://www.flaticon.com", text: "Suppliers", type: "", variant: "type_03", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Distributors", type: "", variant: "type_03", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Retailers", type: "", variant: "type_03", styleModifiers: "" }
          ]
        },

        {
          label: "Resources",
          linksList: [
            { url: "https://www.flaticon.com", text: "Data Dashboard", type: "", variant: "type_03", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Newsroom", type: "", variant: "type_03", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Events", type: "", variant: "type_03", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "How To Guides", type: "", variant: "type_03", styleModifiers: "" }
          ]
        },
        {
          label: "About Us",
          linksList: [
            { url: "https://www.flaticon.com", text: "FAQs", type: "", variant: "type_03", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Security", type: "", variant: "type_03", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Get In Touch", type: "", variant: "type_03", styleModifiers: "" }
          ]
        },

        {
          label: "Legal",
          linksList: [
            { url: "https://www.flaticon.com", text: "Security Statements", type: "button", variant: "type_03", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Terms & Conditions", type: "button", variant: "type_03", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Privacy Policy", type: "button", variant: "type_03", styleModifiers: "" },
            { url: "https://www.flaticon.com", text: "Cookie Statement", type: "button", variant: "type_03", styleModifiers: "" }
          ]
        }
      ]
    }
  }
])

</script>

<template>
  <!--- Footer Start -->
  <footer class="darkbg nogap footerSlice" v-for="footerData in footerSliceCont">
    <footerSlice :footerCont="footerData.bricks" />
  </footer>
  <!--- Footer End -->
</template>
