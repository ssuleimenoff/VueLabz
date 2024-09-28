<template>
    <header>
        <span class="menu" @click="toggleSidebar" :class="{'done': !collapsed}">
            <img src="../../assets/header/menu.png" alt="menu-bur">
        </span>

        <Sidebar v-if="!collapsed"></Sidebar>

        <span class="title">
            <h3>New Trips on Fall season! Full details on out Instagram accounts.</h3>
        </span>

        <span class="profile">
            <img src="../../assets/header/profile.png" alt="profile-pic">
        </span>
    </header>
</template>

<script>
import {collapsed, toggleSidebar, sidebarWidth} from "@/components/header/state";
import Sidebar from "@/components/header/SideBar.vue";

export default {
    components : {Sidebar},
    props: {},
    setup(){
        return{collapsed, toggleSidebar, sidebarWidth}
    }
}
</script>

<style scoped>
header{
    position: fixed;
    left: 0;
    right: 0;
    top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    height: 60px;
    background: rgba(255,255,255, 0.7);
    padding: 3px;
}
.menu {

}
.title {
    width: 808px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: linear-gradient(90deg, #E5F67C 0%, #ECEF64 33%, #D2E037 66%, #EAEE3A 100%);
}
.profile {
    width: 55px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #7EEFFF;
}
.title h3 {
    background: linear-gradient(90deg, #FFADAD 0%, #FF774C 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Inknut Antiqua,serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 44px;
    text-align: left;
}
.done {
    z-index: 0;
}
</style>