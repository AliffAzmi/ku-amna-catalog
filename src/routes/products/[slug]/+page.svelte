<script>
	import { onMount } from 'svelte';
	import { productID } from '$lib/stores';
	import { page } from '$app/stores';
	import { toTitleCase } from '$lib/utils';

	export let { slug } = $page.params;
	let loading = true;
	let product = {};
	let productCategory = {};
	let productFeaturedImage = {};

	onMount(async () => {
		const response = await fetch(`/api/products/${$productID}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const { object, related_objects } = await response.json();
		product = object;
		productCategory = related_objects ? related_objects[0] : {};
		productFeaturedImage = related_objects ? related_objects[1] : {};
		loading = false;
	});
</script>

<svelte:head>
	<title>{toTitleCase(slug)} - Ku Amna</title>
</svelte:head>

<section class="py-8">
	{#if loading}
		Loading
	{:else}
		<div class=" block md:flex gap-4">
			<div>
				<img src={productFeaturedImage.image_data.url} width="500px" alt="product featured" />
			</div>
			<div>
				<div>
					<h1 class="text-2xl font-extrabold tracking-tight">
						{product.item_data.name}
					</h1>
				</div>
				<div>{@html product.item_data.description_html}</div>
			</div>
		</div>
	{/if}
</section>
