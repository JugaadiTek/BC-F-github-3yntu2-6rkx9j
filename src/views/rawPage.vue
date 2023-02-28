<script setup>
import { ref } from 'vue';
import { directus } from '@/services/directus';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { getAssetURL } from '@/utils/get-asset-url';
import sliceLogic from '@/utils/sliceLogic.vue';
// import QueryString from 'qs';
// =========================importing components==================================================
const router = useRouter();
const route = useRoute();
const rawOld = ref();
const raw = ref(null);
const moreRaws = ref(null);
// let pageblocks = "";
//---prepping data---------------------------------------------------------------------------
fetchData();
// var preImgUrl = "https://cms-buychain-pb01.up.railway.app/";

// Directus API call to get the article data via the directus sdk using the id from the route params

async function fetchData() {
  console.log("=============================================\n====  RAWPAGE.vue API HANDLER HANDLER    ====\n=============================================");

  const { id2 } = route.params;
  let rawResponse;
  try {
    rawResponse = await directus.items('rawpage').readByQuery(id2, {
      fields: ['*'],
      filter: {
        _and: [
          { home_id: { _eq: route.params.id } },
          { status: { _eq: 'published' } },
        ],
      },
      sort: ['sort'],
    });

    const formattedRaw = { ...rawResponse, }
    raw.value = formattedRaw;

  } catch (err) {
    router.replace({ name: 'not-found', params: { catchAll: route.path } });
  }
}
</script>

<template>
  <main>
    <div class="container">
      <div class="inner-container">
        <div class="content">
          <div class="content-block">

            <div class="hero">
              <h2 class="title"> </h2>
              <p class="description"> </p>
            </div>

            <!-- <div class="wysiwyg" v-html="JSON.parse(data)">
                </div>             -->

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

