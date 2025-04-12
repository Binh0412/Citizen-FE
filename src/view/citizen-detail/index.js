import axios from "@/config/axios";

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
            citizen:{}
        }

    },

    methods: {
        getCitizen(id) {
            axios.get("citizen/get-citizen/" + id
            ).then((response) => {
                    this.citizen = response.data.result
                }
            )
        }
    }
}