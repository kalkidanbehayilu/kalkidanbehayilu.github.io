<template>
	<div class="group relative overflow-hidden rounded-2xl bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-light/10">
		<div class="absolute inset-0 bg-gradient-to-br from-accent-light/5 to-accent-light/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
		
		<div class="relative z-10 flex flex-col items-center text-center">
			<div class="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-accent-light/10 text-accent-light group-hover:bg-accent-light group-hover:text-white transition-all duration-300">
				<FeatherIcon :icon="tech.icon" class="w-8 h-8" />
			</div>
			
			<h3 class="text-xl font-semibold text-gray-800 mb-2 group-hover:text-accent-light transition-colors duration-300">
				{{ tech.name }}
			</h3>
			
			<p class="text-gray-600">
				{{ tech.description }}
			</p>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';
import FeatherIcon from '../reusable/FeatherIcon.vue';

defineProps({
	tech: {
		type: Object,
		required: true
	}
});
</script>

<style lang="scss" scoped></style> 