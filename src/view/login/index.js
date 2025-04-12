import axios from "@/config/axios";

export default {
    name: "Login",
    data(){
        return{
            username: "",
            password: ""
        }
    },

    methods: {
        login(){
            axios.post("account/login", {
                username : this.username,
                password : this.password
            }).then( (response) => {
                if(response.data.status === "SUCCESS") {
                    this.$toast.success(response.data.message);
                    
                    localStorage.setItem(
                        "current-account",
                        JSON.stringify({
                          username: response.data.result.username,
                          fullname: response.data.result.fullname,
                          authority: response.data.result.authority,
                        })
                      );
                      const token = response.data.result.token;
                    localStorage.setItem("token", token);
                    axios.defaults.headers['Authorization'] = `Bearer ${token}`;

                    this.$router.push({ name: "CitizenManagement" });
                } else {
                    this.$toast.error(response.data.message);
                }
            }).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
            })
        }
    }
}