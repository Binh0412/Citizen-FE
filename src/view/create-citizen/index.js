import axios from "@/config/axios";
import Loading from 'vue-loading-overlay';
export default {
    data() {
        return {
            name: "",
            gender: true,
            dateOfBirth: "",
            identificationNumber: "",
            phone: "",
            apartmentId: "",
            dayIn: "",
            isOwner: false,
            apartments: []
        }
    },

    components: {
        Loading
    },

    mounted() {
        this.getApartmentName()
    },

    methods: {
        createCitizen(){
            this.isLoading = true;
            axios.post("citizen/create", {
                name: this.name,
                gender: this.gender,
                dateOfBirth: this.dateOfBirth,
                identificationNumber: this.identificationNumber,
                phone: this.phone,
                apartmentId: this.apartmentId,
                dayIn: this.dayIn,

            })
                .then((response) => {
                    if(response.data.status === "SUCCESS") {
                        this.$toast.success(response.data.message)
                        this.name = ""
                        this.gender = ""
                        this.dateOfBirth = ""
                        this.identificationNumber = ""
                        this.phone = ""
                        this.apartmentId = ""
                        this.dayIn = ""
                        this.$router.push({name: 'CitizenManagement'});
                        this.isLoading = false
                    }else{
                        this.$toast.error(response.data.message);
                        this.isLoading = false

                    }
                }).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
                this.isLoading = false

            })
        },

        getApartmentName() {
            axios.get("apartment/get-all-apartment-name")
                .then((response) => {
                    if (response.data.status === "SUCCESS"){
                        this.apartments = response.data.result
                        this.apartmentId = this.apartments[0].id
                    }else {
                        this.$toast.error(response.data.message);
                    }

                    }
                ).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
                this.isLoading = false

            })
        }
    }
}