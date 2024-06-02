<template>
  <div :class="{'dark': darkMode}">

    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- left sidebar -->
          <div class="hidden md:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
          <!-- main content -->
          <main class="col-span-12 bg-red-500 sm:col-span-8 lg:col-span-6">
            asd
          </main>
          <!-- right sidebar -->
          <div class="hidden md:block md:col-span-3 xl:col-span-4 bg-blue-500">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script setup>
  const darkMode = ref(true)
</script>
