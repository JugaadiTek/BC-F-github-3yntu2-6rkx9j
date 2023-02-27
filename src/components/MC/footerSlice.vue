<script setup lang="ts">
defineProps({
  footerCont: {
    type: Object,
    required: true,}
})
</script>


<template>
  <div class="container footer-container">
    <div class="content-block">
      <div>
        <ul>
          <li v-for="image in footerCont.imageList">
            <img :src="image.imageurl" alt="">
          </li>
          <li class="copyrightTop">
            <p v-for="text in footerCont.copyright_text">
              {{ text.text }}
            </p>
          </li>
        </ul>
      </div>

      <div v-for="linksInfo in footerCont.atoms">
        <ul>
          <li class="linkHead">{{ linksInfo.label }}</li>
          <li v-for="links in linksInfo.linksList">
            <a :class="links.styleModifiers" :href="links.url">{{ links.text }}</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<style scoped>
p,
a,
li {
  color: var(--brand-white);
  font: var(--font-150);
}

p {
  margin: auto;
}

li {
  padding-top: 16px;
  min-width: 220px;
}

.linkHead {
  font-weight: 600;
}

.content-block {
  display: grid;
  grid-template-columns: 4fr 1.2fr 1.2fr 1fr;
  grid-gap: 10px;
  padding: 4.5rem 0;
}

.content-block>div:last-of-type {
  display: flex;
  flex-direction: row;
  flex: right;
  /* justify-content: space-between; */
}

.copyrightTop {
  padding-top: 8.5rem;
}

.red-link {
  color: red;
}

.horizontal-line{
width: 135px;
border-top: 2px solid white;
padding-top: 5px;
pointer-events: none;
display: inline-block;  /*  -For IE11/ MS Edge bug  ///-code copied from net */
}

a:hover {
  color: var(--secondary);
}
</style>