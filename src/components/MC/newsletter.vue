<script setup>

defineProps({
  data: {Object},
  sliceType: String,
})

</script>

<template>

<div class="codecont">
    <div class="codeloop">
      <h1>news letter</h1>
      <pre class="title">{{ JSON.parse(data) }}</pre>
    </div>
  </div>
      <!-- <div class="inner-container">
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
      </div> -->
</template>

<style scoped >

form>span {
  display: inline-block;
  text-align: left;
  padding: 10px;

}
h2 {
  font-size: 32px;
}

form>span>input {

  display: block;
  font-size: 16px;
  padding: 10px;
  border-color: var(--brand-white);
  border-radius: 5px;
}

form > span:last-child > input {
  border: 2px solid var() ;
}

label {
  color: var(--primary);
  font-size: 11PX;
}

</style>