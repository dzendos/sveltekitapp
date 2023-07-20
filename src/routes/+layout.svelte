<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import phone from '$lib/images/favicon.png'
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href={phone}>
	<meta name="author" content="Evgeny Gerasimov">
	<meta name="description" content="It's my website">
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
