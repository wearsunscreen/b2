<template>
  <header class="bg-purple-500 text-white p-4 flex justify-between items-center">
    <nuxt-link to="/">
      <h1 class="text-xl font-semibold">App</h1>
    </nuxt-link>
    <div>

      <HideFromGuest>
        <div class="flex items-center space-x-4">
          <button @click="handleLogout" class="bg-gray-100 text-black px-3 py-1">
            Logout
          </button>
        </div>
      </HideFromGuest>

      <HideFromUser>
        <div class="space-x-4">
          <nuxt-link to="/login" class="hover:underline">Login</nuxt-link>
          <nuxt-link to="/signup" class="hover:underline">Sign Up</nuxt-link>
        </div>
      </HideFromUser>

    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const handleLogout = async () => {
  await authStore.logout()
}
</script>