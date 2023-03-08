<script setup lang="ts">
    import { useStore } from 'vuex';
    defineProps(['item'])
    
    const store = useStore(); 
    const increment = (()=> {
        store.state.count++
    })
    const descrement = (()=> {
        store.state.count--
        if(store.state.count < 0){
            store.state.count = 0
        }
    })
    
</script>
<template>
    <div class="card m-2" style="width: 18rem;">
        <div class="card-body text-center">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.url }}</p>
            <div class="row">
                <div class="col-2 ms-5">
                    <button @click="increment" class="btn btn-primary">Add</button>
                </div>
                <div class="col-2 ms-5">
                    <button @click="descrement" class="btn btn-primary">Rest</button>
                </div>
            </div>
        </div>
    </div>
</template>