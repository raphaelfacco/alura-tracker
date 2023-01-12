<template>
    <button class="button">
        <span class="icon">
            <i class="fas fa-play"></i>
        </span>
        <span>{{ titleBotao }}</span>
    </button>
    {{ estiloBotao }}
</template>

<script lang ="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MeuBotao',
    props: {
        titleBotao: {
            type: String,
            default: ''
        },
        estiloBotao: {
            type: String,
            default: ''
        }
    },
    emits: ['acaoAoClicar'],
})   
</script>