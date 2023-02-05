<script lang="ts">
  import ExperienceTile from '../Molecules/ExperienceTile.svelte';
  import type { ExperienceType } from '../../types/experience.type';

  let experience: ExperienceType[] = [
    {
      id: 1,
      cat: 'Education',
      name: 'Academic Web Developer',
      inst: 'FH TECHNIKUM WIEN',
      time: 'From 2021 | 2023',
      description:
        'I am currently studying Web Development at the FH Technikum Wien. Topics are among others databases, frontend frameworks, backend development as well as software architecture and testing.',
    },
    {
      id: 2,
      cat: 'Training',
      name: 'Carrot & Company',
      inst: 'Web Development Masterclass',
      time: '2022',
      description:
        ' Included Quality Assurance, Infrastructure Architecture, Version Control, Client-Server Architecture MVC Concept SPA, MPA, CSR, SSR',
    },
  ];
</script>

<section id="experience">
  {#each experience as { id, cat, name, inst, time, description } (id)}
    <ExperienceTile {cat} {name} {inst} {time} {description} />
  {/each}
</section>
