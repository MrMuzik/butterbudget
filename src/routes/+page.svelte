<script lang="ts">
    console.log('Page component is loading...');

    import { onMount } from 'svelte';
    onMount(() => {
    console.log('Page component mounted');
    });
    console.log('apiURL', import.meta.env.VITE_API_BASE_URL);
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<slot />
