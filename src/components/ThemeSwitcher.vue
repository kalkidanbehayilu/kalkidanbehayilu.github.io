<script>
export default {
	methods: {
		toggleTheme() {
			const newTheme = this.theme === "light" ? "dark" : "light";
			this.$store.dispatch('changeTheme', newTheme);
		},
	},
	computed: {
		theme() {
			return this.$store.state.theme;
		}
	},
};
</script>

<template>
	<a href="#" @click.prevent="toggleTheme" aria-label="Theme Switcher">
		<i v-if="theme === 'light'" data-feather="moon"
			class="text-liText-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light w-5"></i>
		<i v-else data-feather="sun" class="text-gray-200 hover:text-gray-50 w-5"></i>
	</a>
</template>
