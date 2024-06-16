<script lang="ts">
  import { selectedVendors } from '$lib/stores/vendorStore';

  export let vendors: string[];
  let open = false;
  let search = '';

  $: filteredVendors = vendors.filter((vendor) =>
    vendor.toLowerCase().includes(search.toLowerCase())
  );
</script>

<button on:click={() => (open = !open)}>Vendors</button>
{#if open}
  <div>
    <input type="text" bind:value={search} placeholder="Search vendors" /><br />
    <label for="search"></label>
    <button
      on:click={() => {
        selectedVendors.update((vendors) => {
          for (const vendor in vendors) {
            vendors[vendor] = false;
          }
          return vendors;
        });
      }}>All</button
    >
    <br />
    {#each filteredVendors as vendor}
      <input
        type="checkbox"
        id={vendor}
        name={vendor}
        value={vendor}
        bind:checked={$selectedVendors[vendor]}
      />
      <label for={vendor}>{vendor}</label><br />
    {/each}
  </div>
{/if}
