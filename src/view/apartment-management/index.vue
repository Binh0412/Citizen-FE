<template>
  <div>
    <Loading
        :active="isLoading"
    />

    <modal
        :visible="isPopupUpdate"
        title="CHỈNH SỬA THÔNG TIN CĂN HỘ"
        :closable="false"
        :cancelButton="{
                text: 'Hủy',
                onclick: cancelUpdate
            }"
        :okButton="{
                text: 'Đồng ý',
                onclick: updateApartment
            }"
    >
      <div class="form-group">

        <select class="form-control" v-model="apartmentUpdate.apartmentOwnerId" >
          <option v-for="(c, index) in citizens" :key="index" :value="c.id"> {{c.name}} ({{c.identificationNumber}}) </option>
        </select>

        <select class="form-control" v-model="apartmentUpdate.conditions">
          <option value="0">Chưa có chủ</option>
          <option value="1">Đã bán</option>
          <option value="2">Đã được thuê</option>
        </select>

      </div>
    </modal>

    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tên phòng</th>
        <th scope="col">Chủ phòng</th>
        <th scope="col">Tình trạng</th>
        <th scope="col">Chỉnh sửa</th>
        <th scope="col">Tạo hoá đơn</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for=" (a, index) in apartments" :key="index">
        <td>{{index + 1}}</td>
        <td>{{ formatRoomNo(a.floor, a.roomNo) }}</td>
        <td>{{a.apartmentOwnerName}}</td>
        <td>
          <p v-if="a.conditions === 0">Chưa có chủ</p>
          <p v-else-if="a.conditions === 1">Đã bán</p>
          <p v-else-if="a.conditions === 2">Đã thuê</p>
        </td>
        <td><div style="margin-left: 6%"><button class="btn btn-info" @click="openPopupUpdate(a)">Sửa</button></div></td>
        <td><div style="margin-left: 15%"><button v-if="a.conditions != 0 && a.expense == null" class="btn btn-success" @click="createExpense(a.id)" >Tạo</button></div></td>
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
<script src="./index.js"> </script>