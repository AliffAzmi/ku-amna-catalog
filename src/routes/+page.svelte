<script>
	import ProductList from '$lib/components/ProductList.svelte';
	import CategoriesGrid from '../lib/components/CategoriesGrid.svelte';
	import ProductLabel from '../lib/components/ProductLabel.svelte';

	const products = [
		{
			id: 1,
			title: 'Tudung Bawal 1',
			img_url:
				'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
			price: 'RM14.50'
		},
		{
			id: 2,
			title: 'Tudung Bawal 1',
			img_url:
				'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
			price: 'RM14.50'
		},
		{
			id: 3,
			title: 'Tudung Bawal 1',
			img_url:
				'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
			price: 'RM14.50'
		},
		{
			id: 4,
			title: 'Tudung Bawal 1',
			img_url:
				'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
			price: 'RM14.50'
		},
		{
			id: 5,
			title: 'Tudung Bawal 1',
			img_url:
				'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
			price: 'RM14.50'
		},
		{
			id: 6,
			title: 'Tudung Bawal 1',
			img_url:
				'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
			price: 'RM14.50'
		},
		{
			id: 7,
			title: 'Tudung Bawal 1',
			img_url:
				'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
			price: 'RM14.50'
		},
		{
			id: 8,
			title: 'Tudung Bawal 1',
			img_url:
				'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
			price: 'RM14.50'
		}
	];
</script>

<section class="py-8">
	<CategoriesGrid />
</section>
<section class="py-8">
	<div class="flex items-center flex-wrap pt-4 pb-12">
		<ProductLabel />
		{#each products as product}
			<ProductList item={product} />
		{/each}
		<div class=" w-full flex py-4 items-center justify-center">
			<button
				type="button"
				class="text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
				>View More</button
			>
		</div>
	</div>
</section>
