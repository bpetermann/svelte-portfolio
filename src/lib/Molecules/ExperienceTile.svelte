<script lang="ts">
  import i18n from '@/stores/i18n-store';

  export let id: number;
  export let cat: string;
  export let name: string;
  export let link: string;
  export let inst: string;
  export let time: string;
  export let description: string;
</script>

<details Open={id === 1}>
  <summary>{name}</summary>
  <header>
    <div>
      <span role="button" class="contrast outline">{$i18n.t(`${cat}`)}</span>
    </div>
    <hgroup>
      <h3>{name}</h3>
      <h4>
        <a href={link} target="_blank" rel="noopener noreferrer"
          >{$i18n.t(`${inst}`)}</a
        >
      </h4>
    </hgroup>
  </header>
  <p>{$i18n.t(`${time}`)}</p>
  <p>{$i18n.t(`${description}`)}</p>
</details>

<style>
  summary {
    text-align: start;
  }

  div {
    display: flex;
    justify-content: flex-end;
    pointer-events: none;
    margin-bottom: 8px;
  }

  span {
    color: #8a61d3;
    border-color: #8a61d3;
    margin: 16px 0px;
  }

  details > p:first-of-type {
    color: #707f89;
  }
</style>
