<script>
export default {
	props: ['project'],
};
</script>

<template>
	<a class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" :href="project.link">
		<div class="h-96 overflow-hidden w-full">
			<img :src="project.img" :alt="project.title" class="rounded-t-xl border-none object-cover h-full w-full object-left" />
		</div>
		<div class="text-center px-4 py-6">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
				{{ project.title }}
			</p>
			<span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{ project.detail
			}}</span>
		</div>
	</a>
</template>

<style lang="scss" scoped>

</style>
