<script>
	import { page } from '$app/stores';
	export let open = false;
</script>

<aside
	id="menu"
	class="absolute top-24 w-full h-full bg-gray-100 border-r-2 shadow-lg z-50 md:hidden lg:hidden"
	class:open
>
	<div class="w-full flex flex-col text-white px-5 py-4 space-y-4">
		<ul class="md:flex items-center justify-between text-base text-gray-700 md:pt-0">
			<li>
				<a
					on:click={() => (open = false)}
					class="inline-block w-full no-underline hover:text-black py-6 px-1 border-b border-gray-300"
					href="/"
				>
					<span class=" font-bold" class:active={$page.url.pathname === '/'}>Home</span>
				</a>
			</li>
			<li>
				<a
					on:click={() => (open = false)}
					class="inline-block w-full no-underline hover:text-black py-6 px-1 border-b border-gray-300"
					href="/products"
				>
					<span class=" font-bold" class:active={$page.url.pathname === '/products'}
						>Our Products
					</span>
				</a>
			</li>
		</ul>
	</div>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}
	.open {
		@apply overscroll-none overflow-hidden fixed;
		left: 0;
	}
</style>
