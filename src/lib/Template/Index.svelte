<script lang="ts">
  import Experience from '../Organisms/Experience.svelte';
  import Projects from '../Organisms/Projects.svelte';
  import Header from '../Organisms/Header.svelte';
  import Footer from '../Organisms/Footer.svelte';
  import Hero from '../Organisms/Hero.svelte';
  import '@picocss/pico';
  import About from '../Organisms/About.svelte';
</script>

<Header />
<main class="container">
  <Hero />
  <About />
  <Projects />
  <Experience />
</main>
<Footer />

<style>
  main {
    text-align: center;
  }
</style>
