<template>
  <div>

    <h2 style="text-align: center"><b>Tạo mới cư dân</b></h2>
    <div class="row">
      <div class="form-group col-6" >
        <label for="create-name">Họ và tên</label>
        <input type="text" class="form-control" id="create-name" v-model="name"  placeholder="Nhập tên">
      </div>

      <div class="form-group col-6" >
        <label for="create-identificationNumber">Số CCCD</label>
        <input type="text" class="form-control" id="create-identificationNumber" v-model="identificationNumber"  placeholder="Nhập số CCCD">
      </div>

    </div>

    <div class="row">
      <div class="col-6">
        <div>Ngày sinh</div>
        <input type="date" v-model="dateOfBirth">
      </div>


      <div class="col-6 row">
        <div>Giới tính</div>
        <div class="form-check col-4" >
          <input class="form-check-input" type="radio" v-model="gender" name="gender" :value="true" id="male">
          <label class="form-check-label" for="male">
            Nam
          </label>
        </div>
        <div class="form-check col-4">
          <input class="form-check-input" type="radio" v-model="gender" name="gender" :value="false" id="female" >
          <label class="form-check-label" for="female">
            Nữ
          </label>
        </div>
        <div class="col-4"></div>
      </div>

    </div>

    <div class="row">
      <div class="form-group col-6" >
        <label for="create-phone">Số điện thoại</label>
        <input type="text" class="form-control" id="create-phone" v-model="phone"  placeholder="Nhập số điện thoại">
      </div>

      <div class="form-group col-6">
        <div>Chọn căn hộ </div>
        <select class="form-select" v-model="apartmentId">
          <option v-for="(a, index) in apartments" :key="index" :value="a.id">Phòng {{a.name}}</option>
        </select>
      </div>

    </div>

    <div class="row">
        <div class="form-group col-6">
          <div>Ngày vào</div>
          <input type="date" v-model="dayIn">
        </div>


    </div>
      <div style="text-align: center"><button class="btn btn-success" id="submit" @click="createCitizen()">Thêm</button> </div>

  </div>

</template>
<script src="./index.js"></script>