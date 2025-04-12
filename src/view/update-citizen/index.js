import axios from "@/config/axios";
import Loading from 'vue-loading-overlay';

export default {

    beforeRouteEnter(to, from, next) {
        next((v) => {
            if(to.params.id) {
                v.getCitizen(to.params.id)
            }
        })
    },

    data() {
        return {
            citizen:{},
            apartments: [],
            isLoading: false
            }

        },

    components: {
        Loading
    },

    mounted() {
        this.getApartmentName()
    },

    methods: {
        getCitizen(id){
            axios.get("citizen/get-citizen/"+ id
            ).then( (response) => {
                    this.citizen = response.data.result
                }
            )
        },

        updateCitizen(){
            this.isLoading = true;
            axios.put("citizen/update", this.citizen)
                .then( (response) => {
                    if(response.data.status === "SUCCESS") {
                        this.$toast.success(response.data.message)
                        this.$router.push({name: 'CitizenManagement'});
                        this.isLoading = false;
                    }else{
                        this.$toast.error(response.data.message);
                        this.isLoading = false;
                    }

                }).catch(() => {
                    this.$toast.error("Hệ thống lỗi");
                    this.isLoading = false;
                }

            )
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