
<script>
    import { page } from '$app/stores';
</script>

<main>
    <section class="h-screen flex flex-col justify-around text-center ">
        <div>
            <img class="mx-auto" src="/hat.svg" width="200px" height="200px" alt="hat" />
            <h1 class="">Error</h1>
            <p class="py-4">{$page.status}: {$page.error.message}</p>
        </div>
        <h2><a href="/" class="text-center w-fit">Home</a></h2>
    </section>
</main>
    
