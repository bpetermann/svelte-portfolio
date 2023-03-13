<script lang="ts">
  import Template from '@/lib/Template/Index.svelte';
  import Header from '@/lib/Organisms/Header.svelte';
  import Footer from '@/lib/Organisms/Footer.svelte';
</script>

<Header />
<main class="container">
  <Template />
</main>
<Footer />

<style>
  main {
    text-align: center;
  }
</style>
