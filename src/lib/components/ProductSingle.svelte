<script>
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { FreeMode, Navigation, Thumbs } from 'swiper';

	import { categoryID } from '$lib/stores';
	import ProductList from './ProductList.svelte';
	import BreadCrumbs from './BreadCrumbs.svelte';

	import { slugify } from '$lib/utils'

	import 'swiper/css';
	import 'swiper/css/free-mode';
	import 'swiper/css/navigation';
	import 'swiper/css/thumbs';

	let loading = true;
	let productStock = 0;
	let productPrice = 0;
	let relatedProducts = [];
	let thumbsSwiper = null;
	let variationActive = '';
	let breakpoints = {
		320: { spaceBetween: 8 },
		640: { spaceBetween: 14 }
	};
	export let product;
	export let productCategory;
	export let productImages;
	// export let productFeaturedImage;

	productStock = product?.item_data?.total_stock;
	productPrice = product?.item_data?.variations[0]
		? `RM${(
				Math.round(
					product?.item_data?.variations[0]?.item_variation_data?.price_money?.amount * 1
				) / 100
		  ).toFixed(2)}`
		: '-';

	onMount(async () => {
		const response = await fetch(`/api/products?limit=4&cat=${productCategory.id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const { objects } = await response.json();
		relatedProducts = objects;
		loading = false;

		// const swiper = document.querySelector('.mySwiper2');
		// swiper.querySelectorAll('.swiper-slide-active').forEach((span) => {
		// 	const img = span.querySelector('img');
		// 	const button = span.querySelector('#donwload_image');
		// 	toDataUrl(img, function (myBase64) {
		// 		const a = document.createElement('a');
		// 		a.id = 'testttt';
		// 		a.href = myBase64;
		// 		a.text = 'download';
		// 		a.download = img.src.replace(/^.*[\\\/]/, '');
		// 		button.appendChild(a);
		// 	});
		// });
	});

	function toDataUrl(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.onload = function () {
			var reader = new window.FileReader();
			reader.onloadend = function () {
				callback(reader.result);
				var img = document.createElement('img');
				img.src = reader.result;
				document.body.appendChild(img);
			};
			reader.readAsDataURL(xhr.response);
		};
		xhr.open('GET', url);
		xhr.responseType = 'blob';
		xhr.send();
	}

	const setThumbsSwiper = (e) => {
		const [swiper] = e.detail;
		setTimeout(() => {
			thumbsSwiper = swiper;
		});
	};

	const handleDataVariations = (item_id, data) => {
		productStock = data.stock ? data.stock.counts[0].quantity : 0;
		productPrice = `RM${(Math.round(data?.price_money?.amount * 1) / 100).toFixed(2)}`;
		variationActive = item_id;
	};
</script>

<BreadCrumbs title={product?.item_data.name} />
<div class="-mx-5 flex flex-col justify-between py-10 lg:flex-row">
	<div class="flex flex-col-reverse justify-between px-5 sm:flex-row-reverse lg:w-1/2 lg:flex-row">
		<div class="relative w-full pb-5 sm:pb-0">
			<Swiper
				style="--swiper-navigation-color: #fff;--swiper-pagination-color: #fff"
				loop={true}
				spaceBetween={12}
				navigation={true}
				modules={[FreeMode, Navigation, Thumbs]}
				class="mySwiper2"
				thumbs={{ swiper: thumbsSwiper }}
			>
				{#each productImages as item}
					<SwiperSlide>
						<span class=" absolute bottom-1 right-1 z-0">
							<!-- on:click={handleDownloadImage(item?.image_data?.url)} -->
							<button
								class="px-2 py-2 bg-blue-500 rounded-full drop-shadow-lg text-sm text-center text-white duration-300 hover:bg-blue-700 flex items-center"
								data-url={item?.image_data?.url}
							>
								<Icon class="w-4 h-4 mr-2" icon="material-symbols:download" />
								<a href={item?.image_data?.url} download target="_blank" rel="noreferrer"
									>Download</a
								>
							</button>
						</span>
						<img src={item?.image_data?.url} alt="product img" />
					</SwiperSlide>
				{/each}
			</Swiper>
			<Swiper
				on:swiper={setThumbsSwiper}
				loop={true}
				spaceBetween={14}
				slidesPerView={productImages && productImages.length > 3 ? 4 : 3}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				class="mySwiper"
				{breakpoints}
			>
				{#each productImages as item}
					<SwiperSlide><img src={item?.image_data?.url} alt="product img slider" /></SwiperSlide>
				{/each}
			</Swiper>
			<!-- <div
				class="aspect-w-1 aspect-h-1 relative flex items-center justify-center rounded border border-grey bg-v-pink"
			>
				<img
					class="object-cover"
					alt="product featured"
					src={productFeaturedImage.image_data.url}
				/>
			</div> -->
		</div>
	</div>

	<div class="px-5 pt-8 lg:w-1/2 lg:pt-0">
		<div class="mb-8">
			<div class="flex items-center">
				<h2 class="font-butler text-3xl md:text-4xl lg:text-4.5xl">{product?.item_data?.name}</h2>
			</div>
		</div>
		<div class="flex pb-5">
			<div class="w-1/3 sm:w-1/5">
				<p class="text-secondary">Availability:</p>
			</div>
			<div class="w-2/3 sm:w-5/6">
				<p>
					<span class=" font-bold">{productStock}</span> left in stock
				</p>
			</div>
		</div>
		{#if product?.item_data?.variations?.length}
			<div class="flex items-center justify-between pb-4">
				<div class="w-1/3 sm:w-1/5">
					<p class="font-hk text-secondary">Variations:</p>
				</div>
				<div class="w-2/3 sm:w-5/6">
					<ul class="flex flex-wrap">
						{#each product.item_data.variations as variation}
							{#if variation.item_variation_data.name && variation.item_variation_data?.stock?.counts}
								<li class="mx-1 my-1">
									<button
										on:click|preventDefault={() =>
											handleDataVariations(variation.id, variation.item_variation_data)}
									>
										<input class="hidden opacity-0" type="radio" name="radio-group" id="size1" />
										<label
											class={`py-2 px-2 leading-none text-sm flex items-center justify-center transition-all ${
												variationActive === variation.id ? ' bg-red-400 text-white' : 'bg-gray-300'
											} cursor-pointer capitalize`}
											for="size1">{variation.item_variation_data.name}</label
										>
									</button>
								</li>
							{/if}
						{/each}
					</ul>
				</div>
			</div>
		{/if}
		<div class="flex items-center justify-between pb-4">
			<div class="w-1/3 sm:w-1/5">
				<p class="text-secondary">Category:</p>
			</div>
			<div class="w-2/3 sm:w-5/6">
				<a
					class=" font-semibold text-blue-500"
					on:click={categoryID.set(productCategory.id)}
					href="/category/{slugify(productCategory.category_data?.name, productCategory.id)}"
				>
					{productCategory.category_data?.name}
				</a>
			</div>
		</div>

		<div class="flex items-center pt-4 pb-4">
			<span class=" text-red-400 font-semibold text-3xl">{`${productPrice}`}</span>
			<!-- <span class="pl-5 font-hk text-xl text-grey-darker line-through">$35.0</span> -->
		</div>

		<div class="mb-8 text-secondary">
			{@html product?.item_data.description_html.split('</p>')[0]}
			{@html product?.item_data.description_html.split('</p>')[1]}
		</div>

		<div class="mb-8">
			<div class="flex flex-wrap items-center mt-8">
				<a href="https://t.me/EyleenMohammad" target="_blank" rel="noreferrer">
					<button
						class=" bg-blue-500 hover:bg-blue-600 leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange rounded inline-flex items-center gap-2"
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
					{@html product?.item_data.description_html}
				</div>
			</div>
		</div>

		<div class="flex flex-col">
			<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
					<div class="overflow-hidden">
						<table class="min-w-full border-2 text-center">
							<tbody>
								{#if product?.item_data?.colors.length}
									<tr>
										<td class="border-2 px-4 py-2">Color</td>
										<td class="border-2 px-4 py-2 font-bold">
											{#each product.item_data.colors as color, i}
												{i > 0
													? `${color.item_option_value_data.name}, `
													: `${color.item_option_value_data.name}`}
											{/each}
										</td>
									</tr>
								{/if}
								<tr class="bg-gray-100">
									<td class="border-2 px-4 py-2">Material</td>
									<td class="border-2 px-4 py-2 font-bold">Cotton</td>
								</tr>
								<tr>
									<td class="border-2 px-4 py-2">Weight</td>
									<td class="border-2 px-4 py-2 font-bold">0.5g</td>
								</tr>
							</tbody>
						</table>
					</div>
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
