<script lang="ts">
  import '@picocss/pico';
  import i18n from './stores/i18n-store';
  import theme from './stores/theme-store';

  $: document.documentElement.setAttribute('data-theme', $theme);
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src="svelte.svg" class="logo svelte" alt="Svelte Logo" />
    </a>
    <a href="https://github.com/picocss/pico" target="_blank" rel="noreferrer">
      <img src="/pico.svg" class="logo pico" alt="Pico Logo" />
    </a>
  </div>
  <h1>Vite + Svelte + i18n + Pico</h1>

  <div class="card">
    <button
      on:click={() =>
        $i18n.changeLanguage($i18n.language === 'en' ? 'de' : 'en')}
      class="outline"
    >
      {$i18n.t('Hello World')}
    </button>
    <button
      on:click={() => theme.set($theme === 'light' ? 'dark' : 'light')}
      class="outline"
      >Theme
    </button>
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
