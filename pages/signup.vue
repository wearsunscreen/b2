<template>
    <div class="flex justify-center mt-10">
        <div class="w-full max-w-sm bg-white shadow-md rounded p8"></div>
        <h2 class="text-2xl text-gray-800 font-bold text-center mb-6"></h2>

        <form @submit.prevent="handleSignup">
            <input type="email" v-model="email" required
                class="w-full px-3 py-3 mb-4 border border-gray-300 rounded-sm">
            <input type="password" v-model="password" required
                class="w-full px-3 py-3 mb-4 border border-gray-300 rounded-sm">
            <button type="submit" class="w-full bg-purple-500 text-white py-2 rounded-sm">Sign Up</button>
            <p class="text-red-500 mt-4 text-center">
                <!-- error message -->
            </p>
        </form>
    </div>
</template>

<script setup>
const email = ref('');
const password = ref('');

const handleSignup = async () => {
    console.log(email.value, password.value);
}  
</script>
