<template>
  <div>
    <div id="app" class="container mt-5">
      <div class="card">
        <div class="card-header">
          <h3>Thông Tin Dân Cư</h3>
        </div>
        <div class="card-body">
          <form>
            <div>
              <span>Tên</span> {{citizen.name}}
            </div>
            <div>
              <span>Giới tính</span> {{citizen.age}}
            </div>
            <div>
              <span>Ngày sinh</span> {{citizen.dateOfBirth}}
            </div>
            <div>
              <span>Số CCCD</span> {{citizen.identificationNumber}}
            </div>
            <div>
              <span>Số điện thoại</span> {{citizen.phone}}
            </div>
            <div>
              <span>Chung cư</span> {{citizen.apartmentId}}
            </div>
            <div>
              <span>Ngày vào</span> {{citizen.dayIn}}
            </div>
            <div>
              <span>Chủ căn hộ</span> {{citizen.isOwner}}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>