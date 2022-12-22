<script>
	// import { onMount } from 'svelte';
	// import { lazyLoad } from '$lib/utils';
	// import { productID } from '$lib/stores';
	import { slugify } from '$lib/utils';

	export let item;
	// let loaded = false;
	// let thisImage;

	// onMount(() => {
	// 	thisImage.onload = () => {
	// 		loaded = true;
	// 	};
	// });
</script>

<div class=" w-full md:w-1/3 xl:w-1/4 p-2 flex flex-col">
	<a href="/products/{slugify(item?.item_data?.name, item.id)}">
		<!-- on:click={productID.set(item.id)} -->
		<div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
			<img alt="product_image" src={item?.img_url} class=" hover:grow hover:shadow-lg" />
			<!-- <div
				class="flex items-end justify-end h-60 w-full bg-cover hover:grow hover:shadow-lg"
				style="background-image: url('{item?.img_url}')"
			> -->
			<!-- <button
				class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
			>
				<svg
					class="h-5 w-5"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
					/></svg
				>
			</button> -->
			<!-- </div> -->
			<div class="px-5 py-3">
				<h3 class="text-gray-700 uppercase">{item?.item_data?.name}</h3>
				<span class="text-gray-500 mt-2"
					>{`${
						item?.item_data?.variations[0]
							? `RM${(
									Math.round(
										item?.item_data?.variations[0]?.item_variation_data?.price_money?.amount * 1
									) / 100
							  ).toFixed(2)}`
							: '-'
					}`}</span
				>
			</div>
		</div>
	</a>
</div>
