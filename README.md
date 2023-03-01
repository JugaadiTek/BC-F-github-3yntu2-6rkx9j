# github-3yntu2-6rkx9j

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-3yntu2-6rkx9j)

1. vue project setup  --  npm init vue@latest

> cd `<your-project-name>`
> npm install 
>> npm run dev

2. Vue Router --   npm install vue-router@4 /  yarn add vue-router@4
3. Vite-ssg  --    npm i vite-ssg
4. Directus SDK --  npm i @directus/sdk
5. vite -- npm i vite

## OPTIONAL
1. vue use core -- npm i @vueuse/core
2. vue use head -- npm i @vueuse/head
```
```cli
npm init vue@latest <your-project-name>
cd <your-project-name> 
npm vue-router@4    vite-ssg    @directus/sdk    vite    @vueuse/core    @vueuse/head
npm install
```
### In Article.vue
```JSX
<section v-for="(slice, index) in article.grab_a_slice" >
    <slicelogic 
    :sliceData="JSON.stringify(createNewObject(slice.nosql_datastore_id.json_datastore))" 
    :index="index" />
    :sliceType="sliceData.component" />
</section>
```
In slicelogic.vue
```JSX
    <hero             v-if="sliceData.component       == 'hero'" 
    :class        =   "[sliceData.component]" 
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    />
    <servicescard     v-else-if="sliceData.component  == 'servicecard'" 
    :class        =   "[sliceData.component]"
    :data         =   "JSON.stringify(sliceData)"
    :sliceType    =   "sliceData.component"
    />
```
### Follow with the normal template files.