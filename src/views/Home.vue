<template>
	<div class="container mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<!-- About page -->
		<About />

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
import AppBanner from '@/components/shared/AppBanner';
import BlogsGrid from '../components/blogs/BlogsGrid.vue';
import About from "@/components/about/About.vue";
import AboutFrameWorks from "../components/tech/FrameWorks.vue";
import GitRepo from "../components/git/GitRepo.vue";

export default {
	name: 'Home',
	components: {
		AppBanner,
		BlogsGrid,
		About,
		AboutFrameWorks,
		GitRepo
	},
};
</script>


<style scoped>

</style>
