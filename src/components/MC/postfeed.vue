<script setup>
defineProps({
  data: {Object},
  sliceType: String,
})
</script>


<template>
  <div class="codecont">
    <div class="codeloop">
      <h1>post feed</h1>
      <pre class="title">{{ JSON.parse(data) }}</pre>
    </div>
  </div>
  <!-- <div class="inner-container">
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
  </div> -->
</template>

<style scoped>

div.content {
  text-align: center;
}

.content-block>div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 45px;
  text-align: left;
}

.content-block>div>div {
  border: 1px solid #e9e5f1;
  border-radius: 5px;
  padding: 50px 40px;
}

.content-block>div>div>a {
  display: inline-block;
  color: #280071;
  font-weight: bold;
  padding-top: 100px;
  align-self: center;
}

.content>span>a {
  display: inline-block;
  margin-top: 35px;
}

@media (max-width: 800px) {
  .content-block>div {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>