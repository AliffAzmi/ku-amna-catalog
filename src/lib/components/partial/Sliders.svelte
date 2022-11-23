<script>
	const sliders = [
		// {
		// 	id: 'carousel-2',
		// 	num: 2,
		// 	title: 'Real Bamboo Wall Clock',
		// 	url: './images/banner_2.png'
		// },
		{
			id: 'carousel-3',
			num: 3,
			title: 'Brown and blue hardbound book',
			target: '_blank',
			bg_img:
				'https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
			url: 'https://forms.gle/XkTgSif4E5Vu4gNU8'
		},
		{
			id: 'carousel-1',
			num: 1,
			bg_img: '/images/banner_1.png',
			target: '_blank',
			url: 'https://forms.gle/XkTgSif4E5Vu4gNU8'
		}
	];
</script>

<div class="carousel relative container mx-auto" style="max-width:1600px;">
	<div class="carousel-inner relative overflow-hidden w-full">
		{#each sliders as slider}
			<input
				class="carousel-open"
				type="radio"
				id={slider.id}
				name="carousel"
				aria-hidden="true"
				hidden
				checked="checked"
			/>
			<div class="carousel-item absolute opacity-0" style="height:50vh;">
				<a href={slider.url ? slider.url : '#'} target={slider.target}>
					<div
						class="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center"
						style="background-image: url('{slider.bg_img}');"
					>
						<div class="container mx-auto">
							<div
								class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"
							>
								{#if slider.title}
									<p class="text-black text-2xl my-4">{slider.title}</p>
									<!-- <a
									class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
									href="#">view product</a> -->
								{/if}
							</div>
						</div>
					</div>
				</a>
			</div>

			<label
				for="carousel-{slider.num === 1 ? 3 : slider.num === 2 ? 1 : 1}"
				class="prev control-{slider.num} w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
				>‹</label
			>
			<label
				for="carousel-{slider.num === 1 ? 3 : slider.num === 2 ? 3 : 1}"
				class="next control-{slider.num} w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
				>›</label
			>
		{/each}

		<ol class="carousel-indicators">
			<li class="inline-block mr-3">
				<label
					for="carousel-1"
					class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
					>•</label
				>
			</li>
			<li class="inline-block mr-3">
				<label
					for="carousel-3"
					class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
					>•</label
				>
			</li>
		</ol>
	</div>
</div>
