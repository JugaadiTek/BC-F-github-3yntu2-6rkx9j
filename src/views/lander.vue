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
const lander = ref(null);
const moreLanders = ref(null);
// let pageblocks = "";
//---prepping data---------------------------------------------------------------------------
fetchData();
var preImgUrl = "https://cms-buychain-pb01.up.railway.app/";

// Directus API call to get the article data via the directus sdk using the id from the route params
async function fetchData() {
  console.log("=============================================\n=====  LANDER.vue API HANDLER HANDLER    ====\n=============================================");
  const { id } = route.params;
  let landerResponse;
  try {
    landerResponse = await directus.items('landers').readByQuery(id,{
      fields: ['id','title','slug','status','wysiwyg','sort'],
      filter: {
        _and: [
          { id: { _eq: route.params.id } },
          { status: { _eq: 'published' }},
        ],
      },
      sort: ['sort'],
    });

    const formattedLander = { ...landerResponse, }
    lander.value = formattedLander;

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
            <div class="left-column">
              <div class="wysiwyg">

              </div>
            </div>
            <div class="right-column">
              <div class="form">

              </div>
              <div class="wysiwyg">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
</template>


<style scoped></style>