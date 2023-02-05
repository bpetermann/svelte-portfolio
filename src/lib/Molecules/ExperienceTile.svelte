<script lang="ts">
  export let cat: string;
  export let name: string;
  export let inst: string;
  export let time: string;
  export let description: string;
</script>

<article>
  <header>
    <div>
      <span role="button" class="contrast outline">{cat}</span>
    </div>
    <hgroup>
      <h2>{name}</h2>
      <h3>{inst}</h3>
    </hgroup>
  </header>
  <p>{time}</p>
  <p>{description}</p>
</article>

<style>
  div {
    display: flex;
    justify-content: flex-end;
    pointer-events: none;
    margin-bottom: 8px;
  }

  span {
    color: #df788f;
    border-color: #df788f;
  }
</style>
