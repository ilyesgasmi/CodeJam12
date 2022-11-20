<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <b-nav>
    <div class="row">
      <div class="flex ml-[5%]">
        <a href="/"><img class="self-start" id=foodWiz  src="src/assets/Final_Logo1.png" alt="Logo"/> </a>
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
