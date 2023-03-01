<script setup>
import { ref } from 'vue';
import { directus } from '@/services/directus';
import { RouterLink, useRoute, useRouter } from 'vue-router';
// import { getAssetURL } from '@/utils/get-asset-url';
import { defineProps } from 'vue';
// import MorePages from '@/components/MoreArticles.vue';
// import sliceLogic from '@/utils/sliceLogic.vue';

// import { get } from 'http';

defineProps({
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
// var preImgUrl = "https://cms-buychain-pb01.up.railway.app/";

// Directus API call to get the article data via the directus sdk using the id from the route params
async function fetchData() {
  console.log("=============================================\n=====  LANDER.vue API HANDLER HANDLER    ====\n=============================================");
  const { id } = route.params;
  let landerResponse;
  try {
    landerResponse = await directus.items('landers').readByQuery(id, {
      fields: ['*'],
      filter: {
        _and: [
          { slug: { _eq: route.params.slug } },
          { status: { _eq: 'published' } },
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
</script>
<!-- //================================================================================================ -->
<template>
  <main>
    <div class="">
      <div class="">

        <div class="content-block">
          <div class="left-column">
            <div class="top_wysiwyg" v-html="JSON.parse(JSON.stringify(lander.data[0].top_wysiwyg))"></div>
            <div class="wysiwyg" v-html="JSON.parse(JSON.stringify(lander.data[0].wysiwyg))"></div>
          </div>
          <div class="right-column">
            <div class="formContainer">
              <div class="form" v-html="JSON.parse(JSON.stringify(lander.data[0].code))"></div>
            </div>
            <div class="right_wysiwyg" v-html="JSON.parse(JSON.stringify(lander.data[0].right_wysiwyg))"></div>
          </div>
        </div>

        <!-- <div class="content-block">
          <div class="left-column">
            <div class="top_wysiwyg" v-html="JSON.parse(JSON.stringify(lander.data[1].top_wysiwyg))"></div>
            <div class="wysiwyg" v-html="JSON.parse(JSON.stringify(lander.data[1].wysiwyg))"></div>
          </div>
          <div class="right-column">
            <div class="formContainer">
              <div class="form" v-html="JSON.parse(JSON.stringify(lander.data[1].code))"></div>
            </div>
            <div class="right_wysiwyg" v-html="JSON.parse(JSON.stringify(lander.data[1].right_wysiwyg))"></div>
          </div>
        </div>

        <div class="content-block">
          <div class="left-column">
            <div class="top_wysiwyg" v-html="JSON.parse(JSON.stringify(lander.data[2].top_wysiwyg))"></div>
            <div class="wysiwyg" v-html="JSON.parse(JSON.stringify(lander.data[2].wysiwyg))"></div>
          </div>
          <div class="right-column">
            <div class="formContainer">
              <div class="form" v-html="JSON.parse(JSON.stringify(lander.data[2].code))"></div>
            </div>
            <div class="right_wysiwyg" v-html="JSON.parse(JSON.stringify(lander.data[2].right_wysiwyg))"></div>
          </div>
        </div> -->

      </div>
    </div>
  </main>
</template>


<style scoped>

 h1 {
  background-color: green;
  color: red;
}
.content-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 170px;
  padding-top: 150px;
}

iframe {
  height: 400px;
}

.container {
  background-image: url(/src/images/ctaHeroBG.jpg);
  background-repeat: no-repeat;
}

.formContainer {
  background-color: #f5f5f5;
  padding: 2px;
  border: 4px solid #f5f5f5;
  border-radius: 10px;
}

img {
  width: 100vw;
  height: auto;
}
</style>