<script setup>
import { ref } from 'vue';
import { directus } from '@/services/directus';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { getAssetURL } from '@/utils/get-asset-url';
// import sliceLogic from '@/utils/sliceLogic.vue';
// import QueryString from 'qs';
// =========================importing components==================================================
const router = useRouter();
const route = useRoute();
const rawPage = ref(null);
const moreRawPage = ref(null);
// let pageblocks = "";
//---prepping data---------------------------------------------------------------------------
fetchDataRaw();
var preImgUrl = "https://cms-buychain-pb01.up.railway.app/";

// Directus API call to get the article data via the directus sdk using the id from the route params
async function fetchDataRaw() {
  const { id } = route.params;
  let rawPageResponse;
  try {
    articleResponse = await directus.items('rawpage').readByQuery(id,{
      fields: ['id','title','slug','status', 'banner','wysiwyg','sort'],
      filter: {
        _and: [
          { id: { _eq: route.params.id } },
          { status: { _eq: 'published' }},
        ],
      },
      sort: ['sort'],
    });

    const formattedRawPage = { ...rawPageResponse, }
    rawPage.value = formattedRawPage;

  } catch (err) {
    router.replace({ name: 'not-found', params: { catchAll: route.path } });
  }
}
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