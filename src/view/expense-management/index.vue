<template>
  <div>

    <modal
        :visible="isPopupConfirm"
        title="XÁC NHẬN XÓA?"
        :closable="false"
        :cancelButton="{
                text: 'Hủy',
                onclick: cancelConfirm
            }"
        :okButton="{
                text: 'Đồng ý',
                onclick: confirmExpense
            }"
    >
      <div>Xác nhận đã thanh toán cho hoá đơn này</div>
    </modal>

    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tháng</th>
        <th scope="col">Căn hộ</th>
        <th scope="col">Tiền điện</th>
        <th scope="col">Tiền nước</th>
        <th scope="col">Tổng tiền</th>
        <th scope="col">Trạng thái</th>
        <th scope="col">Thanh toán</th>

      </tr>
      </thead>
      <tbody>
      <tr v-for=" (e, index) in expenses" :key="index">
        <td>{{index + 1}}</td>
        <td>{{formattedDate(e.mon)}}</td>
        <td>{{e.apartmentName}}</td>
        <td >{{formatNumber(e.electricityExpense)}}</td>
        <td>{{formatNumber(e.waterExpense)}}</td>
        <td>{{formatNumber(e.totalExpense)}}</td>
        <td>
          <div style="margin-left: 20%" v-if="e.conditions"> <font-awesome-icon style="color: green" icon="fa-solid fa-check" /> </div>
          <div style="margin-left: 20%" v-else><font-awesome-icon style="color: red" icon="fa-solid fa-x" /></div>
        </td>
        <td><div style="margin-left: -2%"><button v-if="e.conditions == false" class="btn btn-warning" @click="openConfirmExpense(e)" >Xác nhận</button></div></td>
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
<script src="./index.js"></script>