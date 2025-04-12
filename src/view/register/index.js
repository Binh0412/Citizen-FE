import axios from "@/config/axios-nal";

export default {
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },

    mounted() {
        console.log("Component mounted.");
    },

    methods: {
        register() {
            const formData = new FormData();
            formData.append('user[name]', this.name);
            formData.append('user[email]', this.email);
            formData.append('user[password]', this.password);
            axios.post("users", formData).then((response) => {
                    console.log(response.data);
                    this.$toast.success("Đăng ký thành công")
                }
            ).catch((error) => {
                console.log(error);
                this.$toast.error("Đăng ký thất bại")
            })
        }
    }
}