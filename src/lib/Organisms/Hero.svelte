<script lang="ts">
  import theme from '../../stores/theme-store';

  $: console.log($theme);
</script>

<article>
  <img src="/images/me.png" alt="Placeholder" />
  <hgroup>
    <h2>Benjamin Petermann</h2>
    <h3>Junior Frontend Developer</h3>
  </hgroup>
  <nav>
    <ul>
      <li>
        <a href="/">
          <img
            src={$theme === 'dark'
              ? '/images/github-light.png'
              : '/images/github.png'}
            alt="Placeholder"
          />
        </a>
      </li>
      <li>
        <a href="/">
          <img
            src="/images/linkedin.png"
            class:dark={$theme === 'dark'}
            alt="Placeholder"
          />
        </a>
      </li>
      <li>
        <a href="/">
          <img
            src="/images/twitter.png"
            class:dark={$theme === 'dark'}
            alt="Placeholder"
          />
        </a>
      </li>
    </ul>
  </nav>
  <nav>
    <ul>
      <li><a href="#about"> About </a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#experience">Experience</a></li>
    </ul>
  </nav>
</article>

<style>
  hgroup {
    margin-top: 16px;
  }

  img {
    width: 50%;
    max-width: 300px;
  }

  nav {
    display: flex;
    justify-content: center;
    margin-top: -24px;
  }

  a > img {
    width: 38px;
  }

  .dark {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(33deg)
      brightness(102%) contrast(104%);
  }

  @media (max-width: 768px) {
    a > img {
    width: 24px;
  }
  }
</style>
