<template>
    <div class="w-full">
        <div class="w-full max-w-7xl mx-auto bg-white text-dark px-4 py-2 flex justify-between items-center">
            <div class="font-bold uppercase">Khairul Azry</div>
            <div class="hidden md:flex space-x-2">
                <div>
                    <router-link to="/under-construction">Home</router-link>
                </div>
            </div>
            <div class="md:hidden">Menu Mobile</div>
        </div>
        <div class="hidden">
            Menu list mobile
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'Navigation'
  }
  </script>