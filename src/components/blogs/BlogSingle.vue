<template>
	<article class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-600/10">
		<div class="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-amber-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
		
		<div class="relative z-10 flex flex-col h-full">
			<!-- Image Container -->
			<div class="relative overflow-hidden rounded-xl mb-6 aspect-video">
				<img 
					:src="blog.image" 
					:alt="blog.title"
					class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
			</div>

			<!-- Content -->
			<div class="flex flex-col flex-grow">
				<!-- Category Tag -->
				<span class="inline-block px-3 py-1 mb-4 text-sm font-medium text-amber-700 bg-amber-100 rounded-full w-fit">
					{{ blog.category }}
				</span>

				<!-- Title -->
				<h3 class="text-xl font-semibold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
					{{ blog.title }}
				</h3>

				<!-- Description -->
				<p class="text-amber-800 mb-6 line-clamp-3 flex-grow">
					{{ blog.detail }}
				</p>

				<!-- Footer -->
				<div class="flex items-center justify-between mt-auto">
					<div class="flex items-center gap-2 text-sm text-amber-600">
						<FeatherIcon icon="Calendar" class="w-4 h-4" />
						<span>{{ blog.date }}</span>
					</div>
					<router-link 
						:to="{ name: 'BlogDetail', params: { id: blog.id }}"
						class="inline-flex items-center gap-2 text-amber-700 hover:text-amber-600 transition-colors duration-300"
					>
						<span>Read More</span>
						<FeatherIcon icon="ArrowRight" class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
					</router-link>
				</div>
			</div>
		</div>
	</article>
</template>

<script setup>
import { defineProps } from 'vue';
import FeatherIcon from '../reusable/FeatherIcon.vue';

defineProps({
	blog: {
		type: Object,
		required: true
	}
});
</script>

<style scoped>
.line-clamp-3 {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
