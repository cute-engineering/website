<script lang="ts">
</script>

<section class={'dizzy-bg-st ' + $$props.class}>
	<slot />
</section>

<style>
	.dizzy-bg-st {
		background-image: linear-gradient(rgb(255 255 255 / 100%), rgb(255 255 255 / 50%)),
			url(/dizzy.svg);
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		background-origin: content-box;
		background-blend-mode: hard-light;
	}
</style>
