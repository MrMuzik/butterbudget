<script>
    export let error;
    export let status;
    console.log("Error during rendering:", error);
</script>

{#if error}
    <h1>An error occurred: {status}</h1>
    <p>{error.message}</p>
{/if}

<slot />
