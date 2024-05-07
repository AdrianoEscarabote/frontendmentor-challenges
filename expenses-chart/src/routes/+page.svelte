<script lang="ts">
	import data from '../data/data.json';
</script>

<header class="sr-only">
	<h1>Expenses chart component</h1>
</header>
<main class="w-full max-w-[540px]">
	<section class="flex flex-col gap-6">
		<article
			class="bg-primary-softRed pr-10 pl-8 pt-[27px] pb-[25px] rounded-[20px] flex justify-between items-center"
		>
			<div class="flex flex-col gap-2">
				<h3 class="bodyRegular text-neutral-white">My balance</h3>

				<p class="headingS tracking-wide text-neutral-white font-medium">$921.48</p>
			</div>

			<figure>
				<img src="/assets/images/logo.svg" alt="" />
			</figure>
		</article>
		<article class="bg-neutral-veryPaleOrange pt-8 p-6 md:p-10 rounded-2xl">
			<h2 class="headingS text-neutral-darkBrown tracking-[0.4px]">Spending - Last 7 days</h2>

			<ol class="w-full flex justify-between items-end h-[226px] mt-4">
				{#each data as item}
					<li class="flex items-center flex-col group relative gap-[8px]">
						<div
							class="amount -top-12 absolute bg-neutral-darkBrown rounded-sm w-[75px] h-10 flex items-center justify-center"
						>
							<p class="bodyRegular text-neutral-white">${item.amount}</p>
						</div>

						<div class={`${item.day} w-[33px] md:w-[50px] rounded-md`}></div>

						<p class="bodyRegular text-sm text-neutral-mediumBrown">
							{item.day}
						</p>
					</li>
				{/each}
			</ol>

			<div class="my-8 h-0 w-full border-b border-solid border-neutral-cream"></div>

			<div class="flex w-full justify-between items-end">
				<p class="bodyRegular text-neutral-mediumBrown flex flex-col">
					Total this month
					<span class="headingM text-neutral-darkBrown tracking-[0.9px]"> $478.33 </span>
				</p>

				<div class="flex flex-col gap-1 items-end mb-1">
					<p class="bodyRegular text-neutral-darkBrown font-extrabold">+2.4%</p>

					<p class="bodyRegular text-neutral-mediumBrown">from last month</p>
				</div>
			</div>
		</article>
	</section>
</main>
