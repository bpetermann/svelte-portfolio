<script lang="ts">
  import theme from '../../stores/theme-store';
  import i18n from '../../stores/i18n-store';
  import { quintIn } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  import { onMount } from 'svelte';

  let socialMedia: { name: string; href: string }[] = [
    {
      name: 'github',
      href: 'https://github.com/bpetermann/',
    },
    {
      name: 'linkedin',
      href: 'https://linkedin.com/in/ben-peterman',
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/',
    },
  ];

  let progress = tweened(0, {
    duration: 1000,
    easing: quintIn,
  });

  onMount(() => {
    progress.set(1);
  });
</script>

<section>
  <article>
    <img src="/images/me.png" alt="Me" style="opacity: {$progress}" />
    <hgroup>
      <h2>Benjamin Petermann</h2>
      <h3>Junior Frontend Developer</h3>
    </hgroup>
    <nav>
      <ul>
        {#each socialMedia as { name, href } (href)}
          <li>
            <a {href} target="_blank" rel="noopener noreferrer">
              <img
                src={`/images/${name}.png`}
                class:dark={name === 'github'
                  ? $theme !== 'dark'
                  : $theme === 'dark'}
                alt="{name} Logo"
              />
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    <nav>
      <ul>
        <li>
          <a href="#about">{$i18n.t('About')}</a>
        </li>
        <li>
          <a href="#projects">{$i18n.t('Projects')}</a>
        </li>
        <li>
          <a href="#experience">{$i18n.t('Experience')}</a>
        </li>
      </ul>
    </nav>
  </article>
</section>

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
    margin: 4px;
    margin-top: -4px;
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
