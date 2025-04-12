import Loading from "vue-loading-overlay";
import axios from "@/config/axios";

export default {

    beforeRouteEnter(to, from, next) {
        next((v) => {
            if(to.params.id) {
                v.apartmentId = to.params.id
                v.getApartment(to.params.id)
            }
        })
    },

    data() {
        return {
            mon: "",
            apartmentId: "",
            electricityExpense: "",
            waterExpense: "",
            totalExpense: 0,
            managementExpense: 0,
            garbageExpense: 20000,
            apartment:"",
            formattedDate: ""
        }
    },

    components: {
        Loading
    },


    mounted() {
        this.getLastMonth()
    },

    methods: {
        createExpense(){
            this.isLoading = true;
            axios.post("expense/create", {
                apartmentId: this.apartmentId,
                electricityExpense: this.electricityExpense,
                waterExpense: this.waterExpense,
            })
                .then((response) => {
                    if(response.data.status === "SUCCESS") {
                        this.$toast.success(response.data.message)
                        this.apartmentId = ""
                        this.electricityExpense = ""
                        this.waterExpense = ""
                        this.totalExpense = ""
                        this.$router.push({name: 'ApartmentManagement'});
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

        calTotalExpense(){
            this.totalExpense = this.garbageExpense + this.managementExpense + this.electricityExpense + this.waterExpense
        },

        getApartment(id) {
            axios.get("apartment/get-apartment/"+ id
            ).then( (response) => {
                this.apartment = response.data.result
                if(this.apartment.expense != null) {
                    this.$toast.error("Căn hộ đã có hoá đơn rồi");
                    this.$router.push({name: 'ApartmentManagement'});
                    return
                }
                if(this.apartment.conditions == 1) {
                    this.managementExpense = 100000
                } else if(this.apartment.conditions == 2) {
                    this.managementExpense = 5000000
                } else {
                    this.$toast.error("Căn hộ này chưa có chủ");
                    this.$router.push({name: 'ApartmentManagement'});
                    return
                }
                this.calTotalExpense()
                }
            )
        },

        getLastMonth() {
            let currentDate = new Date();
            let currentMonth = currentDate.getMonth();
            let currentYear = currentDate.getFullYear();
            if (currentMonth === 0) {
                currentMonth = 11;
                currentYear -= 1;
            } else {
                currentMonth -= 1;
            }
            let formattedMonth = (currentMonth + 1).toString().padStart(2, '0');
            this.formattedDate = `${formattedMonth}/${currentYear}`;
        }

    }

}