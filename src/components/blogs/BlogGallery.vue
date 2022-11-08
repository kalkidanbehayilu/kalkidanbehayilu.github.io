<script>
export default {
	props: ['blogImages'],
};
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
			v-for="blogImage in blogImages"
			:key="blogImage.id"
		>
			<img
				:src="blogImage.img"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt="{{ blogImage.title }}"
			/>
		</div>
	</div>
</template>
