<template>
  <div>
    <div v-if="!loadList && !loading" class="pl-5 pr-5">
      <div class="pt-6 pb-6">
        <b-form-file id="file-large" accept="image/*" v-model="file1" size="lg" placeholder="Choose a file or drop it here..."></b-form-file>
      </div>
      <div v-if="url" class="pb-6 flex justify-center">
        <div>
          <img class="boxshadow" :src="url" />
        </div>
      </div>
      <div class="btn-center">
        <button v-if="file1" class="button-30" @click="getFoodCV(food)">Find out more about my dish!</button>
      </div>
    </div>
    <div v-if="!loadList && loading">
        <h1>LOADING</h1>
    </div>
    <div v-if="loadList">
      <div class="mx-3 mt-10 grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 place-content-evenly">
      <div v-for="(food, index) in cardList">
          <b-card
            @click="modalUpdate(food.hits, foodList[index])"
            :title=foodList[index]
            :img-src=food.hits[0].recipe.image
            class="mb-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
          </b-card>
        </div>
      </div>
    </div>
  </div>
  <b-modal v-model="modalState" size="xl" hide-footer :title=modalTitle>
    <div class="mx-3 mt-10 grid grid-cols-1 place-content-evenly">
      <div v-for="(hit, index) in modalValue">
        <b-card-group deck >
          <b-card 
            @click=""
            :title=hit.recipe.label
            :img-src=hit.recipe.image
            class="mb-2 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300" 
            img-left >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-card-group>
    </div>   
    </div>
        
  </b-modal>
</template>

<script src="./food_detection.js"></script>

<style>
.card-title{
  font-weight:bold;
  font-size:2em
}
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


