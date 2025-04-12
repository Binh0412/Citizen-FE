import axios from "@/config/axios";

export default {
    data() {
        return{
            name: "",
            age: "",
            address: ""
        }
    },

    methods: {
        createStudent() {
            axios.post("student/create", {
                name: this.name,
                age: this.age,
                address: this.address,

            })
                .then((response) => {
                    if (response.data.status === "SUCCESS") {
                        this.$toast.success(response.data.message)
                        this.name = ""
                        this.age = ""
                        this.address = ""
                        this.$router.push({name: 'StudentManagement'});
                    } else {
                        this.$toast.error(response.data.message);
                        this.isLoading = false

                    }
                }).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
                this.isLoading = false

            })
        }
    }
}