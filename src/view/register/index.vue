<template>
  <div>
    Tên <input v-model="name">
    Mật khẩu <input v-model="password">
    Email <input v-model="email">
    <button @click="register()">Đăng ký</button>
  </div>
</template>
<script src="./index.js"></script>