<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { selectedVendors, showAllVendors } from '$lib/stores/vendorStore';
  import BoardEntry from '$lib/components/BoardEntry.svelte';
  import VendorButton from '$lib/components/VendorButton.svelte';

  import type { BoardRecord } from '$lib/types';

  export let data;
  const vendorList: Record<string, BoardRecord[]> = data.vendorList;

  selectedVendors.update((vendors: Record<string, boolean>) => {
    for (const vendor in vendorList) {
      vendors[vendor] = false;
    }
    return vendors;
  });

  let search = '';
  let boardCount = 0;
  let deviceCount = 0;
  afterUpdate(() => {
    boardCount = document.querySelectorAll('.board-entry').length;
    deviceCount = document.querySelectorAll('.device-entry').length;
  });
</script>

<h1>Vendor Boards</h1>
<input type="text" bind:value={search} placeholder="Search" /><br />
<VendorButton vendors={Object.keys(vendorList)} />
<table>
  <thead>
    <tr>
      <th></th>
      <th>Board ID</th>
      <th>Board Name</th>
      <th>Vendor Name</th>
      <th>Vendor Slug</th>
    </tr>
  </thead>
  <tbody>
    {#each Object.entries(vendorList) as [vendor, boards]}
      {#if $showAllVendors || $selectedVendors[vendor]}
        {#each boards as board}
          {#if search === '' || board.searchString.toLowerCase().includes(search.toLowerCase())}
            <BoardEntry boardRecord={board} />
          {/if}
        {/each}
      {/if}
    {/each}
  </tbody>
</table>
<p>Total Number of Boards: {boardCount}</p>
<p>Total Number of Devices: {deviceCount}</p>
