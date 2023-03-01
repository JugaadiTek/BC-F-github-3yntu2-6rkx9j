<script>
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

            <div class="">
              <h2 class="title">{{ JSON.parse(JSON.stringify(raw.data)) }} </h2>
              <h2 class="title">{{ JSON.parse(JSON.stringify(formattedRaw)) }} </h2>
              <p class="description"> </p>
            </div>

            <div class="wysiwyg">
              <h1>Cops, another community I'm not part of.</h1>
              <p>I feel like a jigsaw puzzle missing a piece. And I'm not even sure what the picture should be. Oh I beg
                to differ, I think we have a lot to discuss. After all, you are a client. I'm going to tell you something
                that I've never told anyone before.</p>
              <p>I'm generally confused most of the time. Rorschach would say you have a hard time relating to others.
                Tonight's the night. <strong> And it's going to happen again and again.</strong> <em> It has to
                  happen.</em> I'm a sociopath; there's not much he can do for me.</p>
              <h2>I'm going to tell you something that I've never told anyone before.</h2>
              <p>I'm a sociopath; there's not much he can do for me. Only you could make those words cute. Hello, Dexter
                Morgan. I'm not the monster he wants me to be. So I'm neither man nor beast. I'm something new entirely.
                With my own set of rules. I'm Dexter. Boo.</p>
              <ol>
                <li>Watching ice melt. This is fun.</li>
                <li>You're a killer. I catch killers.</li>
                <li>I think he's got a crush on you, Dex!</li>
              </ol>

              <h3>Somehow, I doubt that. You have a good heart, Dexter.</h3>
              <p>Cops, another community I'm not part of. Like a sloth. I can do that. I love Halloween. The one time of
                year when everyone wears a mask … not just me. I feel like a jigsaw puzzle missing a piece. And I'm not
                even sure what the picture should be.</p>
              <ul>
                <li>I think he's got a crush on you, Dex!</li>
                <li>Finding a needle in a haystack isn't hard when every straw is computerized.</li>
                <li>God created pudding, and then he rested.</li>
              </ul>

              <p>I'm real proud of you for coming, bro. I know you hate funerals. I'm a sociopath; there's not much he can
                do for me. Keep your mind limber. Only you could make those words cute. He taught me a code. To survive.
              </p>
              <p>Under normal circumstances, I'd take that as a compliment. I'm thinking two circus clowns dancing. You?
                Makes me a … scientist. I'm thinking two circus clowns dancing. You? Under normal circumstances, I'd take
                that as a compliment.</p>
              <p>This man is a knight in shining armor. Tonight's the night. And it's going to happen again and again. It
                has to happen. Under normal circumstances, I'd take that as a compliment. I'm real proud of you for
                coming, bro. I know you hate funerals.</p>
              <p>Watching ice melt. This is fun. Under normal circumstances, I'd take that as a compliment. I like
              seafood. This man is a knight in shining armor. Watching ice melt. This is fun.</p>
            <p>I like seafood. Makes me a … scientist. Pretend. You pretend the feelings are there, for the world, for
              the people around you. Who knows? Maybe one day they will be. I'm thinking two circus clowns dancing. You?
            </p>
            <p>Tell him time is of the essence. I've lived in darkness a long time. Over the years my eyes adjusted
              until the dark became my world and I could see. Somehow, I doubt that. You have a good heart, Dexter.</p>
            <p>I'm generally confused most of the time. I'm a sociopath; there's not much he can do for me. I'm doing
              mental jumping jacks. I'm generally confused most of the time.</p>
            <p>Watching ice melt. This is fun. I will not kill my sister. I will not kill my sister. I will not kill my
              sister. I'm generally confused most of the time. Cops, another community I'm not part of. Pretend. You
              pretend the feelings are there, for the world, for the people around you. Who knows? Maybe one day they
              will be.</p>
            <p>I'm generally confused most of the time. I'm Dexter, and I'm not sure what I am. I will not kill my
              sister. I will not kill my sister. I will not kill my sister. I'm generally confused most of the time.</p>
            <p>You're a killer. I catch killers. Finding a needle in a haystack isn't hard when every straw is
              computerized. I'm really more an apartment person. Watching ice melt. This is fun. I'm thinking two circus
              clowns dancing. You?</p>
            <p>You're a killer. I catch killers. You're a killer. I catch killers. Hello, Dexter Morgan. Tonight's the
              night. And it's going to happen again and again. It has to happen.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</main></template>

<style scoped>
/* trying to change bullet of list */

/* li::before {
  content: "::before";
  background: lightgray;
  border-radius: 1ch;
  padding-inline: 1ch;
  margin-inline-end: 1ch;
  list-style-type: '😒';
}

 ol > li::marker {
  content: counter(list-item) "› ";
  color: hotpink;
} */
</style>
