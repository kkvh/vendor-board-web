<script lang="ts">
  import { selectedVendors } from '$lib/stores/vendorStore';

  export let vendors: string[];
  let open = false;
  let search = '';

  $: filteredVendors = vendors.filter((vendor) =>
    vendor.toLowerCase().includes(search.toLowerCase())
  );
</script>

<div>
  <button class="border border-gray-400 px-2 justify-center rounded-md" on:click={() => (open = !open)}
    >Vendors</button
  >
  {#if open}
    <div class="w-1/5 border border-gray-400 absolute z-10 bg-white">
      <input class="w-full" type="text" bind:value={search} placeholder="Search vendors" /><br />
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
</div>
