<template>
    <nuxt-link :to="props.to" class="flex items-center p-3 w-min hover:bg-gray-200 rounded-full dark:hover:bg-dim-200" :class="defaultTransition">
        <div class="w-6 h-6 dark:text-white">
            <slot name="icon"></slot>
        </div>

        <div class="hidden ml-4 text-xl dark:text-white xl:block" :class="textClasses">
            <slot name="name"></slot>
        </div>
    </nuxt-link>
</template>
<script setup>
    const { defaultTransition } = useTailwindConfig()

    const props = defineProps({
        to: {
            type: String,
            default: "#"
        },
        active: {
            type: Boolean,
            default: false
        }
    })

    const textClasses = computed(
        () => props.active ? 'font-semibold' : 'font-normal'
    )
</script>