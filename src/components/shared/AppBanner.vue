<script>
import feather from 'feather-icons';

export default {
	name: 'AppBanner',
	computed: {
		theme() {
			return this.$store.state.theme;
		}
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
		<!-- Banner left contents -->
		<div class="w-full md:w-1/3 text-left">
			<h1
				class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
				Hi, I am Kalkidan B.
			</h1>
			<p
				class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400">
				A Software Developer
			</p>
			<p
				class="font-general-medium mt-2 text-sm sm:text-lg  xl:text-xl text-center sm:text-left leading-none text-ternary-dark dark:text-primary-light">
				I often work in the development of mobile and web applications. I enjoy using Javascript.
			</p>
		</div>

		<div class="w-full md:w-2/3 text-right float-right">
			<img v-if="theme === 'light'" src="@/assets/images/developer-light.svg" alt="Developer" />
			<img v-else src="@/assets/images/developer-dark.svg" alt="Developer" />
		</div>
	</section>
</template>
