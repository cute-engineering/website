<script>
	import TopBar from '$lib/components/top-bar.svelte';

	export let title = '';
	export let description = '';
	export let date = '';
	export let cover = '';

	let id = title.replace(/\s/g, '-').toLowerCase();
</script>

<svelte:head>
	<title>{title} - Cute Engineering</title>
</svelte:head>

<TopBar />
<main class="p-8 m-8">
	<img
		src={'/' + cover}
		alt={title}
		style="--t-id:{id}"
		class={'max-h-[50vh] max-w-[75vw] rounded-xl mx-auto cpaint ' + id}
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
