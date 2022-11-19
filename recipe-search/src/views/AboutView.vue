<template>
  <div>
    <div class="text-lg text-center">
      This is a recipe page <br> <br>
    </div>
    <div class="pl-5 pr-5">
      <b-form-file id="file-large" v-model="file1" size="lg" placeholder="Choose a file or drop it here..."></b-form-file>
      <div v-if="url" class="flex justify-center">
        <img :src="url" />
      </div>
    </div>
  </div>
</template>

<script src="./food_detection.js"></script>
