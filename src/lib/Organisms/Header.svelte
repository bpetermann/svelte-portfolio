<script lang="ts">
  import LanguageSelect from '@/lib/Atoms/LanguageSelect.svelte';
  import ThemeSwitch from '@/lib/Atoms/ThemeSwitch.svelte';
</script>

<header class="container">
  <nav>
    <div>
      <LanguageSelect />
    </div>
    <div>
      <ThemeSwitch />
    </div>
  </nav>
</header>

<style>
  header {
    padding-top: 16px;
  }

  div {
    display: flex;
    align-items: center;
  }
</style>
