<script lang="ts">
  import i18n from '@/stores/i18n-store';

  let languages: { id: number; text: string }[] = [
    { id: 1, text: 'en' },
    { id: 2, text: 'de' },
  ];

  let selected: string;

  const changeLanguage: () => void = () => {
    $i18n.changeLanguage(selected);
  };
</script>

<select bind:value={selected} on:change={changeLanguage}>
  {#each languages as { id, text } (id)}
    <option value={text} selected={$i18n.resolvedLanguage === text}>
      {$i18n.t(`${text}`)}
    </option>
  {/each}
</select>

<style>
  select {
    margin: 0;
    padding-top: 8px;
    padding-bottom: 8px;
    cursor: pointer;
  }
</style>
