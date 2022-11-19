<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div>
      <b-nav tabs>
        <b-nav-item><RouterLink to="/"><span class="text-lg">Home</span></RouterLink></b-nav-item>
        <b-nav-item><RouterLink to="/about"><span class="text-lg">About</span></RouterLink></b-nav-item>
      </b-nav>
    </div>
  <RouterView />
</template>

<style scoped>

</style>
