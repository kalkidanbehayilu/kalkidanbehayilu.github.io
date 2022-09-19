<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'A software developer with a never give-up attitude and always trying to learn new things. I have received comments from customers for quality work and on time delivery. Always takes part in innovative subjects. Have suggested a technical solution in the past to the customer and the company.',
				},
				{
					id: 2,
					bio:
						`My experience includes integrating new features into ongoing projects as well as maintaining and supporting these components. I'm a creative individual that aspires to develop my abilities.I make a good teammate since I can follow directions precisely while also being self- reliant and organized.`,
				},
				{
					id: 3,
					bio: `As a developer I was tasked with :-
						Modifying software to fix errors, adapt it to new hardware, improve its performance, or upgrade interfaces.
						Directing system testing and validation procedures.
						Directing software programming and documentation development.
						Consulting with departments or customers on project status and proposals.
						Working with customers or departments on technical issues including software system design and maintenance.
						Analyzing information to recommend and plan the installation of new systems or modifications of an existing system.`
				}
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img src="@/assets/images/profile.jpg" class="rounded-xl w-96" alt="" />
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p v-for="bio in bios" :key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
