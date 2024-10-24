<script>
    console.log('Layout component is loading...', import.meta.env.VITE_API_BASE_URL, import.meta.env.VITE_SUPABASE_URL, import.meta.env.FRONTEND_URL);
    console.log('Need frontend URL to be set in .env file');
</script>

<slot />
