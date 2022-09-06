import { defineStore } from 'pinia'
import { useRouter } from "vue-router";
import apiClient from "../../services/apiClient";
import { Preferences } from "@capacitor/preferences";

export const useRegisterStore = defineStore('register', {
    state: () => {
        return {
            router: useRouter(),
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                device_name: ""
            },
            formErrors: [],
            isLoading: false
        }
    },

    actions: {
        register() {
            this.isLoading = true;

            apiClient.post("/api/register", this.form).then(() => {
                apiClient.post("/api/auth/token", this.form).then((response) => {
                    this.isLoading.value = false;

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
