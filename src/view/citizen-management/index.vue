<template>
  <div>
    <Loading
        :active="isLoading"
    />
    <modal
        :visible="isPopupDelete"
        title="XÁC NHẬN XÓA?"
        :closable="false"
        :cancelButton="{
                text: 'Hủy',
                onclick: cancelDelete
            }"
        :okButton="{
                text: 'Đồng ý',
                onclick: deleteCitizen
            }"
    >
      <div>Bạn có chắc chắn muốn xóa {{ nameDelete }} không?</div>
    </modal>

    <modal
        :visible="isPopupCreate"
        title="TẠO MỚI PHƯƠNG TIỆN"
        :closable="false"
        :cancelButton="{
                text: 'Hủy',
                onclick: cancelCreate
            }"
        :okButton="{
                text: 'Đồng ý',
                onclick: createVehicleInfo
            }"
    >
      <div >

        <div class="form-group row">
          <label class="col-3 col-form-label">Biển số xe</label>
          <div class="col-9">
            <input type="text" class="form-control" v-model="licensePlate" >
          </div>
        </div>

        <div class="form-group row mt-2">
          <label class="col-3 col-form-label">Loại xe</label>
          <div class="col-9">
            <select class="form-control" v-model="vehicleType">
              <option value="0">Xe đạp</option>
              <option value="1">Xe máy</option>
              <option value="2">Ô tô</option>
            </select>
          </div>
        </div>

        <div class="form-group row mt-2">
          <label class="col-3 col-form-label">Vị trí đỗ</label>
          <div class="col-9">
            <input type="text" class="form-control" v-model="parkLocation" >
          </div>
        </div>
      </div>
    </modal>

    <div style="width: 300px; margin-left: 65%">
        <div class="input-group  ">
          <input type="text" class="form-control" v-model="searchInfo" placeholder="Search..." >
          <button class="btn btn-primary" @click="search()"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
        </div>
    </div>

    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Họ và tên</th>
        <th scope="col">Căn hộ</th>
        <th scope="col">Ngày vào</th>
        <th scope="col">Chủ căn hộ</th>
        <th scope="col">Xoá</th>
        <th scope="col">Chỉnh sửa</th>
        <th scope="col">Phương tiện</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for=" (c, index) in citizens" :key="index">
        <td>{{index + 1}}</td>
        <td><div @click="citizenDetail(c.id)">{{c.name}}</div></td>
        <td>{{c.apartmentName}}</td>
        <td>{{c.dayIn}}</td>
        <td>
          <div style="margin-left: 22%" v-if="c.isOwner"> <font-awesome-icon style="color: green" icon="fa-solid fa-check" /> </div>
          <div style="margin-left: 22%" v-else><font-awesome-icon style="color: red" icon="fa-solid fa-x" /></div>
        </td>
        <td><div style="margin-left: -10%"><button class="btn btn-danger" @click="confirmDeleteCitizen(c.id, c.name)">Xoá</button></div></td>
        <td><div style="margin-left: 7%"><button class="btn btn-info" @click="updateCitizen(c.id)">Sửa</button></div></td>
        <td><div style="margin-left: 7%"><button class="btn btn-success" @click="createVehicle(c.id)" >Thêm</button></div></td>
      </tr>
      </tbody>
    </table>

    <div style="text-align: center">
      <button class="btn btn-light" @click="changePage(1)" :disabled="page==1"><font-awesome-icon icon="fa-solid fa-angles-left" /></button>
      <button class="btn btn-light" @click="changePage(2)" :disabled="page==1"><font-awesome-icon icon="fa-solid fa-angle-left" /></button>
      <span><button class="btn btn-info">{{page}}</button><span style="font-size: 22px">  /  </span><button class="btn btn-info">{{totalPage}}</button></span>
      <button class="btn btn-light" @click="changePage(3)" :disabled="page==totalPage"><font-awesome-icon icon="fa-solid fa-angle-right" /></button>
      <button class="btn btn-light" @click="changePage(4)" :disabled="page==totalPage"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
    </div>
    <div>
      <input type="number" v-model="a">
      <input type="number" v-model="b">
      {{total}}
    </div>
  </div>
</template>
<script src="./index.js">
</script>