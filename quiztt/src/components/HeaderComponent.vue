<template>
    <h1 class="header-title">{{ title }}</h1>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '' 
        }
    }
}
</script>

<style scoped>
.header-title {
    color: white;
    font-family: 'Press Start 2P', cursive;
    text-align: center;
    margin: 20px 0;    
}
</style>