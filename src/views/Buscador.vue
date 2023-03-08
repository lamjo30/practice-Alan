<script setup lang="ts">
    import { ref } from 'vue';
    const text = ref();
    const active1 = ref(false);
    const active2 = ref(false);
    const ver = (() => {
        if(text.value === 'Grande' || 'grande' || 'g') {
            active1.value = !active1.value
            active2.value = false
        }
        else if ( text.value === 'Pequeño' || 'pequeño' || 'p') {
            active2.value = !active2.value
            active1.value = false
        }
    })
</script>
<template>
    <section>
        <input class="border border-dark border-1" v-model="text" type="text" placeholder="Escribe algo"/>
        <button @click="ver"> Submit</button>
        <div class="row" v-show='active1'>
            <div class="card">
                <div class="body p-3">
                    <h1>Welcome Hi</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum, magnam sunt adipisci qui eos laboriosam beatae placeat odio illo?</span>
                </div>
            </div>
        </div>
        <div class="row" v-show="active2">
            <div class="col-6">
                <div class="card">
                    <div class="body p-3">
                        <h1>Welcome Hi</h1>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum, magnam sunt adipisci qui eos laboriosam beatae placeat odio illo?</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>