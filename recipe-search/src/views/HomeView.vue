
<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fragment+Mono&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Sofia&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Top Banner -->
    <div class="main-image">
      <div class="container">
        <h1>Look for your favourite recipes now!</h1>
        <input type="file" id="file" class="button" accept="image/*">
        <label for="file"><span class="material-icons">add_photo_alternate</span> &nbsp; Choose a Photo</label>
      </div>
    </div>
    <!-- Bottom cards -->
    <div class="Cards">
      <b-row>
        <b-col class="Column">
          <div>
            <b-card
              title="STEP 1"
              img-src="src/assets/upload.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 35rem;"
              class="mb-2"
            >
            <b-card-text>
              Upload your picture.
            </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col class="Column">
          <div>
            <b-card
              title="STEP 2"
              img-src="src/assets/search.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 35rem;"
              class="mb-2"
            >
            <b-card-text>
              Search and Explore amongst our top recipes.
            </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col class="Column">
            <b-card
              title="STEP 3"
              img-src="src/assets/explore.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 35rem;"
              class="mb-2"
            >
            <b-card-text>
              Get Cooking!
            </b-card-text>
            </b-card>
        </b-col>
      </b-row>
    </div>
</template>

<script src="./home_script.js">
</script>


<!-- Styling -->
<style>
.main-image{
  position: relative;
  background: url(../assets/main-header.jpg) no-repeat center;
  background-size: 100%;
  height: 55vh;
  overflow: hidden;
  margin-left: 5%;
  margin-right: 5%;
  background-position-y: 55%;
}

.container h1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -90%);
  text-align: center;
  color: black;
  font-size: 50pt;
  font-family: 'Dancing Script', cursive;
  font-style: italic;
  }
  .card {
        margin: 0 auto;
        float: none;
  }
  .card-img-top {
    width: 100%;
    height: 12vw;
    object-fit: cover;
}
.Cards {
  margin-top: 1%;
  margin-left: 5%;
  margin-right: 5%;
  font-family: 'Fragment Mono', monospace;
}
input[type="file"]{
  display: none;
}
label {
  color: white;
  height: 60px;
  width: 250px;
  background-color: #FF7F27;
  position: absolute;
  margin: auto;
  top: 30%;
  bottom: 0;
  left: 0;
  right: -5%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat",sans-serif;
  border-radius: 24px;
}

</style>

