<script>
export default {
	props: ['client'],
};
</script>

<template>
	<div>
		<img
			:src="client.img"
			:alt="client.title"
			class="w-28 h-28 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg cursor-pointer dark:bg-secondary-light"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
