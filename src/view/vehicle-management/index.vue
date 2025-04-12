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
                onclick: deleteVehicle
            }"
    >
      <div>Bạn có chắc chắn muốn xóa {{ licensePlateDelete }} không?</div>
    </modal>


    <modal
        :visible="isPopupUpdate"
        title="CHỈNH SỬA PHƯƠNG TIỆN"
        :closable="false"
        :cancelButton="{
                text: 'Hủy',
                onclick: cancelUpdate
            }"
        :okButton="{
                text: 'Đồng ý',
                onclick: updateVehicleInfo
            }"
    >
    <div >
      <div class="form-group row">
        <label class="col-3 col-form-label">Biển số xe</label>
        <div class="col-9">
          <input type="text" class="form-control" v-model="vehicleUpdate.licensePlate" >
        </div>
      </div>

      <div class="form-group row mt-2">
        <label class="col-3 col-form-label">Loại xe</label>
        <div class="col-9">
          <select class="form-control" v-model="vehicleUpdate.vehicleType">
            <option value="0">Xe đạp</option>
            <option value="1">Xe máy</option>
            <option value="2">Ô tô</option>
          </select>
        </div>
      </div>

      <div class="form-group row mt-2">
        <label class="col-3 col-form-label">Vị trí đỗ</label>
        <div class="col-9">
          <input type="text" class="form-control" v-model="vehicleUpdate.parkLocation" >
        </div>
      </div>

    </div>
    </modal>

    <div style="width: 300px; margin-left: 65%">
      <div class="input-group  ">
        <input type="text" class="form-control" placeholder="Search..." >
        <button class="btn btn-primary" ><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
      </div>
    </div>

    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Chủ xe</th>
        <th scope="col">Căn hộ</th>
        <th scope="col">Biển số xe</th>
        <th scope="col">Loại xe</th>
        <th scope="col">Vị trí đỗ</th>
        <th scope="col">Xoá</th>
        <th scope="col">Chỉnh sửa</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for=" (v, index) in vehicles" :key="index">
        <td>{{index + 1}}</td>
        <td>{{v.name}}</td>
        <td>{{v.apartmentName}}</td>
        <td>{{v.licensePlate}}</td>
        <td>
          <p v-if="v.vehicleType === 0">Xe đạp</p>
          <p v-else-if="v.vehicleType === 1">Xe máy</p>
          <p v-else-if="v.vehicleType === 2">Ô tô</p>
        </td>
        <td>{{v.parkLocation}}</td>
        <td><div style="margin-left: -10%"><button class="btn btn-danger" @click="confirmDeleteVehicle(v.id, v.licensePlate)">Xoá</button></div></td>
        <td><div style="margin-left: 6%"><button class="btn btn-info" @click="updateVehicle(v)" >Sửa</button></div></td>
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

  </div>
</template>
<script src="./index.js">
</script>

