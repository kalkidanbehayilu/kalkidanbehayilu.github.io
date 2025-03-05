<template>
	<div class="container mx-auto">
		<!-- Blogs -->
		<BlogsGrid />

		<div class="mx-auto">
			<GitRepo />
		</div>

		<div class="mx-auto">
			<AboutFrameWorks />
		</div>
	</div>
</template>

<script>
import BlogsGrid from '../components/blogs/BlogsGrid.vue';
import AboutFrameWorks from "../components/tech/FrameWorks.vue";
import GitRepo from "../components/git/GitRepo.vue";

export default {
	name: 'Home',
	components: {
		BlogsGrid,
		AboutFrameWorks,
		GitRepo
	},
};
</script>


<style scoped>

</style>
