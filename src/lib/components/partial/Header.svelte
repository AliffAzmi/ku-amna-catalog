<script>
	import Icon from '@iconify/svelte';
</script>

<header class=" bg-inherit sticky top-0 z-50 border-b-2 border-red-200">
	<nav id="header" class="w-full z-30 top-0 py-1">
		<div
			class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"
		>
			<label for="menu-toggle" class="cursor-pointer md:hidden block">
				<svg
					class="fill-current text-gray-900"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
				>
					<title>menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</label>
			<input class="hidden" type="checkbox" id="menu-toggle" />

			<div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
				<nav>
					<ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
						<li>
							<a
								class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
								href="/">Home</a
							>
						</li>
						<!-- <li>
						<a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#"
							>About</a
						>
					</li> -->
					</ul>
				</nav>
			</div>

			<div class="order-1 md:order-2">
				<a
					class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
					href="/"
				>
					<img
						class=" mr-2"
						width="120"
						height="120"
						src="/images/logo_rectangle_transparent.png"
						alt="logo"
					/>
					<!-- <svg
						class="fill-current text-gray-800 mr-2"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path
							d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z"
						/>
					</svg> -->
					<!-- KU AMNA -->
				</a>
			</div>

			<div class="order-2 md:order-3 flex items-center" id="nav-content">
				<a class="inline-block no-underline" href="https://www.facebook.com/ku.amna">
					<Icon class="w-6 h-6" icon="icon-park:facebook" />
				</a>
				<a class="pl-3 inline-block no-underline" href="wa.link/wyfmjo">
					<Icon class="w-6 h-6 text-orange-600" icon="logos:whatsapp-icon" />
				</a>
				<a class="pl-3 inline-block no-underline" href="https://t.me/AliffAzmiey">
					<Icon class="w-6 h-6" icon="logos:telegram" />
				</a>
				<a class="pl-3 inline-block no-underline" href="shopee.com.my/lilieymohd">
					<Icon class="w-6 h-6 text-orange-600" icon="simple-icons:shopee" />
				</a>
			</div>
		</div>
	</nav>

	<!-- Search Bar -->
	<!-- <div class="relative mt-6 max-w-lg mx-auto">
		<span class="absolute inset-y-0 left-0 pl-3 flex items-center">
			<svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
				<path
					d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</span>

		<input
			class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
			type="text"
			placeholder="Search"
		/>
	</div> -->
</header>
