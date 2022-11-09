<script>
	import '../app.postcss';

	import { loading } from '$lib/loading';

	import Loading from '$lib/components/Loading.svelte';
	import Header from '$lib/components/partial/Header.svelte';
	import Sliders from '../lib/components/partial/Sliders.svelte';
	import Footer from '../lib/components/partial/Footer.svelte';
</script>

<Header />
<Sliders />
<!-- <Analytics /> -->
<main class="container mx-auto px-4">
	{#if $loading}
		<div class="loader-wrapper">
			<Loading />
		</div>
	{:else}
		<slot />
	{/if}
</main>
<Footer />
