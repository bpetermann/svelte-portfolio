<script>
  function goTop() {
    document.body.scrollIntoView();
    document.location.hash = '';
  }
</script>

<div on:click={goTop} on:keypress={goTop} role="button" class="outline" tabindex="0">
  <img src="images/arrow.png" alt="back-to-top" />
</div>

<style>
  div {
    border: none;
  }

  img {
    height: 32px;
    filter: invert(78%) sepia(10%) saturate(262%) hue-rotate(163deg)
      brightness(94%) contrast(84%);
  }
</style>
