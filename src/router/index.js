import { createRouter, createWebHistory } from 'vue-router'
const Test = () => import( "@/view/test/test.vue")
const Login = () =>  import('@/view/login/index.vue')
const NotFound = () => import('@/components/not-found/index.vue')
const Management = () => import("@/components/management/management.vue")
const CitizenManagement = () => import( "@/view/citizen-management/index.vue")
const CreateCitizen = () => import( "@/view/create-citizen/index.vue")
const VehicleManagement = () => import( "@/view/vehicle-management/index.vue")
const ApartmentManagement = () => import( "@/view/apartment-management/index.vue")
const UpdateCitizen = () => import( "@/view/update-citizen/index.vue")
const CitizenDetail = () => import( "@/view/citizen-detail/index.vue")
const CreateExpense = () => import( "@/view/create-expense/index.vue")
const ExpenseManagement = () => import( "@/view/expense-management/index.vue")
const StudentManagement = () => import( "@/view/student-management/index.vue")
const CreateStudent = () => import( "@/view/create-student/index.vue")
const Register = () => import( "@/view/register/index.vue")
const LoginBlog = () => import( "@/view/login-blog/index.vue")
const HomePage = () => import( "@/view/home-page/index.vue")
const CreateBlog = () => import( "@/view/create-blog/index.vue")
const BlogDetail = () => import( "@/view/blog-detail/index.vue")
const Test2 = () => import( "@/view/test2/test2.vue")


const Authority = {
  GUEST: "GUEST",
  ADMIN: "ADMIN",
  STAFF: "STAFF",
  USER: "USER"
}

