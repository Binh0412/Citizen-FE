<template>
  <div>
    <div id="title">
      <h2><b> CEA201 - Computer Organization and Architecture</b> <b style="margin-left: 15vh">Time</b> </h2>
    </div>


    <div class="row">

      <div id="quiz" class="form-group col-3 fixed-box " >
        <p id="quiz_title">quiz navigation</p>

        <div id="quiz_grid">
          <button v-for=" (d, index) in result" :key="index" :class="d.answer ? 'quiz_item green' : 'quiz_item'">{{index+1}} </button>
        </div>

        <p id="quiz_finish">Finish attempt</p>

      </div>

      <div  class="form-group col-9" style="margin-left: 20%">
        <div class="quiz_content" v-for="(d, index) in data" :key="index">
          <div :class="isAnswer(d.id) ? 'quiz_content_number quiz_content_number_green' : 'quiz_content_number'">
            <p class="quiz_content_number_content">Câu <b>{{index+1}}</b></p>

            <span id="cancle" v-if="isAnswer(d.id)" @click="cancleAnswer(d.id)">Huỷ chọn đáp án</span>
            <span  v-else>Chưa chọn đáp án</span>
          </div>

          <div class="quiz_content_content">
            <div class="quiz_content_content_content">
              <p >
                <b >{{d.question}}</b>
              </p>
              <div class="answers">
                <div style="display: flex" v-for="(a, i) in d.answer" :key="i">
                  <div><input type="radio" :name="d.id" :value="i+1" @change="setResult(index, i+1)"></div>
                  <p class="answer">{{a}}</p>
                </div>
              </div>
            </div>

          </div>
        </div>



      </div>
    </div>



  </div>
</template>
<script src="./test2.js">
</script>
<style>
  #title{
    margin-left: 5%;
    margin-top: 3%;
    position: sticky;
  }


  #course_content p {
    margin: 0;
    margin-left: 5px;
  }


  #quiz{
    background-color: rgba(243, 239, 239, 0.97);
    border: 2px solid #c9c8c3;
    margin-left: 5%;
    margin-top: 1%;
    width: 16%;
    height: 70vh;
  }

  #quiz_title {
    margin-top: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }

  #quiz_grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
  }

  .quiz_item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border: 2px solid black;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    background-color: white;
    color: black;
    border-radius: 5px;
  }

  .green {
    background-color: green;
  }

  #quiz_finish{
    margin-top: 10px;
    color: blue;
  }

  #quiz_finish:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  #cancle{
    color: blue;
    font-size: 13px;
  }

  #cancle:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .quiz_content{
    display: flex;
  }

  .quiz_content_number{
    background-color: rgba(243, 239, 239, 0.97);
    border: 2px solid #c9c8c3;
    height: 140px;
    width: 155px;
    margin-left: 2%;
    margin-top: 1%;
    padding: 10px;

  }

  .quiz_content_number_green {
    border-color: green;
  }

  .quiz_content_number_content{
    margin-left: 5px;
    line-height: 1;
    font-size: 13px;
  }

  .quiz_content_content{
    background-color: rgba(210, 234, 246, 0.97);
    border: 2px solid #c9c8c3;
    width: 100%;
    padding: 15px;
    margin-left: 5px;
    margin-top: 1%;
  }

  .answers{
    margin-left: 50px;
    margin-top: -10px;
  }

  .answer{
    margin-left: 30px;
    line-height: 1.2;
  }

  .fixed-box {
    position: fixed;

    padding: 10px;
  }

  @media (max-width: 768px) {
    .fixed-box {
      top: 0;
      left: 0;
      right: 0;
      text-align: center;
      padding: 15px;
      background: lightcoral;
    }
  }


</style>