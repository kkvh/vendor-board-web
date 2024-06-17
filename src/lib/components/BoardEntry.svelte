<script lang="ts">
  import type { BoardRecord } from '$lib/types';

  export let boardRecord: BoardRecord;
  let expanded = false;
</script>

<tr on:click={() => (expanded = !expanded)} class="board-entry border-t border-gray-400">
  <td>{expanded ? '▼' : '▶'}</td>
  <td>{boardRecord.id}</td>
  <td>{boardRecord.name}</td>
  <td>{boardRecord.vendor.name}</td>
  <td>{boardRecord.vendor.slug}</td>
</tr>
<tr style="display: {expanded ? 'table-row' : 'none'};">
  <td></td>
  <td colspan="4">
    <table class="w-1/2 table-fixed text-left">
      <thead class="border-b border-gray-400">
        <tr>
          <th>Device ID</th>
          <th>Device Name</th>
        </tr>
      </thead>
      <tbody>
        {#each boardRecord.devices as device}
          <tr class="device-entry">
            <td>{device.id}</td>
            <td>{device.name}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </td>
</tr>
