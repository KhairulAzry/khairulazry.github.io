<template>
  <div class="flex flex-col w-full h-full min-h-screen">
    <router-view name="Navigation"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>