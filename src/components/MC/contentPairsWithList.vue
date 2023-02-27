<script setup>
defineProps({
  data: {Object},
  sliceType: String,
})
</script>

<template>
  <div class="codecont">
    <div class="codeloop">
      <h1>content paires with lists</h1>
      <pre class="title">{{ JSON.parse(data) }}</pre>
    </div>
  </div>
  <div class="inner-container">
    <div class="content">
      <div class="content-block" v-for=" (slice, index) in JSON.parse(data).bricks.details" :key="index">
        <div>
          <h2>{{ slice.icon }} {{ slice.title }}</h2>
          <p>{{ slice.description }}</p>

          <a :href="slice.atoms.url" :class="[slice.atoms.type, slice.atoms.variant, slice.atoms.styleModifiers]">{{ text }}</a>
        </div>
        <div>
          <ul>
            <li v-for="ghoul, index in slice.dataList" :key="index">
              <i class="fa-solid fa-circle-check"></i>{{ ghoul.item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: left;
}

ul {
  text-align: center;
  padding: unset;
}

a {
  display: inline-block;
  border: 4px solid #280071;
  background-color: #280071;
  color: #ffffff;
  border-radius: 4px;
  margin-top: 10px;
  padding: 2px 56px;
}

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
  background-color: #e9e5f1;
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