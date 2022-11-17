<script>
	import { onMount } from 'svelte';

	let loaded = false;
	let thisImage;

	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
	});
	export let item;
	onMount(async () => {
		if (item.item_data.image_ids && item.item_data.image_ids.length) {
			const response = await fetch(`/api/products/image/${item.item_data.image_ids[0]}`);
			const data = await response.json();
			item.img_url =
				data?.object?.image_data?.url ||
				'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80';
		} else {
			item.img_url =
				'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80';
		}
	});
</script>

<div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
	<!-- <a href="#"> -->
	<img
		alt="item img url"
		class="hover:grow hover:shadow-lg"
		class:loaded
		src={item?.img_url}
		bind:this={thisImage}
	/>
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
	<!-- </a> -->
</div>

<style>
	img {
		height: 264px;
		opacity: 0;
		transition: opacity 1200ms ease-out;
	}
	img.loaded {
		opacity: 1;
	}
</style>
