<template>
	<!-- Blogs grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Blogs grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
			<BlogSingle v-for="blog in filteredBlogs" :key="blog.id" :blog="blog" />
		</div>
	</section>
</template>

<script>
import feather from 'feather-icons';
import BlogSingle from './BlogSingle.vue';
import blogs from '../../data/blogs';

export default {
	components: { BlogSingle },
	data: () => {
		return {
			blogs,
			blogsHeading: 'Blogs',
			selectedCategory: '',
			searchBlog: '',
		};
	},
	computed: {
		// Get the filtered blogs
		filteredBlogs() {
			if (this.selectedCategory) {
				return this.filterBlogsByCategory();
			} else if (this.searchBlog) {
				return this.filterBlogsBySearch();
			}
			return this.blogs;
		},
	},
	methods: {
		// Filter blogs by category
		filterBlogsByCategory() {
			return this.blogs.filter((item) => {
				let category =
					item.category.charAt(0).toUpperCase() +
					item.category.slice(1);
				console.log(category);
				return category.includes(this.selectedCategory);
			});
		},
		// Filter blogs by title search
		filterBlogsBySearch() {
			let blog = new RegExp(this.searchBlog, 'i');
			return this.blogs.filter((el) => el.title.match(blog));
		},
	},
	mounted() {
		feather.replace();
	},
};
</script>


<style scoped>

</style>
