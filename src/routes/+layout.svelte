
<script>
  import "../app.css";
</script>

<slot />

<footer class="flex space-x-16 w-fit mx-auto py-8">
  <div class="">
    <h4 class="text-center">Contact</h4>
    <p class="text-center space-x-8">
      <a href="mailto:contact@cute.engineering">
        mail 
      </a> 
      <a href="https://twitter.com/cute_engineering">
        twitter
      </a>
    </p>
  </div>

  <div class="text-center">
    <h4 class="text-center">Source</h4>
    <p>
      <a href="https://github.com/cute-engineering/website">
        github
      </a>
    </p>
  </div>
  <div class="text-center">
    <h4 class="text-center">License</h4>
    <p>
      <a href="https://github.com/cute-engineering/website/license">
        mit license
      </a>
    </p>
  </div>
</footer>