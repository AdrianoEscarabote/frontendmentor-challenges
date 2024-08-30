<script>
	import CreationCard from './CreationCard.svelte';
</script>

<article class="flex flex-col gap-[68px] mb-[22px] px-5 md:px-0" data-test-id="our-creation">
	<div class="flex items-center justify-center md:justify-between">
		<h3 class="headingS font-normal md:font-light">Our creations</h3>

		<a
			href="/"
			class="uppercase border border-solid w-full max-w-[153px] items-center justify-center h-[42px] font-sans tracking-[2.4px] hover:bg-black hover:text-white hidden md:flex"
			aria-label="See all our creations"
		>
			See all
		</a>
	</div>

	<ul class="flex flex-col md:flex-row gap-[28.6px] gap-y-[32px] w-full flex-wrap">
		<li class="w-full md:max-w-[256px]">
			<CreationCard
				imagePathDesktop="/assets/images/desktop/image-deep-earth.jpg"
				imagePathMobile="/assets/images/mobile/image-deep-earth.jpg"
				title="Deep earth"
			/>
		</li>
		<li class="w-full md:max-w-[256px]">
			<CreationCard
				imagePathDesktop="/assets/images/desktop/image-night-arcade.jpg"
				imagePathMobile="/assets/images/mobile/image-night-arcade.jpg"
				title="Night arcade"
			/>
		</li>
		<li class="w-full md:max-w-[256px]">
			<CreationCard
				imagePathDesktop="/assets/images/desktop/image-soccer-team.jpg"
				imagePathMobile="/assets/images/mobile/image-soccer-team.jpg"
				title="Soccer team VR"
			/>
		</li>
		<li class="w-full md:max-w-[256px]">
			<CreationCard
				imagePathDesktop="/assets/images/desktop/image-grid.jpg"
				imagePathMobile="/assets/images/mobile/image-grid.jpg"
				title="The grid"
			/>
		</li>
		<li class="w-full md:max-w-[256px]">
			<CreationCard
				imagePathDesktop="/assets/images/desktop/image-from-above.jpg"
				imagePathMobile="/assets/images/mobile/image-from-above.jpg"
				title="From up above VR"
			/>
		</li>
		<li class="w-full md:max-w-[256px]">
			<CreationCard
				imagePathDesktop="/assets/images/desktop/image-pocket-borealis.jpg"
				imagePathMobile="/assets/images/mobile/image-pocket-borealis.jpg"
				title="Pocket borealis"
			/>
		</li>
		<li class="w-full md:max-w-[256px]">
			<CreationCard
				imagePathDesktop="/assets/images/desktop/image-curiosity.jpg"
				imagePathMobile="/assets/images/mobile/image-curiosity.jpg"
				title="The curiosity"
			/>
		</li>
		<li class="w-full md:max-w-[256px]">
			<CreationCard
				imagePathDesktop="/assets/images/desktop/image-fisheye.jpg"
				imagePathMobile="/assets/images/mobile/image-fisheye.jpg"
				title="Make it fisheye"
			/>
		</li>
	</ul>

	<a
		href="/"
		class="uppercase border border-solid w-full max-w-[153px] items-center justify-center h-[42px] font-sans tracking-[2.4px] hover:bg-black hover:text-white flex md:hidden self-center"
		aria-label="See all our creations"
	>
		See all
	</a>
</article>
