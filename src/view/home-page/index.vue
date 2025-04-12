<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">My Blog</a>
          <div class="d-flex ms-auto">
           <div style="color: #cddfff">{{getName()}}</div>
          </div>
        </div>
      </nav>
    </div>

    <div style="display: flex">
      <div style="margin-top: 2%; margin-left: 10%">
        <button type="button" class="btn btn-success" @click="addBlog()"><font-awesome-icon icon="fa-solid fa-plus" />  Add blog</button>
      </div>

      <div style="width: 500px; margin-left: 15%; margin-top: 2%">
        <div class="input-group  ">
          <input type="text" class="form-control" v-model="searchInfo" placeholder="Search..." >
          <button class="btn btn-primary" @click="search()"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
        </div>
      </div>

      <div style="margin-top: 2%; margin-left: 10%">
        <select class="form-select" aria-label="Default select example">
          <option selected>Mới nhất</option>
          <option value="1">Cũ nhất</option>
          <option value="2">Nhiều lượt xem</option>
          <option value="3">Nhiều luợt bình luận</option>
        </select>
      </div>

    </div>


    <ul class="list-unstyled" v-for=" (b, index) in blogs" :key="index" style="margin-left: 5%; margin-right: 5%; margin-top: 5%">
      <li class="media">
        <div id="blog-detail" style="display: flex" @click="blogDetail(b.id)">
          <img :src="b.image.url" class="mr-3" alt="..." style="width: 64px">
          <div class="media-body" style="margin-left: 20px">
            <h5 class="mt-0 mb-1">{{b.title}}</h5>
            <div>{{b.content}}</div>
          </div>
        </div>

      </li>
    </ul>


  </div>
</template>
<script src="./index.js"></script>
<style>
  #blog-detail {
    cursor: pointer;
  }
</style>