<script lang="ts">
  import Project from '../Molecules/Project.svelte';

  let projects: { id: number; name: string; image: string; link: string }[] = [
    {
      id: 1,
      name: 'Next Shopping Cart',
      image: 'next-cart',
      link: 'next-shopping-cart',
    },
    {
      id: 2,
      name: 'Mern Shopping Cart',
      image: 'mern-cart',
      link: 'mern-shopping-cart',
    },
    {
      id: 3,
      name: 'Vue Shopping Cart',
      image: 'vue-cart',
      link: 'vue-shopping-cart',
    },
  ];
</script>

<section id="projects">
  <p>
    One of my first major study projects was a simple webshop, which was
    implemented with React. Since then I have implemented this project in
    different variations with various frameworks.
  </p>
  <p>These and other projects can all be found on Github</p>
  <div class="grid">
    {#each projects as { id, name, image, link } (id)}
      <Project {name} {image} {link} />
    {/each}
  </div>
</section>
