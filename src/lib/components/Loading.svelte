<script>
	import { loading } from '$lib/loading';
	// import { SyncLoader } from 'svelte-loading-spinners';
</script>

{#if loading}
	<!-- <SyncLoader size="80" color="#14b8a6" ballTopLeft unit="px" duration="2s" /> -->
	<div class="loader-wrapper">
		<div class="u-loading">
			<div class="u-loading__symbol">
				<img src="/images/logo_square_transparent.png" alt="" />
			</div>
		</div>
	</div>
{/if}

<style>
	.loader-wrapper {
		@apply fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white opacity-100 flex flex-col items-center justify-center;
	}
	.u-loading {
		width: 200px;
		height: 200px;
		display: block;
		margin: 48px;
	}
	.u-loading__symbol {
		/* background-color: white; */
		padding: 8px;
		animation: loading 3s infinite;
		border-radius: 5px;
	}
	.u-loading__symbol img {
		display: block;
		max-width: 100%;
		animation: loading-icon 3s infinite;
	}

	@keyframes loading {
		0% {
			transform: perspective(250px) rotateX(0deg) rotateY(0deg);
		}
		15% {
			/* background-color: #4caf50; */
		}
		16% {
			/* background-color: #b44646; */
		}
		50% {
			transform: perspective(250px) rotateX(180deg) rotateY(0deg);
			/* background-color: #b44646; */
		}
		65% {
			/* background-color: #b44646; */
		}
		66% {
			/* background-color: #4caf50; */
		}
		100% {
			transform: perspective(250px) rotateX(180deg) rotateY(-180deg);
		}
	}
	@keyframes loading-icon {
		0% {
			transform: perspective(250px) rotateX(0deg) rotateY(0deg);
		}
		15% {
			transform: perspective(250px) rotateX(0deg) rotateY(0deg);
		}
		16% {
			transform: perspective(250px) rotateX(180deg) rotateY(0deg);
		}
		50% {
			transform: perspective(250px) rotateX(180deg) rotateY(0deg);
		}
		65% {
			transform: perspective(250px) rotateX(180deg) rotateY(0deg);
		}
		66% {
			transform: perspective(250px) rotateX(180deg) rotateY(180deg);
		}
		100% {
			transform: perspective(250px) rotateX(180deg) rotateY(180deg);
		}
	}
</style>
