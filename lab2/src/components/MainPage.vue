<template>
    <AppHeader></AppHeader>
    <people-list></people-list>

</template>

<script>
import AppHeader from '../components/header/AppHeader.vue';
import peopleList  from '../components/peopleCards/peopleList.vue';

export default {
    name: 'MainPage',
    components: {
        AppHeader, 
        peopleList
    }
}
</script>

<style>
</style>