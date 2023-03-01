<script setup>
import { propsToAttrMap } from '@vue/shared';
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
import { getAssetURL } from '@/utils/get-asset-url';

defineProps({
  page:     {    type: Object,    required: true,  },
  bordered: {    type: Boolean,   required: true,  },
});
</script>
<template>
  
  <RouterLink    style="color:green; !important"    :to="`/page/${page.slug}`">
    <span><b>    {{ page.title }}    </b>           {{ page.id }}    </span>
  </RouterLink>
</template>

