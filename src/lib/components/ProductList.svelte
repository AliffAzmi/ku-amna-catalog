<script>
	import { onMount } from 'svelte';
	import { lazyLoad } from '$lib/utils';
	import { productID } from '$lib/stores';

	export let item;
	// let loaded = false;
	// let thisImage;

	// onMount(() => {
	// 	thisImage.onload = () => {
	// 		loaded = true;
	// 	};
	// });
</script>

<div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
	<a
		href="/products/{item?.item_data?.name.replaceAll(' ', '-').toLowerCase()}"
		on:click={productID.set(item.id)}
	>
		<img
			alt="item img url"
			class="hover:grow hover:shadow-lg"
			src={item?.img_url}
			use:lazyLoad={item?.img_url}
		/>
		<!-- bind:this={thisImage}
		class:loaded -->
		<div class="pt-3 flex items-center justify-between">
			<p class="">{item?.item_data?.name}</p>
		</div>
		<p class="pt-1 text-gray-900">
			{`${
				item?.item_data?.variations[0]
					? `RM${(
							Math.round(
								item?.item_data?.variations[0]?.item_variation_data?.price_money?.amount * 1
							) / 100
					  ).toFixed(2)}`
					: '-'
			}`}
		</p>
	</a>
</div>

<style>
	/* img {
		height: 100%;
		opacity: 0;
		transition: opacity 1200ms ease-out;
	}
	img.loaded {
		opacity: 1;
	} */
</style>
