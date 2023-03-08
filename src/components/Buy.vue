<script setup lang="ts">
    import { useStore } from 'vuex';
    import { onMounted, computed } from 'vue';

    const store = useStore(); 
    const add = computed(() => store.state.count);

</script>
<template>
    <section class="row">
        <div class="col-2">
            <img width="21" src="../components/icons/box-svgrepo-com.png" alt="buy"/>
        </div>
        <div class="col-2">
            <h5 class="pt-1">{{ add }}</h5>
        </div>
    </section>
</template>