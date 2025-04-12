import axios from "@/config/axios-nal";

export default {

    data() {
        return {
            blogs: []
        }
    },

    mounted(){
        this.getBlog();
    },

    methods: {
        getName() {
            if(localStorage.getItem('current-account')) {
                return JSON.parse(localStorage.getItem('current-account')).name

            } else {
                return "Người dùng hệ thống"
            }

        },

        addBlog() {
            this.$router.push({ name: "CreateBlog" });
        },

        getBlog(){
            axios.get("blogs")
                .then((response) => {
                    this.blogs = response.data.data.items
                    console.log(this.blogs)
                }).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
            })
        },

        blogDetail(blogId) {
            this.$router.push({name: 'BlogDetail', params: {id: blogId}});
        },
    }
}