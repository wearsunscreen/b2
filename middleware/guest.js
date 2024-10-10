import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware(() => {
    const { user } = useAuthStore()
    console.log('user after login:', user)
    if (user) {
        return navigateTo('/')
    }   
})