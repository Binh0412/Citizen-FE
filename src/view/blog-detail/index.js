import axios from "@/config/axios-nal";

export default {
    beforeRouteEnter(to, from, next) {
        next((v) => {
            if(to.params.id) {
                v.getBlog(to.params.id)
            }
        })
    },

    data() {
        return {
            blog:{}
        }

    },

    methods: {
        getBlog(id) {
            axios.get("blogs" + id
            ).then((response) => {
                    this.blog = response.data
                    console.log(this.blog)
                }
            )
        }
    }
}