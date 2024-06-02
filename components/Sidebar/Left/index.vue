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

        <SidebarLeftTab to="#">
            <template v-slot:icon>
                <HashtagIcon />
            </template>
            <template v-slot:name>
                Explore
            </template>
        </SidebarLeftTab>

        <SidebarLeftTab to="#">
            <template v-slot:icon>
                <BellIcon />
            </template>
            <template v-slot:name>
                Notifications
            </template>
        </SidebarLeftTab>

        <SidebarLeftTab to="#">
            <template v-slot:icon>
                <BookmarkIcon />
            </template>
            <template v-slot:name>
                Bookmarks
            </template>
        </SidebarLeftTab>

        <SidebarLeftTab to="#">
            <template v-slot:icon>
                <InboxIcon />
            </template>
            <template v-slot:name>
                Messages
            </template>
        </SidebarLeftTab>

        <SidebarLeftTab to="#">
            <template v-slot:icon>
                <UserIcon />
            </template>
            <template v-slot:name>
                Profile
            </template>
        </SidebarLeftTab>

        <SidebarLeftTab to="#">
            <template v-slot:icon>
                <EllipsisHorizontalCircleIcon />
            </template>
            <template v-slot:name>
                More
            </template>
        </SidebarLeftTab>
    </div>
</template>
<script setup>
    import { HomeIcon } from "@heroicons/vue/24/solid"
    import {
        HashtagIcon, BellIcon,
        InboxIcon, BookmarkIcon, DocumentTextIcon,
        UserIcon, EllipsisHorizontalCircleIcon
    } from "@heroicons/vue/24/outline"
    const { defaultTransition } = useTailwindConfig()
</script>