<template>
	<i :data-feather="icon" class="feather-icon"></i>
</template>

<script setup>
import { onMounted, onUpdated, onBeforeUnmount } from 'vue';
import feather from 'feather-icons';


// Initialize Feather icons
onMounted(() => {
	feather.replace();
});

// Re-initialize when the component updates
onUpdated(() => {
	feather.replace();
});

// Cleanup when the component is destroyed
onBeforeUnmount(() => {
	const icons = document.querySelectorAll('.feather-icon');
	icons.forEach(icon => {
		icon.innerHTML = '';
	});
});
</script>

<style scoped>
.feather-icon {
	display: inline-block;
	vertical-align: middle;
}
</style> 