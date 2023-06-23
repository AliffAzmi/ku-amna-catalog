<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { FreeMode, Navigation, Thumbs } from 'swiper';
	import Icon from '@iconify/svelte';

	export let productImages;
	export let thumbsSwiper = null;
	export let breakpoints = {
		320: { spaceBetween: 8 },
		640: { spaceBetween: 14 }
	};

	const setThumbsSwiper = (e) => {
		const [swiper] = e.detail;
		setTimeout(() => {
			thumbsSwiper = swiper;
		});
	};
</script>

<div class=" block lg:hidden">
	<Swiper
		style="--swiper-navigation-color: #fff;--swiper-pagination-color: #fff"
		loop={true}
		spaceBetween={12}
		navigation={true}
		modules={[FreeMode, Navigation, Thumbs]}
		class="productFeatureSliderMobile"
		thumbs={{ swiper: thumbsSwiper }}
	>
		{#each productImages as item}
			<SwiperSlide>
				<span class=" absolute bottom-1 right-1 z-0">
					<button
						class="px-2 py-2 bg-blue-500 rounded-full drop-shadow-lg text-sm text-center text-white duration-300 hover:bg-blue-700 flex items-center"
						data-url={item?.image_data?.url}
					>
						<Icon class="w-4 h-4 mr-2" icon="material-symbols:download" />
						<a href={item?.image_data?.url} download target="_blank" rel="noreferrer">Download</a>
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
		class="productGallerySliderMobile"
		{breakpoints}
	>
		{#each productImages as item}
			<SwiperSlide><img src={item?.image_data?.url} alt="product img slider" /></SwiperSlide>
		{/each}
	</Swiper>
</div>
