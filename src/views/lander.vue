<script setup>
import { ref } from 'vue';
import { directus } from '@/services/directus';
import { RouterLink, useRoute, useRouter } from 'vue-router';
// import { getAssetURL } from '@/utils/get-asset-url';
// import { o } from '../../dist/assets/app-cb1ccfc7';
// import { defineProps } from 'vue';
// import { declareInterface } from '@babel/types';
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
// var preImgUrl = "https://cms-buychain-pb01.up.railway.app/";

// Directus API call to get the article data via the directus sdk using the id from the route params
async function fetchData() {
  console.log("=============================================\n=====  LANDER.vue API HANDLER HANDLER    ====\n=============================================");
  const { id } = route.params;
  let landerResponse;
  try {
    landerResponse = await directus.items('landers').readByQuery(id, {
      fields: ['id', 'title', 'slug', 'status', 'wysiwyg', 'sort'],
      filter: {
        _and: [
          { slug: { _eq: route.params.id } },
          { status: { _eq: 'published' } },
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

// function getPID() {
//   const pids = route.params.id
//   return pids;
// }

// const pid = route.params.id;
// console.log(pid);
</script>

<template>
  <main>
    <div class="container">
      <!-- <pre>{{ JSON.parse(JSON.stringify(lander)) }}</pre> -->
      <pre>{{ JSON.parse(JSON.stringify(lander.data[0])) }}</pre>
      <div class="inner-container">
        
          <!-- <div v-html="getInTouchData.wysiwyg"></div> -->
          <!-- v-for="getInTouchData in JSON.parse(JSON.stringify(lander.data))" -->
          
              <div class="content-block">
                <div class="left-column">
                  <div class="wysiwyg" v-html="JSON.parse(JSON.stringify(lander.data[0].wysiwyg))">
                  </div>
                </div>
                <div class="right-column">
                  <div class="form" v-html="JSON.parse(JSON.stringify(lander.data[0].code))">
                  </div>
                  <div class="right_wysiwyg" v-html="JSON.parse(JSON.stringify(lander.data[0].right_wysiwyg))">
                  </div>
                </div>
              </div>

          <!-- <div class="content-block" v-if="data.id = '6d9ba917-8059-494b-a8a4-c5fd7cf55449'">
              <div class="left-column">
                <div class="wysiwyg">
                  <div v-html="data.wysiwyg"></div>
                </div>
              </div>
              <div class="right-column">
                <div class="form">

                </div>
                <div class="wysiwyg">
                </div>
              </div>
            </div>

            <div class="content-block" v-if="data.id = 'dc16b12d-3855-4533-a4f4-1e68afef445b'">
              <div class="left-column">
                <div class="wysiwyg">
                  <div v-html="data.wysiwyg"></div>
                </div>
              </div>
              <div class="right-column">
                <div class="form">

                </div>
                <div class="wysiwyg">
                </div>
              </div>
            </div> -->

        
      </div>
    </div>
  </main>
</template>


<style scoped></style>