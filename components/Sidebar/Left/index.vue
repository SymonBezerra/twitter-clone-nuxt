<template>
    <div class="h-screen flex flex-col">
        <div class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20" :class="defaultTransition">
            <nuxt-link to="/">
                <div class="h-8 w-8">
                    <LogoTwitter />
                </div>
            </nuxt-link>

        </div>
        <SidebarLeftTab to="#">
            <template v-slot:icon>
                <HomeIcon />
            </template>
            <template v-slot:name>
                Home
            </template>
        </SidebarLeftTab>
    </div>
</template>
<script setup>
    import { HomeIcon } from "@heroicons/vue/24/solid"
    const { defaultTransition } = useTailwindConfig()
</script>