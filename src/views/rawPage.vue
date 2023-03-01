<script>
import { ref } from 'vue';
import { directus } from '@/services/directus';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { getAssetURL } from '@/utils/get-asset-url';

console.log("==============\n==== RAWPAGE.VUE ====\n==============");
// ======== COMPONENTS ======== /VIEWS/RAWPAGE.VUE ======== COMPONENTS ========//
const router = useRouter();
const route = useRoute();
const rawOld = ref();
const rawp = ref(null);
const moreRawps = ref(null);
const preImgUrl = "https://cms-buychain-pb01.up.railway.app/";

// ======== FETCH DATA ======== /VIEWS/RAWPAGE.VUE ======== FETCH DATA ========//
fetchData();
async function fetchData() {
    const { id } = route.params;
    let rawpResponse;
    try {

//=================================================================================//
//=======================  /VIEWS/RAWPAGE.VUE =====================================//
//======================= 1. READ ONE RAWPAGE =====================================//
//=================================================================================//
console.log("= INDIVIDUAL----FETCH ==\n== START---RAWPAGE.VUE =");
    rawpResponse = await directus.items("rawpage").readOne(id, { fields: ["*"],  },
      console.log("==-INDIVIDUAL----FETCH-===- END ---RAWPAGE.VUE-==")           );    
// 1.1 FORMATTING DATA ---- /views/Rawpage.vue ---- FORMATTING DATA ----===========//
    console.log("==-INDIVIDUAL---SET-==-VARIABLES---RAWPAGE.VUE-==");
        formattedRawp = { ...rawpResponse,};
        rawp.value = formattedRawp;
// 1.2 SETTING THE DATA ---- /views/Rawppage.vue ---- SETTING THE DATA ----========//
        console.log("==INDIVIDUAL==\n==== RAWPAGE.VUE ====\n======END=====");
//=================================================================================//
//=======================  /VIEWS/RAWPAGE.VUE =====================================//
//======================= 2. READ ONE RAWPAGE =====================================//
//=================================================================================//
console.log("= INDIVIDUAL----FETCH ==\n== START---RAWPAGE.VUE =");
    rawpResponse = await directus.items('rawpage').readByQuery(id,{
      fields: ['*'],
      filter: {
        _and: [
          { id: { _eq: route.params.id } },
          { status: { _eq: 'published' }},
        ],
      },
      sort: ['sort'],
    });
// 2.1 FORMATTING DATA ---- /views/Rawpage.vue ---- FORMATTING DATA ----=========//
    const formattedMoreRawps = moreRawpsResponse.data.map(
      (moreRawp) => {
        return {
          ...moreRawp,
          publish_date: formatRelativeTime(new Date(moreRawp.publish_date)),
        }; 
      }
    );
// 2.2 SETTING THE DATA ---- /views/Rawpage.vue ---- SETTING THE DATA ----=======//
    const   formattedRawp  =  { ...rawpResponse, } 
            rawp.value     =  formattedRawp;
// 2.3 SETTING THE DATA ---- /views/Rawpage.vue ---- SETTING THE DATA ----=======//
  } catch (err) {   router.replace({ name: 'not-found', params: { catchAll: route.path } });  }
                    console.log("==INDIVIDUAL==\n==== RAWPAGE.VUE ====\n======END====="       );    }
</script>
<!--//🔳💹💹💹💹💹💹💹💹💹💹💹💹💹💹💹 💹💹💹💹💹💹💹💹💹💹💹💹💹💹🔳*/ // -->
<!--//🔳🟩||🟩 COMPONENTS 🟩🟩🟩 /VIEWS/RAWPAGE.VUE 🟩🟩🟩COMPONENTS 🟩🟩🔳*/ // -->
<!--//🔳🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🔳*/ // -->
<!--//🔳🟩||🟩 VUEJS SCRIPT HEAD 🟩🟩🟩🟩🟩🟩🟩🟩 VUEJS SCRIPT HEAD 🟩🟩🔳*/ // -->
<!--//🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳// -->
<!--//🔳🟧🟧🟧🟧🟧🟧 VUEJS SINGLE FILE COMPONENTS BASED TEMPLATE 🟧🟧🟧🟧🔳// -->
<!--//🔳🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🔳// -->
<!--//🔳🟧🟧🟧 COMPONENTS ======= /VIEWS/RAWPAGE.VUE====== COMPONENTS🟧🟧🟧🔳// -->
<!--//🔳🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔳// -->
<template><main><div class="container"><div class="inner-container"><!-- MC Containers -->
    <div class="content"><!-- MC CONTENT--><div class="content-block"><!-- MC CONTENT BLOCK-->
        <div class="hero">
            <h2 class="title"></h2><p class="description"></p>
        </div>
    </div></div>
</div></div></main></template>