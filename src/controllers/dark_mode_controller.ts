import { ref } from 'vue';

export const isDarkMode = ref(localStorage.getItem('isDarkMode') === 'true');

export const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('isDarkMode', 'true');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.removeItem('isDarkMode');
    }
};

// Ensure the class is set correctly on initial load
if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}