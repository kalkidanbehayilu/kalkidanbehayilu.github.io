<template>
	<main class="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50">
		<!-- Hero Section -->
		<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
			<!-- Background Elements -->
			<div class="absolute inset-0 bg-gradient-to-br from-amber-200/20 via-amber-100/10 to-amber-300/10"></div>
			<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA4YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHptMCAyNGMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNCAxLjc5LTQgNC00IDQgMS43OSA0IDR6bTAgMjRjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNCA0IDEuNzkgNCA0eiIgZmlsbD0iI2Q5N2E0YiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
			<div class="absolute inset-0 bg-gradient-to-br from-amber-50/90 to-amber-100/90 backdrop-blur-sm"></div>
			
			<!-- Content -->
			<div class="relative z-10 container mx-auto px-4 py-20 text-center">
				<h1 class="text-5xl md:text-7xl font-bold mb-6 text-amber-900">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600 animate-gradient">
						Kalkidan Behayilu
					</span>
				</h1>
				<p class="text-xl md:text-2xl text-amber-800 mb-8 max-w-2xl mx-auto">
					Full Stack Developer & UI/UX Designer
				</p>
				<div class="flex justify-center">
					<button 
						@click="scrollToContact"
						class="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-amber-50 rounded-full font-medium hover:from-amber-700 hover:to-amber-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-600/20"
					>
						Get in Touch
					</button>
				</div>
			</div>
		</section>

		<!-- Article Section -->
		<section class="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
			<div class="container mx-auto px-4">
				<h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600 animate-gradient">
						Articles
					</span>
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<BlogSingle 
						v-for="blog in blogList" 
						:key="blog.id" 
						:blog="blog"
					/>
				</div>
			</div>
		</section>

		<!-- Tech Stack Section -->
		<section class="py-20 bg-gradient-to-br from-amber-100 to-amber-50">
			<div class="container mx-auto px-4">
				<h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600 animate-gradient">
						Tech Stack
					</span>
				</h2>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
					<TechStackCard v-for="tech in techStack" :key="tech.id" :tech="tech" />
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section ref="contactSection" class="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
			<div class="container mx-auto px-4">
				<h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600 animate-gradient">
						Get in Touch
					</span>
				</h2>
				<ContactForm />
			</div>
		</section>
	</main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BlogSingle from '../components/blogs/BlogSingle.vue';
import TechStackCard from '../components/tech/TechStackCard.vue';
import ContactForm from '../components/contact/ContactForm.vue';
import { blogs } from '../data/blogs';

const contactSection = ref(null);
const blogList = ref([]);

onMounted(() => {
	// Ensure blogs data is properly loaded
	blogList.value = blogs.map(blog => ({
		id: blog.id,
		title: blog.title,
		detail: blog.detail,
		image: blog.img,
		category: blog.category,
		date: blog.singleBlogHeader.singleBlogDate
	}));
});

const scrollToContact = () => {
	contactSection.value?.scrollIntoView({ behavior: 'smooth' });
};

const techStack = ref([
	{
		id: 1,
		name: 'Vue.js',
		icon: 'Code',
		description: 'Progressive JavaScript Framework'
	},
	{
		id: 2,
		name: 'React',
		icon: 'Code',
		description: 'JavaScript Library for UI'
	},
	{
		id: 3,
		name: 'Node.js',
		icon: 'Server',
		description: 'JavaScript Runtime'
	},
	{
		id: 4,
		name: 'TypeScript',
		icon: 'Code',
		description: 'Typed JavaScript'
	}
]);
</script>

<style scoped>
.animate-gradient {
	background-size: 200% 200%;
	animation: gradient 8s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
