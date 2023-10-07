<script>
import FrameWorkSingle from './FrameWorkSingle.vue';
import techStackData from "../../data/techStack.js";

export default {
	components: {
		FrameWorkSingle,
	},
	data: () => {
		return {
			techStack: null
		};
	},
	mounted() {
		this.techStack = techStackData;
	}
};
</script>

<template>
	<div class="mt-10 sm:mt-20" v-if="techStack">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ techStack.frameWorksHeading }}
		</p>
		<div class="flex flex-wrap mt-10 sm:mt-14 gap-6 justify-center">
			<FrameWorkSingle
				v-for="client in techStack.frameWorks"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
