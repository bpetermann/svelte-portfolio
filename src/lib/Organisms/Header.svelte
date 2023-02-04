<script lang="ts">
  import LanguageSelect from '../Atoms/LanguageSelect.svelte';
  import ThemeSwitch from '../Atoms/ThemeSwitch.svelte';
</script>

<header class="container">
  <nav>
    <ul>
      <LanguageSelect />
    </ul>
    <ul>
      <ThemeSwitch />
    </ul>
  </nav>
</header>

<style>
  header {
    padding-top: 16px;
  }
</style>
