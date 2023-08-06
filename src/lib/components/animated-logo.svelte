
<script lang="ts">
  import Lottie from "lottie-web"
	import type {  AnimationItem} from "lottie-web";

  let element: HTMLDivElement|undefined = undefined;
  let animation: AnimationItem|undefined = undefined;
  
  $: if(element != undefined) animation = Lottie.loadAnimation({
    container: element,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "logo-animate.json"
  });

  /* replay animation on click */
  function handleClick() {
    if(animation != undefined && animation.isPaused)
    {
      animation.goToAndPlay(90, true);
    }
  }
  
</script>


<div id="logo-container" class="w-[400px] h-[400px]" bind:this={element} on:click={handleClick} role="button" tabindex=0>
</div>
