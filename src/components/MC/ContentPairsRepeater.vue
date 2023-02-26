<script setup>
import { setSliceVars } from '@/utils/setSliceVars.js'

defineProps({
  pairsRepeaterCont: []
})
</script>


<template>
   <div class="codecont">
    <div class="codeloop">
      <h1>comtent pair repeater</h1>
    <pre class="title">{{ JSON.stringify(servicecardCont) }}</pre>
    <code>{{ setSliceVars(servicecardCont) }}</code>
    </div>
    </div>
  <!-- <div class="inner-container">
    <div class="content">
      <div class="content-block">
        <div v-for="(repeater, index) in pairsRepeaterCont" :key="index">

          <img :src="repeater.imgurl" alt="" height="220" width="370">

          <div>
            <code>

            </code>
            <h2>{{ repeater.title }}</h2>
            <p> {{ repeater.description }}</p>
            <span v-for="button in repeater.atoms">
              <a :class="[button.type, button.variant]"  :href="button.url">{{ button.text }} </a>
            </span>
          </div>

        </div>
      </div>
    </div>
  </div> -->
</template>

<style scoped>
.content-block>div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 110px;
  margin: 50px 0px;
  text-align: left;
  align-self: center;
  padding: 10px;
}

h2{
  text-align: left;
  margin: auto;
  padding-bottom: 10px;
}

.content-block>div>div {
  align-self: center;
}

img {
  border: 22px solid var(--brand-white);
  border-radius: 20px;
  box-shadow: -1px 1px 10px 1px rgb(219, 218, 218);
  width: 595px;
  height: 345px;
}

span {
  padding-right: 20px; 
}


@media (max-width: 600px) {
  .content-block>div {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>