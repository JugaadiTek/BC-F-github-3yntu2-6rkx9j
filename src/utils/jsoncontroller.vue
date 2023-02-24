<script setup>


</script>


<template>
  <h1 style="text-align:center;background:#87878750"> {{ JSON.stringify(bullshitFixer(slice).SliceType) }}</h1>
  <div class="codecont">    <div class="codeloop">
      <div>
        <pre class="title">grab the slice using the index # of the v-for loop directly above</pre>
        <pre class="code">article.grab_a_slice[index].nosql_datastore_id.json_datastore</pre>
        <code>RD1: {{ article.grab_a_slice[index].nosql_datastore_id.json_datastore }}</code>
        {{ JSON.stringify(bullshitFixer(article.grab_a_slice[index].nosql_datastore_id.json_datastore)) }}
      </div>
    </div>
  </div>
</template>
<style scoped></style>