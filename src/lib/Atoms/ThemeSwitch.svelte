<script lang="ts">
  import theme from '@/stores/theme-store';

  $: document.documentElement.setAttribute('data-theme', $theme);
</script>

<label for="switch">
  <input
    type="checkbox"
    id="switch"
    aria-label="theme switch"
    name="switch"
    role="switch"
    on:change={() => theme.set($theme === 'light' ? 'dark' : 'light')}
  />
</label>
