<template>
    <div class="user-details">
        <img :src="user.avatar" alt="User Avatar" />
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <router-link to="/">Back to User List</router-link>
    </div>
</template>

<script>
export default {
    name: 'UserDetails',
    props: ['id'],
    data() {
        return {
            user: {}
        }
    },
    created() {
        const users = [
            { id: 1, name: 'Yuta Okkotsu', email: 'okkutsu@sample.com', avatar: '/src/assets/user1.jpg' },
            { id: 2, name: 'Sasuke Uchiha', email: 'lastuchiha@example.com', avatar: '/src/assets/user2.jpg' },
            { id: 3, name: 'Nagi Seishiro', email: 'seishiro3@example.com', avatar: 'src/assets/user3.jpg' }
        ]
        this.user = users.find(user => user.id === Number(this.id))
    }
}
</script>

<style scoped>
.user-details {
    text-align: center;
    margin-top: 50px;
}

.user-details img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
</style>