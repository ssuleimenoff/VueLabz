import {ref} from "vue";

export const selectedCategory = ref('All')
const topics =['All', 'Sport', 'Education', 'Travel', 'Food'];

export function changeSelectedCategory(newCategory) {
    if (topics.includes(newCategory)) {
        selectedCategory.value = newCategory;
    } else {
        console.warn(`Category "${newCategory}" is not a valid topic.`);
    }
}
