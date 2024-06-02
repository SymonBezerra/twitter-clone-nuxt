<template>
    <!-- preview card: what's happening -->
    <div>
        <SidebarRightPreviewCard title="What's happening">
            <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
                <div>
                    <h2 class="font-bold text-gray-800 text-md dark:text-gray-50">
                        {{ whatsHappening.title }}
                    </h2>

                    <p class="text-xs text-gray-400">
                        {{ whatsHappening.count }}
                    </p>
                </div>

            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
    </div>

    <!-- preview card: who to follow -->
    <div>
        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row justify-between p-2 items-center">

                    <div class="flex flex-row">
                        <img class="h-10 w-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name">
                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-gray-50">
                                {{ whoToFollow.name }}
                            </h1>
                            <p class="text-xs text-gray-400">
                                {{ whoToFollow.handle }}
                            </p>
                        </div>
                    </div>

                    <div class="flex h-full">
                        <button class="px-4 py-2 font-bold text-xs bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-950 rounded-full">
                            Follow
                        </button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
    </div>
</template>
<script setup>
    const whatsHappeningItems = ref([
        {
            title: "SpaceX",
            count: "18.8k tweets"
        },
        {
            title: "#CodingIsFun",
            count: "8.8k tweets"
        },
        {
            title: "#artforall",
            count: "18.8k tweets"
        }
    ])

    const whoToFollowItems = ref([
        {
            name: "Joe Biden",
            handle: "@POTUS",
            image: "https://picsum.photos/200/200"
        },
        {
            name: "Joe Biden",
            handle: "@POTUS",
            image: "https://picsum.photos/200/200"
        },
        {
            name: "Joe Biden",
            handle: "@POTUS",
            image: "https://picsum.photos/200/200"
        },
    ])
</script>