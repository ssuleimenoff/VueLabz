<template>
    <div class="user-card" @click="goToDetails">
        <img :src="user.avatar" alt="User Avatar" />
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    props: ['user'],
    methods: {
        goToDetails() {
            this.$router.push(`/user/${this.user.id}`)
        }
    }
}
</script>

<style scoped>
.user-card {
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 10px;
    border-radius: 8px;
    background-color: #f5f5f5;
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.user-card:hover {
    background-color: #e0e0e0;
}

.user-card img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
}
</style>