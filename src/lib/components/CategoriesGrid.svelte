<script>
	// import { categoryID } from '$lib/stores';
	import { slugify } from '$lib/utils';

	export let categories;
</script>

<div class="grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4">
	{#each categories as category}
		<div
			class="h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover hover:grow hover:shadow-lg bg-top w-full"
			style="background-image: url('./images/{category?.img_url}')"
		>
			<a href={`/category/${slugify(category?.category_data?.name, category.id)}`}>
				<!-- on:click={categoryID.set(category.id)} -->
				<div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
					<div class="px-10 max-w-xl">
						<h2 class="text-2xl text-white font-semibold">{category?.category_data?.name}</h2>
						<!-- <p class="mt-2 text-gray-400">{category?.description}</p> -->
						<button
							class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
						>
							<span>Preview</span>
							<svg
								class="h-5 w-5 mx-2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg
							>
						</button>
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>
