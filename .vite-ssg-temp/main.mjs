import { useSSRContext, mergeProps, ref, unref, defineComponent, withCtx, createVNode, toDisplayString, createTextVNode, resolveComponent, createApp } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { RouterView, RouterLink, createRouter, createWebHistory } from "vue-router";
import { Directus } from "@directus/sdk";
const main = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = {};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Notice.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const NavBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  props: {
    navbtn: { type: Object, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mcFix" }, _attrs))} data-v-ee2e436e><div class="container" data-v-ee2e436e><div class="inner-container" data-v-ee2e436e><figure class="logo menu-item" itemprop="logo" itemscope itemtype="https://schema.org/ImageObject" data-v-ee2e436e><a class="img" href="/" aria-current="page" data-v-ee2e436e><span data-v-ee2e436e>Go To Home</span><img itemprop="thumbnail"${ssrRenderAttr("src", __props.navbtn.logoimg.imgUrl)}${ssrRenderAttr("alt", __props.navbtn.logoimg.imgAlt)} data-v-ee2e436e></a><figcaption itemprop="caption" data-v-ee2e436e></figcaption></figure><div class="main-nav-links" data-v-ee2e436e><!--[-->`);
      ssrRenderList(__props.navbtn.mainNav, (mainLink, index) => {
        _push(`<ul class="dropdown" data-v-ee2e436e><li class="dropbtn" data-v-ee2e436e><a${ssrRenderAttr("href", mainLink.linkUrl)} data-v-ee2e436e>${ssrInterpolate(mainLink.linkText)}</a></li><!--[-->`);
        ssrRenderList(mainLink.subNav, (subLinks) => {
          _push(`<li class="" data-v-ee2e436e><a class="dropdown-content"${ssrRenderAttr("href", subLinks.url)} data-v-ee2e436e>${ssrInterpolate(subLinks.text)}</a></li>`);
        });
        _push(`<!--]--></ul>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(__props.navbtn.buttonLinks, (btn) => {
        _push(`<div class="main-nav-links" data-v-ee2e436e><ul data-v-ee2e436e><li class="demo-btn" data-v-ee2e436e><a${ssrRenderAttr("href", btn.linkUrl)} data-v-ee2e436e>${ssrInterpolate(btn.linkText)}</a></li></ul></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/NavBar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-ee2e436e"]]);
const _sfc_main$8 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    let navigations = ref([
      {
        component: "NavBar",
        alt: ["nogap", "darkbg"],
        bricks: {
          logoimg: { imgUrl: "/src/images/BuyChain-Logo-REV.svg", imgLink: "https://buychain.co/", imgAlt: "Brand Logo", type: "svg", variant: "", styleModifiers: "" },
          mainNav: [
            {
              linkText: "Home",
              linkUrl: "link",
              subNav: [
                { url: "https://www.flaticon.com", text: "Buychain Operations", type: "link", variant: "", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Buychain Capital", type: "link", variant: "", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Distributors", type: "link", variant: "", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Suppliers", type: "link", variant: "", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Retailers", type: "link", variant: "", styleModifiers: "" }
              ]
            },
            {
              linkText: "Solutions",
              linkUrl: "link",
              subNav: [
                { url: "https://www.flaticon.com", text: "Security", type: "link", variant: "", styleModifiers: "" }
              ]
            },
            {
              linkText: "About Us",
              linkUrl: "button",
              subNav: [
                { url: "https://www.flaticon.com", text: "Schedule A Demo", type: "link", variant: "", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Join The Waitlist", type: "link", variant: "", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Get In Touch", type: "link", variant: "", styleModifiers: "" }
              ]
            }
          ],
          buttonLinks: [
            {
              linkText: "Demo",
              linkUrl: "buttonurl"
            }
          ]
        }
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(navigations), (navigationbar) => {
        _push(`<nav class="container mainNav nogap darkbg"><!--- Here ----->`);
        _push(ssrRenderComponent(NavBar, {
          navbtn: navigationbar.bricks
        }, null, _parent));
        _push(`</nav>`);
      });
      _push(`<!--]--></header>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Header.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Info.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const footerSlice_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = {
  __name: "footerSlice",
  __ssrInlineRender: true,
  props: {
    footerCont: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mcFix" }, _attrs))} data-v-147058ce><div class="container" data-v-147058ce><div class="inner-container" data-v-147058ce><div class="content-block" data-v-147058ce><div data-v-147058ce><ul data-v-147058ce><!--[-->`);
      ssrRenderList(__props.footerCont.imageList, (image) => {
        _push(`<li data-v-147058ce><img${ssrRenderAttr("src", image.imageurl)} alt="" data-v-147058ce></li>`);
      });
      _push(`<!--]--><li class="copyrightTop" data-v-147058ce><!--[-->`);
      ssrRenderList(__props.footerCont.copyright_text, (text) => {
        _push(`<p data-v-147058ce>${ssrInterpolate(text.text)}</p>`);
      });
      _push(`<!--]--></li></ul></div><!--[-->`);
      ssrRenderList(__props.footerCont.atoms, (linksInfo) => {
        _push(`<div data-v-147058ce><ul data-v-147058ce><li class="linkHead" data-v-147058ce>${ssrInterpolate(linksInfo.label)}</li><!--[-->`);
        ssrRenderList(linksInfo.linksList, (links) => {
          _push(`<li data-v-147058ce><a class="${ssrRenderClass(links.styleModifiers)}"${ssrRenderAttr("href", links.url)} data-v-147058ce>${ssrInterpolate(links.text)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/footerSlice.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const footerSlice = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-147058ce"]]);
const _sfc_main$5 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const footerSliceCont = ref([
      {
        component: "footerSlice",
        alt: ["darkbg"],
        bricks: {
          imageList: [
            { imageurl: "/src/images/BuyChain-Logo-REV.svg", alt: "Buychain Brand Logo", type: "" }
          ],
          copyright_text: [
            { text: "All rights reserved." },
            { text: "Copyright © 2023" }
          ],
          atoms: [
            {
              label: "Solutions",
              linksList: [
                { url: "https://www.flaticon.com", text: "Operations", type: "", variant: "type_03", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Capital", type: "", variant: "type_03", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "", type: "", variant: "", styleModifiers: "horizontal-line" },
                { url: "https://www.flaticon.com", text: "Suppliers", type: "", variant: "type_03", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Distributors", type: "", variant: "type_03", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Retailers", type: "", variant: "type_03", styleModifiers: "" }
              ]
            },
            {
              label: "About Us",
              linksList: [
                { url: "https://www.flaticon.com", text: "FAQs", type: "", variant: "type_03", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Security", type: "", variant: "type_03", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Get In Touch", type: "", variant: "type_03", styleModifiers: "" }
              ]
            },
            {
              label: "Legal",
              linksList: [
                { url: "https://www.flaticon.com", text: "Security Statements", type: "button", variant: "type_03", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Terms & Conditions", type: "button", variant: "type_03", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Privacy Policy", type: "button", variant: "type_03", styleModifiers: "" },
                { url: "https://www.flaticon.com", text: "Cookie Statement", type: "button", variant: "type_03", styleModifiers: "" }
              ]
            }
          ]
        }
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!--- Footer Start --><!--[-->`);
      ssrRenderList(footerSliceCont.value, (footerData) => {
        _push(`<footer class="darkbg nogap footerSlice">`);
        _push(ssrRenderComponent(footerSlice, {
          footerCont: footerData.bricks
        }, null, _parent));
        _push(`</footer>`);
      });
      _push(`<!--]--><!--- Footer End --><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))}><!-- <Notice /> -->`);
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(unref(RouterView), {
        key: _ctx.$route.fullPath
      }, null, _parent));
      _push(`<!-- <Info /> -->`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const directus = new Directus("https://cms-buychain-pb01.up.railway.app");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Article",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      required: true
    },
    bordered: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><br>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        style: { "color": "green" },
        to: `/articles/${__props.article.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><b${_scopeId}>${ssrInterpolate(__props.article.title)}</b> ${ssrInterpolate(__props.article.id)}</span>`);
          } else {
            return [
              createVNode("span", null, [
                createVNode("b", null, toDisplayString(__props.article.title), 1),
                createTextVNode(" " + toDisplayString(__props.article.id), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Article.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "rawPageRoute",
  __ssrInlineRender: true,
  props: {
    rawpage: {
      type: Object,
      required: true
    },
    bordered: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RouterLink), mergeProps({
        style: { "color": "blueviolet" },
        to: `/rawpage/${__props.rawpage.id}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.rawpage.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.rawpage.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/rawPageRoute.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "landerRoute",
  __ssrInlineRender: true,
  props: {
    lander: {
      type: Object,
      required: true
    },
    bordered: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RouterLink), mergeProps({
        style: { "color": "red" },
        to: `/lander/${__props.lander.id}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.lander.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.lander.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/landerRoute.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Home_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const hero = ref(null);
    const hero2 = ref(null);
    const hero3 = ref(null);
    const articles = ref(null);
    const landers = ref(null);
    const rawpages = ref(null);
    fetchData();
    async function fetchData() {
      const response = await directus.items("home").readByQuery({
        fields: ["id", "title", "slug", "status"]
      });
      const formattedArticles = response.data.map((article) => {
        return { ...article };
      });
      const response2 = await directus.items("rawpage").readByQuery({
        fields: ["id", "title", "slug", "status"]
      });
      response2.data.map((rawpage) => {
        return { ...rawpage };
      });
      const response3 = await directus.items("landers").readByQuery({
        fields: ["id", "title", "slug", "status"]
      });
      response3.data.map((lander) => {
        return { ...lander };
      });
      const [first, ...rest] = formattedArticles;
      hero.value = first;
      articles.value = rest;
      const [first2, ...rest2] = formattedRawPages;
      hero2.value = first2;
      rawpages.value = rest2;
      const [first3, ...rest3] = formattedLanders;
      hero3.value = first3;
      landers.value = rest3;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = resolveComponent("Hero");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "siteMap" }, _attrs))}><section class="main-content"><div class="container">`);
      if (hero.value) {
        _push(ssrRenderComponent(_component_Hero, { article: hero.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (hero2.value) {
        _push(ssrRenderComponent(_component_Hero, { rawpage: hero2.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (hero3.value) {
        _push(ssrRenderComponent(_component_Hero, { lander: hero3.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (articles.value) {
        _push(`<div class="articles-grid"><!--[-->`);
        ssrRenderList(articles.value, (article, index) => {
          _push(ssrRenderComponent(_sfc_main$3, {
            key: index,
            article,
            bordered: index !== articles.value.length - 1
          }, null, _parent));
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(_sfc_main$2, (rawp, index) => {
          _push(ssrRenderComponent(_sfc_main$2, {
            key: index,
            rawpage: rawp,
            bordered: index !== _sfc_main$2.length - 1
          }, null, _parent));
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(landers.value, (lander, index) => {
          _push(ssrRenderComponent(lander, {
            key: index,
            lander,
            bordered: index !== landers.value.length - 1
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: _sfc_main
    },
    {
      path: "/articles/:id",
      name: "articles",
      component: () => import("./assets/Article-78b0d5b7.js")
    },
    {
      path: "/get-started/:id",
      name: "landers",
      component: () => import("./assets/lander-e653f6c8.js")
    },
    {
      path: "/rawpage/:id",
      name: "rawPage",
      component: () => import("./assets/rawPage-dcda76fc.js")
    }
    // {
    //   path: "/:catchAll(.*)",
    //   name: "not-found",
    //   component: () => import("@/views/NotFound.vue"),
    // },
  ]
});
const app = createApp(_sfc_main$4);
app.use(router);
app.mount("#app");
export {
  _export_sfc as _,
  directus as d
};
