<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import ProductList from './ProductList.svelte';

	let loading = true;
	let relatedProducts = [];
	export let product;
	export let productCategory;
	export let productFeaturedImage;

	onMount(async () => {
		const response = await fetch(`/api/products?limit=4`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const { objects } = await response.json();
		relatedProducts = objects;
		loading = false;
	});
</script>

<div class="-mx-5 flex flex-col justify-between py-16 lg:flex-row">
	<div class="flex flex-col-reverse justify-between px-5 sm:flex-row-reverse lg:w-1/2 lg:flex-row">
		<!-- <div class="flex flex-row sm:flex-col sm:pl-5 md:pl-4 lg:pl-0 lg:pr-2 xl:pr-3">
			<div class="relative mr-3 w-28 pb-5 sm:w-32 sm:pr-0 lg:w-24 xl:w-28">
				<div
					class="relative flex w-full items-center justify-center rounded border border-grey bg-v-pink"
				>
					<img
						class="cursor-pointer object-cover"
						alt="product image"
						src="/assets/img/unlicensed/backpack-2.png"
					/>
				</div>
			</div>

			<div class="relative mr-3 w-28 pb-5 sm:w-32 sm:pr-0 lg:w-24 xl:w-28">
				<div
					class="relative flex w-full items-center justify-center rounded border border-grey bg-v-pink"
				>
					<img
						class="cursor-pointer object-cover"
						alt="product image"
						src="/assets/img/unlicensed/backpack-03-1.png"
					/>
				</div>
			</div>

			<div class="relative mr-3 w-28 pb-5 sm:w-32 sm:pr-0 lg:w-24 xl:w-28">
				<div
					class="relative flex w-full items-center justify-center rounded border border-grey bg-v-pink"
				>
					<img
						class="cursor-pointer object-cover"
						alt="product image"
						src="/assets/img/unlicensed/backpack-03-2.png"
					/>
				</div>
			</div>
		</div> -->
		<div class="relative w-full pb-5 sm:pb-0">
			<div
				class="aspect-w-1 aspect-h-1 relative flex items-center justify-center rounded border border-grey bg-v-pink"
			>
				<img
					class="object-cover"
					alt="product featured"
					src={productFeaturedImage.image_data.url}
				/>
			</div>
		</div>
	</div>

	<div class="px-5 pt-8 lg:w-1/2 lg:pt-0">
		<div class="mb-8">
			<div class="flex items-center">
				<h2 class="font-butler text-3xl md:text-4xl lg:text-4.5xl">{product.item_data.name}</h2>
			</div>
			<!-- <div class="flex items-center pt-3 pb-8">
				<div class="flex items-center">
					<i class="bx bxs-star text-primary" />
					<i class="bx bxs-star text-primary" />
					<i class="bx bxs-star text-primary" />
					<i class="bx bxs-star text-primary" />
					<i class="bx bxs-star text-primary" />
				</div>
				<span class="ml-2 font-hk text-sm text-secondary">(45)</span>
			</div> -->
		</div>
		<div class="flex pb-5">
			<p class="text-secondary">Availability:</p>
			<p class="pl-3">
				<span class=" font-bold">{product.item_data.total_stock}</span> left in stock
			</p>
		</div>
		<!-- <p class="pb-5 font-hk text-secondary">
			Versatile, comfortable, and chic! Three words that describe Blake by Elyssi.
		</p> -->
		<div class="flex justify-between pb-4">
			<div class="w-1/3 sm:w-1/5">
				<p class="font-hk text-secondary">Color:</p>
			</div>
			<div class="flex w-2/3 items-center sm:w-5/6">
				<div
					class="mr-2 cursor-pointer rounded-full border-2 border-transparent bg-red-500 px-2 py-2 transition-colors hover:border-black"
				/>
				<div
					class="mr-2 cursor-pointer rounded-full border-2 border-transparent bg-secondary-light px-2 py-2 transition-colors hover:border-black"
				/>
				<div
					class="mr-2 cursor-pointer rounded-full border-2 border-transparent bg-v-green px-2 py-2 transition-colors hover:border-black"
				/>
				<div
					class="cursor-pointer rounded-full border-2 border-transparent bg-v-blue px-2 py-2 transition-colors hover:border-black"
				/>
			</div>
		</div>
		<div class="flex items-center justify-between pb-4">
			<div class="w-1/3 sm:w-1/5">
				<p class="font-hk text-secondary">Size:</p>
			</div>
			<div class="w-2/3 sm:w-5/6">
				<form action="#">
					<ul class="flex flex-wrap">
						<li class="mx-1">
							<input class="hidden opacity-0" type="radio" name="radio-group" id="size1" />
							<label
								class="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize"
								for="size1">s</label
							>
						</li>

						<li class="mx-1">
							<input
								class="hidden opacity-0"
								type="radio"
								name="radio-group"
								id="size2"
								checked=""
							/>
							<label
								class="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize"
								for="size2">m</label
							>
						</li>
						<li class="mx-1">
							<input class="hidden opacity-0" type="radio" name="radio-group" id="size3" />
							<label
								class="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize"
								for="size3">l</label
							>
						</li>
					</ul>
				</form>
			</div>
		</div>
		<div class="flex items-center justify-between pb-4">
			<div class="w-1/3 sm:w-1/5">
				<p class="text-secondary">Category:</p>
			</div>
			<div class="w-2/3 sm:w-5/6">
				<a
					class=" font-semibold text-blue-500"
					href="/category/{productCategory.category_data.name.toLowerCase().replaceAll(' ', '-')}"
				>
					{productCategory.category_data.name}
				</a>
			</div>
		</div>

		<div class="flex items-center pt-4 pb-4">
			<span class=" text-red-400 font-semibold text-3xl"
				>{`${
					product?.item_data?.variations[0]
						? `RM${(
								Math.round(
									product?.item_data?.variations[0]?.item_variation_data?.price_money?.amount * 1
								) / 100
						  ).toFixed(2)}`
						: '-'
				}`}</span
			>
			<!-- <span class="pl-5 font-hk text-xl text-grey-darker line-through">$35.0</span> -->
		</div>

		<div class="mb-8 text-secondary">
			{@html product.item_data.description_html.split('</p>')[0]}
			{@html product.item_data.description_html.split('</p>')[1]}
		</div>
		<div class="mb-8">
			<div class="flex flex-wrap items-center mt-8">
				<a href="https://t.me/EyleenMohammad" target="_blank" rel="noreferrer">
					<button
						class=" bg-blue-400 hover:bg-blue-500 leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange rounded inline-flex items-center gap-2"
					>
						Order Here
						<Icon class="w-6 h-6" icon="ph:telegram-logo-light" />
					</button>
				</a>
				<div class=" ml-2">
					<button
						class=" bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange rounded inline-flex items-center gap-2"
						>Chat with us
						<Icon class="w-6 h-6" icon="ph:telegram-logo-light" /></button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="pb-16">
	<div class="flex flex-col sm:flex-row border-b border-grey-dark py-4">
		<span
			class="text-center font-hk font-bold text-2xl text-secondary hover:bg-grey-light sm:text-left"
		>
			Description
		</span>
	</div>
	<div class="relative py-4">
		<div class="bg-grey-light transition-opacity active">
			<div class="mx-auto text-center sm:text-left">
				<div class=" leading-loose text-sm">
					{@html product.item_data.description_html}
				</div>
			</div>
		</div>
	</div>
</div>

<div class="pb-16 sm:pb-20 md:pb-24">
	<h2 class="font-playfair font-bold text-primary text-3xl md:text-4xl lg:text-xl mb-4">
		RELATED PRODUCTS
	</h2>
	<div class="flex items-center flex-wrap">
		{#if loading}
			Loading
		{:else}
			{#each relatedProducts as item}
				<ProductList {item} />
			{/each}
		{/if}
	</div>
</div>
