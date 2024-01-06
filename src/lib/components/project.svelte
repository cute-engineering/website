<script lang="ts">
	export let title = 'Title';
	export let body = 'Body';
	export let href: string | undefined = undefined;
	export let source: string | undefined = undefined;
	export let logo = 'cutekit-logo.png';
</script>

<div
	class="background-amber-500
         bg-gradient-to-b
         p-8
         h-full
         w-full
         rounded-[3rem]
         overflow-hidden"
>
	<img src={logo} class="mx-auto w-[200px] h-[200px]" alt={'project ' + title + ' logo'} />
	<h3 class="font-bold py-4 text-center">
		{title}
	</h3>
	<p class="mx-auto w-fit">
		{body}
	</p>

	<div class="w-fit m-auto py-2">
		{#if href != undefined}
			<a {href} class="text-center w-fit px-4">Website</a>
		{/if}

		{#if source != undefined}
			<a href={source} class="text-center w-fit px-4">Source</a>
		{/if}
	</div>
</div>

<style></style>
