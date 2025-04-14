<template>
	<div class="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50">
		<!-- Article Content -->
		<article class="container mx-auto px-4 py-12 max-w-4xl">
			<!-- Back Button -->
			<router-link 
				to="/" 
				class="inline-flex items-center text-amber-700 hover:text-amber-600 mb-8 transition-colors duration-300"
			>
				<FeatherIcon icon="ArrowLeft" class="w-5 h-5 mr-2" />
				<span>Back to Articles</span>
			</router-link>

			<!-- Loading State -->
			<div v-if="loading" class="text-center py-12">
				<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
				<p class="mt-4 text-amber-700">Loading article...</p>
			</div>

			<!-- Blog Not Found -->
			<div v-else-if="!blog" class="text-center py-12">
				<h1 class="text-2xl font-bold text-amber-900 mb-4">Article Not Found</h1>
				<p class="text-amber-700">The article you're looking for doesn't exist or has been removed.</p>
			</div>

			<!-- Blog Content -->
			<template v-else>
				<!-- Article Header -->
				<header class="mb-12">
					<div class="flex items-center space-x-4 mb-4">
						<span class="px-3 py-1 text-sm bg-amber-600 text-amber-50 rounded-full font-medium">
							{{ blog.category }}
						</span>
						<div class="flex items-center text-sm text-amber-600">
							<FeatherIcon icon="Calendar" class="w-4 h-4 mr-2" />
							<span>{{ blog.singleBlogHeader.singleBlogDate }}</span>
						</div>
						<div class="flex items-center text-sm text-amber-600">
							<FeatherIcon icon="Tag" class="w-4 h-4 mr-2" />
							<span>{{ blog.singleBlogHeader.singleBlogTag }}</span>
						</div>
					</div>
					<h1 class="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
						{{ blog.title }}
					</h1>
					<div class="flex items-center space-x-4">
						<div>
							<p class="font-medium text-amber-800">Kalkidan B.</p>
							<p class="text-sm text-amber-600">Software Developer</p>
						</div>
					</div>
				</header>

				<!-- Featured Image -->
				<div class="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
					<img 
						:src="blog.img" 
						:alt="blog.title"
						class="w-full h-full object-cover"
					/>
				</div>

				<!-- Article Content -->
				<div class="prose prose-lg max-w-none">
					<!-- Blog Detail -->
					<p class="text-xl text-amber-800 mb-8">
						{{ blog.detail }}
					</p>

					<!-- Blog Contents -->
					<div v-for="content in blog.blogContents" :key="content.id" class="mb-12">
						<h2 class="text-2xl font-bold text-amber-900 mt-8 mb-4">{{ content.blogDetailsHeading }}</h2>
						<div v-for="detail in content.blogDetails" :key="detail.id" class="mb-6">
							<pre v-if="detail.isCodeSnippet" class="bg-amber-100 p-4 rounded-lg mb-4 overflow-x-auto">
								<code class="font-mono text-sm text-amber-800">{{ detail.details }}</code>
							</pre>
							<div v-else v-html="detail.details" class="text-amber-800 mb-4"></div>
							<img 
								v-if="detail.img" 
								:src="detail.img.url" 
								:alt="detail.img.caption"
								class="rounded-lg my-4"
							/>
						</div>
					</div>

					<!-- Blog Info -->
					<div class="mt-12 pt-8 border-t border-amber-200">
						<h3 class="text-lg font-semibold text-amber-900 mb-4">{{ blog.blogInfo.authorHeading }}</h3>
						<div class="space-y-2">
							<div v-for="info in blog.blogInfo.authorInfos" :key="info.id" class="flex items-center">
								<span v-if="info.title" class="font-medium text-amber-800 mr-2">{{ info.title }}:</span>
								<a v-if="info.details.startsWith('http')" :href="info.details" class="text-amber-700 hover:text-amber-600" target="_blank" rel="noopener noreferrer">
									{{ info.details }}
								</a>
								<span v-else class="text-amber-800">{{ info.details }}</span>
							</div>
						</div>

						<h3 class="text-lg font-semibold text-amber-900 mt-8 mb-4">{{ blog.blogInfo.objectivesHeading }}</h3>
						<p class="text-amber-800">{{ blog.blogInfo.objectivesDetails }}</p>
					</div>

					<!-- Social Sharing -->
					<div class="mt-12 pt-8 border-t border-amber-200">
						<h3 class="text-lg font-semibold text-amber-900 mb-4">{{ blog.blogInfo.socialSharingsHeading }}</h3>
						<div class="flex space-x-4">
							<a 
								v-for="share in blog.blogInfo.socialSharings" 
								:key="share.id"
								:href="share.url" 
								class="p-2 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors duration-300"
								:title="share.name"
							>
								<FeatherIcon :icon="share.icon" class="w-5 h-5 text-amber-700" />
							</a>
						</div>
					</div>
				</div>
			</template>
		</article>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import FeatherIcon from '../components/reusable/FeatherIcon.vue';
import { blogs } from '../data/blogs';

const route = useRoute();
const blog = ref(null);
const loading = ref(true);

onMounted(() => {
	const blogId = route.params.id;
	blog.value = blogs.find(b => b.id === blogId);
	loading.value = false;
});
</script>

<style scoped>
.prose {
	@apply text-amber-800;
}

.prose h2 {
	@apply text-2xl font-bold text-amber-900 mt-8 mb-4;
}

.prose p {
	@apply mb-4;
}

.prose pre {
	@apply bg-amber-100 p-4 rounded-lg mb-4 overflow-x-auto;
}

.prose code {
	@apply font-mono text-sm text-amber-800;
}

.prose a {
	@apply text-amber-700 hover:text-amber-600;
}

.prose ul {
	@apply list-disc pl-6 mb-4;
}

.prose li {
	@apply mb-2;
}

/* Override the indigo colors from the blog content */
:deep(.text-indigo-500) {
	@apply text-amber-600;
}

:deep(.text-rose-500) {
	@apply text-amber-600;
}

:deep(.text-orange-500) {
	@apply text-amber-600;
}

:deep(.font-bold) {
	@apply font-semibold;
}

:deep(.font-extrabold) {
	@apply font-bold;
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