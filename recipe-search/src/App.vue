<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <b-nav align="center">
    <div class="row">
      <div class="flex items-center">
        <img class="" id=foodWiz  src="src/assets/FoodWizard_Name.png" alt="Logo"/>
      </div>
      <div class="flex items-center">
        <!-- <img class="" id=wizz src="src/assets/wizzard.png" alt="Logo"/> -->
      </div>
      <div>
        <img id=wizz src="src/assets/wizzard.png" alt="Logo"/>
      </div>
    </div>
  </b-nav>
  
  <RouterView />
</template>

<style scoped>
  #foodWiz{
    width:55% ;
  }
  #wizz{
    width:20%
  }
  .row{
    display: flex;
  }
  .col{
    
  }

</style>
