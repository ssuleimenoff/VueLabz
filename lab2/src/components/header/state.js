import {ref, computed} from "vue";

export const collapsed = ref(true)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 310
export const SIDEBAR_WIDTH_COLLAPSED = 0
export const sidebarWidth = computed(
    () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)