<script>
	import { onMount } from 'svelte';
	// import { productID } from '$lib/stores';
	import { page } from '$app/stores';
	import { toTitleCase } from '$lib/utils';
	import ProductSingle from '$lib/components/ProductSingle.svelte';
	import SkeletonProductSingle from '$lib/components/SkeletonProductSingle.svelte';

	export let { slug } = $page.params;
	let productID = slug.substring(slug.lastIndexOf('-') + 1).toUpperCase();
	let loading = true;
	let product = {};
	let productCategory = {};
	let productFeaturedImage = {};
	let productImages = [];

	onMount(async () => {
		const response = await fetch(`/api/products/${productID}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const { object, related_objects } = await response.json();
		product = object;
		productCategory = related_objects ? related_objects[0] : {};
		productImages = related_objects ? related_objects.filter((item) => item.type === 'IMAGE') : [];
		productFeaturedImage = related_objects
			? related_objects.filter((item) => item.type === 'IMAGE').shift()
			: {};
		loading = false;
	});
</script>

<svelte:head>
	<title>{toTitleCase(slug)} - Fizlin Mohammad</title>
</svelte:head>

<section class="py-8">
	{#if loading}
		<SkeletonProductSingle />
	{:else}
		<ProductSingle {product} {productCategory} {productImages} {productFeaturedImage} />
	{/if}
</section>
