
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
        <h1 class="bg-white/50">Look for your favourite recipes now!</h1>
        <div class="button-get-started">
          <a href="/about"><label class="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 w-[9em]"><span class="material-icons">add_photo_alternate</span> &nbsp; Get started!</label></a>
        </div>
      </div>
    </div>
    <!-- Bottom cards -->
    <div class="Cards">

          <div>
            <b-card
              title="STEP 1"
              img-src="/upload.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 35rem;"
              class="mb-2 min-w-[100%]"
            >
            <b-card-text>
              Upload your picture.
            </b-card-text>
            </b-card>
          </div>

          <div>
            <b-card
              title="STEP 2"
              img-src="/search.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 35rem;"
              class="mb-2 min-w-[100%]"
            >
            <b-card-text>
              Search and Explore amongst our top recipes.
            </b-card-text>
            </b-card>
          </div>

            <b-card
              title="STEP 3"
              img-src="/explore.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 35rem;"
              class="mb-2 min-w-[100%]"
            >
            <b-card-text>
              Get Cooking!
            </b-card-text>
            </b-card>


    </div>
</template>

<script src="./home_script.js">
</script>


<!-- Styling -->
<style scoped>

.main-image{
  position: relative;
  background: url("/main-header.jpg") no-repeat center;
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
@media (max-width: 1000px) {
  .main-image{
    position:relative;
    top:0em;
    height:30vh
  }
  .container h1{
    display:none;
  }
  .button-get-started {
    position:relative;
    top:6em
  }


  .card {
        display:absolute;
        margin: 0 auto;
        float: none;
  }
  .card-img-top {
    width: 100%;
    height: 12vw;
    object-fit: cover;
}
}
</style>

