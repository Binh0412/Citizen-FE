<template>
  <div>
    <h2 style="text-align: center"><b>Tạo hoá đơn </b></h2>

    <div style="margin-left: 20%">
      <div class="row">
        <div class="form-group col-8" >
          <label for="create-name">Tháng</label>
          <div class="form-control"> {{formattedDate}}</div>
        </div>
      </div>

      <div class="row">
        <div class="form-group col-8" >
          <label for="create-name">Tiền điện</label>
          <input type="number" class="form-control" id="electricityExpense" @keyup="calTotalExpense" v-model="electricityExpense" placeholder="Nhập tiền điện">
        </div>
      </div>

      <div class="row">
        <div class="form-group col-8" >
          <label for="create-name">Tiền nước</label>
          <input type="number" class="form-control" id="waterExpense" @keyup="calTotalExpense" v-model="waterExpense" placeholder="Nhập tiền nước">
        </div>
      </div>

      <div class="row">
        <div class="form-group col-8" >
          <label for="create-name">Tiền rác</label>
          <div class="form-control">{{garbageExpense}} VNĐ</div>
        </div>
      </div>

      <div class="row">
        <div class="form-group col-8" >
          <label for="create-name">Tiền quản lí</label>
          <div class="form-control" >{{managementExpense}} VNĐ</div>
        </div>
      </div>

      <div class="row">
        <div class="form-group col-8" >
          <label for="create-name">Tổng tiền</label>
          <div class="form-control" id="totalExpense">{{totalExpense}} VNĐ</div>
        </div>
      </div>
      

      <div style="margin-left: 30%; margin-top: 3%"><button class="btn btn-success" id="submit" @click="createExpense()">Tạo</button> </div>
    </div>


  </div>
</template>
<script src="./index.js"></script>