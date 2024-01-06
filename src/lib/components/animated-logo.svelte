<script lang="ts">
	import type { AnimationItem } from 'lottie-web';
	import { onMount } from 'svelte';

	let element: HTMLDivElement | undefined = undefined;
	let animation: AnimationItem | undefined = undefined;

	onMount(async () => {
		if (element != undefined) {
			const Lottie = (await import('lottie-web')).default;

			animation = Lottie.loadAnimation({
				container: element,
				renderer: 'svg',
				loop: false,
				autoplay: true,
				path: 'logo-animate.json'
			});
		}
	});

	/* replay animation on click */
	function handleClick() {
		if (animation != undefined && animation.isPaused) {
			animation.goToAndPlay(90, true);
		}
	}
</script>

<div
	id="logo-container"
	class="w-[400px] h-[400px]"
	bind:this={element}
	on:click={handleClick}
	on:keydown={handleClick}
	role="button"
	tabindex="0"
/>
