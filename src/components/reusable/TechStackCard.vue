<template>
	<div
		class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary-light/50 to-primary-light/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-light/10"
	>
		<div class="absolute inset-0 bg-gradient-to-br from-accent-light/5 to-accent-light/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
		<div class="relative z-10 flex flex-col items-center gap-4">
			<div class="rounded-full bg-accent-light/10 p-4 transition-all duration-300 group-hover:bg-accent-light/20">
				<FeatherIcon :icon="icon" class="h-8 w-8 text-accent-light" />
			</div>
			<h3 class="text-xl font-semibold text-gray-200">{{ title }}</h3>
			<p class="text-center text-sm text-gray-400">{{ description }}</p>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';
import FeatherIcon from './FeatherIcon.vue';

defineProps({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		required: true
	}
});
</script> 