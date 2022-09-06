import { defineStore } from 'pinia'
import { useRouter } from "vue-router";
import apiClient from "../../services/apiClient";
import { Preferences } from "@capacitor/preferences";

export const useLoginStore = defineStore('login', {
    state: () => {
        return {
            router: useRouter(),
            form: {
                email: "",
                password: "",
                device_name: "device",
            },
            formErrors: [],
            isLoading: false
        }
    },

    actions: {
        login() {
            this.isLoading = true;

            apiClient.post("/api/auth/token", this.form).then((response) => {
                this.isLoading = false;

                Preferences.set({
                    key: "token",
                    value: response.data,
                });

                this.router.push("/tabs/tab1");
            })
            .catch((errors) => {
                if (errors.response.status === 422) {
                    this.formErrors = errors.response.data.errors;
                    this.isLoading = false;
                }
            });
        }
    }
})
