<script lang="ts">
	import AnimatedLogo from "$lib/components/animated-logo.svelte";
	import DizzyBg from "$lib/components/dizzy-bg.svelte";


	import Project from "$lib/components/project.svelte";

</script>


<main>
  <section class="min-h-screen flex-col md:flex-row flex">
    <div class="my-auto w-full md:w-2/3">
      <div  class="mx-auto w-fit">
          <AnimatedLogo />
      </div>

      <div class="mx-auto text-center py-4">
        <h1 class="py-4">cute engineering</h1>
        <p>Cute solutions to complex problems.</p>
        <button class="m-4">Contact us</button>
      </div>
    </div>

    <nav class="mx-auto md:my-auto">
      <ol class="w-fit py-4 max-w-prose flex flex-row md:flex-col">
        <li><h2 class="p-4"><a href="urmom.zip">About</a></h2></li>
        <li><h2 class="p-4"><a href="urmom.zip">Projects</a></h2></li>
        <li><h2 class="p-4"><a href="urmom.zip">Blog</a></h2></li>
      </ol>
    </nav>
  </section>

  <section class="min-h-screen">
    <h2 class="text-center py-8">Projects</h2>
    <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-3 w-full mx-auto gap-8 p-8">
      <Project
        title="cutekit"
        body="The magical build system and package manager for C and C++"
        href="https://astro.build"
      />
      <Project
        title="mu"
        body="A cool microkernel"
        href="https://astro.build"
        logo="mumu.png"
      />
      <Project
        title="libheap"
        body="A simple heap allocation library for hobby operating system"
        href="https://astro.build"
      />

      <Project
        title="cutekit"
        body="A fresh approach to building websites."
        href="https://astro.build"
      />

      <Project
        title="cutekit"
        body="A fresh approach to building websites."
        href="https://astro.build"
      />

    </div>

      <div class="text-center">
      <a href="https://github.com/cute-engineering/">
        And much more
      </a>
      </div>
  </section>

  <DizzyBg class="max-w-prose m-auto min-h-[50vh] flex p-2">
    <div class="h-fit my-auto">
      <h1 class="text-amber-500">Free as in freedom</h1>
      <p>We embrace user and client freedom through the use of open source licenses. You always own your code and anyone can contribute.</p>
    </div>
  </DizzyBg>

</main>
  
  