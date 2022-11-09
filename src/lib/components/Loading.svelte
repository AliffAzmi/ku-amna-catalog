<script>
	import { loading } from '$lib/loading';
	import { SyncLoader } from 'svelte-loading-spinners';
</script>

{#if loading}
	<SyncLoader size="80" color="#14b8a6" ballTopLeft unit="px" duration="2s" />
{/if}
