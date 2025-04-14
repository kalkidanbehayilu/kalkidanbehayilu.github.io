<script>
export default { components: { } };
</script>

<template>
	<div class="max-w-2xl mx-auto">
		<form @submit.prevent="handleSubmit" class="space-y-8">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="space-y-2">
					<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
					<input
						type="text"
						id="name"
						v-model="form.name"
						class="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-light/50 focus:border-transparent transition-all duration-300"
						placeholder="Your name"
						required
					/>
				</div>
				<div class="space-y-2">
					<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
					<input
						type="email"
						id="email"
						v-model="form.email"
						class="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-light/50 focus:border-transparent transition-all duration-300"
						placeholder="Your email"
						required
					/>
				</div>
			</div>
			<div class="space-y-2">
				<label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
				<input
					type="text"
					id="subject"
					v-model="form.subject"
					class="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-light/50 focus:border-transparent transition-all duration-300"
					placeholder="Subject"
					required
				/>
			</div>
			<div class="space-y-2">
				<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
				<textarea
					id="message"
					v-model="form.message"
					rows="6"
					class="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-light/50 focus:border-transparent transition-all duration-300 resize-none"
					placeholder="Your message"
					required
				></textarea>
			</div>
			<div class="flex justify-center">
				<button
					type="submit"
					class="px-8 py-4 bg-accent-light text-white rounded-full font-medium hover:bg-accent-dark transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-light/20"
				>
					Send Message
				</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
	name: '',
	email: '',
	subject: '',
	message: ''
});

const handleSubmit = () => {
	// Handle form submission
	console.log('Form submitted:', form.value);
	// Reset form
	form.value = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};
};
</script>

<style lang="scss" scoped></style>
