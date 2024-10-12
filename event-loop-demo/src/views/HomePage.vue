<template>
    <div class="home">
        <h1>User List</h1>
        <div class="user-list">
            <UserCard v-for="user in users" :key="user.id" :user="user" />
        </div>
    </div>
</template>

<script>
import UserCard from '../components/UserCard.vue'

export default {
    name: 'HomePage',
    components: { UserCard },
    data() {
        return {
            users: [
                { id: 1, name: 'Alice Johnson', email: 'alice@example.com', avatar: 'https://i.pravatar.cc/50?img=1' },
                { id: 2, name: 'Bob Smith', email: 'bob@example.com', avatar: 'https://i.pravatar.cc/50?img=2' },
                { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', avatar: 'https://i.pravatar.cc/50?img=3' }
            ]
        }
    }
}
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 20px;
}

.user-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>