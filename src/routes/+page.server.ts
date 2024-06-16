import { BOARDS_API_URL } from '$env/static/private';
import { GqlClient } from '$lib/gqlClient';
import { getBoards } from '$lib/queries/getBoards';

import type { Board, BoardRecord } from '$lib/types';

export const load = async () => {
  const client = new GqlClient({
    url: BOARDS_API_URL
  });
  const data = await client.query(getBoards);

  const { boards } = data.data as { boards: Board[] };
  const vendorList = boards.reduce(
    (acc, board) => {
      const boardEntry: BoardRecord = {
        id: board.id,
        name: board.name,
        vendor: board.vendor,
        devices: board.devices,
        searchString: ''
      };
      const deviceList = board.devices.reduce(
        (deviceList, device) => `${deviceList} ${device.name} ${device.id}`,
        ''
      );
      boardEntry.searchString = `${board.id} ${board.name} ${board.vendor.name} ${deviceList}`;
      if (board.vendor.name in acc) {
        (acc[board.vendor.name] as BoardRecord[]).push(boardEntry);
      } else {
        acc[board.vendor.name] = [boardEntry];
      }
      return acc;
    },
    {} as Record<string, BoardRecord[]>
  );
  return { vendorList };
};
