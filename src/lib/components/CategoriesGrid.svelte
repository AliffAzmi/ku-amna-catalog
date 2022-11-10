<script>
	const categories = [
		{
			id: 1,
			title: 'Tudung Bawal',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.',
			img_url:
				'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
		},
		{
			id: 2,
			title: 'Tudung Sarung',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.',
			img_url:
				'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
		},
		{
			id: 3,
			title: 'Innerwear',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.',
			img_url:
				'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
		},
		{
			id: 4,
			title: 'Hijab Spray',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.',
			img_url:
				'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
		}
	];
</script>

<div class="grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4">
	{#each categories as category}
		<div
			class="h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center w-full"
			style="background-image: url('{category.img_url}')"
		>
			<div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
				<div class="px-10 max-w-xl">
					<h2 class="text-2xl text-white font-semibold">{category.title}</h2>
					<p class="mt-2 text-gray-400">{category.description}</p>
					<button
						class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
					>
						<span>Preview</span>
						<svg
							class="h-5 w-5 mx-2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg
						>
					</button>
				</div>
			</div>
		</div>
	{/each}
</div>
