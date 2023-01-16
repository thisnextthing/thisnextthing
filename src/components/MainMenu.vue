<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center bg-royal-blue px-4 py-2 text-sm font-medium text-gray-100 shadow-sm hover:bg-warm-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        <Bars4Icon class="h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-warm-blue ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#what" :class="[active ? 'bg-gray-100 text-royal-blue' : 'text-gray-100', 'block px-4 py-2 text-sm']">
              What?
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#who" :class="[active ? 'bg-gray-100 text-royal-blue' : 'text-gray-100', 'block px-4 py-2 text-sm']">
              Who?
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#when" :class="[active ? 'bg-gray-100 text-royal-blue' : 'text-gray-100', 'block px-4 py-2 text-sm']">
              When?
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#where" :class="[active ? 'bg-gray-100 text-royal-blue' : 'text-gray-100', 'block px-4 py-2 text-sm']">
              Where?
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#why" :class="[active ? 'bg-gray-100 text-royal-blue' : 'text-gray-100', 'block px-4 py-2 text-sm']">
              Why?
            </a>
          </MenuItem>

          <MenuItem v-slot="{ active }">
            <a href="#tickets" :class="[active ? 'bg-gray-100 text-royal-blue' : 'text-gray-100', 'block px-4 py-2 text-sm']">Get Tickets</a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars4Icon } from '@heroicons/vue/20/solid/index.js'
</script>