<script lang="ts">
	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
		if (menuOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}
</script>

<header
	data-test-id="header"
	class="bg-no-repeat md:bg-[url('/assets/images/desktop/image-hero.jpg')] bg-[url('/assets/images/mobile/image-hero.jpg')] mx-auto bg-black text-white w-full max-w-[1440px] md:px-[165px] px-5 py-16 bg-cover h-[640px] md:h-full"
>
	<div class="flex flex-col gap-[130px] mb-[82px]">
		<nav class="flex items-center justify-between">
			<img src="/assets/images/logo.svg" class="z-50" alt="Logo" />

			<button class="md:hidden z-50" aria-label="Toggle menu" on:click={toggleMenu}>
				<img
					class="w-8 h-8 z-40"
					src={`${menuOpen ? '/assets/images/icon-close.svg' : '/assets/images/icon-hamburger.svg'}`}
					alt=""
				/>
			</button>

			<ul
				class={`items-center gap-[34px] mt-[6px] body md:flex ${menuOpen ? 'min-h-[101vh] z-40 flex flex-col absolute -top-2 left-0 w-full p-6 bg-black items-start text-start justify-center uppercase' : 'hidden'}`}
			>
				<li class={`${menuOpen ? 'self-start' : ''}`}>
					<a
						href="/"
						class={`relative hover:after:block after:hidden after:-bottom-[6px] after:-left-[-25%] after:absolute after:bg-black after:w-6 after:rounded-full after:h-[2px] ${menuOpen ? 'headingS' : ''}`}
						aria-label="about page">About</a
					>
				</li>
				<li class={`${menuOpen ? 'self-start' : ''}`}>
					<a
						href="/"
						class={`relative hover:after:block after:hidden after:-bottom-[6px] after:-left-[-25%] after:absolute after:bg-black after:w-6 after:rounded-full after:h-[2px] ${menuOpen ? 'headingS' : ''}`}
						aria-label="careers page">Careers</a
					>
				</li>
				<li class={`${menuOpen ? 'self-start' : ''}`}>
					<a
						href="/"
						class={`relative hover:after:block after:hidden after:-bottom-[6px] after:-left-[-25%] after:absolute after:bg-black after:w-6 after:rounded-full after:h-[2px] ${menuOpen ? 'headingS' : ''}`}
						aria-label="events page">Events</a
					>
				</li>
				<li class={`${menuOpen ? 'self-start' : ''}`}>
					<a
						href="/"
						class={`relative hover:after:block after:hidden after:-bottom-[6px] after:-left-[-25%] after:absolute after:bg-black after:w-6 after:rounded-full after:h-[2px] ${menuOpen ? 'headingS' : ''}`}
						aria-label="products page">Products</a
					>
				</li>
				<li class={`${menuOpen ? 'self-start' : ''}`}>
					<a
						href="/"
						class={`relative hover:after:block after:hidden after:-bottom-[6px] after:-left-[-25%] after:absolute after:bg-black after:w-6 after:rounded-full after:h-[2px] ${menuOpen ? 'headingS' : ''}`}
						aria-label="support page">Support</a
					>
				</li>
			</ul>
		</nav>

		<article
			class="p-8 pl-[39px] pb-[25px] pr-0 border border-solid border-white md:max-w-[650px] max-w-[420px] md:self-start self-center"
		>
			<h1 class="headingM pt-[6px] tracking-[0.5px]">Immersive experiences that deliver</h1>
		</article>
	</div>
</header>
