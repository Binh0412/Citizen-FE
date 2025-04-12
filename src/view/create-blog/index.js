import axios from "@/config/axios-nal";

export default {
    data() {
        return {
            title: "",
            content: "",
            img: "",
            image: "",
            foods: [
                { id: 'food1', name: 'Phở' },
                { id: 'food2', name: 'Bún chả' },
                { id: 'food3', name: 'Bánh mì' },
                { id: 'food4', name: 'Xôi xéo' },
            ],
            selectedFoods: [],
            displayedFoods: [],
            isSubmitted: false,
        }
    },

    methods: {
        createBlog() {
            const formData = new FormData()
            formData.append('blog[title]', this.title);
            formData.append('blog[content]', this.content);
            formData.append('blog[image]', this.image);

            axios.post("blogs", formData, {
                headers: {
                    'content-Type': 'mutipart/form-data'
                }
            }).then((response) => {
                console.log(response.data);
                this.$toast.success("Tạo bài viết thành công")

            }).catch((error) => {
                console.log(error);
                this.$toast.error("Tạo bài viết thất bại")
            })
        },
        changeImg(event) {
            this.image = event.target.files[0]
            const reader = new FileReader()
            if(this.image) {
                reader.readAsDataURL(this.image)
                reader.onload = () => {
                    this.img = reader.result
                }
            }
        },

        showFoods() {
            this.displayedFoods = [...this.selectedFoods];
            this.isSubmitted = true;
            console.log(this.displayedFoods);
        },
        getFoodName(id) {
            const foodItem = this.foods.find(item => item.id === id);
            return foodItem ? foodItem.name : '';
        },

    }
}