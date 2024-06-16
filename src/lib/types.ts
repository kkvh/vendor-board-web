export type Board = {
  id: string;
  name: string;
  vendor: Vendor;
  devices: Device[];
};

export type Vendor = {
  name: string;
  slug: string;
};

export type Device = {
  name: string;
  id: string;
};

export type BoardRecord = {
  id: string;
  name: string;
  vendor: Vendor;
  devices: Device[];
  searchString: string;
};
