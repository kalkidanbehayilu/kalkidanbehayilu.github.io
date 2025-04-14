<script>
import feather from 'feather-icons';
import BlogHeader from '../components/blogs/BlogHeader.vue';
import BlogGallery from '../components/blogs/BlogGallery.vue';
import BlogInfo from '../components/blogs/BlogInfo.vue';
import BlogRelatedBlogs from '../components/blogs/BlogRelatedBlogs.vue';
import blogData from "../data/blogs";
import FeatherIcon from '../components/reusable/FeatherIcon.vue';

export default {
	name: 'Blogs',
	components: {
		BlogHeader,
		BlogGallery,
		BlogInfo,
		BlogRelatedBlogs,
		FeatherIcon
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
	<div class="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50">
		<div class="container mx-auto px-4 py-12">
			<!-- Back Button -->
			<router-link 
				to="/" 
				class="inline-flex items-center text-amber-700 hover:text-amber-600 mb-8 transition-colors duration-300"
			>
				<FeatherIcon icon="ArrowLeft" class="w-5 h-5 mr-2" />
				<span>Back to Articles</span>
			</router-link>

			<!-- Blog Content -->
			<div class="bg-white-500 rounded-2xl shadow-sm p-8">
				<!-- Blog header -->
				<BlogHeader v-if="blog" :singleBlogHeader="blog?.singleBlogHeader" />

				<!-- Blog information -->
				<BlogInfo v-if="blog" :blogInfo="blog?.blogInfo" />

				<!-- Blog gallery -->
				<BlogGallery v-if="blog" :blogImages="blog?.blogImages" />

				<!-- Blog related blogs -->
				<BlogRelatedBlogs v-if="relatedBlogs" :relatedBlogs="relatedBlogs" />
			</div>
		</div>
	</div>
</template>

<style scoped>
/* Override the indigo colors from the blog content */
:deep(.text-indigo-500) {
	color: rgb(146 64 14);
}

:deep(.text-rose-500) {
	color: rgb(146 64 14);
}

:deep(.text-orange-500) {
	color: rgb(146 64 14);
}

:deep(.font-bold) {
	font-weight: 600;
}

:deep(.font-extrabold) {
	font-weight: 700;
}

:deep(.animate-pulse) {
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
	0%, 100% {
		opacity: 1;
	}
	50% {
		opacity: .5;
	}
}
</style>
