import { ref } from 'vue';
export const isDarkMode = ref(false);

if (typeof window !== 'undefined') {
    isDarkMode.value = localStorage.getItem('isDarkMode') === 'true';
}
export const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
        if (typeof window !== 'undefined') {
            localStorage.setItem('isDarkMode', 'true');
        }
    } else {
        document.documentElement.classList.remove('dark');
        if (typeof window !== 'undefined') {
            localStorage.removeItem('isDarkMode');
        }
    }
};

// Ensure the class is set correctly on initial load
if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}