<script>
	import ProductList from '$lib/components/ProductList.svelte';
	import ProductLabel from '$lib/components/ProductLabel.svelte';

	const products = $$props?.data?.products || [];
</script>

<svelte:head>
	<title>Our Products - Fizlin Mohammad</title>
</svelte:head>

<section class="py-8 mt-20">
	<div class="flex items-center flex-wrap pt-4 pb-12">
		<ProductLabel label={'Products'} />
		{#each products as product}
			<ProductList item={product} />
		{/each}
	</div>
</section>
