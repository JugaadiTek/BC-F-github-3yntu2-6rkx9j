<script setup>

import NavBar from "./components/NavBar.vue";
import hero from "./components/hero.vue";
import servicescard from "./components/servicescard.vue";
import imageWithContentList from "./components/imageWithContentLIst.vue";
import imgSlider from "./components/imgSlider.vue";
import ContentPairsRepeater from "./components/ContentPairsRepeater.vue";
import ctaHero from "./components/ctaHero.vue";
import artcont from "./components/artcont.vue";
import postfeed from "./components/postfeed.vue";
import newsletter from "./components/newsletter.vue";
import footerSlice from "./components/footerSlice.vue";
//-------------------------------------------------------------------------other components
import contentPair from "./components/contentPair.vue";
import contentPairsWithLists from "./components/contentPairsWithLists.vue";
// import FAQs from "./components/FAQs.vue";
// import flexItemDisplay from "./components/flexItemDisplay.vue";


import { ref } from 'vue';

// importing local data store
import { usePageList } from "./stores/fetch";
import { onMounted } from "vue";
const pageids = usePageList();
const { fetchPages } = pageids;
onMounted(() => {
  fetchPages();
});



//===================  NAVIGATION BAR JSON  =======================
//=================================================================
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

//========================  FOOTER JSON  ==========================
//=================================================================
const footerSliceCont = ref([
  {
    component: "footerSlice",
    alt: ["darkbg"],
    bricks: {
      imageList: [
        { imageurl: "src/assets/images/BuyChain-Logo-REV.svg", alt: "Buychain Brand Logo", type: "" }
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
  <header></header>
  <main class="devh-">
    <!---------------------- NAVIGATION BAR ---------------------->
    <nav class="mainNav nogap darkbg" v-for="navigationbar in navigations">
      <NavBar :navbtn="navigationbar.bricks" />
    </nav>

    <section>
      <h1>pagelist</h1>
      <!-- <p>{{ JSON.stringify(pageids) }}</p> -->
      <p>{{ JSON.stringify(usePageList(allPagesData)) }} </p>
    </section> 


    <footer class="darkbg nogap footerSlice" v-for="footerData in footerSliceCont">
      <footerSlice :footerCont="footerData.bricks" />
    </footer>
  </main>        
<!-- ----------------------------- FOOTER ----------------------------- --></template>

<style>
.darkbg.hero {
  background-color: unset;
}

#section_0.hero {
  padding-top: var(--section-gap);
}

.hero .content-block div h2 {
  text-align: left;
}

.content .content-block img {
  margin: auto;
}

.content .content-block .flex img {
  width: unset;
}

.flex {
  display: flex;
  max-width: 100%;
}

.column {
  flex-direction: column;
}

.svg-btn-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
