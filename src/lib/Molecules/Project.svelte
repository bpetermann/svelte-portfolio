<script lang="ts">
  import i18n from '@/stores/i18n-store';

  export let name: string;
  export let image: string;
  export let link: string;
</script>

<div>
  <article>
    <header>{name}</header>
    <figure>
      <img src="/images/{image}.webp" alt="Placeholder" />
    </figure>
    <footer>
      <a
        href="https://github.com/bpetermann/{link}"
        target="_blank"
        rel="noopener noreferrer">{$i18n.t('View on Github')}</a
      >
    </footer>
  </article>
</div>
