<script lang="ts">
  import Experience from '../Organisms/Experience.svelte';
  import Projects from '../Organisms/Projects.svelte';
  import Header from '../Organisms/Header.svelte';
  import Footer from '../Organisms/Footer.svelte';
  import Hero from '../Organisms/Hero.svelte';
  import '@picocss/pico';
</script>

<Header />
<main class="container">
  <Hero />
  <Projects />
  <Experience />
</main>
<Footer />

<style>
  main {
    margin-top: 100px;
    text-align: center;
  }
</style>
