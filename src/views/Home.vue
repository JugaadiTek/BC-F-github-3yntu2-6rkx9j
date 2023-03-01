<script setup>
import { ref } from 'vue';
import { directus }  from '@/services/directus';
import Page          from '@/components/Article.vue';
import Rawp          from '@/components/rawPageRoute.vue';
import Land          from '@/components/landerRoute.vue';      
import {defineProps} from 'vue';

const  pages   = ref(null);                          
const  landers = ref(null);                          
const  rawps   = ref(null);

defineProps ({
  pages:  {  type: Array,  required: true,  },
  landers:{  type: Array,  required: true,  },
  rawps:  {  type: Array,  required: true,  },
});
fetchData();    fetchData2();     fetchData3();         console.log("=============================================\n====     SITEMAP NAVIGATION HOME.vue     ====");
async function fetchData() {                            console.log("=Home.vue->Pages->FETCH");
    const response = await directus.items('home').readByQuery({
        fields: ['*'], });
    const formattedPages = response.data.map((page) => { return { ...page };  }); 
        console.log("=Home.vue->Pages->SEND");
    const [...rest] = formattedPages;
        pages.value = rest; }

async function fetchData2() {                            console.log("=Home.vue->Rawpages->FETCH");
    const response2 = await directus.items('rawpage').readByQuery({
        fields: ['id', 'title', 'slug', 'status'],  });  console.log("response2", response2);

    const formattedRawps = response2.data.map((raw) => {
        return { ...raw };    });                        console.log("=Home.vue->RawPages->SEND");

    const   [...rest2]  = formattedRawps;
            rawps.value = rest2;
}
async function fetchData3() {  console.log("=Home.vue->Landers->FETCH");
  const response3 = await directus.items('landers').readByQuery({
    fields: ['id', 'title', 'slug', 'status'],  });
  const formattedLanders = response3.data.map((lander) => {    return { ...lander };  });
  const [...rest3] = formattedLanders;
  landers.value = rest3;  console.log("=Home.vue->Landers --> -->", landers);
}   console.log("==      END SITEMAP NAVIGATION HOME.vue    ==\n=============================================");
</script>

<template><main class="siteMap"> <section class = "main-content"><div class="container">
     <div v-if =  "pages"   class = "articles-grid" > <Page v-for = "(page, index)    in pages"   :key  = "index" :page = "page"    :bordered = "index !== pages.length  - 200" /> </div>
     <div v-if =  "rawps"   class = "articles-grid" > <Rawp v-for = "(raw, index)     in rawps"   :key  = "index" :rawp = "raw"     :bordered = "index !== rawps.length  - 200" /> </div>
     <div v-if =  "landers" class = "articles-grid" > <Land v-for = "(lander, index)  in landers" :key  = "index" :land = "lander"  :bordered = "index !== landers.length- 200" /> </div>
</div></section></main></template>
<style>
.siteMap a {
  background: var(--accent);
  padding: 8px 8px;
  margin: 4px;
  border-radius: 4px;
  display: inline-block;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.siteMap a>span {
  font-size: 0.6em;
  line-height: 1em;
}

.siteMap a span,
.siteMap a span>b {
  text-decoration: underline;
  text-transform: capitalize;
}

.siteMap a span>b {
  display: block;
  font-size: 1.5em;
}
</style>