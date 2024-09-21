<template>
    <h1 class="header-title">{{ title }}</h1>
</template>

<script>
export default {
    props: {
    title: String
    }
}
</script>

<style scoped>
.header-title {
    color: white;
}
</style>
