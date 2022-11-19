<template>
  <div>
    <div v-if="!food" class="pl-5 pr-5">
      <b-form-file id="file-large" accept=".jpg, .png" v-model="file1" size="lg" placeholder="Choose a file or drop it here..."></b-form-file>
      <div v-if="url" style="display: flex;justify-content: center;">
        <img style="box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 15px;" :src="url" />
      </div>
      <div class="btn-center">
        <button v-if="file1" class="button-30" @click="getFoodCV(food)">Find out more about my dish!</button>
      </div>
    </div>
    <div v-if="food"><h1>{{food}}</h1></div>
  </div>
</template>

<script src="./food_detection.js"></script>
<style>
.btn-center{
  text-align: center;
}
.button-30 {
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
}

.button-30:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-30:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-30:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}
</style>


