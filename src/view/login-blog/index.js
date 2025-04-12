import axios from "@/config/axios-nal";

export default {
    data() {
        return {
            email: "",
            password: "",
            remember_me: false
        }
    },

    methods: {
        login() {
            axios.post("login", {
                email : this.email,
                password : this.password,
                remember_me: this.remember_me,
            }).then( (response) => {
                if(this.remember_me) {
                    const refresh_token = response.data.data.refresh_token;
                    localStorage.setItem("refresh_token", refresh_token);
                }
                const token = response.data.data.token;
                localStorage.setItem("token", token);
                axios.defaults.headers['Authorization'] = `Bearer ${token}`;
                this.email = ""
                this.password = ""
                this.remember_me = ""
                this.getInfor();
                this.$router.push({ name: "HomePage" });

            })
        },
        getInfor() {
            axios.get("me"
            ).then((response) => {
                localStorage.setItem(
                    "current-account",
                    JSON.stringify({
                        email: response.data.data.email,
                        password: response.data.data.password,
                        name: response.data.data.name,
                        authority: "USER",
                    })
                );
            })
        }
    }
}
