<script setup>
defineProps({
  data: {Object},
  sliceType: String,
})
</script>

<template>
<div class="mcFix">
  <div class="container">
    <div class="inner-container">
    <div class="content">
      <div class="content-block" v-for=" (slice, index) in JSON.parse(data).bricks.details" :key="index" :id="'flexItemLinkedSlice_' + index">
        <div>
          <h2> <span v-html="slice.icon"></span>  {{ slice.title }}</h2>
          <p>{{ slice.description }}</p>
          <span v-for="btn in slice.atoms">
            <a :href="btn.url" :class="[btn.type, btn.variant, btn.styleModifiers]">{{ btn.text }}</a>
          </span>
        </div>
        <div>
          <ul>
            <li v-for="ghoul, index in slice.dataList" :key="index">
              <i class="fa-solid fa-circle-check"></i> {{ ghoul.item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
  
</template>

<style scoped>

.content-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-self: center;
  text-align: left;
}

.content-block>div:last-child {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  background-color: var(--bg-layer-600);
  padding: 60px;
}

@media (max-width: 600px) {
  .content-block {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 400px) {
  .content-block {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>