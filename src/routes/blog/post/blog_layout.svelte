<script>
	export let title = '';
	export let description = '';
	export let date = '';
	export let cover = '';

	 let id = title.replace(/\s/g, '-').toLowerCase();;
</script>

<main class="p-8 m-8">
	<a href="/blog/"> blogs </a>

	<img
		src={'/' + cover}
		alt={title}
		style="--t-id:{id}"
		class={"max-h-[50vh] max-w-[75vw] rounded-xl mx-auto cpaint " + id}
	/>
	<article class="mx-auto max-w-prose">
		<div class="py-8">
			<div class="flex justify-between">
				<h1 class=" text-amber-500" style:--tag="title-{title}">{title}</h1>

				<div class="text-amber-400 my-auto">{date}</div>
			</div>
			<div class="text-amber-950">{description}</div>
		</div>

		<slot />
	</article>
</main>


<style>
	img {
		view-transition-name: var(--t-id);
	}
</style>