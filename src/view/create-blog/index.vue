<template>
  <div>
    <div class="container mt-5">
      <h2>Create New Blog</h2>

        <div class="mb-3">
          <label for="title" class="form-label"> <b>Title</b> </label>
          <input type="text" class="form-control" v-model="title" placeholder="Enter blog title"/>
        </div>

        <div class="mb-3">
          <label for="content" class="form-label"> <b>Content</b></label>
          <textarea  class="form-control" v-model="content" rows="4" > </textarea>
        </div>

      <b>Chọn ảnh</b> <br>
      <input type="file" accept="image/*" @change="changeImg($event)"> <br>
      <br>
      <div v-if="img" style="max-height: 500px">
        <img :src="img" style="height: 500px;">
      </div>

      <div style="margin-top: 2%">
        <button type="submit" class="btn btn-primary" @click="createBlog()">Create Blog</button>
      </div>

    </div>

    <div>
      <div>
        <h3>Chọn các món ăn:</h3>
        <div v-for="item in foods" :key="item.id">
          <input type="checkbox" :id="item.id" :value="item.id" v-model="selectedFoods"/>
          <label :for="item.id">{{ item.name }}</label>
        </div>

        <button @click="showFoods()">Chọn</button>

        <div v-if="isSubmitted">
          <h4>Các món đã chọn:</h4>
          <ul>
            <li
                v-for="(selectedId, index) in displayedFoods"
                :key="index"
            >
              {{ getFoodName(selectedId) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>