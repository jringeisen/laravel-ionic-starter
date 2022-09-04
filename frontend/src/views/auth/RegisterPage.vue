<script setup>
import { IonPage, IonContent } from "@ionic/vue";
</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="flex min-h-full flex-col justify-center py-12 px-6">
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create your account</h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    <span @click="$router.push({ name: 'login' })" class="font-medium text-blue-400 hover:text-blue-500">sign in.</span>
                </p>

                <div class="mt-8">
                    <div class="bg-white py-8 px-4 rounded-lg">
                        <form class="space-y-6" action="#" method="POST">
                            <div>
                                <label for="full_name" class="block text-sm font-medium text-gray-700">Full Name</label>
                                <div class="mt-1">
                                    <input id="full_name" name="full_name" type="text" autocomplete="full-name" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-blue-400" />
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                                <div class="mt-1">
                                    <input id="email" name="email" type="email" autocomplete="email" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-blue-400" />
                                </div>
                            </div>

                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                                <div class="mt-1">
                                    <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-blue-400" />
                                </div>
                            </div>

                            <div>
                                <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <div class="mt-1">
                                    <input id="confirm-password" name="confirm-password" type="password" autocomplete="confirm-password" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-blue-400" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" @click.prevent="$router.push('/tabs/tab1')" class="flex w-full justify-center rounded-md border border-transparent bg-blue-400 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
