<template>
  <div>
    <div style="margin-left: 20%"><h2>Tạo mới học sinh</h2></div>
    <div style="margin-left: 10%">
      <div class="row">
        <div class="form-group col-6">
          <label for="exampleInputEmail1">Tên</label>
          <input  type="text" class="form-control" v-model="name">
        </div>
      </div>

      <div class="row">
        <div class="form-group col-6">
          <label for="exampleInputEmail1">Tuổi</label>
          <input type="number" class="form-control" v-model="age">
        </div>
      </div>

      <div class="row">
        <div class="form-group col-6">
          <label for="exampleInputEmail1">Địa chỉ</label>
          <input type="text" class="form-control" v-model="address">
        </div>
      </div>
    </div>
    <div style="margin-left: 27%"><button style="margin-top: 1%" type="button" class="btn btn-primary" @click="createStudent()">Thêm</button></div>

  </div>
</template>
<script src="./index.js"></script>