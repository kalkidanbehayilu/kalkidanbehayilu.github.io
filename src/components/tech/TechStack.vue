<template>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		<div
			v-for="tech in techStack"
			:key="tech.title"
			class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary-light/30 to-primary-light/30 p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-light/10"
		>
			<div class="absolute inset-0 bg-gradient-to-br from-accent-light/5 to-accent-light/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
			<div class="relative z-10 flex flex-col items-center gap-6">
				<div class="rounded-full bg-accent-light/10 p-5 transition-all duration-300 group-hover:bg-accent-light/20">
					<FeatherIcon :icon="tech.icon" class="h-10 w-10 text-accent-light" />
				</div>
				<h3 class="text-2xl font-semibold text-gray-200">{{ tech.title }}</h3>
				<p class="text-center text-gray-400">{{ tech.description }}</p>
				<div class="flex flex-wrap justify-center gap-2 mt-4">
					<span
						v-for="skill in tech.skills"
						:key="skill"
						class="px-3 py-1 text-sm rounded-full bg-accent-light/10 text-accent-light"
					>
						{{ skill }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import FeatherIcon from '../reusable/FeatherIcon.vue';

const techStack = ref([
	{
		title: 'Frontend Development',
		description: 'Creating beautiful and responsive user interfaces',
		icon: 'Code',
		skills: ['Vue.js', 'React', 'Tailwind CSS', 'TypeScript']
	},
	{
		title: 'Backend Development',
		description: 'Building robust and scalable server-side applications',
		icon: 'Server',
		skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL']
	},
	{
		title: 'DevOps & Tools',
		description: 'Streamlining development and deployment processes',
		icon: 'Tool',
		skills: ['Docker', 'Git', 'CI/CD', 'AWS']
	}
]);
</script> 