# github-3yntu2-6rkx9j

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-3yntu2-6rkx9j)

1. vue project setup  --  npm init vue@latest

> cd `<your-project-name>`
> npm install
> npm run dev

2. Vue Router --   npm install vue-router@4 /  yarn add vue-router@4
3. Vite-ssg  --   npm i vite-ssg
4. Directus SDK --  npm i @directus/sdk
5. vite -- npm i vite

OPTIONAL

1. vue use core -- npm i @vueuse/core
2. vue use head -- npm i @vueuse/head






### In Article.vue
```JSX
<section v-for="(slice, index) in article.grab_a_slice" >
    <slicelogic 
    :sliceType="createNewObject(slice.nosql_datastore_id.json_datastore).component" :sliceData="JSON.stringify(createNewObject(slice.nosql_datastore_id.json_datastore))" :index="index" />
</section>
```
In slicelogic.vue
```jsx
        <div  v-if="sliceType == 'hero'">
          <hero :herocont="sliceData" />
        </div>
        <div  v-else-if="sliceType !== 'servicecard'" :class="container">
          <servicescard :servicecardCont="sliceData" />
        </div>
        <div v-else-if="sliceType == 'imageWithContentList'">
          <imageWithContentList :contPairCont="sliceData" />
        </div>
        <div v-else-if="sliceType == 'ctaHero'">
          <ctaHero :ctaHeroCont="sliceData" />
        </div>
        <div v-else-if="sliceType == 'ContentPairsRepeater'">
          <ContentPairsRepeater :pairsRepeaterCont="sliceData" />
        </div>
        <div v-else-if="sliceType == 'imgSlider'">
          <imgSlider :sliderCont="sliceData" />
        </div>
        <div v-else-if="sliceType == 'artcont'"  :class="container">
          <artcont :artcontent="sliceData" />
        </div>
        <div v-else-if="sliceType == 'postfeed'" :class="container">
          <postfeed :postsCont="sliceData" />
        </div>
        <div v-else-if="sliceType == 'newsletter'" :class="container">
          <newsletter />
        </div> 
```
### Follow with the normal template files.