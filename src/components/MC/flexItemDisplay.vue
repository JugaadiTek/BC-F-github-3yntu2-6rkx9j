<script setup>
defineProps({
  data: { Object },
  sliceType: String,
})
</script>

<template>
  <!-- <div class="codecont">
    <div class="codeloop">
      <h1>flex item display</h1>
      <code class="title">{{ JSON.parse(data) }}</code>
    </div>
  </div> -->

  <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <ul>
          <li v-for="(flexItem, index) in JSON.parse(data).gridItems" :key="index" :id=" 'flexitem_' + index  ">
            <span v-html="flexItem.icon"></span>  {{ flexItem.item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-block {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

ul {
  margin: unset;
  padding: unset;
  padding: 8px 0;
}


@media (max-width: 400px) {
  .optionslice ul {
    grid-template-columns: repeat(1, 1fr);
  }
}

.optionslice UL {
  DISPLAY: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  margin: unset;
  padding: unset;
  border: 2px solid var(--primary-dark);
  box-sizing: border-box;
}

.optionslice UL li {
  border: 2px solid var(--primary-dark);
  display: inline-flex;
  flex-direction: column;
}

.optionslice UL li span {
  margin: auto;
  color: white;
  text-align: center;
  font-weight: var(--fw-medi);

}
</style>