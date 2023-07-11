<script>
</script>

<header class="header">
	<nav class="nav_bar">
		<button id="text" class="nav_button chosen">
			<a href="/about">My Portfolio</a>
		</button>
		<button id="text" class="nav_button">
			<a href="/xkcd">XKCD</a>
		</button>
	</nav>
</header>

<style>

	#text {
		display: block;
	}

	.header {
		width: 100%;
	}

	.nav_bar {
		padding-top: 10px;
		padding-bottom: 10px;
		width: 90%;
		height: 50px;
		margin: 0 5%;
		display: flex;
		border-bottom: 1px solid #000;
		position: fixed;
		z-index: 1000;
		background-color:#fff;
		opacity: 0.9;
	}
	.chosen {
    	opacity: 0.7;
	}
	.nav_button {
    background: linear-gradient(90deg, #440c4f, #370101);
    border: 0;
    font-family: serif;
    cursor: pointer;
    font-size: 25px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
    margin-right: 20px;
    opacity: 0.4;
    transition: 0.2s linear;
}
</style>