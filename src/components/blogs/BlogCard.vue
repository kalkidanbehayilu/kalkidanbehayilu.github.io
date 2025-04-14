<template>
	<article class="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-indigo-600/20 transition-all duration-500">
		<!-- Image Container -->
		<div class="relative aspect-[4/3] overflow-hidden">
			<img 
				:src="blog.image" 
				:alt="blog.title"
				class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
			/>
			<!-- Gradient Overlay -->
			<div class="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
			<!-- Category Badge -->
			<div class="absolute top-4 right-4">
				<span class="px-3 py-1 text-sm bg-indigo-600 text-white rounded-full font-medium">
					{{ blog.category || 'Technology' }}
				</span>
			</div>
		</div>

		<!-- Content Container -->
		<div class="p-6 space-y-4">
			<!-- Date -->
			<div class="flex items-center text-sm text-gray-500">
				<feather-icon icon="Calendar" class="w-4 h-4 mr-2" />
				<span>{{ blog.date || 'Recent' }}</span>
			</div>

			<!-- Title -->
			<h3 class="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
				{{ blog.title }}
			</h3>

			<!-- Excerpt -->
			<p class="text-gray-600 line-clamp-3">
				{{ blog.excerpt }}
			</p>

			<!-- Read More Link -->
			<div class="flex items-center justify-between pt-4 border-t border-gray-200">
				<router-link 
					:to="{ name: 'BlogDetail', params: { id: blog.id }}"
					class="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-300 group/readmore"
				>
					<span class="mr-2">Read More</span>
					<feather-icon 
						icon="ArrowRight" 
						class="w-4 h-4 transform group-hover/readmore:translate-x-1 transition-transform duration-300"
					/>
				</router-link>
				<div class="flex items-center space-x-2">
					<feather-icon icon="Clock" class="w-4 h-4 text-gray-500" />
					<span class="text-sm text-gray-500">{{ blog.readTime || '5 min read' }}</span>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
import FeatherIcon from '../reusable/FeatherIcon.vue';

export default {
	name: 'BlogCard',
	components: {
		FeatherIcon
	},
	props: {
		blog: {
			type: Object,
			required: true
		}
	}
};
</script> 