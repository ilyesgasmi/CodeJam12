<template>
  <div>
    <div class="text-lg text-center">
      This is a recipe page <br> <br>
    </div>
    <div class="pl-5 pr-5">
      <b-form-file id="file-large" accept="image/*" v-model="file1" size="lg" placeholder="Choose a file or drop it here..."></b-form-file>
      <div v-if="url" style="display: flex;justify-content: center;">
        <img style="box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 15px;" :src="url" />
      </div>
    </div>
  </div>
</template>

<script src="./food_detection.js"></script>

