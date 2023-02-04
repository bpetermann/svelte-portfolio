<script lang="ts">
  export let name: string;
  export let image: string;
  export let link: string;
</script>

<div>
  <article>
    <header>{name}</header>
    <figure>
      <img src="/images/{image}.png" alt="Placeholder" />
    </figure>
    <footer>
      <a href="https://github.com/bpetermann/{link}">View on Github</a>
    </footer>
  </article>
</div>
