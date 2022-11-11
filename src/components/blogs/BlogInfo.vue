<script>
import feather from 'feather-icons';
import CodeSnippet from '../reusable/CodeSnippet';

export default {
	props: ['blogInfo'],
	components: { CodeSnippet },
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<!-- Single blog left section details -->
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single blog client details -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
					{{ blogInfo.authorHeading }}
				</p>
				<ul class="leading-loose">
					<li v-for="info in blogInfo.authorInfos" :key="info"
						class="font-general-regular text-ternary-dark dark:text-ternary-light">
						<span v-if="info.title">{{ info.title }}: </span>
						<a href="#" :class="
							info.title == 'Website' || info.title == 'Phone'
								? 'hover:underline cursor-pointer'
								: ''
						" aria-label="Blog Website and Phone">{{ info.details }}</a>
					</li>
				</ul>
			</div>

			<!-- Single blog objectives -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ blogInfo.objectivesHeading }}
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ blogInfo.objectivesDetails }}
				</p>
			</div>

			<!-- Single blog social sharing -->
			<div>
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ blogInfo.socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-3 mt-5">
					<div v-for="social in blogInfo.socialSharings" :key="social.id" target="__blank"
						aria-label="Share Blog"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500">
						<ShareNetwork 
							:network="social?.name" 
							:url="social?.url"
							:title="social?.title"
							:description="social?.description"
							:quote="social?.quote"
							:media="social.media"
							hashtags="Vuejs,Javascript">
							<i :data-feather="social?.icon" class="w-4 lg:w-5 h-4 lg:h-5"></i>
						</ShareNetwork>
					</div>
				</div>
			</div>
		</div>

		<!-- Single blog right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<div v-for="blogContent in blogInfo.blogContents" :key="blogContent.id">
				<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{{ blogContent.blogDetailsHeading }}
				</p>
				<p v-for="blogDetail in blogContent.blogDetails" :key="blogDetail.id"
					class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
					<img v-if="blogDetail.img" :src="blogDetail.img" class="cursor-pointer my-4" alt="Image" />
					<template v-if="blogDetail.isCodeSnippet">
						<CodeSnippet :content="blogDetail.details" />
					</template>
					<template v-else>
						<div v-html="blogDetail.details"></div>
					</template>
				</p>
			</div>
		</div>
	</div>
</template>
