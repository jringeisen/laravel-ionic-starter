<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import { useLoginStore } from "../../store/auth/login";

const store = useLoginStore();
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="flex min-h-full flex-col justify-center py-12">
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>

                <div class="mt-8">
                    <div class="bg-white py-8 px-4">
                        <form class="space-y-6" @submit.prevent="store.login()">
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                                <div class="mt-1 relative">
                                    <input id="email" name="email" v-model="store.form.email" type="email" autocomplete="email" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-blue-400" />
                                    <span v-if="store.formErrors.email" class="text-xs text-red-600 absolute">{{ store.formErrors.email[0] }}</span>
                                </div>
                            </div>

                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                                <div class="mt-1 relative">
                                    <input id="password" name="password" v-model="store.form.password" type="password" autocomplete="current-password" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-blue-400" />
                                    <span v-if="store.formErrors.password" class="text-xs text-red-600 absolute">{{ store.formErrors.password[0] }}</span>
                                </div>
                            </div>

                            <div class="flex items-center justify-end">
                                <div class="text-sm">
                                    <a href="#" class="font-medium text-blue-600 hover:text-blue-400">Forgot your password?</a>
                                </div>
                            </div>

                            <div>
                                <button type="submit" :disabled="store.isLoading" class="flex items-center w-full justify-center rounded-md border border-transparent bg-blue-400 py-3 px-4 text-sm font-medium text-white shadow-sm disabled:opacity-75 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                                    <span v-if="store.isLoading">
                                        <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Loading...
                                    </span>
                                    <span v-else>Sign In</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
