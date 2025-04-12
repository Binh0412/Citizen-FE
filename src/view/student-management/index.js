import axios from "@/config/axios";
import {Modal} from "usemodal-vue3";

export default {
    components: {Modal},
    data() {
        return {
            students: [],
            totalPage: 0,
            idDelete: "",
            isPopupUpdate: false,
            studentUpdate: null,
        }
    },

    mounted(){
        this.getStudents();
    },

    methods: {
        getStudents() {
            axios.post(`student/get-all?size=${this.size}&page=${this.page-1}`,
                {

                })
                .then((response) => {
                    if (response.data.status === "SUCCESS") {
                        this.students = response.data.result.content
                        this.totalPage = response.data.result.totalPages
                    } else {
                        this.$toast.error(response.data.message);
                    }
                }).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
            })
        },

        deleteStudent(id) {
            this.idDelete = id
            axios.delete("student/delete/" + this.idDelete)
                .then((response) => {
                    if (response.data.status === "SUCCESS") {
                        this.$toast.success(response.data.message);
                        this.isPopupDelete = false
                        this.idDelete = ""
                        this.getStudents()
                    } else {
                        this.$toast.error(response.data.message);
                    }
                }).catch((error) => {
                console.log(error)
                this.$toast.error("Hệ thống lỗi!");
            })
        },

        updateStudent(s) {
            this.studentUpdate = {...s}
            this.isPopupUpdate = true
        },

        updateStudentInfo(){
            axios.put("student/update", this.studentUpdate)
                .then( (response) => {
                    if(response.data.status === "SUCCESS") {
                        this.$toast.success(response.data.message)
                        this.isPopupUpdate = false;
                        this.getStudents()
                    }else{
                        this.$toast.error(response.data.message);
                    }

                }).catch((error) => {
                    console.log(error)
                    this.$toast.error("Hệ thống lỗi");
                }

            )
        },

        cancelUpdate() {
            this.isPopupUpdate = false
        },
    }
}