<template>
  <div>
    <div class="text-lg text-center">
      This is a recipe page <br> <br>
      <input class="text-center" v-model="recipeInputText" type="text" placeholder="enter food here"> <br> <br>
    </div>
    <div>
      <b-form-group label="Large:" label-cols-sm="2" label-size="lg">
        <b-form-file id="file-large" size="lg"></b-form-file>
      </b-form-group>
    </div>
  </div>
</template>

<script src="./food_detection.js"></script>
