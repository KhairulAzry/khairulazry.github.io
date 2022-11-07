<template>
    <div class="flex-1 w-full h-full flex flex-wrap items-center justify-center bg-dark">
        <div class="space-y-2 text-white text-center">
            <div class="text-h3 md:text-h1 font-black uppercase">Page Under Construction</div>
            <div>This page is under construction. <br/> Thank you for visiting.</div>
            <div><router-link to="/" class="px-4 py-1 hover:bg-white border border-white rounded-full text-white hover:text-dark">Go to Home</router-link></div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'Under Construction'
  }
  </script>