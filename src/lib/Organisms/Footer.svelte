<script lang="ts">
  import TopButton from '@/lib/Atoms/TopButton.svelte';

  let builtLinks: { id: number; name: string; href: string }[] = [
    { id: 1, name: 'vite', href: 'https://vitejs.dev' },
    { id: 2, name: 'svelte', href: 'https://svelte.dev/' },
    { id: 3, name: 'pico', href: 'https://github.com/picocss/pico' },
  ];
</script>

<footer class="container-fluid">
  <small
    >Built with
    {#each builtLinks as { id, name, href } (id)}
      <a {href} target="_blank" rel="noreferrer">
        <img src="/{name}.svg" class="logo {name}" alt="{name} Logo" />
      </a>
    {/each}
  </small>
  <TopButton />
</footer>

<style>
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  small {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .logo {
    all: unset;
    height: 14px;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 8px #646cffaa);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 8px #ff3e00aa);
  }
</style>
