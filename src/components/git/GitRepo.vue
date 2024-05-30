<script>

export default {
	components: {
	},
	data: () => {
		return {
            gitHeading: 'Github Contributions',
		};
	},
	mounted() {
	}
};
</script>

<template>
    <section class="pt-10 sm:pt-14">
		<!-- Blogs grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
				{{ gitHeading }}
			</p>
		</div>
        <img class="w-full" src="https://ghchart.rshah.org/kalbehayilu" alt="Kal's git repo" />
    </section>
</template>
