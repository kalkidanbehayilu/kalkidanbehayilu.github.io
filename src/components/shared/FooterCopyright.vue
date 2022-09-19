<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			author: 'Kalkidan',
		};
	},
};
</script>

<style lang="scss" scoped></style>
