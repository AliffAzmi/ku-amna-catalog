<script>
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import { loading } from '$lib/loading';

	import '../app.postcss';
	import '../style.css';
	import 'nprogress/nprogress.css';

	import Loading from '$lib/components/Loading.svelte';
	import Header from '$lib/components/partial/Header.svelte';
	import Sliders from '$lib/components/partial/Sliders.svelte';
	import Footer from '$lib/components/partial/Footer.svelte';
	import Analytics from '$lib/components/Analytics.svelte';
	import Sidebar from '$lib/components/partial/Sidebar.svelte';

	NProgress.configure({
		template:
			'<div class="bar" style="background: #eb9797 !important; height: 3px !important;" role="bar"></div>',
		minimum: 0.3,
		showSpinner: false
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
	$: $loading = $navigating ? true : false;
	let open = false;
</script>

<Sidebar bind:open />
<Header bind:open />
<Sliders />
<Analytics />
<main class="container mx-auto px-4 scroll-smooth">
	{#if $loading}
		<Loading />
	{:else}
		<slot />
	{/if}
</main>
<Footer />
