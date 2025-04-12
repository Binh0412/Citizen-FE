import axios from "@/config/axios";
import {Modal} from "usemodal-vue3";
import Loading from 'vue-loading-overlay';
export default {


    data() {
        return {
            vehicles: [],
            vehicleOwnerId: "",
            apartmentId: "",
            licensePlate: "",
            vehicleType: "",
            parkLocation: "",
            isPopupDelete: false,
            idDelete: "",
            licensePlateDelete: "",
            isLoading: false,
            isPopupUpdate: false,
            vehicle:{},
            vehicleUpdate: null,
            size: 10,
            page: 1,
            listPage: [],
            totalPage: 0
        }
    },
    components: {
        Modal,
        Loading
    },

    mounted(){
        this.getVehicle();
    },

    methods: {
        getVehicle() {
            axios.get(`vehicle/get-all?size=${this.size}&page=${this.page-1}`)
                .then((response) => {
                    if (response.data.status === "SUCCESS") {
                        this.vehicles = response.data.result.content
                        this.totalPage = response.data.result.totalPages
                    } else {
                        this.$toast.error(response.data.message);
                    }
                }).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
            })
        },
        cancelDelete() {
            this.isPopupDelete = false
            this.idDelete = ""
            this.licensePlateDelete = ""
        },
        deleteVehicle() {
            this.isLoading = true
            axios.delete("vehicle/delete/" + this.idDelete)
                .then((response) => {
                    if (response.data.status === "SUCCESS") {
                        this.$toast.success(response.data.message);
                        this.isPopupDelete = false
                        this.idDelete = ""
                        this.licensePlateDelete = ""
                        this.getVehicle()
                    } else {
                        this.$toast.error(response.data.message);
                    }
                    this.isLoading = false
                }).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
                this.isLoading = false
            })
        },

        confirmDeleteVehicle(id, licensePlate) {
            this.isPopupDelete = true
            this.idDelete = id
            this.licensePlateDelete = licensePlate
        },


        updateVehicle(v) {
            this.vehicleUpdate = {...v}
            this.isPopupUpdate = true
        },

        updateVehicleInfo(){
            this.isLoading = true;
            axios.put("vehicle/update", this.vehicleUpdate)
                .then( (response) => {
                    if(response.data.status === "SUCCESS") {
                        this.$toast.success(response.data.message)
                        this.isPopupUpdate = false;
                        this.isLoading = false;
                        this.getVehicle()
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
            this.getVehicle()
        },

        cancelUpdate() {
            this.isPopupUpdate = false
        },

    }
}