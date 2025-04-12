import Loading from "vue-loading-overlay";
import axios from "@/config/axios";
import {Modal} from "usemodal-vue3";

export default {

    data() {
        return {
            apartments: [],
            isLoading: false,
            size: 10,
            page: 1,
            listPage: [],
            totalPage: 0,
            citizens:[],
            apartmentUpdate: {},
            isPopupUpdate: false
        }
    },
    components: {
        Modal,
        Loading
    },


    mounted(){
        this.getApartment();
    },


    methods: {
        getApartment() {
            axios.get(`apartment/get-all?size=${this.size}&page=${this.page-1}`)
                .then((response) => {
                    if (response.data.status === "SUCCESS") {
                        this.apartments = response.data.result.content
                        this.totalPage = response.data.result.totalPages
                    } else {
                        this.$toast.error(response.data.message);
                    }
                }).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
            })
        },

        getCitizen() {
            axios.get(`citizen/get-citizen-by-apertment-id/${this.apartmentUpdate.id}`)
                .then((response) => {
                    if (response.data.status === "SUCCESS") {
                        this.citizens = response.data.result
                    } else {
                        this.$toast.error(response.data.message);
                    }
                }).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
            })
        },

        openPopupUpdate(a) {
            this.isPopupUpdate = true;
            this.apartmentUpdate = {...a}
            this.getCitizen()
        },

        updateApartment() {
            this.isLoading = true;
            axios.post("apartment/update", this.apartmentUpdate)
                .then( (response) => {
                    if(response.data.status === "SUCCESS") {
                        this.$toast.success(response.data.message)
                        this.isPopupUpdate = false;
                        this.isLoading = false;
                        this.apartmentUpdate = {}
                        this.citizens = []
                        this.getApartment();
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

        cancelUpdate() {
            this.isPopupUpdate = false;
            this.apartmentUpdate = {}
            this.citizens = []
        },


        changePage(type) {
            if(type == 1) {
                this.page = 1
            } else if(type == 2) {
                this.page = this.page - 1
            } else if(type == 3) {
                this.page = this.page + 1
            } else {
                this.page = this.totalPage
            }
            this.getApartment()
        },


        formatRoomNo(floorNo, roomNo) {
            return floorNo+"."+roomNo.toString().padStart(2, '0');
        },

        createExpense(apartmentId) {
            this.$router.push({name: 'CreateExpense', params: {id: apartmentId}});
        }

    }

}