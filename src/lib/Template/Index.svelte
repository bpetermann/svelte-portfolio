<script lang="ts">
  import Projects from '../Organisms/Projects.svelte';
  import Header from '../Organisms/Header.svelte';
  import Footer from '../Organisms/Footer.svelte';
  import '@picocss/pico';
</script>

<Header />
<main class="container">
  <Projects />
</main>
<Footer />

<style>
  main {
    margin-top: 100px;
    text-align: center;
  }
</style>
