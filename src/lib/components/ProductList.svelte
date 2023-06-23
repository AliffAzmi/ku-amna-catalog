<script>
	import { slugify } from '$lib/utils';
	import { onMount } from 'svelte';

	export let item;
</script>

<div class=" w-full md:w-1/3 xl:w-1/4 p-2 flex flex-col">
	<a href="/products/{slugify(item?.item_data?.name, item.id)}">
		<div class="w-full max-w-sm mx-auto overflow-hidden">
			<img
				loading="lazy"
				alt="product_image"
				src={item?.img_url}
				class=" hover:grow hover:shadow-lg lg:h-80 object-cover"
			/>

			<div class="px-5 py-4 h-24">
				<h3 class="text-gray-700 mb-2">{item?.item_data?.name}</h3>
				<span class="text-gray-700 font-bold mt-2"
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
