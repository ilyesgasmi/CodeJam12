<template>
  <div class="h-[100vh]"> 
    <div v-if="!loadList && !loading" class="pl-5 pr-5 max-h-[100%]">
      <div class="pt-6 pb-6">
        <b-form-file accept="image/*" v-model="file1" size="lg" placeholder="Upload picture"></b-form-file>
      </div>
      <div v-if="url" class="pb-6 flex justify-center">
        <div class="yoyo">
          <img class="boxshadow max-h-[100%]" :src="url" />
        </div>
      </div>
      <div class="btn-center">
        <button v-if="file1" class="button-30" @click="getFoodCV(food)">Find out more about my dish!</button>
      </div>
    </div>
    <div v-if="!loadList && loading">
      <img class="animate-bounce h-[30%] w-[30%]"  src="src/assets/wiz.png"/> 
    </div>
    <div v-if="loadList">
      <div class="mx-3 mt-10 grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 place-content-evenly">
      <div v-for="(food, index) in cardList">
          <b-card
            @click="modalUpdate(food.hits, foodList[index])"
            :title=foodList[index]
            :img-src=food.hits[0].recipe.image
            class="mb-2 h-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
          </b-card>
        </div>
      </div>
    </div>
  </div>
  <b-modal 
      content-class='test'
      body-bg-variant="#ffdd9c"
      footer-bg-variant="#ffdd9c"
  v-model="modalState" size="xl" hide-footer :title=modalTitle>
    <div class="mx-3 mt-10 grid grid-cols-1 place-content-evenly ">
      <div v-for="(hit, index) in modalValue">
        <a style="text-decoration:none" :href=hit.recipe.url>
        <!-- MOBILE VIEW -->
        <div></div>
        <b-card v-if="windowWidth<=1000" 
            @click=""
            :title=hit.recipe.label
            :img-src=hit.recipe.image
            class="mb-2 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300" 
             overlay><b-card-text>
              <div v-if="hit.recipe.cautions.length>0" class="bg-white/75"><font-awesome-icon icon="fa-solid fa-circle-exclamation" /> {{capitalize(hit.recipe.cautions)}} </div>
              <div class="bg-white/75 border-2 px-2 mt-2">Macros
                <hr>
                <div>
                    <div v-for="(d,i) in hit.recipe.digest">
                      <div v-if="i<3">{{d.label}} {{d.total}}</div>
                    </div> 
                </div>
            </div>
            <div class="bg-white/75 border-2 px-2 mt-2">Ingredients
              <hr>
              <div class="overflow-y-scroll max-h-12">
                <div v-for="ingredient in hit.recipe.ingredients">
                  {{ingredient.text}}
                </div> 
            </div>
            </div>
            </b-card-text>
        </b-card>
        <!-- DESKTOP VIEW: -->
        <b-card-group v-if="windowWidth>1000" deck>
          <b-card 
            @click=""
            :title=hit.recipe.label
            :img-src=hit.recipe.image
            class="mb-2  transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300" 
            img-left >
            <div class="absolute top-1 right-1 h-16">{{capitalize(hit.recipe.mealType)}} <br> {{capitalize(hit.recipe.cuisineType)}}</div>
            <b-card-text>
              <div v-if="hit.recipe.cautions.length>0"><font-awesome-icon icon="fa-solid fa-circle-exclamation" /> {{capitalize(hit.recipe.cautions)}} </div>
              <div class="border-2 px-2 min-w-[88%] max-w-[88%]">Macros
                <hr>
                <div>
                    <div v-for="(d,i) in hit.recipe.digest">
                      <div v-if="i<3">{{d.label}} {{d.total}}</div>
                    </div> 
                </div>
            </div>
            <div class="border-2 px-2 mt-2 min-w-[88%] max-w-[88%]">Ingredients
              <hr>
              <div class="overflow-y-scroll max-h-20">
                <div v-for="ingredient in hit.recipe.ingredients">
                  {{ingredient.text}}
                </div> 
            </div>
            </div>
            </b-card-text>
          </b-card>
        </b-card-group>
      </a>
    </div>   
    </div>   
  </b-modal>
</template>

<script src="./food_detection.js"></script>

<style>
.yoyo{
  height: 50vh;
}
.card-title{
  font-weight:bold;
  font-size:2em;
  width: 90%;
}
@media (max-width: 1000px){
  .card-title{
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
    background-color: rgba(255,255,255,75%);
    font-weight:bold;
    font-size:2em;
    width: 90%;
}
}
.modal-title{
  font-weight: bold;
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
.test{
  background: rgb(255,145,0);
        background: linear-gradient(0deg, rgba(250, 152, 25, 0.785) 80%, rgba(255,255,255,1) 100%);
}
</style>


