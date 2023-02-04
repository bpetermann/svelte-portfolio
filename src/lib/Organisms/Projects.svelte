<script lang="ts">
  import Project from '../Molecules/Project.svelte';

  let projects: { id: number; name: string }[] = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
  ];
</script>

<div class="grid">
  {#each projects as { id, name } (id)}
    <Project {name} />
  {/each}
</div>
