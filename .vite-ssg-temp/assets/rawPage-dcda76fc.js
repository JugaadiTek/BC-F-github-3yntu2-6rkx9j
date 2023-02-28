import { ref, resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { d as directus } from "../main.mjs";
import { useRouter, useRoute } from "vue-router";
import "@directus/sdk";
const _sfc_main = {
  __name: "rawPage",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const rawPage = ref(null);
    ref(null);
    fetchDataRaw();
    async function fetchDataRaw() {
      const { id } = route.params;
      let rawPageResponse;
      try {
        articleResponse = await directus.items("rawpage").readByQuery(id, {
          fields: ["id", "title", "slug", "status", "banner", "wysiwyg", "sort"],
          filter: {
            _and: [
              { id: { _eq: route.params.id } },
              { status: { _eq: "published" } }
            ]
          },
          sort: ["sort"]
        });
        const formattedRawPage = { ...rawPageResponse };
        rawPage.value = formattedRawPage;
      } catch (err) {
        router.replace({ name: "not-found", params: { catchAll: route.path } });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = resolveComponent("Header");
      const _component_Footer = resolveComponent("Footer");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main><div class="container"><div class="inner-container"><div class="content"><div class="content-block"><div class="hero"><h2 class="title"></h2><p class="description"></p></div><div class="wysiwyg">${JSON.parse(_ctx.data)}</div></div></div></div></div></main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/rawPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
