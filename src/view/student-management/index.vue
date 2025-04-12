<template>
  <div>

    <modal
        :visible="isPopupUpdate"
        title="SỬA"
        :closable="false"
        :cancelButton="{
                text: 'Hủy',
                onclick: cancelUpdate
            }"
        :okButton="{
                text: 'Đồng ý',
                onclick: updateStudentInfo
            }"
    >
      <div >

        <div class="form-group row">
          <label class="col-3 col-form-label">Tên</label>
          <div class="col-9">
            <input type="text" class="form-control" v-model="studentUpdate.name" >
          </div>
        </div>

        <div class="form-group row">
          <label class="col-3 col-form-label">Tuổi</label>
          <div class="col-9">
            <input type="number" class="form-control" v-model="studentUpdate.age" >
          </div>
        </div>

        <div class="form-group row">
          <label class="col-3 col-form-label">Địa chỉ</label>
          <div class="col-9">
            <input type="text" class="form-control" v-model="studentUpdate.address" >
          </div>
        </div>

<!--        Tên: <input type="text" v-model="studentUpdate.name"> <br>-->
<!--        Tuổi: <input type="number" v-model="studentUpdate.age"> <br>-->
<!--        Địa chỉ: <input type="text" v-model="studentUpdate.address">-->

      </div>
    </modal>

    <table class="table">
      <thead >
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tên</th>
        <th scope="col">Tuổi</th>
        <th scope="col">Địa chỉ</th>
        <th scope="col">Xoá</th>
        <th scope="col">Sửa</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for=" (s, index) in students" :key="index">
        <th scope="row">{{index + 1}}</th>
        <td>{{s.name}}</td>
        <td>{{s.age}}</td>
        <td>{{s.address}}</td>
        <td><div style="margin-left: -6%"><button class="btn btn-danger" @click="deleteStudent(s.id)">Xoá</button></div></td>
        <td><div style="margin-left: -6%"><button class="btn btn-info" @click="updateStudent(s)">Sửa</button></div></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script src="./index.js"></script>