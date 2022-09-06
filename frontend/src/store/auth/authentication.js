import { defineStore } from 'pinia'
import apiClient from "../../services/apiClient";

export const useAuthenticationStore = defineStore('authentication', {
    state: () => {
        return {
            isAuthenticated: false,
        }
    },

    actions: {
        checkAuthenticationStatus() {
            return apiClient.get("/api/user").then(() => {
                this.isAuthenticated = true
            })
            .catch((errors) => {
                if (errors.response.status === 401) {
                    this.isAuthenticated = false;
                }
            });
        }
    }
})
