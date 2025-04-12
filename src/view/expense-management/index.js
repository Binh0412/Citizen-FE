import axios from "@/config/axios";
import {Modal} from "usemodal-vue3";

export default {
    components: {Modal},
    data() {
        return {
            expenses: [],
            size: 10,
            page: 1,
            listPage: [],
            totalPage: 0,
            expense: {},
            isPopupConfirm: false
        }
    },

    mounted(){
        this.getExpense();
    },

    methods: {
        getExpense() {
            axios.get(`expense/get-all?size=${this.size}&page=${this.page-1}`)
                .then((response) => {
                    if (response.data.status === "SUCCESS") {
                        this.expenses = response.data.result.content
                        this.totalPage = response.data.result.totalPages
                    } else {
                        this.$toast.error(response.data.message);
                    }
                }).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
            })
        },


        confirmExpense() {
            this.isLoading = true
            axios.put("expense/update", this.expense)
                .then( (response) => {
                    if(response.data.status === "SUCCESS") {
                        this.$toast.success(response.data.message)
                        this.isPopupConfirm = false
                        this.getExpense()
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

        cancelConfirm() {
            this.isPopupConfirm = false
        },

        openConfirmExpense(ex) {
            this.isPopupConfirm = true
            this.expense = ex;
        },

        formatNumber(value) {
            if (!value) return '0';
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },

        formattedDate(time) {
            const year = time.substring(0, 4);
            const month = time.substring(4, 6);
            return `T${parseInt(month)}-${year}`;
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
        }

    }
}