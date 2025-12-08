import { defineStore } from "pinia";
import authService from "../services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    loading: false
  }),

  actions: {
    async login(payload) {
      this.loading = true;
      const data = await authService.login(payload);

      this.user = data.user;
      this.token = data.token;

      localStorage.setItem("token", data.token);
      this.loading = false;
    }
  }
});
