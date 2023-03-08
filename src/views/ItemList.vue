<script setup lang="ts">
    import Card from '../components/Card.vue';
    import { useStore } from 'vuex';
    import { onMounted, computed } from 'vue';

    const store = useStore(); 
    const product = computed(() => store.state.products);
    onMounted(() => {
        store.dispatch('fetchData')
    })
</script>
<template>
    <section>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-auto">
                    <Card
                        v-for="item in product"
                        :item="item"
                    />
                </div>
            </div>
        </div>
    </section>
</template>