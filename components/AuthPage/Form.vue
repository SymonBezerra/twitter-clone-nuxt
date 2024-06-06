<template>
    <div>
        <div class="pt-5 space-y-6">
            <UIInput v-model="data.username" label="Username" placeholder="@username"></UIInput>

            <UIInput v-model="data.password" label="Password" placeholder="********" type="password"></UIInput>

            <button @click="handleLogin">Login</button>
        </div>
    </div>
</template>
<script setup>
    import { reactive } from 'vue'
    const { login } = useAuth()
    const data = reactive({
        username: "",
        password: "",
        loading: false
    })

    const handleLogin = async function () {
        data.loading = true
        try {
            await login({
                username: data.username,
                password: data.password
            })
        } catch (error) {
            console.error(error)
        } finally {
            data.loading = false
        }
    }
</script>