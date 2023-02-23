<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { directus } from '@/services/directus';
import { getAssetURL } from '@/utils/get-asset-url';
import MoreArticles from '@/components/MoreArticles.vue';
// =========================  COMPONENTS  ==========================================================
import hero from "@/components/MC/hero.vue";
import servicescard from "@/components/MC/servicescard.vue";
import imageWithContentList from "@/components/MC/imageWithContentLIst.vue";
import imgSlider from "@/components/MC/imgSlider.vue";
import ContentPairsRepeater from "@/components/MC/ContentPairsRepeater.vue";
import ctaHero from "@/components/MC/ctaHero.vue";
import artcont from "@/components/MC/artcont.vue";
import postfeed from "@/components/MC/postfeed.vue";
import newsletter from "@/components/MC/newsletter.vue";
import { objectToString, parseStringStyle } from '@vue/shared';
// =================================================================================================
let iter = 0;
const router = useRouter();
const route = useRoute();
const article = ref(null);
const moreArticles = ref(null);
fetchData();
// let iter = 0;
async function fetchData() {
    const { id } = route.params;
    
    let articleResponse;
    let bill;
    // let iter = 0;
    
    try {
        articleResponse = await directus.items('home').readOne(id, {
            fields: [
            'grab_a_slice.nosql_datastore_id.json_datastore','id'
            
            /* "author.avatar", "author.first_name", "author.last_name*/,
            ],
        });
        const formattedArticle = {
            ...articleResponse,
            
            // publish_date: formatRelativeTime(new Date(articleResponse.publish_date)),
        };
        
        const moreArticlesResponse = await directus.items('home').readByQuery({
            fields: ['grab_a_slice.nosql_datastore_id.json_datastore','id'],
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
        
        article.value = flattenObj(formattedArticle);
        moreArticles.value = flattenObj(formattedMoreArticles);
        
        // bill.value = article._rawValue.grab_a_slice;
        // console.log(article.value);
        // console.log(bill.value);
        // console.log("BILL",bill,"\nBILLEXP",bill.data,"\nBILLEXP2", )
        // for (let bill2 of bill) {
            //   let bill3 = bill2.nosql_datastore_id
            //   let bill4 = bill3.json_datastore
            // //   let bill5 = JSON.parse(bill4)
            // //   this.allPagesData += JSON.stringify(bill5)
            //   console.log("b2",bill2,"b3",bill3)
            //   //,"\nb4",bill4,"\nb5",bill5)
            // }
            
            
            
            
            
            
            
        } catch (err) {
            router.replace({ name: 'not-found', params: { catchAll: route.path } });
        }
    }
    // let (slices,index) in article.data {
        //     console.log(slices);
        // }
        
        const flattenObj = (ob) => {
            
            // The object which contains the
            // final result
            let result = {};
            
            // loop through the object "ob"
            for (const i in ob) {
                
                // We check the type of the i using
                // typeof() function and recursively
                // call the function again
                if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
                    const temp = flattenObj(ob[i]);
                    for (const j in temp) {
                        
                        // Store temp in result
                        result[i + '.' + j] = temp[j];
                    }
                }
                
                // Else store ob[i] in result directly
                else {
                    result[i] = ob[i] ;
                }
            }
            // iter++;
            console.log(result)
            return result;
        };
        
        // let varobj = flattenObj(moreArticlesResponse);
        console.log("blah");
    </script>
    
    <template>
        <section v-if="article">
            <h1 class="current-article__title">{{ article.title }}</h1>
            <!-- <RouterLink to="/" class="current-article__backlink">          <IconBack class="icon" />          <span>Back to Articles</span>        </RouterLink> -->
            <!-- <img style="height:100px;overflow:hidden;" :src="getAssetURL(article.cover_image)" alt="" /> -->
            <!-- <div v-html="article.body" class="current-article__bodyContent">  </div>
                <MoreArticles v-if="moreArticles" :articles="moreArticles" /> -->
                
            </section>
            <!------------------------------------------------ NAV BAR ---------------------------------------------------------------------------------------------------------------------------------------------------->
            
            <!------------------------------------------------ NAV BAR END ---------------------------------------------------------------------------------------------------------------------------------------------------->
            <div style ="position:absolute;z-index:9999;right:0; overflow: hidden;width:800px;height:100%;">
            <div class = "codeloop">
                <div>
                <pre class = "title">0A: GET FULL JSON</pre>
                <pre class = "code">JSON.stringify(flattenObj(article))</pre>
                <code>{{ JSON.stringify(flattenObj(article)) }}</code>
                <pre class = "title">0B: GET ARTICLE ID</pre>
                <pre class = "code">JSON.stringify(flattenObj(article).id)</pre>
                <code>{{ JSON.stringify(flattenObj(article).id) }}</code>
                <pre class = "title">0C: GET SLICE LIST</pre>
                <pre class = "code">JSON.stringify(flattenObj(article).grab_a_slice)</pre>
                <code>{{ JSON.stringify(flattenObj(article).grab_a_slice) }}</code>
                <pre class = "title">0C: GET SLICE BY INDEX</pre>
                <pre class = "code">JSON.stringify(flattenObj(article).grab_a_slice[2].nosql_datastore_id.json_datastore)</pre>
                <code>{{ JSON.stringify(flattenObj(article).grab_a_slice[2].nosql_datastore_id.json_datastore) }}</code>
                <div>
                    <code>{{ JSON.stringify(flattenObj(moreArticles)) }}</code>
                </div>
                <!-- <div v-for="item in article.grab_a_slice.nosql_datastore_id.json_datastore"> -->
                    <!-- {{ item }} -->
                <!-- </div> -->
            </div>
        </div>
    </div>
            <!---============================================================================================================================================================================================================-->
            <!------------------------------------------------ Insert Here ---------------------------------------------------------------------------------------------------------------------------------------------------->
            <!---============================================================================================================================================================================================================-->
            
            <section v-for="(slice, index) in slices" :class="[slice.alt, slice.component]" :id="`section_` + index" :key="index">
                
                <div v-if="slice.component == 'hero'">
                    <hero :herocont="slice.bricks" />
                </div>
                
                <div v-else-if="slice.component == 'imageWithContentList'">
                    <imageWithContentList :contPairCont="slice.bricks" />
                </div>
                
                <div v-else-if="slice.component == 'ctaHero'">
                    <ctaHero :ctaHeroCont="slice.bricks" />
                </div>
                
                <div v-else-if="slice.component == 'ContentPairsRepeater'">
                    <ContentPairsRepeater :pairsRepeaterCont="slice.bricks" />
                </div>
                
                <div v-else-if="slice.component == 'imgSlider'">
                    <imgSlider :sliderCont="slice.bricks" />
                </div>
                
                <div :class="container" v-else-if="slice.component == 'artcont'">
                    <artcont :artcontent="slice.bricks" />
                </div>
                
                <div :class="container" v-else-if="slice.component == 'postfeed'">
                    <postfeed :postsCont="slice.bricks" />
                </div>
                
                <div :class="container" v-else-if="slice.component == 'servicecard'">
                    <servicescard :servicecardCont="slice.bricks" />
                </div>
                
                <div :class="container" v-else-if="slice.component == 'newsletter'">
                    <newsletter />
                </div>
                
            </section>
            
            <!------------------------------------------------ END SLICE MASTER ---------------------------------------------------------------------------------------------------------------------------------------------------->
            
            
            <!---============================================================================================================================================================================================================-->
            <!------------------------------------------------ Q&A TESTING UTIL ----------------------------------------------------------------------------------------------------------------------------------------------->
            <!---============================================================================================================================================================================================================-->
            
        </template>
        <!------------------------------------------------ FOOTER START ---------------------------------------------------------------------------------------------------------------------------------------------------->
        
        <!------------------------------------------------ FOOTER END ---------------------------------------------------------------------------------------------------------------------------------------------------->
        
        <style>
        .codeloop h1,
        .codeloop h2,
        .codeloop h3,
        .codeloop h4 {
            margin:unset;
            padding:unset;
        }
        .codeloop {
            background: #100925;
            height:100%;
            width:500px;
            display:block;
            flex-direction: row;
            position:absolute;
            top:0;
            /* right:-480px; */
            overflow-x:scroll;
            transition:300ms;
            box-shadow: 0 0 6px 2px #000000;
        }
        .codeloop:hover {
            right:0;
            box-shadow: 0 0 160px 4px #202030;
        }
        .codeloop > div {
            background-color: #aceace;
            padding:32px;
            max-width:1200px;
            margin:auto;
            
        }
        .codeloop div:has(>code) {
            background:#20406050;
            margin:16px auto;
            box-shadow: 3px 3px 6px 1px #000000;
            padding:16px;
            
        }
        .codeloop code {
            max-height:200px;
            overflow:hidden;
            overflow-y:auto;
            display:block;
            padding: 8px 24px;
            background-color: #051125;
            /* padding: 1rem; */
            margin: 0;
            border-radius:0 0 0.5rem 0.5rem;
            font-size: 0.8rem;
            line-height: 1.3rem;
            font-family: monospace;
            color: #effcef;
            border:8px solid #202030;
            box-shadow: 0 0 6px 2px #000 inset;
            transition:650ms;
            border-top:unset;
        }
        .codeloop code:focus-within,.codeloop code:focus,.codeloop code:active,.codeloop code:target,.codeloop code:focus-visible {
            max-height:800px;
        }
        ::-webkit-scrollbar {
            background: #212345;
            width: 12px;
            height:8px;
            border:4px solid  #151135;
        }
        ::-webkit-scrollbar-thumb {
            background: #ac1748c0;
            border-radius: 8px;
        }
        .codeloop pre {
            color:white;
            background:#202030;
            font-size:1.3em;
            line-height:1.5em;
            margin: 0px 0px;
            padding:8px 32px;
            box-shadow:0 0 12px 4px #ac174800 inset;
            /* text-align:center; */
            font-weight:100;
        }
        .codeloop pre::-webkit-scrollbar {
            display:none;
        }
        .codeloop code+pre {
            margin-top:16px;
        }
        .codeloop pre.title{
            font-weight:900;
            color: #acacfe;
            padding:0 32px;
            text-shadow: 0px 0px 30px #000055;
            background-color:#101020;
            box-shadow: 0 0 12px 4px #ac174820;
            z-index: 1;
            
        }
        .codeloop pre.code {
            /* text-align: center; */
            font-size:0.8em;
            overflow-wrap:break-word;
            white-space: normal;
            
        }
        .codeloop hr {
            border: 1px solid #333;
            border-radius: 5px;
            height:4px;
            margin:16px 0px;
            display:block;
            z-index: 99;
        }
    </style>
    
    
    
    