<template lang="html">
  <div>
    <h1>This is Registration</h1>
    <div class="row">
        <div class="col-md-12 text-center">
          <h1>Hello {{fullname}}</h1>
          <ul class="text-left">
            <li>First Name: {{first}}</li>
            <li>Last Name: {{last}}</li>
          </ul>
            <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Full Name:</label>
          <input type="text" class="form-control" v-model="fullname" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>First Name:</label>
            <input type="text" class="form-control" v-model="first"/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Last Name:</label>
            <input type="text" class="form-control" v-model="last" />
          </div>
        </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
