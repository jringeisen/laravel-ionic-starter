<script setup>
</script>

<template>
    <div class="flex min-h-full flex-col justify-center py-12">
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>

        <div class="mt-8">
            <div class="bg-white py-8 px-4">
                <form class="space-y-6" action="#" method="POST">
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

                    <div class="flex items-center justify-end">
                        <div class="text-sm">
                            <a href="#" class="font-medium text-blue-600 hover:text-blue-400">Forgot your password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-blue-400 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
