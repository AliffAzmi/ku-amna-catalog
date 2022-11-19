<script>
	import ProductList from '$lib/components/ProductList.svelte';
	import CategoriesGrid from '$lib/components/CategoriesGrid.svelte';
	import ProductLabel from '$lib/components/ProductLabel.svelte';

	const categories = $$props?.data?.categories || [];
	const products = $$props?.data?.products || [];

</script>

<svelte:head>
	<title>Home - Ku Amna</title>
</svelte:head>

<section class="py-8">
	<CategoriesGrid {categories} />
</section>
<section class="py-8">
	<div class="flex items-center flex-wrap pt-4 pb-12">
		<ProductLabel />
		{#each products as product}
			<ProductList item={product} />
		{/each}
		<div class=" w-full flex py-4 items-center justify-center">
			<a href="/products">
				<button
					type="button"
					class="text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
					>View More</button
				>
			</a>
		</div>
	</div>
</section>
