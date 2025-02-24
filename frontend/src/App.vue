<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="sticky top-0 z-50">
      <div class="navbar bg-white border-b h-16">
        <div class="flex items-center h-full">
          <router-link to="/" class="text-xl font-bold text-gray-900 px-4">
            Survey Manager
          </router-link>
          <div class="flex space-x-4 ml-8">
            <router-link
              to="/surveys"
              class="text-base text-gray-700 hover:text-gray-900"
            >
              My Surveys
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <main>
      <RouterView />
    </main>
  </div>
</template>