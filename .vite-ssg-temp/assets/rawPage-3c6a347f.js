import { ssrRenderComponent } from "vue/server-renderer";
import { a as _sfc_main$1, b as _sfc_main$2 } from "../main.mjs";
import { useSSRContext } from "vue";
import "vue-router";
import "@directus/sdk";
const _sfc_main = {
  __name: "rawPage",
  __ssrInlineRender: true,
  props: {
    data: { Object },
    sliceType: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<main><div class="container"><div class="inner-container"><div class="content"><div class="content-block"><div class="hero"><h2 class="title"></h2><p class="description"></p></div><div class="wysiwyg">${JSON.parse(__props.data)}</div></div></div></div></div></main>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
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
