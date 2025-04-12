<template>
<div>
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="d-flex align-items-center justify-content-between">
      <nav class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="">
        <span class="d-none d-lg-block">Citizen</span>
      </nav>
      <span style="cursor: pointer" @click="showMenu" ><font-awesome-icon icon="fa-solid fa-bars" size="2x" /></span>

    </div>

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">
        <li class="nav-item dropdown pe-3">
          <nav class="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown" style="cursor: pointer">
            <span class="d-none d-md-block dropdown-toggle ps-2" @click="profile">{{ getName() }}</span>
          </nav>
          <ul id="profile" class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-16px, 38.4px, 0px);">
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a class="dropdown-item d-flex align-items-center" style="cursor: pointer">
                <i class="bi bi-question-circle"></i>
                <span>Đổi mật khẩu</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a @click="logout" class="dropdown-item d-flex align-items-center" style="cursor: pointer">
                <i class="bi bi-box-arrow-right"></i>
                <span>Đăng xuất</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
  <aside id="sidebar" class="sidebar" :class="{hidden: !menuShow}">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item" v-for="(menuItem, index) in menu" :key="index">
        <router-link class="nav-link" @click="changeMenu(menuItem)" :class="menuItem.active ? 'menu-item-choose' : ''" :to="menuItem.to">
          <span style="width: 30px; text-align: left"><font-awesome-icon :icon="menuItem.icon"/></span>
          <span>{{ menuItem.title }}</span>
        </router-link>
      </li>
    </ul>
  </aside>

  <main id="main" class="main" :class="{hidden: !menuShow}">
    <div>
      <router-view></router-view>
    </div>
  </main>
</div>
</template>

<script>
import axios from "@/config/axios";

export default {
  data() {
    return {
      menu: [],
      menuShow: true,
    }
  },
  created() {
    this.loadMenu()
  },
  methods: {
    profile() {
      let profile = document.getElementById("profile");
      if(profile.classList.contains("show")) {
        profile.classList.remove("show")
      } else {
        profile.classList.add("show")
      }
    },
    loadMenu() {
      for(let route of this.$route.matched[0].children) {
        if(!route.meta.isHidden) {
          this.menu.push({
            title: route.meta.title,
            icon: route.meta.icon,
            to: route.path,
            active: this.$route.name === route.name,
          })
        }

      }
    },
    showMenu() {
      this.menuShow = !this.menuShow
    },
    logout() {
      localStorage.clear();
      axios.defaults.headers['Authorization'] = "";
      this.$router.push({ name: "Login" });
    },
    getName() {
      if(localStorage.getItem('current-account')) {
        return JSON.parse(localStorage.getItem('current-account')).fullname
      } else {
        return "Người dùng hệ thống"
      }

    },
    changeMenu(menuItem) {
      this.menu.forEach((item) => {
        item.active = false
      })
      menuItem.active = true
    }
  }
}
</script>

<style scoped src="@/assets/css/style.css"></style>
<style scoped>
#sidebar.hidden {
  transform: translateX(-100%);
}
#main.hidden {
  margin-left: 0;
}
.menu-item-choose {
  color: #4154f1!important;
  background: #f6f9ff!important;
}
</style>