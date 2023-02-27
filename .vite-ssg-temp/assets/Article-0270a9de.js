import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, mergeProps, unref, ref } from "vue";
import { _ as _export_sfc, d as directus } from "../main.mjs";
import { useRouter, useRoute } from "vue-router";
import "@directus/sdk";
function imagePrefix(preImgUrl) {
  var preImgUrl = "https://cms-buychain-pb01.up.railway.app/";
  return preImgUrl;
}
const hero_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$e = {
  __name: "hero",
  __ssrInlineRender: true,
  props: {
    data: { Object },
    sliceType: String,
    preImgUrl: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- <div class="codecont">
    <div class="codeloop">
      <h1>Hero</h1>
      <pre class="title">{{ JSON.parse(data) }}</pre>
    </div>
  </div> --><!-- <code>{{ setSliceVars(herocont) }}</code> --><!-- <p>{{ imagePrefix(preImgUrl) }}</p> --><div${ssrRenderAttrs(mergeProps({ class: "inner-container" }, _attrs))} data-v-03bae51a><!-- <img class="hero" :src="JSON.parse(data).heroBG" :alt="JSON.parse(data).AltText"> --><div class="content" data-v-03bae51a><div class="content-block" data-v-03bae51a><div data-v-03bae51a><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks.imageList, (logo, index) => {
        _push(`<span data-v-03bae51a>`);
        if (logo.type == "aboveImg_logo") {
          _push(`<img${ssrRenderAttr("src", [unref(imagePrefix)(__props.preImgUrl)] + logo.imageurl)}${ssrRenderAttr("alt", JSON.parse(__props.data).bricks.AltText)} data-v-03bae51a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      });
      _push(`<!--]--><h2 data-v-03bae51a>${ssrInterpolate(JSON.parse(__props.data).bricks.title)}</h2><p data-v-03bae51a>${ssrInterpolate(JSON.parse(__props.data).bricks.description)}</p><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks.atoms, (atom, index) => {
        _push(`<span data-v-03bae51a><a class="${ssrRenderClass([atom.type, atom.variant, atom.styleMods])}"${ssrRenderAttr("href", atom.url)} data-v-03bae51a>${ssrInterpolate(atom.text)}</a></span>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks.imageList, (image, index) => {
        _push(`<span data-v-03bae51a>`);
        if (image.type == "img_halfContent") {
          _push(`<img${ssrRenderAttr("src", [unref(imagePrefix)(__props.preImgUrl)] + image.imageurl)}${ssrRenderAttr("alt", image.alt)} data-v-03bae51a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      });
      _push(`<!--]--></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/hero.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const hero = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-03bae51a"]]);
const servicescard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = {
  __name: "servicescard",
  __ssrInlineRender: true,
  props: {
    data: [Object],
    sliceType: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- <div class="codecont">
    <div class="codeloop">
      <h1>service card</h1>
      <code class="title">{{ JSON.parse(data) }}</code>
    </div>
  </div> --><div${ssrRenderAttrs(mergeProps({ class: "inner-container" }, _attrs))} data-v-6325c232><div class="content" data-v-6325c232><div class="content-block" data-v-6325c232><h2 data-v-6325c232>${ssrInterpolate(JSON.parse(__props.data).bricks.title)}</h2><p data-v-6325c232>${ssrInterpolate(JSON.parse(__props.data).bricks.description)}</p><div data-v-6325c232><!-- cards --><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks.gridItems, (cardcont, index) => {
        _push(`<div data-v-6325c232><p data-v-6325c232>${ssrInterpolate(cardcont.category)}</p><h3 data-v-6325c232><span data-v-6325c232>${cardcont.icon}</span> ${ssrInterpolate(cardcont.sub_header)}</h3><p data-v-6325c232>${ssrInterpolate(cardcont.description)}</p><hr data-v-6325c232><h4 data-v-6325c232>${ssrInterpolate(cardcont.heading)}</h4><ul data-v-6325c232><!--[-->`);
        ssrRenderList(cardcont.itemsList, (items, index2) => {
          _push(`<li data-v-6325c232><span data-v-6325c232>${items.icon}</span> ${ssrInterpolate(items.item)}</li>`);
        });
        _push(`<!--]--></ul><!-- buttons --><!--[-->`);
        ssrRenderList(cardcont.atoms, (button, index2) => {
          _push(`<div data-v-6325c232><a class="${ssrRenderClass([button.type, button.variant])}"${ssrRenderAttr("href", button.url)} data-v-6325c232>${ssrInterpolate(button.text)}</a></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/servicescard.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const servicescard = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-6325c232"]]);
const imageWithContentLIst_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$c = {
  __name: "imageWithContentLIst",
  __ssrInlineRender: true,
  props: {
    data: { Object },
    siceType: String,
    preImgUrl: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- <div class="codecont">
    <div class="codeloop">
      <h1>image with content list</h1>
      <pre class="title">{{ JSON.parse(data) }}</pre>
    </div>
  </div> --><div${ssrRenderAttrs(mergeProps({ class: "inner-container" }, _attrs))} data-v-4a84968f><div class="content" data-v-4a84968f><div class="content-block" data-v-4a84968f><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks, (contetntList, index) => {
        _push(`<div data-v-4a84968f><h2 data-v-4a84968f>${ssrInterpolate(contetntList.title)}</h2><p data-v-4a84968f>${ssrInterpolate(contetntList.description)}</p><!--[-->`);
        ssrRenderList(contetntList.atoms, (btn, index2) => {
          _push(`<span data-v-4a84968f><a${ssrRenderAttr("href", btn.url)} class="${ssrRenderClass([btn.type, btn.variant, btn.styleModifiers])}" data-v-4a84968f><span data-v-4a84968f>${btn.icon}</span> <span data-v-4a84968f>${ssrInterpolate(btn.text)}</span></a></span>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--><span data-v-4a84968f><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).imageList, (image) => {
        _push(`<img${ssrRenderAttr("src", [unref(imagePrefix)(__props.preImgUrl)] + image.imageurl)} alt="" data-v-4a84968f>`);
      });
      _push(`<!--]--></span></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/imageWithContentLIst.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const imageWithContentList = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-4a84968f"]]);
const imgSlider_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = {
  __name: "imgSlider",
  __ssrInlineRender: true,
  props: {
    data: [Object],
    sliceType: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- <div class="codecont">
    <div class="codeloop">
      <h1>imgSlider</h1>
      <code class="title">{{ JSON.parse(data) }}</code>
    </div>
  </div> --><div${ssrRenderAttrs(mergeProps({ class: "inner-container" }, _attrs))} data-v-1a15dbdb><div class="content" data-v-1a15dbdb><div class="content-block" data-v-1a15dbdb><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks.slides, (slide) => {
        _push(`<div data-v-1a15dbdb><span data-v-1a15dbdb>${slide.icon}</span><span data-v-1a15dbdb>${slide.icon}</span><span data-v-1a15dbdb>${slide.icon}</span><span data-v-1a15dbdb>${slide.icon}</span><span data-v-1a15dbdb>${slide.icon}</span><h3 data-v-1a15dbdb>${ssrInterpolate(slide.testimony)}</h3><span data-v-1a15dbdb><h4 data-v-1a15dbdb>${ssrInterpolate(slide.name)}</h4><p data-v-1a15dbdb>${ssrInterpolate(slide.title)}</p></span></div>`);
      });
      _push(`<!--]--></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/imgSlider.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const imgSlider = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-1a15dbdb"]]);
const ContentPairsRepeater_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = {
  __name: "ContentPairsRepeater",
  __ssrInlineRender: true,
  props: {
    data: { Object },
    preImgUrl: String,
    sliceType: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- <div class="codecont">
    <div class="codeloop">
      <h1>ContentPairsRepeater</h1>
      <code class="title">{{ JSON.parse(data) }}</code>
    </div>
  </div> --><div${ssrRenderAttrs(mergeProps({ class: "inner-container" }, _attrs))} data-v-fe73f7be><div class="content" data-v-fe73f7be><div class="content-block" data-v-fe73f7be><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks, (repeater, index) => {
        _push(`<div data-v-fe73f7be><img${ssrRenderAttr("src", [unref(imagePrefix)(__props.preImgUrl)] + repeater.imgurl)} alt="" height="220" width="370" data-v-fe73f7be><div data-v-fe73f7be><h2 data-v-fe73f7be>${ssrInterpolate(repeater.title)}</h2><p data-v-fe73f7be>${ssrInterpolate(repeater.description)}</p><!--[-->`);
        ssrRenderList(repeater.atoms, (button) => {
          _push(`<span data-v-fe73f7be><a class="${ssrRenderClass([button.type, button.variant])}"${ssrRenderAttr("href", button.url)} data-v-fe73f7be>${ssrInterpolate(button.text)}</a></span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/ContentPairsRepeater.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ContentPairsRepeater = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-fe73f7be"]]);
const ctaHero_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = {
  __name: "ctaHero",
  __ssrInlineRender: true,
  props: {
    data: { Object },
    preImgUrl: String,
    sliceType: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- <div class="codecont">
    <div class="codeloop">
      <h1>cta hero</h1>
      <code class="title">{{ JSON.parse(data) }}</code>
    </div>
  </div> --><div${ssrRenderAttrs(mergeProps({ class: "inner-container" }, _attrs))} data-v-091f1c41><div class="content" data-v-091f1c41><div class="content-block flexClass" data-v-091f1c41><div data-v-091f1c41><h2 data-v-091f1c41>${ssrInterpolate(JSON.parse(__props.data).bricks.title)}</h2><p data-v-091f1c41>${ssrInterpolate(JSON.parse(__props.data).bricks.description)}</p><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks.atoms, (button) => {
        _push(`<span data-v-091f1c41><a class="${ssrRenderClass([button.type, button.variant, button.styleModifiers])}"${ssrRenderAttr("href", button.url)} data-v-091f1c41>Schedule demo</a></span>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks.imageList, (image) => {
        _push(`<span data-v-091f1c41><img class="ctaImg"${ssrRenderAttr("src", [unref(imagePrefix)(__props.preImgUrl)] + image.imageurl)} alt="" data-v-091f1c41></span>`);
      });
      _push(`<!--]--></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/ctaHero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ctaHero = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-091f1c41"]]);
const artcont_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = {
  __name: "artcont",
  __ssrInlineRender: true,
  props: {
    data: { Object },
    preImgUrl: String,
    sliceType: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- <div class="codecont">
    <div class="codeloop">
      <h1>art cont</h1>
      <pre class="title">{{ JSON.parse(data) }}</pre>
    </div>
  </div> --><div${ssrRenderAttrs(mergeProps({ class: "inner-container" }, _attrs))} data-v-11ef9ea8><div class="content" data-v-11ef9ea8><div class="content-block" data-v-11ef9ea8><h2 data-v-11ef9ea8>${ssrInterpolate(JSON.parse(__props.data).bricks.title)}</h2><p data-v-11ef9ea8>${ssrInterpolate(JSON.parse(__props.data).bricks.description)}</p>`);
      if (JSON.parse(__props.data).bricks.description2 == false) {
        _push(`<p data-v-11ef9ea8>${ssrInterpolate(JSON.parse(__props.data).bricks.description2)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks.atoms, (button) => {
        _push(`<a${ssrRenderAttr("href", button.url)} class="${ssrRenderClass([button.type, button.variant])}" data-v-11ef9ea8>${ssrInterpolate(button.text)}</a>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks.imageList, (image) => {
        _push(`<img${ssrRenderAttr("src", [unref(imagePrefix)(__props.preImgUrl)] + image.imageurl)}${ssrRenderAttr("alt", image.alt)} data-v-11ef9ea8>`);
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/artcont.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const artcont = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-11ef9ea8"]]);
const postfeed_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = {
  __name: "postfeed",
  __ssrInlineRender: true,
  props: {
    data: { Object },
    sliceType: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div${ssrRenderAttrs(mergeProps({ class: "codecont" }, _attrs))} data-v-2d915d92><div class="codeloop" data-v-2d915d92><h1 data-v-2d915d92>post feed</h1><pre class="title" data-v-2d915d92>${ssrInterpolate(JSON.parse(__props.data))}</pre></div></div><!-- <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <h2>{{ postsCont.title }}</h2>
        <div>
          <div v-for="cardcont in postsCont.gridItems">
            <p>{{ cardcont.date }}</p>
            <h3>{{ cardcont.title }}</h3>
            <p>{{ cardcont.excerpt }}</p>
            <a :href="postsCont.readmore_url">Read more ></a>
          </div>
        </div>
      </div>
      <span v-for="button in postsCont.atoms">
        <a :class="[button.type, button.variant]" :href="postsCont">{{button.text}}</a>
      </span>
    </div>
  </div> --><!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/postfeed.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const postfeed = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2d915d92"]]);
const newsletter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = {
  __name: "newsletter",
  __ssrInlineRender: true,
  props: {
    data: { Object },
    sliceType: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div${ssrRenderAttrs(mergeProps({ class: "codecont" }, _attrs))} data-v-69801df2><div class="codeloop" data-v-69801df2><h1 data-v-69801df2>news letter</h1><code class="title" data-v-69801df2>${ssrInterpolate(JSON.parse(__props.data))}</code></div></div><!-- <div class="inner-container">
        <div class="content-block ">
          <form action="">
            
            <span>
              <h2>Join Our Newsletter</h2>
            </span>

            <span>
              <label for="fname">FIRST NAME</label>
              <input type="text" id="fname" name="fname" placeholder="First Name">
            </span>

            <span>
              <label for="lname">LAST NAME</label>
              <input type="text" id="lname" name="lname" placeholder="Last Name">
            </span>

            <span>
              <label for="workemail">EMAIL</label>
              <input type="text" id="workemail" name="workemail" placeholder="Email">
            </span>

            <span><input class="button type_01" type="submit" value="Sign Up"></span>

          </form>
        </div>
      </div> --><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/newsletter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const newsletter = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-69801df2"]]);
const contentPair_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = {
  __name: "contentPair",
  __ssrInlineRender: true,
  props: {
    data: { Object },
    sliceType: String,
    preImgUrl: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- <div class="codecont">
    <div class="codeloop">
      <h1>content pair</h1>
      <code class="title">{{ JSON.parse(data) }}</code>
    </div>
  </div> --><div${ssrRenderAttrs(mergeProps({ class: "inner-container" }, _attrs))} data-v-6b29210a><div class="content" data-v-6b29210a><div class="content-block" data-v-6b29210a><span data-v-6b29210a><h2 data-v-6b29210a>${ssrInterpolate(JSON.parse(__props.data).bricks.title)}</h2><p data-v-6b29210a>${ssrInterpolate(JSON.parse(__props.data).bricks.description)}</p></span><span data-v-6b29210a><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks.imageList, (image) => {
        _push(`<img${ssrRenderAttr("src", [unref(imagePrefix)(__props.preImgUrl)] + image.imageurl)} alt="" data-v-6b29210a>`);
      });
      _push(`<!--]--></span></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/contentPair.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const contentPair = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6b29210a"]]);
const FAQs_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = {
  __name: "FAQs",
  __ssrInlineRender: true,
  props: {
    data: { Object },
    sliceType: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- <div class="codecont">
    <div class="codeloop">
      <h1>faqs</h1>
      <code class="title">{{ JSON.parse(data) }}</code>
    </div>
  </div> --><div${ssrRenderAttrs(mergeProps({ class: "inner-container" }, _attrs))} data-v-ec7a9794><div class="content-block" data-v-ec7a9794><h2 data-v-ec7a9794>${ssrInterpolate(JSON.parse(__props.data).bricks.title)}</h2><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks.items_list, (ques, index) => {
        _push(`<div class="wrap-collabsible" data-v-ec7a9794><input${ssrRenderAttr("id", "collapsible2" + index)} class="toggle" type="checkbox" checked="" data-v-ec7a9794><label${ssrRenderAttr("for", "collapsible2" + index)} class="lbl-toggle" data-v-ec7a9794>${ssrInterpolate(ques.question)} <span data-v-ec7a9794>${ques.icon}</span></label><div class="collapsible-content" data-v-ec7a9794><div class="content-inner" data-v-ec7a9794><p data-v-ec7a9794>${ssrInterpolate(ques.content)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/FAQs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FAQs = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ec7a9794"]]);
const contentPairsWithList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = {
  __name: "contentPairsWithList",
  __ssrInlineRender: true,
  props: {
    data: { Object },
    sliceType: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- <div class="codecont">
    <div class="codeloop">
      <h1>content paires with lists</h1>
      <pre class="title">{{ JSON.parse(data) }}</pre>
    </div>
  </div> --><div${ssrRenderAttrs(mergeProps({ class: "inner-container" }, _attrs))} data-v-5598c4fd><div class="content" data-v-5598c4fd><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).bricks.details, (slice, index) => {
        _push(`<div class="content-block"${ssrRenderAttr("id", "flexItemLinkedSlice_" + index)} data-v-5598c4fd><div data-v-5598c4fd><h2 data-v-5598c4fd><span data-v-5598c4fd>${slice.icon}</span> ${ssrInterpolate(slice.title)}</h2><p data-v-5598c4fd>${ssrInterpolate(slice.description)}</p><!--[-->`);
        ssrRenderList(slice.atoms, (btn) => {
          _push(`<span data-v-5598c4fd><a${ssrRenderAttr("href", slice.atoms.url)} class="${ssrRenderClass([btn.type, btn.variant, btn.styleModifiers])}" data-v-5598c4fd>${ssrInterpolate(btn.text)}</a></span>`);
        });
        _push(`<!--]--></div><div data-v-5598c4fd><ul data-v-5598c4fd><!--[-->`);
        ssrRenderList(slice.dataList, (ghoul, index2) => {
          _push(`<li data-v-5598c4fd><i class="fa-solid fa-circle-check" data-v-5598c4fd></i>${ssrInterpolate(ghoul.item)}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/contentPairsWithList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const contentPairsWithList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5598c4fd"]]);
const flexItemDisplay_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = {
  __name: "flexItemDisplay",
  __ssrInlineRender: true,
  props: {
    data: { Object },
    sliceType: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!-- <div class="codecont">
    <div class="codeloop">
      <h1>flex item display</h1>
      <code class="title">{{ JSON.parse(data) }}</code>
    </div>
  </div> --><div${ssrRenderAttrs(mergeProps({ class: "inner-container" }, _attrs))} data-v-161394e6><div class="content" data-v-161394e6><div class="content-block" data-v-161394e6><ul data-v-161394e6><!--[-->`);
      ssrRenderList(JSON.parse(__props.data).gridItems, (flexItem, index) => {
        _push(`<li${ssrRenderAttr("id", "flexitem_" + index)} data-v-161394e6><span data-v-161394e6>${flexItem.icon}</span> ${ssrInterpolate(flexItem.item)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MC/flexItemDisplay.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const flexItemDisplay = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-161394e6"]]);
const _sfc_main$1 = {
  __name: "sliceLogic",
  __ssrInlineRender: true,
  props: {
    sliceData: Object,
    sliceType: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.sliceType == "hero") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(hero, {
          data: __props.sliceData,
          sliceType: __props.sliceType
        }, null, _parent));
        _push(`</div>`);
      } else if (__props.sliceType == "servicecard") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(servicescard, { data: __props.sliceData }, null, _parent));
        _push(`</div>`);
      } else if (__props.sliceType == "imageWithContentList") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(imageWithContentList, { data: __props.sliceData }, null, _parent));
        _push(`</div>`);
      } else if (__props.sliceType == "ctaHero") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(ctaHero, { data: __props.sliceData }, null, _parent));
        _push(`</div>`);
      } else if (__props.sliceType == "ContentPairsRepeater") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(ContentPairsRepeater, { data: __props.sliceData }, null, _parent));
        _push(`</div>`);
      } else if (__props.sliceType == "imgSlider") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(imgSlider, { data: __props.sliceData }, null, _parent));
        _push(`</div>`);
      } else if (__props.sliceType == "artcont") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(artcont, { data: __props.sliceData }, null, _parent));
        _push(`</div>`);
      } else if (__props.sliceType == "postfeed") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(postfeed, { data: __props.sliceData }, null, _parent));
        _push(`</div>`);
      } else if (__props.sliceType == "newsletter") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(newsletter, null, null, _parent));
        _push(`</div>`);
      } else if (__props.sliceType == "contentPair") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(contentPair, { data: __props.sliceData }, null, _parent));
        _push(`</div>`);
      } else if (__props.sliceType == "FAQs") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(FAQs, { data: __props.sliceData }, null, _parent));
        _push(`</div>`);
      } else if (__props.sliceType == "content_pairs_with_list") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(contentPairsWithList, { data: __props.sliceData }, null, _parent));
        _push(`</div>`);
      } else if (__props.sliceType == "flex_item_display") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [__props.sliceType]
        }, _attrs))}>`);
        _push(ssrRenderComponent(flexItemDisplay, { data: __props.sliceData }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/utils/sliceLogic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Article",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const article = ref(null);
    const moreArticles = ref(null);
    fetchData();
    async function fetchData() {
      const { id } = route.params;
      let articleResponse;
      try {
        articleResponse = await directus.items("home").readOne(id, {
          fields: ["grab_a_slice.nosql_datastore_id.json_datastore", "id"]
        });
        const formattedArticle = { ...articleResponse };
        const moreArticlesResponse = await directus.items("home").readByQuery({
          fields: ["id", "title"],
          filter: {
            _and: [
              { id: { _eq: articleResponse.id } },
              { status: { _eq: "archived" } }
            ]
          },
          limit: 20
        });
        const formattedMoreArticles = moreArticlesResponse.data.map(
          (moreArticle) => {
            return { ...moreArticle };
          }
        );
        article.value = formattedArticle;
        moreArticles.value = formattedMoreArticles;
        try {
          if (article.value.grab_a_slice > 0) {
            pageblocks = article;
            return pageblocks;
          }
        } catch (err) {
          console.log("Error: ", err);
          return "ERROR";
        }
      } catch (err) {
        router.replace({ name: "not-found", params: { catchAll: route.path } });
      }
    }
    let newobj = {};
    function createNewObject(sliceobj) {
      newobj = {
        bump: [
          JSON.parse(sliceobj)
        ]
      };
      console.log(newobj.bump[0]);
      return newobj.bump[0];
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><!---============================================================================================================================================================================================================--><!------------------------------------------------ MODOCOSM SLICE MASTER ----------------------------------------------------------------------------------------------------------------------------------------------------><!---============================================================================================================================================================================================================--><!--[-->`);
      ssrRenderList(article.value.grab_a_slice, (slice, index) => {
        _push(`<section>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          sliceType: createNewObject(slice.nosql_datastore_id.json_datastore).component,
          sliceData: JSON.stringify(createNewObject(slice.nosql_datastore_id.json_datastore)),
          pindex: index
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--><!-- <div :sliceobj="JSON.stringify(createNewObject(slice.nosql_datastore_id.json_datastore))"> --><!-- <section v-for="(slice, index) in article.grab_a_slice" >
          <pre class="title">{{ index }}-Output Raw
             {{ JSON.stringify(createNewObject(slice.nosql_datastore_id.json_datastore)) }}</pre>
          <pre style ="background:#33333350;" class="title">{{ index }}-Output sliceobj: 
            {{ JSON.stringify(sliceobj) }}</pre>
        <div  v-if="sliceobj == 'hero'">
          <hero :herocont="sliceobj" />
        </div>
        <div  v-else-if="sliceobj !== 'servicecard'" :class="container">
          <servicescard :servicecardCont="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'imageWithContentList'">
          <imageWithContentList :contPairCont="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'ctaHero'">
          <ctaHero :ctaHeroCont="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'ContentPairsRepeater'">
          <ContentPairsRepeater :pairsRepeaterCont="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'imgSlider'">
          <imgSlider :sliderCont="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'artcont'"  :class="container">
          <artcont :artcontent="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'postfeed'" :class="container">
          <postfeed :postsCont="sliceobj" />
        </div>
        <div v-else-if="sliceobj == 'newsletter'" :class="container">
          <newsletter />
        </div> 
</section> --><!------------------------------------------------ END SLICE MASTER ----------------------------------------------------------------------------------------------------------------------------------------------------><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
