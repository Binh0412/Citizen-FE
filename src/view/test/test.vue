
<template>
  <div>
    <div class="row" style="background-color: #3e4f6f">
      <div class="form-group col-4" style=" background-color: yellow" >
        <p style="font-size:30px; padding-left: 200px; padding-top: 7px"><b> NY bank</b> </p>
      </div>
      <div class="form-group col-1 header1"  >
        <p class="header1-content" >Home</p>
      </div>
      <div class="form-group col-1 header1"  >
        <p class="header1-content">Service</p>
      </div>
      <div class="form-group col-1 header1"  >
        <p class="header1-content">Securyty & Policy</p>
      </div>
      <div class="form-group col-1 header1"  >
        <p class="header1-content">Monetary Policy</p>
      </div>
      <div class="form-group col-1 header1"  >
        <p class="header1-content">Blog</p>
      </div>
      <div class="form-group col-1 header1"  >
        <p class="header1-content">Contacts</p>
      </div>

    </div>

    <div>
      <div><img style="width: 100%" src="./img/anh1.jpg" alt=""></div>
    </div>

    <div class="row">
      <div class="form-group col-4" >
        <div style="background-color: #3e4f6f; height: 40vh">
          <div style=" padding-top: 50px ">
            <h4 style="color: white; margin-left: 50%">USER LOGIN</h4>
            <form method="post">
              <div style="text-align: right; margin-right: 5%"><input type="text" name="u" placeholder="Username" /></div>
              <div style="text-align: right;margin-right: 5%"><input type="password" name="p" placeholder="Password"/></div>
              <div style="text-align: right;margin-right: 5%"><button type="button" class="btn btn-warning">LOGIN</button></div>
            </form>
          </div>
        </div>

        <div style="background-color: #E0FFFF">
          <div class="aaa ">
            <br>
          </div>
          <div class="aaaa">
            <div class="aaa ">
              <p>PRIVATE & BUSINESS CLIENTS</p>
            </div>
          </div>
          <div class="aaaa">
            <div class="aaa ">
              <p>ASSET AND WEALTH MANAGEMENT</p>
            </div>
          </div>
          <div class="aaaa">
            <div class="aaa">
              <p>GLOBAL TRANSACTION BANKING</p>
            </div>
          </div>
          <div class="aaaa ">
            <div class="aaa">
              <p>NY BANKING WORLDWIDE</p>
            </div>
          </div>
          <div class="aaa ">
            <br>
            <br>
          </div>
        </div>

      </div>


      <div class="form-group col-8 row" style="margin-top: 25px">
        <div class="form-group col-4">
          <div class="row">
            <div class="form-group col-3">
              <p class="b">01/</p>
            </div>
            <div class="form-group col-9">
              <p class="bb">FIND THE RIGHT ACCOUNT</p>
              <p class="bbb">Amidst the immense mountains and forests of Lam Dong province, Dalat, a beautiful town,captivates all those who have been there once. </p>
              <p class="bbbb">READ MORE</p>
            </div>
          </div>

          <div class="row">
            <div class="form-group col-3">
              <p class="b">02/</p>
            </div>
            <div class="form-group col-9">
              <p class="bb">CHOSE THE RIGHT CREDIT CARD</p>
              <p class="bbb">Amidst the immense mountains and forests of Lam Dong province, Dalat, a beautiful town,captivates all those who have been there once. </p>
              <p class="bbbb">READ MORE</p>
            </div>
          </div>

          <div class="row">
            <div class="form-group col-3">
              <p class="b">03/</p>
            </div>
            <div class="form-group col-9">
              <p class="bb">GROW YOUR SAVING TAX-FREE</p>
              <p class="bbb">Amidst the immense mountains and forests of Lam Dong province, Dalat, a beautiful town,captivates all those who have been there once. </p>
              <p class="bbbb">READ MORE</p>
            </div>
          </div>

        </div>


        <div class="form-group col-8 row">
          <div class="form-group col-4" style="padding: 2%">
            <div style="border: 2px solid gray;">
              <div style="margin-left: 10%">
                <div style="margin-top: 5%"><font-awesome-icon style="color: dodgerblue" icon="fa-solid fa-money-bill" /></div>
                <p class="cc">EVERYDAY BANKING</p>
                <p class="ccc">Dalat is often called the City of Eternal Spring,lowers of all colors</p>
              </div>

            </div>
          </div>

          <div class="form-group col-4" style="padding: 2%">
            <div style="border: 2px solid gray;">
              <div style="margin-left: 10%">
                <div style="margin-top: 5%"><font-awesome-icon style="color: dodgerblue" icon="fa-solid fa-money-bill" /></div>
                <p class="cc">CREDITS AND LOANS</p>
                <p class="ccc">Dalat is often called the City of Eternal Spring,lowers of all colors</p>
              </div>
            </div>
          </div>

          <div class="form-group col-4" style="padding: 2%">
            <div style="border: 2px solid gray;">
              <div style="margin-left: 10%">
                <div style="margin-top: 5%"><font-awesome-icon style="color: dodgerblue" icon="fa-solid fa-calculator" /></div>
                <p class="cc">INVETERMENT & WEALTH</p>
                <p class="ccc">Dalat is often called the City of Eternal Spring,lowers of all colors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-autocomplete
        label="Autocomplete"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-autocomplete>

  </div>
</template>

<style scoped>
  .header1 {
    background-color: #3e4f6f;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    font-size: 13px;
    text-align: center;

  }

  .header1:hover {
    background-color: #2c384e;
    cursor: pointer;
  }

  .header1-content {
    padding-top: 15px;
  }

  .aaa {
    font-weight: bold;
    color: #0066CC ;
    margin-left: 45%;
    font-size: 18px;
  }

.aaaa:hover {
  background-color: yellow;
  cursor: pointer;
}


  .login h1 { color: #fff; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; }

  input {
    width: 50%;
    margin-bottom: 10px;
    background: rgba(0,0,0,0.3);
    border: none;
    outline: none;
    padding: 10px;
    font-size: 13px;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    border-radius: 4px;
    box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);

  }

  .b {
    font-weight: bold;
    font-size: 45px;
    font-family: "Times New Roman";
    color: #FFCC00;
  }

  .bb {
    font-family: "Times New Roman";
    font-weight: bold;
    margin-top: 10px;
  }

  .bbb {
    color: gray;
    margin-top: -15px;
    font-size: 12px;
  }

  .bbbb {
    font-weight: bold;
    color: dodgerblue;
    font-size: 12px;
    margin-top: -10px;
  }

  .bbbb:hover {
    cursor: pointer;
  }

  .cc {
    font-family: "Times New Roman";
    font-weight: bold;
  }

  .ccc{
    font-family: "Times New Roman";
    font-weight: bold;
    font-size: 11.5px;
    color: dodgerblue;
  }

</style>
<script setup lang="ts">
</script>