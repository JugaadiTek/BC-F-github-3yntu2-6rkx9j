<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { directus } from '@/services/directus';
import { getAssetURL } from '@/utils/get-asset-url';
import IconBack from '@/components/icons/Back.vue';
import IconLink from '@/components/icons/Link.vue';
import IconYoutube from '@/components/icons/Youtube.vue';
import IconLinkedin from '@/components/icons/Linkedin.vue';
import IconTwitter from '@/components/icons/Twitter.vue';
import IconGithub from '@/components/icons/Github.vue';
import MoreArticles from '@/components/MoreArticles.vue';

const router = useRouter();
const route = useRoute();
const article = ref(null);
const moreArticles = ref(null);

fetchData();

async function fetchData() {
  const { id } = route.params;
  
  let articleResponse;
  
  try {
    articleResponse = await directus.items('home').readOne(id, {
      fields: [
      '*.*' /* "author.avatar", "author.first_name", "author.last_name*/,
      ],
    });
    
    const formattedArticle = {
      ...articleResponse,
      // publish_date: formatRelativeTime(new Date(articleResponse.publish_date)),
    };
    
    const moreArticlesResponse = await directus.items('home').readByQuery({
      fields: ['*.*'],
      filter: {
        _and: [
        { id: { _neq: articleResponse.id } },
        { status: { _eq: 'published' } },
        ],
      },
      limit: 20,
    });
    const formattedMoreArticles = moreArticlesResponse.data.map(
    (moreArticle) => {
      return {
        ...moreArticle,
        // publish_date: formatRelativeTime(new Date(moreArticle.publish_date)),
      };
    }
    );
    
    article.value = formattedArticle;
    moreArticles.value = formattedMoreArticles;
  } catch (err) {
    router.replace({ name: 'not-found', params: { catchAll: route.path } });
  }
}
</script>

<template>
  <div class="current-article">
    <section v-if="article">
      <div class="container">
        <RouterLink to="/" class="current-article__backlink">
          <IconBack class="icon" />
          <span>Back to Articles</span>
        </RouterLink>
        <h1 class="current-article__title">{{ article.title }}</h1>
        <div style="height:200px;background:#999" class="current-article__detail">
          <div class="current-article__wrapperOuter">
            <div class="current-article__wrapperInner">
              <div class="current-article__authorImage">
                <!--<img src="getAssetURL(article.author.avatar)"                   alt=""                  loading="lazy"                /> -->
              </div>
              <div>
                <div class="current-article__authorName">
                  <!-- {{                    `${article.author.first_name} ${article.author.last_name}`                  }} -->
                </div>
                <div class="current-article__time">
                  <!-- {{ article.publish_date }} -->
                </div>
              </div>
            </div>
            <ul class="current-article__socials">
              <li>
                <a
                :href="$route.path"
                target="_blank"
                rel="noreferrer noopener"
                >
                
                <IconLink />
              </a>
            </li>
            <li>
              <a
              href="https://www.youtube.com/c/DirectusVideos"
              target="_blank"
              rel="noreferrer noopener"
              >
              <IconYoutube />
            </a>
          </li>
          <li>
            <a
            href="https://www.linkedin.com/company/directus-io"
            target="_blank"
            rel="noreferrer noopener"
            >
            <IconLinkedin />
          </a>
        </li>
        <li>
          <a
          href="https://twitter.com/directus"
          target="_blank"
          rel="noreferrer noopener"
          >
          <IconTwitter />
        </a>
      </li>
    </ul>
  </div>
  <div style="height:100px;overflow:hidden;" class="current-article_coverImage">
    <img style="height:100px;overflow:hidden;" :src="getAssetURL(article.cover_image)" alt="" />
  </div>
</div>
<div class="current-article__body">
  <div class = "codeloop">
    <div>
      <h2>article string</h2>
      <hr>
      <div>
        <code>{{JSON.stringify(article)}}</code>
      </div>  
    </div>
    
  </div>
  <div v-html="article.body" class="current-article__bodyContent">
    
    
  </div>
  <ul class="current-article__bodySocials">
    <li>
      <a
      href="https://github.com/directus"
      target="_blank"
      rel="noreferrer noopener"
      >
      <IconGithub />
    </a>
  </li>
  <li>
    <a
    href="https://www.youtube.com/c/DirectusVideos"
    target="_blank"
    rel="noreferrer noopener"
    >
    <IconYoutube />
  </a>
</li>
<li>
  <a
  href="https://www.linkedin.com/company/directus-io"
  target="_blank"
  rel="noreferrer noopener"
  >
  <IconLinkedin />
</a>
</li>
<li>
  <a
  href="https://twitter.com/directus"
  target="_blank"
  rel="noreferrer noopener"
  >
  <IconTwitter />
</a>
</li>
</ul>
</div>
</div>
</section>
<MoreArticles v-if="moreArticles" :articles="moreArticles" />
</div>
</template>


<style>
.codeloop > div {
  padding:16px;
  background-color: #f5f5f5;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  line-height: 1.5rem;
  font-family: monospace;
  color: #333;
  overflow: auto;
}

</style>