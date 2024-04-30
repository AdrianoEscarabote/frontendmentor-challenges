<script>
	import Button from '../components/Button.svelte';
</script>

<header class="sr-only">
	<h1>Social Link profile</h1>
</header>
<main class="flex flex-col w-full max-w-[384px] bg-neutral-900 rounded-xl p-10">
	<article class="flex flex-col items-center justify-center">
		<figure>
			<img class="rounded-full h-[88px]" src="/assets/images/avatar-jessica.jpeg" alt="" />
		</figure>

		<div class="flex flex-col gap-1 my-6">
			<h2 class="heading text-neutral-000">Jessica Randall</h2>

			<p class="bodyBold text-primary-700">London, United Kingdom</p>
		</div>

		<p class="bodyRegular text-neutral-000 text-center">"Front-end developer and avid reader."</p>

		<ul class="w-full flex flex-col gap-4 mt-6">
			<li>
				<Button
					href="https://github.com/AdrianoEscarabote"
					ariaLabel="github profile"
					text="GitHub"
				/>
			</li>
			<li>
				<Button
					href="https://www.frontendmentor.io/profile/AdrianoEscarabote"
					ariaLabel="frontend mentor profile"
					text="Frontend Mentor"
				/>
			</li>
			<li>
				<Button
					href="https://www.linkedin.com/in/adrianoescarabote/"
					ariaLabel="linkedin profile"
					text="LinkedIn"
				/>
			</li>
			<li>
				<Button
					href="https://twitter.com/drianEscarabote"
					ariaLabel="twitter profile"
					text="Twitter"
				/>
			</li>
			<li>
				<Button
					href="https://www.instagram.com/ogdrian/"
					ariaLabel="instagram profile"
					text="Instagram"
				/>
			</li>
		</ul>
	</article>
</main>
