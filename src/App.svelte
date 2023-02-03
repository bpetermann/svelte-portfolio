<script lang="ts">
  import '@picocss/pico';
  import i18n from './stores/i18n-store';
  import theme from './stores/theme-store';

  $: document.documentElement.setAttribute('data-theme', $theme);

  let languages: { id: number; text: string }[] = [
    { id: 1, text: 'en' },
    { id: 2, text: 'de' },
  ];
  let selected: string;
  const changeLanguage: () => void = () => {
    $i18n.changeLanguage(selected);
  };
</script>

<header class="container">
  <nav>
    <ul>
      <select bind:value={selected} on:change={changeLanguage}>
        {#each languages as { id, text } (id)}
          <option value={text} selected={$i18n.resolvedLanguage === text}>
            {$i18n.t(`${text}`)}
          </option>
        {/each}
      </select>
    </ul>
    <ul>
      <label for="switch">
        <input
          type="checkbox"
          id="switch"
          name="switch"
          role="switch"
          on:change={() => theme.set($theme === 'light' ? 'dark' : 'light')}
        />
      </label>
    </ul>
  </nav>
</header>

<main class="container">
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
  header {
    padding-top: 16px;
  }

  select {
    margin: 0;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  main {
    margin-top: 100px;
  }
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

  @media (max-width: 768px) {
    .logo {
      height: 5em;
    }
  }
</style>
