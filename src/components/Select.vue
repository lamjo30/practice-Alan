<script setup lang="ts">
    import {ref, onMounted} from 'vue'
    const bigForm = ref(false);
    const smallForm = ref(false);

    const dato = [ 
        {id: 1, name: 'Transito', forwader_form_type: 'ForwarderJob'},
        {id: 2, name: 'Adminitrativo', forwader_form_type: 'ForwarderJob'},
        {id: 3, name: 'Transito', forwader_form_type: 'ForwarderJob'},
        {id: 4, name: 'Transito', forwader_form_type: 'ForwarderJobShort'},
        {id: 5, name: 'Transito', forwader_form_type: 'ForwarderJob'},
    ]
    onMounted (() => {
    })
    // const llamar = (() => {
    //     dato.filter( element => {
    //         if(element.forwader_form_type === 'ForwarderJob'){
    //             bigForm.value = element.forwader_form_type;
    //         }
    //         else if(element.forwader_form_type === 'ForwarderJobShort') {
    //             smallForm.value = element.forwader_form_type;
    //         }
    //     })
    // })
    const cambiar = (() => {
        bigForm.value = !bigForm.value
    })

</script>
<template>
    <section>
        <button @click="cambiar">cambiar</button>
        <select name="select">
            <option placeholder="Eligue un opcion"></option>
            <option>Form Grander</option>
            <option>Form Pequeño</option>
        </select>

        <div class="big" v-if="bigForm === true">
            Grande
        </div>

        <div class="small" v-show="smallForm">
            Pequeño
        </div>
    </section>
</template>
