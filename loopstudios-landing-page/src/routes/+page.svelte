<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import LeaderInteractive from '../components/LeaderInteractive.svelte';
	import OurCreation from '../components/OurCreation.svelte';
</script>

<h1 class="sr-only">Welcome to Loopstudios landing page!</h1>

<Header />

<main class="w-full max-w-[1440px] md:py-[160px] py-20 md:px-[165px] mx-auto">
	<div class="flex flex-col md:gap-[172px] gap-16">
		<LeaderInteractive />

		<OurCreation />
	</div>
</main>

<Footer />
