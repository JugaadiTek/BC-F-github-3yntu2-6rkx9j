<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { getAssetURL } from '@/utils/get-asset-url';
import axios from 'axios'

// var axios = require('axios');

// var axios = require('axios');

// var config = {
//   method: 'get',
// maxBodyLength: Infinity,
//   url: 'https://cms-buychain-pb01.up.railway.app/items/home_nosql_datastore?fields=nosql_datastore_id,nosql_datastore_id.json_datastore',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
//   this.$props.response = response.data
  

// const json = JSON.stringify(response.data);

// console.log(json.replace(/\\n/g, ''))
// })

// .catch(function (error) {
//   console.log(error);
// });

defineProps({
  article: {
    type: Object,
    required: true,
  },
  bordered: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <article class="article" :class="{ bordered }">
    <!-- <div class="article__topWrapper">
      <div class="article__imageWrapper">
        <img :src="getAssetURL(article.cover_image)" alt="" loading="lazy" />
      </div>
      <span aria-hidden="true" class="tag">Writing</span>
    </div> -->
    <div class="article__bottomWrapper">
      <h1 class="article__title">

        <RouterLink
          style="color:green; !important"
          :to="`/articles/${article.id}`"
        >
          {{ article.title }}
        </RouterLink>
      </h1>
      <!-- <h1>{{ response.data }}</h1> -->
      <!-- <h2>{{ response.data }}</h2> -->

      <div class="article__detail">
        <div class="article__detailAuthor">
          <!-- <img
            :src="getAssetURL(article.author.avatar)"
            alt=""
            loading="lazy"
          /> -->
        </div>
        <div class="article__detailInner">
          <div class="article__detailInnerAuthor">
            <!-- {{ `${article.author.first_name} ${article.author.last_name}` }} -->
          </div>
          <!-- <div class="article__detailInnerTime">{{ article.publish_date }}</div> -->
          <div class="article__detailInnerCategory">Writing</div>
        </div>
      </div>
    </div>
  </article>
</template>
