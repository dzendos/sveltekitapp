<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<main id="info">
	<div id="text" class="header_text intro_text">
		<h1>Hi! I am Evgeny Gerasimov, welcome to my website!</h1>
	</div>
	<div id="info_about_me" class="block_info gray">
		<h2 class="subtitle">About me</h2>
		<div>
			<p class="text">I am second year student at innopolis university</p>
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
				laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
				beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
				odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
				Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
				sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
				voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
				laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
				qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
				quo voluptas nulla pariatur?</p>
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
				laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
				beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
				odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
				Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
				sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
				voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
				laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
				qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
				quo voluptas nulla pariatur?</p>
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
				laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
				beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
				odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
				Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
				sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
				voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
				laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
				qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
				quo voluptas nulla pariatur?</p>
		</div>
	</div>

	<div id="my_works_id" class="block_info">
		<h2 class="subtitle">My works</h2>
		<div class="link_block">
			<div class="m">
				<a class="link" href="https://github.com/dzendos/Turing"> - Turing bot</a>
			</div>
			<div class="m">
				<a class="link" href="https://github.com/KonstFed/holostyak-bot"> - Holostyak bot</a>
			</div>
			<div class="m">
				<a class="link" href="https://github.com/dzendos/game-of-life"> - Distributed game of life</a>
			</div>
			
		</div>

	</div>
</main>

<style>

.header_text {
    /* margin-top: 60px; */
    text-align: center;
}

#text {
    display: block;
}

.intro_text {
    line-height: 100px;
    font-size: 50px;
    font-weight: 700;
    font-style: normal;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 200px;
    padding-bottom: 300px;
    background-color: pink;
    background: linear-gradient(45deg, #6f42c1, #DDEC6A);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
}

.text {
    font-size: 20px;
    line-height: 30px;
}

.block_info {
	border-radius: 30px;
    margin-top: 30px;
    margin-left: 50px;
    margin-top: 10px;
    margin-right: 50px;
}

.subtitle {
    font-size: 30px;
    font-weight: 700;
    font-style: normal;
    background-color: pink;
    background: linear-gradient(0deg, #6f42c1, #DDEC6A);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
}

.text {
    font-weight: 700;
}

.gray {
    background-color: #f3f2f2;
    margin-right: 0;
    margin-left: 0;
    padding: 20px 50px;
}


.link_block {

    margin-bottom: 40px;
}

.link {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    opacity: 0.7;
    transition: .2s linear;
}

.link:hover {
    opacity: 1;
}

.m {
    margin-bottom: 20px;
}
</style>
