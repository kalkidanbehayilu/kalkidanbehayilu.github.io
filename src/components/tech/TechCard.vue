<template>
	<div class="group bg-secondary-dark rounded-xl p-6 shadow-lg border border-ternary-dark hover:border-accent-light/20 transition-all duration-300">
		<div class="flex flex-col items-center space-y-4">
			<div class="w-16 h-16 flex items-center justify-center bg-ternary-dark rounded-full group-hover:bg-accent-light/10 transition-colors duration-300">
				<feather-icon 
					:icon="tech.icon" 
					class="w-8 h-8 text-accent-light group-hover:text-accent-dark transition-colors duration-300"
				/>
			</div>
			<h3 class="text-lg font-semibold text-accent-light group-hover:text-accent-dark transition-colors duration-300">
				{{ tech.name }}
			</h3>
			<p class="text-sm text-ternary-light text-center">
				{{ tech.description || 'Modern web technology' }}
			</p>
		</div>
	</div>
</template>

<script>
import FeatherIcon from '../reusable/FeatherIcon.vue';

export default {
	name: 'TechCard',
	components: {
		FeatherIcon
	},
	props: {
		tech: {
			type: Object,
			required: true
		}
	}
};
</script> 