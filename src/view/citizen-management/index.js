import axios from "@/config/axios";
import {Modal} from "usemodal-vue3";
import Loading from 'vue-loading-overlay';
import CitizenDetail from "@/view/citizen-detail";
export default {
    computed: {
        total() {
            return this.a + this.b
        }
    },
    data() {
        return {
            citizens: [],
            isPopupDelete: false,
            idDelete: "",
            nameDelete: "",
            isLoading: false,
            size: 9,
            page: 1,
            totalPage: 0,
            licensePlate: "",
            vehicleType: "",
            parkLocation: "",
            isPopupCreate: false,
            idCreateVehicle: null,
            searchInfo: "",
            a: 0,
            b: 0
        }
    },
    components: {
        Modal,
        Loading,
        CitizenDetail

    },

    mounted(){
        this.getCitizen();
    },

    methods: {
        getCitizen() {
            axios.get(`citizen/get-all?size=${this.size}&page=${this.page-1}`)
                .then((response) => {
                    if (response.data.status === "SUCCESS") {
                        this.citizens = response.data.result.content
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
            this.nameDelete = ""
        },
        deleteCitizen() {
            this.isLoading = true
            axios.delete("citizen/delete/" + this.idDelete)
                .then((response) => {
                    if (response.data.status === "SUCCESS") {
                        this.$toast.success(response.data.message);
                        this.isPopupDelete = false
                        this.idDelete = ""
                        this.nameDelete = ""
                        this.getCitizen()
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

        confirmDeleteCitizen(id, name) {
            this.isPopupDelete = true
            this.idDelete = id
            this.nameDelete = name
        },

        updateCitizen(citizenId) {
            this.$router.push({name: 'UpdateCitizen', params: {id: citizenId}});
        },

        citizenDetail(citizenId) {
            this.$router.push({name: 'CitizenDetail', params: {id: citizenId}});
        },

        createVehicle(id) {
            this.idCreateVehicle = id
            this.isPopupCreate = true
        },

        search() {
            axios.get("citizen/search/" + this.searchInfo())
                .then((response) => {
                    if (response.data.status === "SUCCESS") {
                        this.citizens = response.data.result.content
                    } else {
                        this.$toast.error(response.data.message);
                    }
                }).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
            })
        },

        createVehicleInfo(){
            this.isLoading = true;
            axios.post("vehicle/create", )
                .then( (response) => {
                    if(response.data.status === "SUCCESS") {
                        this.$toast.success(response.data.message)
                        this.isPopupCreate = false;
                        this.isLoading = false;
                    }else{
                        this.$toast.error(response.data.message);
                        this.isLoading = false;
                    }

                }).catch(() => {
                this.$toast.error("Hệ thống lỗi");
                this.isLoading = false;
            })
        },

        cancelCreate() {
            this.isPopupCreate = false
            this.idCreateVehicle = null
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
            this.getCitizen()
        }
    }
}