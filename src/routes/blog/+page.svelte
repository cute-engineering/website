<script lang="ts">
	import TopBar from '$lib/components/top-bar.svelte';
	export let data: PageServerData;
</script>

<TopBar />
<main class="p-8">
	<div class="max-w-prose mx-auto">
		{#each data.posts as post}
			<div class="rounded-xl overflow-hidden max-w-[500px] vimg">
				<img
					src={post.cover}
					alt={post.title}
					width="500px"
					height="300px"
					class="cpaint"
					style="--t-id:{post.title.replace(/\s/g, '-').toLowerCase()}"
				/>

				<div class="p-3">
					<h1 style:--tag="title-{post.title}">{post.title}</h1>
					<p>{post.description}</p>
					<a href={'blog/post/' + post.slug}>Read</a>
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
	img {
		view-transition-name: var(--t-id);
	}
</style>
