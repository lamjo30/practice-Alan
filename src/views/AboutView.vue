<script setup lang="ts">
  import Select from '../components/Select.vue';
</script>
<template>
  <div class="about">
    <Select/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