const router = createRouter({
  history: createWebHistory("citizen"),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        error: true,
        title: 'Trang không tồn tại',
        authorities: []
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        isLogin: false,
        title: "Đăng nhập",
        authorities: [],
        icon: "fa-solid fa-phone"
      }
    },

    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        isLogin: false,
        title: "Đăng ký tài khoản",
        authorities: [],
        icon: "fa-solid fa-phone"
      }
    },

    {
      path: '/test2',
      name: 'Test2',
      component: Test2,
      meta: {
        isLogin: false,
        title: "Test2",
        authorities: [],
        icon: "fa-solid fa-phone"
      }
    },

    {
      path: '/login-blog',
      name: 'LoginBlog',
      component: LoginBlog,
      meta: {
        isLogin: false,
        title: "Đăng nhập",
        authorities: [],
        icon: "fa-solid fa-phone"
      }
    },

    {
      path: '/home-page',
      name: 'HomePage',
      component: HomePage,
      meta: {
        isLogin: true,
        title: "My Blog",
        authorities: [Authority.USER],
        icon: "fa-solid fa-phone"
      }
    },

    {
      path: '/blog-detail',
      name: 'BlogDetail',
      component: BlogDetail,
      meta: {
        isLogin: true,
        title: "Blog Detail",
        authorities: [Authority.USER],
        icon: "fa-solid fa-phone"
      }
    },

    {
      path: '/create-blog',
      name: 'CreateBlog',
      component: CreateBlog,
      meta: {
        isLogin: true,
        title: "Create Blog",
        authorities: [Authority.USER],
        icon: "fa-solid fa-phone"
      }
    },

    {
      path: '/management',
      name: 'Management',
      component: Management,
      meta: {
        isLogin: true,
        authorities: []
      },
      children: [


        {
          path: '/test',
          name: 'Test',
          component: Test,
          meta: {
            isLogin: true, //không cần login cũng vào trang này được
            title: "Đây là test",
            authorities: [],
            icon: "fa-solid fa-user"
          }
        },

        {
          path: '/citizen-management',
          name: 'CitizenManagement',
          component: CitizenManagement,
          meta: {
            isLogin: true, //không cần login cũng vào trang này được
            title: "Quản lí dân cư",
            authorities: [],
            icon: "fa-solid fa-user"
          }
        },

        {
          path: '/create-citizen',
          name: 'CreateCitizen',
          component: CreateCitizen,
          meta: {
            isLogin: true, //không cần login cũng vào trang này được
            title: "Thêm dân cư",
            authorities: [],
            icon: "fa-solid fa-user-plus"
          }
        },

        {
          path: '/update-citizen/:id',
          name: 'UpdateCitizen',
          component: UpdateCitizen,
          meta: {
            isLogin: true, //không cần login cũng vào trang này được
            title: "Chỉnh sửa dân cư",
            authorities: [],
            icon: "fa-solid fa-user-plus",
            isHidden: true
          }
        },

        {
          path: '/citizen-detail/:id',
          name: 'CitizenDetail',
          component: CitizenDetail,
          meta: {
            isLogin: true, //không cần login cũng vào trang này được
            title: "Thông tin chi tiết dân cư",
            authorities: [],
            icon: "fa-solid fa-user-plus",
            isHidden: true
          }
        },

        {
          path: '/vehicle-management',
          name: 'VehicleManagement',
          component: VehicleManagement,
          meta: {
            isLogin: true, //không cần login cũng vào trang này được
            title: "Quản lí phương tiện",
            authorities: [],
            icon: "fa-solid fa-motorcycle"
          }
        },


        {
          path: '/apartment-management',
          name: 'ApartmentManagement',
          component: ApartmentManagement,
          meta: {
            isLogin: true, //không cần login cũng vào trang này được
            title: "Quản lí căn hộ",
            authorities: [],
            icon: "fa-solid fa-house"
          }
        },

        {
          path: '/create-expense/:id',
          name: 'CreateExpense',
          component: CreateExpense,
          meta: {
            isLogin: true, //không cần login cũng vào trang này được
            title: "Tạo hoá đơn thanh toán",
            authorities: [],
            icon: "fa-solid fa-money-bill",
            isHidden: true
          }
        },

        {
          path: '/expense-management',
          name: 'ExpenseManagement',
          component: ExpenseManagement,
          meta: {
            isLogin: true, //không cần login cũng vào trang này được
            title: "Quản lí hoá đơn thanh toán",
            authorities: [],
            icon: "fa-solid fa-money-bill"
          }
        },

        {
          path: '/student-management',
          name: 'StudentManagement',
          component: StudentManagement,
          meta: {
            isLogin: true, //không cần login cũng vào trang này được
            title: "Quản lí học sinh",
            authorities: [],
            icon: "fa-solid fa-money-bill"
          }
        },

        {
          path: '/create-student',
          name: 'CreateStudent',
          component: CreateStudent,
          meta: {
            isLogin: true,
            title: "Thêm hoc sinh",
            authorities: [],
            icon: "fa-solid fa-user-plus"
          }
        }
      ]
    },


  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = checkAuthentication();
  const authority = getAuthority()

  const checkAuthority = to.meta.authorities.includes(authority) || to.meta.authorities.length == 0;

  if (to.meta.error) {
    next();
  }
  // if(to.path == '/management') {
  //   next("/teacher-management")
  // }

  if (to.meta.isLogin) { // kiểm tra xem trang đó có cần đăng nhập hay không???
    if (isAuthenticated) { // kiểm tra xem user đã đaeng nhập hay chưa???
      if (checkAuthority) {
        next();
      } else {
        next("/forbidden")
      }
    } else {
      next('/login');
    }
  } else {
    if (!isAuthenticated) {
      next();
    } else {
      next("/citizen-management");
    }
  }
  document.title = to.meta.title || 'Quản lý dân cư';
});

function checkAuthentication() {
  return localStorage.getItem("token") != null;
}

function getAuthority() {
  if (localStorage.getItem('current-account') && checkAuthentication()) {
    return JSON.parse(localStorage.getItem('current-account')).authority;
  } else {
    return Authority.USER;
  }
}

export default router