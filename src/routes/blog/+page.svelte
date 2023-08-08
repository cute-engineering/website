<script lang="ts">
	export let data: PageServerData;
</script>

<main class="p-8">
	<div class="max-w-prose mx-auto">
		{#each data.posts as post}
			<div class="rounded-xl overflow-hidden max-w-[500px]">
				<img
					src={post.cover}
					alt={post.title}
					width="500px"
					height="300px"
					style:--tag="cover"
					class="cpaint"
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
