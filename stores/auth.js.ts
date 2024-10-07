import { defineStore } from 'pinia'

export const useMyAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loginError: null,
    signupError: null,
  }),

  actions: {
    // signup

    // logout

    // login
  }
})
