<script lang="ts">
	import { onMount } from 'svelte';
	export let title: string;
	export let imagePathDesktop: string;
	export let imagePathMobile: string;

	let imagePath: string;

	onMount(() => {
		imagePath = window.innerWidth <= 768 ? imagePathMobile : imagePathDesktop;

		const updateImagePath = () => {
			imagePath = window.innerWidth <= 768 ? imagePathMobile : imagePathDesktop;
		};

		window.addEventListener('resize', updateImagePath);

		return () => {
			window.removeEventListener('resize', updateImagePath);
		};
	});
</script>

<a
	href="/"
	class="relative md:p-6 flex items-end w-full md:max-w-[256px] md:h-[450px] h-[240px] bg-no-repeat text-white hover:text-black bg-cover bg-center"
	style={`background-image: url(${imagePath});`}
	data-test-id="creation-card"
>
	<div class="absolute inset-0 bg-gradient-image hover:bg-gradient-hover"></div>
	<span class="relative uppercase headingXs pl-[15px] pb-2 z-10">
		{title}
	</span>
</a>
