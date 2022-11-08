<script>
import feather from 'feather-icons';
import BlogHeader from '../components/blogs/BlogHeader.vue';
import BlogGallery from '../components/blogs/BlogGallery.vue';
import BlogInfo from '../components/blogs/BlogInfo.vue';
import BlogRelatedBlogs from '../components/blogs/BlogRelatedBlogs.vue';
import blogData from "../data/blogs";

export default {
	name: 'Blogs',
	components: {
		BlogHeader,
		BlogGallery,
		BlogInfo,
		BlogRelatedBlogs,
	},
	data: () => {
		return {
			blog: null,
			relatedBlogs: []
		}
	},
	mounted() {
		this.blog = blogData.find(x => x.id === this.$route.params.id);
		this.relatedBlogs = blogData.filter(itm => this.blog.category === itm.category);
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Blog header -->
		<BlogHeader v-if="blog" :singleBlogHeader="blog?.singleBlogHeader" />

		<!-- Blog information -->
		<BlogInfo v-if="blog" :blogInfo="blog?.blogInfo" />

		<!-- Blog gallery -->
		<BlogGallery v-if="blog" :blogImages="blog?.blogImages" />

		<!-- Blog related blogs -->
		<BlogRelatedBlogs v-if="relatedBlogs" :relatedBlogs="relatedBlogs" />
	</div>
</template>

<style scoped>

</style>
