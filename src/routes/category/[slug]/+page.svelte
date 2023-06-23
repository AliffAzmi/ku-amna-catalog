<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	// import { categoryID } from '$lib/stores';
	import { toTitleCase } from '$lib/utils';
	import ProductList from '$lib/components/ProductList.svelte';
	import ProductLabel from '$lib/components/ProductLabel.svelte';
	import SkeletonProducts from '$lib/components/SkeletonProducts.svelte';

	export let { slug } = $page.params;

	let categoryID = slug.substring(slug.lastIndexOf('-') + 1).toUpperCase();
	let loading = true;
	let products = [];

	onMount(async () => {
		const response = await fetch(`/api/products?cat=${categoryID}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const { objects } = await response.json();
		products = objects;
		loading = false;
	});
</script>

<svelte:head>
	<title>{toTitleCase(slug)} - Fizlin Mohammad</title>
</svelte:head>

<section class="py-8 mt-20">
	{#if loading}
		<SkeletonProducts />
	{:else}
		<div class="flex items-center flex-wrap">
			<ProductLabel label={toTitleCase(slug)} />
			{#each products as item}
				<ProductList {item} />
			{/each}
		</div>
	{/if}
</section>
