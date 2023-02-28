<script setup>
import { ref } from 'vue';
import { directus } from '@/services/directus';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { getAssetURL } from '@/utils/get-asset-url';
import { defineProps } from 'vue';
import MorePages from '@/components/MoreArticles.vue';
import sliceLogic from '@/utils/sliceLogic.vue';

// import { get } from 'http';

defineProps ({
  lander: {
    type: Object,
    required: true,
  },
})

// import { KeyObject } from 'crypto';
// import sliceLogic from '@/utils/sliceLogic.vue';
// import QueryString from 'qs';
// =========================importing components==================================================
const router = useRouter();
const route = useRoute();
const lander = ref(null);
const moreLanders = ref(null);
const landercount = 0;

// let pageblocks = "";
//---prepping data---------------------------------------------------------------------------
fetchData();

// defineProps([
//   'land.slug'
// ]);


var preImgUrl = "https://cms-buychain-pb01.up.railway.app/";

// Directus API call to get the article data via the directus sdk using the id from the route params
async function fetchData() {
  console.log("=============================================\n=====  LANDER.vue API HANDLER HANDLER    ====\n=============================================");
  const { id } = route.params;
  let landerResponse;
  try {
    landerResponse = await directus.items('landers').readByQuery(id,{
      fields: ['*'],
      filter: {
        _and: [
          { slug: { _eq: route.params.slug } },
          { status: { _eq: 'published' }},
        ],
      },
      sort: ['sort'],
    },
    
    )
    
    

    const formattedLander = { ...landerResponse, }
    lander.value = formattedLander;
    // console.log(landerResponse.slug[0],route.params);
  } catch (err) {
    router.replace({ name: 'not-found', params: { catchAll: route.path } });
  }
}
//filter the lander.data array to only include the route.params.slug



</script>
//================================================================================================
<template>
  <!-- <div v-if="landerResponse=route.params.slug"> -->
    <!-- {{ JSON.stringify(route.params) }} -->
    
  <!-- </div>  -->
  {{ filteredLander(lander) }}
  <div class = "codeloop" for="blah in lander.data">
    <div for ="">
      <!-- <code style = "color:white;">{{ blah }}</code> -->
      
    </div>
  </div>  
  <!-- <pre>{{ id }}</pre> -->
  <main>
    <div class="container">
      <div class="inner-container">
        <div class="content">
          <div class="content-block">
            <div class="left-column">
              <div class="wysiwyg">
                <!-- <h1>{{ lander.title }}</h1> -->
                <!-- <p>{{ lander.wysiwyg }}</p> -->
                <div class="codeloop">
                  
      <div class ="">
      </div>
    </div>
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