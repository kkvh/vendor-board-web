import { writable, derived } from 'svelte/store';

export const selectedVendors = writable({} as Record<string, boolean>);

export const showAllVendors = derived(selectedVendors, ($selectedVendors) =>
  Object.values($selectedVendors).every((value) => value === false)
);
