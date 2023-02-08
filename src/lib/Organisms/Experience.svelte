<script lang="ts">
  import ExperienceTile from '../Molecules/ExperienceTile.svelte';
  import type { ExperienceType } from '../../types/experience.type';

  let experience: ExperienceType[] = [
    {
      id: 1,
      cat: 'Education',
      name: 'Academic Web Developer',
      inst: 'University of Applied Sciences Technikum Wien',
      time: 'From 2021 | To 2023',
      description:
        'I am currently studying Web Development at the University of Applied Sciences Technikum Wien. Topics are among others databases, frontend frameworks, backend development as well as software architecture and testing.',
    },
    {
      id: 2,
      cat: 'Training',
      name: 'Web Development Masterclass',
      inst: 'Carrot & Company',
      time: '2022',
      description:
        'Topics included Quality Assurance, Infrastructure Architecture, Version Control, Client-Server Architecture, CRUD & State, MVC Concept SPA, MPA, CSR, SSR, Backend and Frontend Architecture.',
    },
  ];
</script>

<section id="experience">
  {#each experience as { id, cat, name, inst, time, description } (id)}
    <ExperienceTile {cat} {name} {inst} {time} {description} />
  {/each}
</section>
