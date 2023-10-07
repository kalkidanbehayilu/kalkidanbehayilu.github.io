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
			data-tooltip-target="tooltip-text"
		/>
		<div id="tooltip-text" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip">
				Tooltip content
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
