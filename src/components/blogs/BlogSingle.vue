<template>
	<router-link :to="`/blogs/${blog.id}`"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Blog">
		<div>
			<div class="h-80 overflow-hidden">
				<img :src="blog.img" :alt="blog.title" class="rounded-t-xl border-none object-cover h-full w-full object-left" />
			</div>
			<div class="text-center px-4 py-6">
				<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-bold mb-2">
					{{ blog.title }}
				</p>
				<span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{ blog.detail
				}}</span>
			</div>
		</div>
		<div class="my-4 sm:mt-2 flex justify-center">
			<router-link :to="`/blogs/${blog.id}`"
				class="font-general-medium flex items-center px-3 py-2 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
				aria-label="Read More">
				<Button title="Read More" />
			</router-link>
		</div>
	</router-link>
</template>

<script>
import Button from '../reusable/Button.vue';
export default {
	props: ['blog'],
	components: { Button },
};
</script>


<style lang="scss" scoped>

</style>
