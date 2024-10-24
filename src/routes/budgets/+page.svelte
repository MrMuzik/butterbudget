<script lang="ts">
    import { onMount } from 'svelte';
  
    let budgets: any[] = [];
    let description = '';
    let amount = '';
  
    // Fetch the API base URL from environment variables
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  
    // Fetch budget items from the backend
    const fetchBudgets = async () => {
      const res = await fetch(`${API_BASE_URL}/api/budgets`);
      budgets = await res.json();
    };
  
    // Add a new budget item
    const addBudget = async () => {
      if (description && amount) {
        await fetch(`${API_BASE_URL}/api/budgets`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ description, amount: parseFloat(amount) }),
        });
        description = '';
        amount = '';
        await fetchBudgets();
      }
    };
  
    // Delete a budget item
    const deleteBudget = async (id: any) => {
      await fetch(`${API_BASE_URL}/api/budgets/${id}`, { method: 'DELETE' });
      await fetchBudgets();
    };
  
    // Fetch budgets when component mounts
    onMount(fetchBudgets);
  </script>
  
  <h1>Budget Tracker</h1>
  <input type="text" bind:value={description} placeholder="Description" />
  <input type="number" bind:value={amount} placeholder="Amount" />
  <button on:click={addBudget}>Add Budget</button>
  
  <ul>
    {#each budgets as budget}
      <li>
        {budget.description} - ${budget.amount}
        <button on:click={() => deleteBudget(budget.id)}>Delete</button>
      </li>
    {/each}
  </ul>
  