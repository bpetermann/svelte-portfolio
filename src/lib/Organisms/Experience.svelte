<script lang="ts">
  import ExperienceTile from '@/lib/Molecules/ExperienceTile.svelte';
  import type { ExperienceType } from '@/types/experience.type';

  let experience: ExperienceType[] = [
    {
      id: 1,
      cat: 'Education',
      name: 'Academic Web Developer',
      link: 'https://academy.technikum-wien.at/master-akademische-abschluesse/web-development/',
      inst: 'University of Applied Sciences Technikum Wien',
      time: 'From 2021 | To 2023',
      description:
        'In February 2023 I successfully completed my studies to become an academic web developer at the University of Applied Sciences Technikum Wien. Topics were, among others, databases, frontend frameworks, backend development as well as software architecture and testing.',
    },
    {
      id: 2,
      cat: 'Training',
      name: 'Web Development Masterclass',
      link: 'https://www.cnc.io/de/',
      inst: 'Carrot & Company',
      time: '2022',
      description:
        'Topics included Quality Assurance, Infrastructure Architecture, Version Control, Client-Server Architecture, CRUD & State, MVC Concept SPA, MPA, CSR, SSR, Backend and Frontend Architecture.',
    },
  ];
</script>

<section id="experience">
  {#each experience as { id, cat, name, link, inst, time, description } (id)}
    <ExperienceTile {cat} {name} {link} {inst} {time} {description} />
  {/each}
</section>
