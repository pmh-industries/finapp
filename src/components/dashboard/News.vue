<template lang="html">
  <div class="container col-xs-12">
    <div class="row clearfix">
      <div class="col-md-12 column">
        <table class="table table-bordered table-hover" id="tab_logic">
          <thead>
          <tr >
            <th class="text-center">
              #
            </th>
            <th class="text-center">
              Name
            </th>
            <th class="text-center">
              Surname
            </th>
            <th class="text-center">
              Email
            </th>

            <th class="text-center">
              Gender
            </th>

          </tr>
          </thead>
          <tbody>
          <tr id='addr0'>
            <td>
              1
            </td>
            <td>
              <input type="text" name='name0'  placeholder='Name' class="form-control"/>
            </td>
            <td>
              <input type="text" name='sur0' placeholder='Surname' class="form-control"/>
            </td>
            <td>
              <input type="text" name='email0' placeholder='Email' class="form-control"/>
            </td>
            <td>
              <select type="text" name="gender0" class="form-control">
                <option name="male" value="male">Male</option>
                <option name="Female" value="Female">Female</option>
                <option name="3rdgen" value="none">None</option>
              </select>
            </td>
          </tr>
          <tr id='addr1'></tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
</template>

<script>
  export default {}
</script>

<style lang="css">
</style>


