<script setup>
    import { useAuthStore } from '../store/AuthStore';

    const authStore = useAuthStore();
    async function handleLogin() {
        await authStore.login({
            email: email.value,
            password: password.value
        });
        alert(`Logging com username: ${username} e password: ${password}`);
    }


</script>

<template>

    <div class="login-page ">
        <h1>Login Page</h1>
        <form @submit.prevent="handleLogin">
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required />
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        </form>
    </div>

</template>