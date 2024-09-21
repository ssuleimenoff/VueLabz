<template>
    <div class="visit-counter">
    <p>Visited: {{ count }} attractions</p>
    <button @click="increment">Visit Another</button>
    </div>
</template>

<script>
import { useCounter } from '../composables/useCounter';

export default {
    setup() {
    const { count, increment } = useCounter();
    return { count, increment };
    }
}
</script>

<style scoped>
.visit-counter {
    text-align: center;
    margin: 20px 0;
    font-family: 'Press Start 2P', cursive;
    color: #2c3e50;
}
</style>
