<script lang="ts">
	const Ingredients = [
		'2-3 large eggs',
		'Salt, to taste',
		'Pepper, to taste',
		'1 tablespoon of butter or oil',
		'Optional fillings: cheese, diced vegetables, cooked meats, herbs'
	];

	const NutritionData = [
		{
			nutrient: 'Calories',
			value: '277kcal'
		},
		{
			nutrient: 'Carbs',
			value: '0g'
		},
		{
			nutrient: 'Protein',
			value: '20g'
		},
		{
			nutrient: 'Fat',
			value: '22g'
		}
	];
</script>

<header class="sr-only">
	<h1>Recipe page</h1>
</header>
<main class="py-0 md:py-[124px] md:pb-[114px]">
	<div
		class="bg-neutral-white rounded-none flex flex-col max-w-[736px] p-0 pb-10 md:p-10 md:pb-7 md:rounded-3xl"
	>
		<figure class="relative">
			<img
				class="h-[171px] w-full object-cover md:rounded-xl md:h-[300px]"
				src="/assets/images/image-omelette.jpeg"
				alt=""
			/>
		</figure>
		<div class="mx-5 md:mx-0 mt-10 mb-8 flex flex-col gap-6">
			<h2 class="headingL text-neutral-dark-charcoal">Simple Omelette Recipe</h2>
			<p class="bodyRegular text-neutral-dark">
				An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs
				cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
			</p>
		</div>

		<article class="mx-5 md:mx-0 bg-neutral-rose-white p-[28px]">
			<h3 class="headingS text-primary-dark-raspberry mb-4">Preparation time</h3>

			<div class="bodyRegular flex flex-col gap-2">
				<div class="flex gap-7 items-center ml-2">
					<div class="w-1 h-1 rounded-full bg-primary-dark-raspberry"></div>

					<p class="text-neutral-dark">
						<strong> Total: </strong>
						Approximately 10 minutes
					</p>
				</div>

				<div class="flex gap-7 items-center ml-2">
					<div class="w-1 h-1 rounded-full bg-primary-dark-raspberry"></div>

					<p class="text-neutral-dark"><strong> Preparation: </strong>5 minutes</p>
				</div>

				<div class="flex gap-7 items-center ml-2">
					<div class="w-1 h-1 rounded-full bg-primary-dark-raspberry"></div>

					<p class="text-neutral-dark"><strong> Cooking: </strong>5 minutes</p>
				</div>
			</div>
		</article>

		<section class="mx-5 md:mx-0 mt-8 flex flex-col gap-6">
			<h3 class="headingM text-primary-nutmeg">Ingredients</h3>

			<ul class="bodyRegular text-neutral-dark flex flex-col gap-2">
				{#each Ingredients as Ingredients}
					<li class="flex gap-7 items-center ml-2">
						<span class="w-1 h-1 rounded-full bg-primary-dark-raspberry"> </span>
						<span>{Ingredients}</span>
					</li>
				{/each}
			</ul>
		</section>

		<div class="my-8 w-full border-b border-solid h-0 border-neutral-light-grey"></div>

		<section class="mx-5 md:mx-0">
			<h3 class="headingM text-primary-nutmeg">Instructions</h3>

			<ol class="flex flex-col gap-2 bodyRegular mt-6 text-neutral-dark">
				<li class="pl-4 list-decimal ml-6 marker:bodyBold marker:text-primary-nutmeg">
					<strong> Beat the eggs: </strong>
					In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can
					add a tablespoon of water or milk for a fluffier texture.
				</li>
				<li class="pl-4 list-decimal ml-6 marker:bodyBold marker:text-primary-nutmeg">
					<strong> Heat the pan: </strong>
					Place a non-stick frying pan over medium heat and add butter or oil.
				</li>
				<li class="pl-4 list-decimal ml-6 marker:bodyBold marker:text-primary-nutmeg">
					<strong> Cook the omelette: </strong>
					Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
					coat the surface.
				</li>
				<li class="pl-4 list-decimal ml-6 marker:bodyBold marker:text-primary-nutmeg">
					<strong> Add fillings (optional): </strong>
					When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle
					your chosen fillings over one half of the omelette.
				</li>
				<li class="pl-4 list-decimal ml-6 marker:bodyBold marker:text-primary-nutmeg">
					<strong> Fold and serve: </strong>
					As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let
					it cook for another minute, then slide it onto a plate.
				</li>
				<li class="pl-4 list-decimal ml-6 marker:bodyBold marker:text-primary-nutmeg">
					<strong> Enjoy: </strong>
					Serve hot, with additional salt and pepper if needed.
				</li>
			</ol>
		</section>

		<div class="my-8 w-full border-b border-solid h-0 border-neutral-light-grey"></div>

		<article class="mx-5 md:mx-0">
			<h3 class="headingM text-primary-nutmeg">Nutrition</h3>

			<p class="bodyRegular text-neutral-dark mt-6">
				The table below shows nutritional values per serving without the additional fillings.
			</p>

			<table class="w-full mt-[9px]">
				<tbody>
					{#each NutritionData as NutritionData}
						<tr class="h-12 border-b border-solid border-neutral-light-grey">
							<th class="w-[334px] text-left bodyRegular text-neutral-dark pl-8">
								{NutritionData.nutrient}
							</th>
							<td class="text-primary-nutmeg bodyBold"> {NutritionData.value} </td>
						</tr>
					{/each}
				</tbody>
			</table>
		</article>
	</div>
</main>
